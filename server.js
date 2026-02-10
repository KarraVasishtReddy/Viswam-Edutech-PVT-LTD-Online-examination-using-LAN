/**
 * Viswam Edutech Exam Server v11.0 (Stable)
 * Fixes: Crash prevention, auto-file creation, robust error handling.
 */
const express = require('express');
const fs = require('fs');
const path = require('path');
const cors = require('cors');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json({ limit: '50mb' }));
app.use(express.static(__dirname)); // Serves index.html and images

// --- 1. SAFE DATA HANDLING ---
const DATA_DIR = path.join(__dirname, 'data');
if (!fs.existsSync(DATA_DIR)) fs.mkdirSync(DATA_DIR);

const FILES = {
    BANK: path.join(DATA_DIR, 'question_bank.json'),
    PAPERS: path.join(DATA_DIR, 'exam_papers.json'),
    RESULTS: path.join(DATA_DIR, 'student_results.json'),
    USERS: path.join(DATA_DIR, 'users.json'),
    SESSIONS: path.join(DATA_DIR, 'active_sessions.json')
};

// Initialize files with empty arrays if they don't exist
Object.values(FILES).forEach(file => {
    if (!fs.existsSync(file)) fs.writeFileSync(file, '[]');
});

// Safe Read: Returns [] if file is empty or corrupt
const readData = (file) => {
    try {
        const data = fs.readFileSync(file, 'utf8');
        return data ? JSON.parse(data) : [];
    } catch (err) {
        console.error(`Error reading ${file}:`, err);
        return [];
    }
};

const writeData = (file, data) => {
    try {
        fs.writeFileSync(file, JSON.stringify(data, null, 2));
    } catch (err) {
        console.error(`Error writing ${file}:`, err);
    }
};

// --- 2. API ENDPOINTS ---

// USERS
app.post('/api/users', (req, res) => {
    const users = readData(FILES.USERS);
    // Simple check to avoid duplicates
    if (!users.find(u => u.username === req.body.username)) {
        users.push(req.body);
        writeData(FILES.USERS, users);
    }
    res.json({ success: true });
});
app.get('/api/users', (req, res) => res.json(readData(FILES.USERS)));
app.delete('/api/users/:id', (req, res) => {
    writeData(FILES.USERS, readData(FILES.USERS).filter(u => u.username !== req.params.id));
    res.json({ success: true });
});

// PAPERS (Exam Publishing)
app.post('/api/papers', (req, res) => {
    let papers = readData(FILES.PAPERS);
    // Remove old version of this specific paper (Same Subject + Class)
    papers = papers.filter(p => !(p.subject === req.body.subject && p.classGrade === req.body.classGrade));
    papers.push({ id: Date.now(), ...req.body });
    writeData(FILES.PAPERS, papers);
    console.log(`[PAPER] Published: ${req.body.subject} for ${req.body.classGrade}`);
    res.json({ success: true });
});
app.get('/api/papers', (req, res) => res.json(readData(FILES.PAPERS)));

// QUESTION BANK
app.post('/api/bank/bulk', (req, res) => {
    const bank = readData(FILES.BANK);
    const newQs = req.body.map(q => ({ id: Date.now() + Math.random(), ...q }));
    writeData(FILES.BANK, [...bank, ...newQs]);
    res.json({ success: true, count: newQs.length });
});
app.get('/api/bank', (req, res) => res.json(readData(FILES.BANK)));

// RESULTS & SUBMISSION
app.post('/api/submit', (req, res) => {
    const results = readData(FILES.RESULTS);
    results.push({ id: Date.now(), timestamp: new Date().toLocaleString(), ...req.body });
    writeData(FILES.RESULTS, results);
    console.log(`[SUBMIT] ${req.body.studentName} finished ${req.body.subject}`);
    res.json({ success: true });
});
app.get('/api/results', (req, res) => res.json(readData(FILES.RESULTS)));

// LIVE PROCTORING
app.post('/api/proctor/heartbeat', (req, res) => {
    let sessions = readData(FILES.SESSIONS);
    const idx = sessions.findIndex(s => s.username === req.body.username);
    const entry = { ...req.body, lastSeen: Date.now() };
    if (idx > -1) sessions[idx] = entry; else sessions.push(entry);
    writeData(FILES.SESSIONS, sessions);
    res.json({ success: true });
});
app.get('/api/proctor/sessions', (req, res) => {
    // Return sessions active in last 30 seconds
    res.json(readData(FILES.SESSIONS).filter(s => Date.now() - s.lastSeen < 30000));
});

// --- START ---
app.listen(PORT, '0.0.0.0', () => {
    console.log(`\n============================================`);
    console.log(`✅ SERVER RUNNING ON PORT ${PORT}`);
    console.log(`🔗 Admin Dashboard: http://localhost:${PORT}`);
    console.log(`============================================\n`);
});
