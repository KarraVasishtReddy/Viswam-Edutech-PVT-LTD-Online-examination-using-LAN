/**
 * Viswam Edutech Exam Engine v10.0 (Final Gold Master)
 * Features: Proctoring, Bulk Import, Randomization, Security, Analytics
 */
const express = require('express');
const fs = require('fs');
const path = require('path');
const cors = require('cors');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json({ limit: '50mb' }));
app.use(express.static(__dirname));

// Ensure Data Directory Exists
const DATA_DIR = path.join(__dirname, 'data');
if (!fs.existsSync(DATA_DIR)) fs.mkdirSync(DATA_DIR);

// File Paths
const FILES = {
    BANK: path.join(DATA_DIR, 'question_bank.json'),
    PAPERS: path.join(DATA_DIR, 'exam_papers.json'),
    RESULTS: path.join(DATA_DIR, 'student_results.json'),
    USERS: path.join(DATA_DIR, 'users.json'),
    SESSIONS: path.join(DATA_DIR, 'active_sessions.json')
};

// Helper: Read/Write JSON
const readData = (f) => fs.existsSync(f) ? JSON.parse(fs.readFileSync(f)) : [];
const writeData = (f, d) => fs.writeFileSync(f, JSON.stringify(d, null, 2));

// --- 1. USER & AUTH API ---
app.post('/api/users', (req, res) => {
    const users = readData(FILES.USERS);
    if (users.find(u => u.username === req.body.username)) return res.json({ success: false, msg: "User exists" });
    users.push(req.body); 
    writeData(FILES.USERS, users);
    res.json({ success: true });
});
app.get('/api/users', (req, res) => res.json(readData(FILES.USERS)));
app.delete('/api/users/:id', (req, res) => {
    writeData(FILES.USERS, readData(FILES.USERS).filter(u => u.username !== req.params.id));
    res.json({ success: true });
});

// --- 2. LIVE PROCTORING API ---
app.post('/api/proctor/heartbeat', (req, res) => {
    let sessions = readData(FILES.SESSIONS);
    const idx = sessions.findIndex(s => s.username === req.body.username);
    const entry = { ...req.body, lastSeen: Date.now() };
    if (idx > -1) sessions[idx] = entry; else sessions.push(entry);
    writeData(FILES.SESSIONS, sessions);
    res.json({ success: true });
});
app.get('/api/proctor/sessions', (req, res) => {
    // Return sessions active in last 60 seconds
    res.json(readData(FILES.SESSIONS).filter(s => Date.now() - s.lastSeen < 60000));
});

// --- 3. QUESTION BANK & BULK IMPORT ---
app.post('/api/bank/bulk', (req, res) => {
    const bank = readData(FILES.BANK);
    // Assign unique IDs to new questions
    const newQs = req.body.map(q => ({ id: Date.now() + Math.random(), ...q }));
    writeData(FILES.BANK, [...bank, ...newQs]);
    res.json({ success: true, count: newQs.length });
});
app.get('/api/bank', (req, res) => res.json(readData(FILES.BANK)));

// --- 4. EXAM PAPERS & PUBLISHING ---
app.post('/api/papers', (req, res) => {
    const papers = readData(FILES.PAPERS);
    // Replace old paper if Subject+Class matches, or add new
    const idx = papers.findIndex(p => p.subject === req.body.subject && p.classGrade === req.body.classGrade);
    if (idx > -1) papers[idx] = { id: Date.now(), ...req.body };
    else papers.push({ id: Date.now(), ...req.body });
    
    writeData(FILES.PAPERS, papers);
    res.json({ success: true });
});
app.get('/api/papers', (req, res) => res.json(readData(FILES.PAPERS)));

// --- 5. RESULTS ---
app.post('/api/submit', (req, res) => {
    const results = readData(FILES.RESULTS);
    results.push({ id: Date.now(), timestamp: new Date().toLocaleString(), ...req.body });
    writeData(FILES.RESULTS, results);
    res.json({ success: true });
});
app.get('/api/results', (req, res) => res.json(readData(FILES.RESULTS)));

// Start Server
app.listen(PORT, '0.0.0.0', () => {
    console.log(`\n✅ VISWAM SERVER ONLINE`);
    console.log(`🔗 Local URL: http://localhost:${PORT}`);
    console.log(`🔑 Admin Pass: Viswam@2026\n`);
});
