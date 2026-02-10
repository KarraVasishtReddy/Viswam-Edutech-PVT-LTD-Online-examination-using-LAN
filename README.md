🚀 Viswam Edutech | IIT-NEET LAN Exam Portal
A high-performance, secure, and localized examination system designed for IIT-NEET coaching centers. This platform runs entirely on a Local Area Network (LAN), allowing students to take exams via Wi-Fi without requiring an active internet connection.

✨ Key Features
Branded Interface: Professional header featuring IIT-NEET and Viswam Edutech logos.

Live Proctoring: Admin dashboard to monitor student progress, time remaining, and completion percentage in real-time.

Lockdown Security: Automatic "Tab-Switch" detection that alerts the admin if a student attempts to cheat by leaving the exam page.

Bulk Import: Add 50–100 questions instantly using JSON files.

OCR Integration: Snapshot-to-text conversion for quick manual question entry.

Auto-Certificates: Instant digital certificate generation upon exam completion.

Randomization: Fisher-Yates shuffling for questions and options to prevent neighbor-copying.
---------------------------------------------------------------------------------------------
1. Prerequisites
Node.js (v14 or higher) installed on the host laptop.

A Wi-Fi Router (No internet required, just a local connection).

2. Installation
Clone this repository or download the ZIP.

Open your terminal in the project folder and install dependencies:

Bash

npm install express cors
Place your logo files (iitneet.png and viswam.png) in the root directory.

---------------------------------
3. Running the Server
Start the backend engine:

Bash

node server.js
Admin URL: http://localhost:3000

Admin Password: Viswam@2026

4. Student Access
Find your laptop's IPv4 Address (Run ipconfig in CMD).

Students connect to the same Wi-Fi and visit: http://[YOUR_IP_ADDRESS]:3000
