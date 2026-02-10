// server.js - Viswam Edutech LAN Exam Engine (v6.0)
const express = require('express');
const fs = require('fs');
const path = require('path');
const cors = require('cors');

const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(express.json({ limit: '50mb' })); // Handles large question bank imports
app.use(express.static(__dirname)); // Serves index.html from the same folder

// Data Directory Setup
const DATA_DIR = path.join(__dirname, 'data');
if (!fs.existsSync(DATA_DIR)) fs.mkdirSync(DATA_DIR);

const FILES = {
    BANK: path.join(DATA_DIR, 'question_bank.json'),
    USERS: path.join(DATA_DIR, 'users.json'),
    RESULTS: path.join(DATA_DIR, 'student_results.json')
};

// Helper Functions
const readData = (file) => {
    try {
        return fs.existsSync(file) ? JSON.parse(fs.readFileSync(file)) : [];
    } catch (err) {
        console.error(`Error reading ${file}:`, err);
        return [];
    }
};

const writeData = (file, data) => {
    try {
        fs.writeFileSync(file, JSON.stringify(data, null, 2));
    } catch (err) {
        console.error(`Error writing to ${file}:`, err);
    }
};

// --- USER MANAGEMENT API ---

app.get('/api/users', (req, res) => {
    res.json(readData(FILES.USERS));
});

app.post('/api/users', (req, res) => {
    const users = readData(FILES.USERS);
    // Check for duplicate username
    if (users.find(u => u.username === req.body.username)) {
        return res.status(400).json({ success: false, msg: "User ID already exists" });
    }
    users.push(req.body);
    writeData(FILES.USERS, users);
    res.json({ success: true });
});

// --- QUESTION BANK API ---

app.get('/api/bank', (req, res) => {
    res.json(readData(FILES.BANK));
});

// Single Question Add
app.post('/api/bank', (req, res) => {
    const bank = readData(FILES.BANK);
    const newQuestion = {
        id: Date.now() + Math.random(), // Unique ID generation
        ...req.body
    };
    bank.push(newQuestion);
    writeData(FILES.BANK, bank);
    res.json({ success: true, question: newQuestion });
});

// Bulk Import / Full Update (REPLACES existing data to prevent duplication)
app.post('/api/bank/bulk', (req, res) => {
    if (Array.isArray(req.body)) {
        writeData(FILES.BANK, req.body); // Overwrites the file with the new array
        res.json({ success: true, count: req.body.length });
    } else {
        res.status(400).json({ success: false, msg: "Expected an array of questions" });
    }
});

// Specific Delete Route (removes by ID)
app.delete('/api/bank/:id', (req, res) => {
    let bank = readData(FILES.BANK);
    const initialLength = bank.length;
    
    // Filter out the specific ID
    bank = bank.filter(q => q.id.toString() !== req.params.id.toString());
    
    if (bank.length === initialLength) {
        return res.status(404).json({ success: false, msg: "Question not found" });
    }

    writeData(FILES.BANK, bank);
    res.json({ success: true, msg: "Question deleted" });
});

// --- EXAM RESULTS API ---

app.get('/api/results', (req, res) => {
    res.json(readData(FILES.RESULTS));
});

app.post('/api/submit', (req, res) => {
    const results = readData(FILES.RESULTS);
    const submission = {
        id: Date.now(),
        timestamp: new Date().toLocaleString(),
        ...req.body
    };
    results.push(submission);
    writeData(FILES.RESULTS, results);
    res.json({ success: true });
});

// Start the server
app.listen(PORT, '0.0.0.0', () => {
    console.log(`\n=========================================`);
    console.log(`✅ VISWAM EXAM SERVER IS ACTIVE`);
    console.log(`🌐 Local Access: http://localhost:${PORT}`);
    console.log(`🔑 Admin Password: Viswam@2026`);
    console.log(`📂 Data stored in: ${DATA_DIR}`);
    console.log(`=========================================\n`);
});
