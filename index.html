<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Viswam Edutech Portal</title>
    <script src="https://cdn.jsdelivr.net/npm/tesseract.js@5/dist/tesseract.min.js"></script>
    <style>
        :root { --primary: #0056b3; --bg: #f4f7f6; --text: #333; --white: #fff; }
        body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background: var(--bg); color: var(--text); margin: 0; padding: 20px; }
        .hidden { display: none !important; }
        .container { max-width: 1000px; margin: 0 auto; }

        /* HEADER */
        .header { background: var(--white); padding: 15px 30px; border-radius: 10px; display: flex; justify-content: space-between; align-items: center; box-shadow: 0 4px 6px rgba(0,0,0,0.05); margin-bottom: 30px; }
        .header img { max-height: 50px; }
        .header h1 { margin: 0; font-size: 1.5rem; color: var(--primary); }

        /* CARDS */
        .card { background: var(--white); padding: 25px; border-radius: 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.05); margin-bottom: 20px; }
        .form-group { margin-bottom: 15px; }
        .form-group label { display: block; margin-bottom: 5px; font-weight: bold; }
        input, select, textarea { width: 100%; padding: 10px; border: 1px solid #ddd; border-radius: 5px; box-sizing: border-box; }
        
        /* BUTTONS */
        button { padding: 12px 20px; border: none; border-radius: 5px; cursor: pointer; font-size: 1rem; font-weight: bold; transition: 0.2s; }
        .btn-primary { background: var(--primary); color: white; }
        .btn-success { background: #28a745; color: white; }
        .btn-danger { background: #dc3545; color: white; }
        .btn-block { width: 100%; }

        /* TABS */
        .nav-tabs { display: flex; gap: 10px; margin-bottom: 20px; justify-content: center; }
        
        /* EXAM STYLES */
        .timer-float { position: sticky; top: 10px; background: #343a40; color: #fff; padding: 10px 20px; border-radius: 30px; text-align: center; font-weight: bold; z-index: 100; margin-bottom: 20px; box-shadow: 0 4px 10px rgba(0,0,0,0.2); }
        .option-row { display: flex; align-items: center; padding: 10px; border: 1px solid #eee; margin-top: 5px; border-radius: 5px; cursor: pointer; }
        .option-row:hover { background: #f8f9fa; border-color: var(--primary); }
        .option-row input { width: auto; margin-right: 10px; }
    </style>
</head>
<body>

    <div class="header no-print">
        <img src="iitneet.png" alt="Logo L" onerror="this.style.display='none'">
        <div style="text-align:center">
            <h1>Viswam Edutech Portal</h1>
            <small>Secure Examination System</small>
        </div>
        <img src="viswam.png" alt="Logo R" onerror="this.style.display='none'">
    </div>

    <div id="viewLogin" class="container" style="max-width: 400px;">
        <div class="card">
            <h2 style="text-align:center; color:var(--primary);">System Login</h2>
            <form onsubmit="handleLogin(event)">
                <div class="form-group">
                    <label>User ID</label>
                    <input type="text" id="loginUser" placeholder="admin / S101" required>
                </div>
                <div class="form-group">
                    <label>Password</label>
                    <input type="password" id="loginPass" placeholder="Password" required>
                </div>
                
                <div id="studentFilters">
                    <div class="form-group">
                        <label>Target Class</label>
                        <input type="text" id="loginClass" placeholder="e.g. 10th">
                    </div>
                    <div class="form-group">
                        <label>Target Subject</label>
                        <input type="text" id="loginSubj" placeholder="e.g. Maths">
                    </div>
                </div>

                <button type="submit" class="btn-primary btn-block">Login</button>
            </form>
            <p id="loginMsg" style="color:red; text-align:center; margin-top:10px;"></p>
        </div>
    </div>

    <div id="viewAdmin" class="container hidden">
        <div class="nav-tabs">
            <button class="btn-primary" onclick="switchTab('create')">Build Exam</button>
            <button class="btn-primary" onclick="switchTab('students')">Students</button>
            <button class="btn-primary" onclick="switchTab('monitor')">Live Monitor</button>
            <button class="btn-success" onclick="switchTab('results')">Results</button>
            <button class="btn-danger" onclick="location.reload()">Logout</button>
        </div>

        <div id="tabCreate" class="hidden">
            <div class="card" style="background: #e9f7ef; border:1px solid #28a745;">
                <h3>Step 1: Publish Exam</h3>
                <div style="display:grid; grid-template-columns: 1fr 1fr; gap:10px;">
                    <input type="text" id="pubSubj" placeholder="Subject (e.g. Maths)">
                    <input type="text" id="pubClass" placeholder="Class (e.g. 10th)">
                    <input type="number" id="pubTime" placeholder="Duration (Mins)" value="30">
                    <input type="number" id="pubLimit" placeholder="Question Limit (e.g. 50)">
                </div>
                <br>
                <button class="btn-success btn-block" onclick="publishExam()">PUBLISH EXAM</button>
            </div>

            <div class="card">
                <h3>Step 2: Add Questions</h3>
                <p>Import JSON file or add manually.</p>
                <input type="file" accept=".json" onchange="bulkImport(this)">
                <br><br>
                <textarea id="qText" placeholder="Or type question text here..." rows="2"></textarea>
                <div style="display:grid; grid-template-columns: 1fr 1fr; gap:10px; margin-top:10px;">
                    <input type="text" id="optA" placeholder="Option A">
                    <input type="text" id="optB" placeholder="Option B">
                    <input type="text" id="optC" placeholder="Option C">
                    <input type="text" id="optD" placeholder="Option D">
                </div>
                <select id="qCorrect" style="margin-top:10px;">
                    <option value="A">Correct: A</option><option value="B">Correct: B</option>
                    <option value="C">Correct: C</option><option value="D">Correct: D</option>
                </select>
                <br><br>
                <button class="btn-primary" onclick="addQuestion()">Add Single Question</button>
                <button class="btn-primary" onclick="loadBank()">View Bank</button>
                <div id="bankList" style="margin-top:10px; max-height:200px; overflow-y:auto; border:1px solid #ddd; padding:5px;"></div>
            </div>
        </div>

        <div id="tabStudents" class="hidden">
            <div class="card">
                <h3>Manage Students</h3>
                <div style="display:flex; gap:10px;">
                    <input type="text" id="newUid" placeholder="New Student ID">
                    <input type="password" id="newPass" placeholder="Password">
                    <button class="btn-success" onclick="addStudent()">Add</button>
                </div>
                <hr>
                <div id="studentList"></div>
            </div>
        </div>

        <div id="tabMonitor" class="hidden">
            <div class="card">
                <h3>Live Proctoring</h3>
                <div id="monitorList"></div>
            </div>
        </div>

        <div id="tabResults" class="hidden">
            <div class="card">
                <h3>Exam Results</h3>
                <table style="width:100%; border-collapse:collapse;">
                    <thead><tr style="background:#eee; text-align:left;"><th>Student</th><th>Subject</th><th>Score</th><th>Time</th></tr></thead>
                    <tbody id="resultList"></tbody>
                </table>
            </div>
        </div>
    </div>

    <div id="viewPreview" class="container hidden" style="text-align:center;">
        <div class="card">
            <h1 id="preTitle" style="color:var(--primary)">Exam Ready</h1>
            <p id="preMeta" style="font-size:1.2rem; margin-bottom:20px;">--</p>
            <div style="text-align:left; background:#f8f9fa; padding:15px; border-radius:5px; margin-bottom:20px;">
                <strong>Rules:</strong>
                <ul>
                    <li>Timer starts immediately after clicking "Start".</li>
                    <li>Do not refresh the page.</li>
                    <li>Do not switch browser tabs (Violation will be recorded).</li>
                </ul>
            </div>
            <button class="btn-success btn-block" onclick="startExam()" style="font-size:1.2rem; padding:15px;">START EXAM NOW</button>
        </div>
    </div>

    <div id="viewExam" class="container hidden">
        <div id="examTimer" class="timer-float">Time Left: --:--</div>
        <div id="examContainer"></div>
        <br>
        <button class="btn-success btn-block" onclick="submitExam()" style="font-size:1.2rem; padding:15px;">SUBMIT FINAL PAPER</button>
    </div>

    <script>
        const API = '/api';
        let userCtx = {}; 
        let examData = {}; 
        let activeQs = []; 
        let timerInt; 
        let monitorInt;
        let violations = 0;

        // --- AUTH & LOGIN ---
        async function handleLogin(e) {
            e.preventDefault();
            const u = document.getElementById('loginUser').value;
            const p = document.getElementById('loginPass').value;

            // ADMIN SHORTCUT
            if(u.toLowerCase() === 'admin' && p === 'Viswam@2026') {
                showView('viewAdmin'); showTab('create'); return;
            }

            // STUDENT LOGIN
            const cls = document.getElementById('loginClass').value.trim();
            const subj = document.getElementById('loginSubj').value.trim();
            if(!cls || !subj) { alert("Please enter Class and Subject."); return; }

            try {
                const res = await fetch(API + '/users');
                const users = await res.json();
                const valid = users.find(x => x.username === u && x.password === p);

                if(valid) {
                    userCtx = { ...valid, class: cls, subject: subj };
                    await findPaper(cls, subj);
                } else {
                    document.getElementById('loginMsg').innerText = "Invalid ID or Password";
                }
            } catch(err) {
                alert("Server not reachable. Please check if server.js is running.");
            }
        }

        // Toggle Login Filters
        document.getElementById('loginUser').addEventListener('input', function(e) {
            const isAdm = e.target.value.toLowerCase() === 'admin';
            document.getElementById('studentFilters').style.display = isAdm ? 'none' : 'block';
        });

        async function findPaper(cls, subj) {
            const res = await fetch(API + '/papers');
            const papers = await res.json();
            
            // Case-Insensitive Match
            const match = papers.find(p => 
                p.classGrade.toLowerCase() === cls.toLowerCase() && 
                p.subject.toLowerCase() === subj.toLowerCase()
            );

            if(match) {
                examData = match;
                document.getElementById('preTitle').innerText = `${match.subject} Exam`;
                document.getElementById('preMeta').innerText = `Class: ${match.classGrade} | Duration: ${match.duration} Min | Questions: ${match.questions.length}`;
                showView('viewPreview');
            } else {
                alert(`No exam found for Subject: ${subj}, Class: ${cls}.\nPlease ask the admin to Publish it.`);
                location.reload();
            }
        }

        // --- EXAM ENGINE ---
        function startExam() {
            showView('viewExam');
            
            // 1. Randomize Questions
            activeQs = examData.questions.sort(() => Math.random() - 0.5);

            // 2. Render
            document.getElementById('examContainer').innerHTML = activeQs.map((q, i) => {
                // Randomize Options
                const keys = ['A','B','C','D'].sort(() => Math.random() - 0.5);
                return `
                <div class="card">
                    <p><strong>Q${i+1}:</strong> ${q.text}</p>
                    <div>
                        ${keys.map(k => `
                            <label class="option-row">
                                <input type="radio" name="q${i}" value="${k}" onclick="pulse()"> ${q.options[k]}
                            </label>
                        `).join('')}
                    </div>
                </div>`;
            }).join('');

            // 3. Start Timer
            let sec = examData.duration * 60;
            updateTimer(sec);
            timerInt = setInterval(() => {
                sec--;
                updateTimer(sec);
                if(sec <= 0) { clearInterval(timerInt); submitExam(); }
            }, 1000);

            // 4. Start Monitoring
            setInterval(pulse, 10000);
        }

        function updateTimer(s) {
            const m = Math.floor(s / 60);
            const remS = s % 60;
            document.getElementById('examTimer').innerText = `Time Left: ${m}:${remS < 10 ? '0'+remS : remS}`;
        }

        async function submitExam() {
            clearInterval(timerInt);
            let score = 0;
            activeQs.forEach((q, i) => {
                const sel = document.querySelector(`input[name="q${i}"]:checked`);
                if(sel && sel.value === q.correct) score++;
            });

            await fetch(API + '/submit', {
                method: 'POST',
                headers: {'Content-Type':'application/json'},
                body: JSON.stringify({
                    studentName: userCtx.username,
                    subject: examData.subject,
                    score: `${score}/${activeQs.length}`
                })
            });

            alert(`Submitted! Your Score: ${score}/${activeQs.length}`);
            location.reload();
        }

        // --- PROCTORING ---
        function pulse() {
            const done = document.querySelectorAll('input[type="radio"]:checked').length;
            const prog = Math.round((done / activeQs.length) * 100) || 0;
            
            fetch(API + '/proctor/heartbeat', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({
                    username: userCtx.username,
                    subject: examData.subject,
                    progress: prog,
                    alerts: violations
                })
            });
        }

        window.addEventListener('blur', () => {
            if(!document.getElementById('viewExam').classList.contains('hidden')) {
                violations++;
                alert("⚠️ WARNING: Tab switching is monitored!");
                pulse();
            }
        });

        // --- ADMIN FUNCTIONS ---
        async function publishExam() {
            const subj = document.getElementById('pubSubj').value.trim();
            const cls = document.getElementById('pubClass').value.trim();
            const dur = document.getElementById('pubTime').value;
            const limit = parseInt(document.getElementById('pubLimit').value) || 0;

            if(!subj || !cls) { alert("Subject and Class are required."); return; }

            // Get questions from Bank
            const bank = await (await fetch(API + '/bank')).json();
            if(bank.length === 0) { alert("Question Bank is empty! Add questions first."); return; }

            // Random Selection
            let selectedQs = bank;
            if(limit > 0 && bank.length > limit) {
                selectedQs = bank.sort(() => Math.random() - 0.5).slice(0, limit);
            }

            const paper = { subject: subj, classGrade: cls, duration: dur, questions: selectedQs };
            
            await fetch(API + '/papers', {
                method: 'POST',
                headers: {'Content-Type':'application/json'},
                body: JSON.stringify(paper)
            });

            alert(`✅ Exam Published for ${subj} (${cls})\nQuestions: ${selectedQs.length}`);
        }

        // Admin Helpers
        async function addStudent() { await fetch(API+'/users', {method:'POST', headers:{'Content-Type':'application/json'}, body:JSON.stringify({username:document.getElementById('newUid').value, password:document.getElementById('newPass').value})}); loadStudents(); }
        async function loadStudents() { const d = await (await fetch(API+'/users')).json(); document.getElementById('studentList').innerHTML = d.map(u => `<div style="padding:5px; border-bottom:1px solid #eee;">${u.username} <button class="btn-danger" style="float:right; padding:2px 10px;" onclick="delUser('${u.username}')">X</button></div>`).join(''); }
        async function delUser(id) { if(confirm('Delete?')) await fetch(API+'/users/'+id, {method:'DELETE'}); loadStudents(); }
        
        async function loadBank() { const d = await (await fetch(API+'/bank')).json(); document.getElementById('bankList').innerHTML = d.map(q => `<div>[${q.subject||'Gen'}] ${q.text}</div>`).join(''); }
        async function bulkImport(inp) { 
            const reader = new FileReader(); reader.onload = async (e) => {
                const res = await fetch(API+'/bank/bulk', {method:'POST', headers:{'Content-Type':'application/json'}, body:e.target.result});
                alert(`Imported ${(await res.json()).count} questions.`); loadBank();
            }; reader.readAsText(inp.files[0]);
        }
        async function addQuestion() {
            const q = { text:document.getElementById('qText').value, options:{A:document.getElementById('optA').value, B:document.getElementById('optB').value, C:document.getElementById('optC').value, D:document.getElementById('optD').value}, correct:document.getElementById('qCorrect').value };
            await fetch(API+'/bank/bulk', {method:'POST', headers:{'Content-Type':'application/json'}, body:JSON.stringify([q])});
            alert("Saved"); loadBank();
        }

        // Monitoring & Results
        async function loadMonitor() {
            const d = await (await fetch(API+'/proctor/sessions')).json();
            document.getElementById('monitorList').innerHTML = d.map(s => `<div style="padding:10px; border-bottom:1px solid #eee;"><strong>${s.username}</strong> (${s.subject}) - Progress: ${s.progress}% ${s.alerts > 0 ? `<span style="color:red; font-weight:bold;">(Violations: ${s.alerts})</span>` : ''}</div>`).join('');
        }
        async function loadResults() {
            const d = await (await fetch(API+'/results')).json();
            document.getElementById('resultList').innerHTML = d.map(r => `<tr><td>${r.studentName}</td><td>${r.subject}</td><td><b>${r.score}</b></td><td>${r.timestamp}</td></tr>`).join('');
        }

        // Navigation
        function showView(v) { ['viewLogin','viewAdmin','viewPreview','viewExam'].forEach(x => document.getElementById(x).classList.add('hidden')); document.getElementById(v).classList.remove('hidden'); }
        function switchTab(t) { 
            clearInterval(monitorInt);
            ['tabCreate','tabStudents','tabMonitor','tabResults'].forEach(x => document.getElementById(x).classList.add('hidden'));
            document.getElementById('tab'+t.charAt(0).toUpperCase()+t.slice(1)).classList.remove('hidden');
            if(t==='students') loadStudents(); if(t==='results') loadResults(); if(t==='monitor') { loadMonitor(); monitorInt = setInterval(loadMonitor, 5000); }
        }
    </script>
</body>
</html>
