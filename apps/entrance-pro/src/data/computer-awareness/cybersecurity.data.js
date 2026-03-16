// src/data/computer-awareness/cybersecurity.data.js
// MAH BBA CET - COMPUTER AWARENESS - CYBERSECURITY MODULE
// SCHEMA VALIDATED AGAINST DATA_SCHEMA.md

export const cybersecurityData = {
    subject: "Computer Awareness",
    chapter: "Cybersecurity & Ethics",
    examTags: ["MH-CET"],
    studyGuide: {
        topics: [
            {
                id: "malware-attacks",
                title: "1. Malware & Cyber Attacks",
                content: {
                    coreConcept: "1. Malware: Short for 'Malicious Software'. It is any program designed to damage, disrupt, or steal data from a computer system.\n2. The Spread: Some malware spreads through your action (Virus), some spreads automatically (Worm), and some hides inside 'good' programs (Trojan).\n3. Social Engineering: Attacking the human 'brain' instead of the computer code (Phishing).",
                    formulaBank: "Malware Types comparison:\n1. Virus: Needs a host file + human action (opening an email attachment) to spread.\n2. Worm: Self-replicating. Spreads over networks *without* human help.\n3. Trojan: Disguised as useful software. It does not replicate but creates a 'backdoor'.\n4. Ransomware: Holds your data hostage by encrypting it and demanding money.\n5. Spyware: Silently records your activity (Keyloggers steal passwords).",
                    logic: "The Attack Logic:\n- Step 1: Infection (User clicks a link or downloads a file).\n- Step 2: Execution (Malware starts running in the background).\n- Step 3: Payload (The actual damage - deleting files, stealing data, or demanding ransom).\nLogic: A Firewall stops the malware from *entering*; an Antivirus removes it *after* it enters.",
                    traps: "TRAP 1: Virus vs Worm\nExams love this! Remember: Virus = Needs human help. Worm = Spreads on its own like a wildfire.\n\nTRAP 2: Phishing vs Spam\nSpam is just unwanted bulk mail (ads). Phishing is a targeted attempt to *steal* your password or credit card.\n\nTRAP 3: DoS vs DDoS\nDoS is one computer attacking. DDoS is thousands of 'zombie' computers (Botnet) attacking a website together to crash it.",
                    examples: [
                        { q: "Malware that spreads automatically over networks?", a: "Worm" },
                        { q: "Malware disguised as a free game?", a: "Trojan Horse" },
                        { q: "Attack that manipulates human psychology?", a: "Social Engineering" },
                        { q: "Software that records every key you press?", a: "Keylogger" },
                        { q: "What does 'Ransom' in Ransomware imply?", a: "Payment demanded to unlock encrypted data." },
                        { q: "Malicious link in a fake bank email?", a: "Phishing" },
                        { q: "What is a 'Botnet'?", a: "A network of compromised computers used in DDoS attacks." },
                        { q: "Malware that requires a host file to spread?", a: "Virus" },
                        { q: "Difference between DoS and DDoS?", a: "DDoS uses multiple systems (distributed) for the attack." },
                        { q: "Malware that lie dormant until a specific date?", a: "Logic Bomb" }
                    ],
                    speedSummary: "- Virus = Manual | Worm = Automatic | Trojan = Disguised.\n- Phishing = Identity Theft | Ransomware = Data Ransom.\n- Firewalls block entry | Antivirus cleans the mess."
                }
            },
            {
                id: "security-tools",
                title: "2. Security Tools",
                content: {
                    coreConcept: "1. Defense in Depth: You cannot rely on just one tool. You need a 'Layered' defense.\n2. Encryption: Making data unreadable to hackers (Ciphertext). Only authorized people with a 'Key' can read it.\n3. VPN: Creates a secure, private 'tunnel' for your data over the public internet.",
                    formulaBank: "The Defense Toolkit:\n1. Firewall: Monitors network traffic. Acts as a gatekeeper.\n2. Antivirus: Scans files and memory. Detects and deletes malware signatures.\n3. SSL/TLS: Protocols that provide the 'padlock' icon in your browser (HTTPS).\n4. VPN (Virtual Private Network): Hides your actual IP address and encrypts your traffic.",
                    logic: "Encryption Logic:\n- Plaintext: 'Hello' (Human readable).\n- Encryption Algorithm: Scrambles the text.\n- Ciphertext: 'x7#j!L' (Unreadable junk).\n- Decryption Key: Turns the junk back into 'Hello'.",
                    traps: "TRAP 1: The Firewall Myth\nMany students think a Firewall cleans viruses. NO. A Firewall is like a security guard at the gate. If a thief (virus) is *already* inside the house, the guard cannot find him. You need a detective (Antivirus).\n\nTRAP 2: HTTPS Safety\nHTTPS means your connection is *private*, but it doesn't mean the website itself is *good*. A hacker can have an HTTPS site too!\n\nTRAP 3: VPN Speed\nEncryption and rerouting through a VPN usually slows down your internet speed slightly. It's for security, not speed.",
                    examples: [
                        { q: "Device/Software that filters network traffic?", a: "Firewall" },
                        { q: "What converts plaintext into ciphertext?", a: "Encryption" },
                        { q: "Software used to remove a virus already on disk?", a: "Antivirus" },
                        { q: "Commonly used protocol for web encryption?", a: "SSL or TLS" },
                        { q: "Tool that hides your IP address?", a: "VPN" },
                        { q: "What does a padlock icon in browser mean?", a: "Connection is secure (HTTPS)." },
                        { q: "Do Firewalls scan already-infected files?", a: "No, they only monitor traffic flow." },
                        { q: "Why update antivirus daily?", a: "To get definitions for 'Zero-day' or new threats." },
                        { q: "Is Encryption a threat or a tool?", a: "It is a tool used for protection." },
                        { q: "Function of a 'Recovery Key'?", a: "To decrypt data after a system failure or attack." }
                    ],
                    speedSummary: "- Firewall = Filter | Antivirus = Cleaner.\n- Encryption = Scrambling | VPN = Privacy Tunnel.\n- Padlock = SSL/TLS Security."
                }
            },
            {
                id: "ethics-best-practices",
                title: "3. Ethics & Best Practices",
                content: {
                    coreConcept: "1. Digital Hygiene: Good habits that keep your data safe.\n2. Authentication: Proving you are who you say you are (Passwords, PINs, OTPs).\n3. Laws: The 'IT Act' (in India) or similar laws regulate cybercrime and digital activities.",
                    formulaBank: "Authentication Levels:\n1. 1FA (Single Factor): Just a Password.\n2. 2FA (Two-Factor): Password + OTP (One-Time Password) on your phone.\n3. MFA (Multi-Factor): Password + OTP + Biometric (Fingerprint).\n4. Complexity Rule: Mix symbols (@,#,$), numbers, and case-sensitive letters.",
                    logic: "The Backup Rule (3-2-1 Logic):\n- Keep 3 copies of your data.\n- Store them on 2 different types of media (e.g., HDD + Cloud).\n- Keep 1 copy off-site (in a different physical location).",
                    traps: "TRAP 1: Secret Questions\nAnswers like 'Pet's name' or 'Favorite food' are easily found on social media. They are often the weakest point of security.\n\nTRAP 2: Public Wi-Fi\nNever do banking or shopping on public airport or cafe Wi-Fi. Hackers can often 'sniff' or see your data on these networks.\n\nTRAP 3: Logout vs. Close Window\nClosing a browser window does NOT always end your session. Always click 'Logout' to be safe, especially on shared computers.",
                    examples: [
                        { q: "Full form of OTP?", a: "One-Time Password" },
                        { q: "Best defense against Ransomware?", a: "Regular offline Backups." },
                        { q: "Is 'Password123' a strong password?", a: "No, it's very weak and easily guessed." },
                        { q: "What is 2FA?", a: "Two-Factor Authentication." },
                        { q: "Should you share your OTP with anyone?", a: "Never." },
                        { q: "Safe method to store multiple passwords?", a: "Password Manager." },
                        { q: "Is it ethical to use someone's Wi-Fi without permission?", a: "No, it is considered unauthorized access." },
                        { q: "What identifies a user by their physical traits?", a: "Biometrics (Fingerprint/FaceID)." },
                        { q: "Main law for cybercrime in India?", a: "Information Technology (IT) Act, 2000." },
                        { q: "Why use 'Incognito' or 'Private' mode?", a: "To prevent the browser from saving history and cookies." }
                    ],
                    speedSummary: "- Use 2FA whenever possible.\n- 3-2-1 Backup rule: 3 copies, 2 media, 1 off-site.\n- Authentication: Something you know, have, or are."
                }
            }
        ]
    },
    flashcards: [
        { id: "sec-fc-001", term: "Virus", definition: "Malware that requires human action to spread (e.g., opening an attachment)." },
        { id: "sec-fc-002", term: "Worm", definition: "Malware that spreads automatically over networks without human action." },
        { id: "sec-fc-003", term: "Trojan Horse", definition: "Malware disguised as useful software; creates a backdoor." },
        { id: "sec-fc-004", term: "Ransomware", definition: "Encrypts files and demands payment for the decryption key." },
        { id: "sec-fc-005", term: "Phishing", definition: "Social engineering using fake emails/sites to steal credentials." },
        { id: "sec-fc-006", term: "Firewall", definition: "Filters network traffic; does NOT remove existing viruses." },
        { id: "sec-fc-007", term: "Antivirus", definition: "Software that detects, blocks, and removes malware." },
        { id: "sec-fc-008", term: "2FA", definition: "Two-Factor Authentication: Password + OTP/Biometric." },
        { id: "sec-fc-009", term: "VPN", definition: "Virtual Private Network - Encrypts traffic and hides IP." },
        { id: "sec-fc-010", term: "SSL/TLS", definition: "Protocols for encrypted web communication (indicated by padlock)." }
    ],
    questions: [
        // --- TOPIC 1: Malware Types (15 Questions) ---
        {
            id: "sec-q-001", type: "mcq", difficulty: "medium",
            question: "Which type of malware spreads automatically across networks WITHOUT human intervention?",
            options: ["Virus", "Worm", "Trojan", "Adware"],
            correct: 1,
            cognitiveType: "identification", psychometricTemplate: "functional",
            timePresure: "speed", speedTarget: 40, negativeMarking: false,
            explanation: "Worms are self-replicating and spread over network connections automatically.",
            examTags: ["MH-CET"]
        },
        {
            id: "sec-q-002", type: "mcq", difficulty: "medium",
            question: "A computer virus primarily differs from a worm because it:",
            options: [
                "Is harder to detect",
                "Requires a human action (like opening a file) to spread",
                "Can only infect Windows",
                "Does not damage files"
            ],
            correct: 1,
            cognitiveType: "recall", psychometricTemplate: "functional",
            timePresure: "speed", speedTarget: 40, negativeMarking: false,
            explanation: "Viruses need a host file and a user action to replicate.",
            examTags: ["MH-CET"]
        },
        {
            id: "sec-q-003", type: "mcq", difficulty: "medium",
            question: "Which malware is disguised as legitimate software but creates a 'backdoor' for attackers?",
            options: ["Spyware", "Ransomware", "Trojan Horse", "Keylogger"],
            correct: 2,
            cognitiveType: "identification", psychometricTemplate: "identification",
            timePresure: "speed", speedTarget: 40, negativeMarking: false,
            explanation: "Trojan horses appear useful but contain hidden malicious code.",
            examTags: ["MH-CET"]
        },
        {
            id: "sec-q-004", type: "mcq", difficulty: "easy",
            question: "Which type of malware encrypts your files and demands money for the recovery key?",
            options: ["Adware", "Spyware", "Ransomware", "Worm"],
            correct: 2,
            cognitiveType: "identification", psychometricTemplate: "identification",
            timePresure: "speed", speedTarget: 40, negativeMarking: false,
            explanation: "Ransomware holds your data hostage for a ransom.",
            examTags: ["MH-CET"]
        },
        {
            id: "sec-q-005", type: "mcq", difficulty: "medium",
            question: "What is 'Phishing'?",
            options: [
                "A hardware failure",
                "A social engineering attack using fake emails/websites",
                "A type of fast internet",
                "A data backup method"
            ],
            correct: 1,
            cognitiveType: "recall", psychometricTemplate: "functional",
            timePresure: "speed", speedTarget: 40, negativeMarking: false,
            explanation: "Phishing tricks users into giving up sensitive info (passwords, credit cards).",
            examTags: ["MH-CET"]
        },
        {
            id: "sec-q-006", type: "mcq", difficulty: "medium",
            question: "An attack that targets human psychology rather than technical vulnerabilities is called:",
            options: ["Brute Force", "Social Engineering", "DoS Attack", "Database Injection"],
            correct: 1,
            cognitiveType: "identification", psychometricTemplate: "functional",
            timePresure: "speed", speedTarget: 40, negativeMarking: false,
            explanation: "Social engineering manipulates people into performing actions or divulging info.",
            examTags: ["MH-CET"]
        },
        {
            id: "sec-q-007", type: "mcq", difficulty: "medium",
            question: "Which malware silently records everything you type on your keyboard?",
            options: ["Adware", "Keylogger", "Rootkit", "Worm"],
            correct: 1,
            cognitiveType: "identification", psychometricTemplate: "identification",
            timePresure: "speed", speedTarget: 40, negativeMarking: false,
            explanation: "Keyloggers are a form of spyware that capture keystrokes.",
            examTags: ["MH-CET"]
        },
        {
            id: "sec-q-008", type: "mcq", difficulty: "medium",
            question: "What is the primary purpose of 'Spyware'?",
            options: [
                "To delete files",
                "To display ads",
                "To monitor user activity and steal information silently",
                "To speed up the computer"
            ],
            correct: 2,
            cognitiveType: "functional", psychometricTemplate: "functional",
            timePresure: "speed", speedTarget: 40, negativeMarking: false,
            explanation: "Spyware aims to remain undetected while gathering intelligence.",
            examTags: ["MH-CET"]
        },
        {
            id: "sec-q-009", type: "mcq", difficulty: "hard",
            question: "A 'Rootkit' is particularly dangerous because:",
            options: [
                "It is very large",
                "It hides itself deep within the operating system",
                "It only attacks routers",
                "It drains the battery"
            ],
            correct: 1,
            cognitiveType: "recall", psychometricTemplate: "functional",
            timePresure: "speed", speedTarget: 40, negativeMarking: false,
            explanation: "Rootkits provide administrative access while concealing their presence.",
            examTags: ["MH-CET"]
        },
        {
            id: "sec-q-010", type: "mcq", difficulty: "medium",
            question: "Which of the following is NOT typically considered malware?",
            options: ["Spyware", "Adware", "Firewall", "Worm"],
            correct: 2,
            cognitiveType: "identification", psychometricTemplate: "identification",
            timePresure: "speed", speedTarget: 40, negativeMarking: false,
            explanation: "A Firewall is a security tool, not malicious software.",
            examTags: ["MH-CET"]
        },
        {
            id: "sec-q-011", type: "mcq", difficulty: "medium",
            question: "What does 'DoS' stand for in cybersecurity?",
            options: [
                "Data On Server",
                "Denial of Service",
                "Disk Operating System",
                "Department of Security"
            ],
            correct: 1,
            cognitiveType: "acronym", psychometricTemplate: "acronym",
            timePresure: "speed", speedTarget: 40, negativeMarking: false,
            explanation: "Denial of Service attacks aim to make a machine or network resource unavailable.",
            examTags: ["MH-CET"]
        },
        {
            id: "sec-q-012", type: "mcq", difficulty: "hard",
            question: "What is the difference between DoS and DDoS?",
            options: [
                "DDoS is faster",
                "DDoS uses multiple compromised systems (botnets) for the attack",
                "DoS is only for websites",
                "There is no difference"
            ],
            correct: 1,
            cognitiveType: "recall", psychometricTemplate: "functional",
            timePresure: "speed", speedTarget: 40, negativeMarking: false,
            explanation: "Distributed Denial of Service (DDoS) uses many sources to overwhelm a target.",
            examTags: ["MH-CET"]
        },
        {
            id: "sec-q-013", type: "mcq", difficulty: "easy",
            question: "A malicious link in a fake 'Bank' email is a classic example of:",
            options: ["Phishing", "Spamming", "Caching", "Debugging"],
            correct: 0,
            cognitiveType: "identification", psychometricTemplate: "identification",
            timePresure: "speed", speedTarget: 40, negativeMarking: false,
            explanation: "This is a phishing attempt to steal bank credentials.",
            examTags: ["MH-CET"]
        },
        {
            id: "sec-q-014", type: "mcq", difficulty: "easy",
            question: "Adware is primarily designed to:",
            options: [
                "Steal passwords",
                "Delete the hard drive",
                "Display unwanted advertisements automatically",
                "Block the internet"
            ],
            correct: 2,
            cognitiveType: "functional", psychometricTemplate: "functional",
            timePresure: "speed", speedTarget: 40, negativeMarking: false,
            explanation: "Adware generates revenue for its developer by delivering ads.",
            examTags: ["MH-CET"]
        },
        {
            id: "sec-q-015", type: "mcq", difficulty: "medium",
            question: "A 'Logic Bomb' triggers its malicious action when:",
            options: [
                "The computer is turned on",
                "A specific condition or date is met",
                "The internet is disconnected",
                "The user types 'BOMB'"
            ],
            correct: 1,
            cognitiveType: "recall", psychometricTemplate: "functional",
            timePresure: "speed", speedTarget: 40, negativeMarking: false,
            explanation: "Logic bombs lie dormant until a preset event occurs.",
            examTags: ["MH-CET"]
        },

        // --- TOPIC 2: Security Tools (15 Questions) ---
        {
            id: "sec-q-016", type: "mcq", difficulty: "medium",
            question: "What is the PRIMARY function of a Firewall?",
            options: [
                "To remove viruses from the system",
                "To monitor and filter incoming/outgoing network traffic",
                "To speed up internet connection",
                "To backup data automatically"
            ],
            correct: 1,
            cognitiveType: "functional", psychometricTemplate: "functional",
            timePresure: "speed", speedTarget: 40, negativeMarking: false,
            explanation: "Firewalls act as a barrier between a trusted and untrusted network.",
            examTags: ["MH-CET"]
        },
        {
            id: "sec-q-017", type: "mcq", difficulty: "medium",
            question: "Can a Firewall remove a virus that is already inside the computer?",
            options: ["Yes", "No", "Only if it is hardware", "Only on Windows"],
            correct: 1,
            cognitiveType: "recall", psychometricTemplate: "functional",
            timePresure: "speed", speedTarget: 40, negativeMarking: false,
            explanation: "Firewalls block traffic; they do not scan or remove existing infected files (that is the job of antivirus).",
            examTags: ["MH-CET"]
        },
        {
            id: "sec-q-018", type: "mcq", difficulty: "easy",
            question: "Which of the following can be used to scan and remove malware?",
            options: ["Firewall", "Antivirus software", "Modem", "Router"],
            correct: 1,
            cognitiveType: "identification", psychometricTemplate: "functional",
            timePresure: "speed", speedTarget: 40, negativeMarking: false,
            explanation: "Antivirus is specifically designed for malware detection and removal.",
            examTags: ["MH-CET"]
        },
        {
            id: "sec-q-019", type: "mcq", difficulty: "medium",
            question: "Regularly updating Antivirus software is important because:",
            options: [
                "It makes the computer pretty",
                "New malware is released daily",
                "It clears the browser history",
                "It fixes the hardware"
            ],
            correct: 1,
            cognitiveType: "recall", psychometricTemplate: "functional",
            timePresure: "speed", speedTarget: 40, negativeMarking: false,
            explanation: "Updates provide 'definitions' for newly discovered threats.",
            examTags: ["MH-CET"]
        },
        {
            id: "sec-q-020", type: "mcq", difficulty: "medium",
            question: "What does active 'Encryption' do to your data?",
            options: [
                "Deletes it permanently",
                "Compresses it to save space",
                "Converts it into an unreadable format (ciphertext)",
                "Sends it to the manufacturer"
            ],
            correct: 2,
            cognitiveType: "functional", psychometricTemplate: "functional",
            timePresure: "speed", speedTarget: 40, negativeMarking: false,
            explanation: "Encryption ensures data remains private even if intercepted.",
            examTags: ["MH-CET"]
        },
        {
            id: "sec-q-021", type: "mcq", difficulty: "easy",
            question: "A padlock icon in the browser address bar indicates:",
            options: [
                "The site is blocked",
                "The connection is encrypted using SSL/TLS",
                "The battery is low",
                "The internet is slow"
            ],
            correct: 1,
            cognitiveType: "identification", psychometricTemplate: "identification",
            timePresure: "speed", speedTarget: 40, negativeMarking: false,
            explanation: "The padlock signifies a secure HTTPS connection.",
            examTags: ["MH-CET"]
        },
        {
            id: "sec-q-022", type: "mcq", difficulty: "medium",
            question: "What does 2FA stand for in security?",
            options: [
                "Two-Factor Authentication",
                "Two-File Access",
                "Total Firewall Access",
                "Tier 2 Authentication"
            ],
            correct: 0,
            cognitiveType: "acronym", psychometricTemplate: "acronym",
            timePresure: "speed", speedTarget: 40, negativeMarking: false,
            explanation: "2FA adds an extra layer of security beyond just a password.",
            examTags: ["MH-CET"]
        },
        {
            id: "sec-q-023", type: "mcq", difficulty: "medium",
            question: "Which of the following is a form of 2FA?",
            options: [
                "Typing your password twice",
                "Password + OTP (One-Time Password)",
                "Updating your browser",
                "Using a longer password"
            ],
            correct: 1,
            cognitiveType: "identification", psychometricTemplate: "functional",
            timePresure: "speed", speedTarget: 40, negativeMarking: false,
            explanation: "2FA requires 'something you know' (password) and 'something you have/are' (OTP/fingerprint).",
            examTags: ["MH-CET"]
        },
        {
            id: "sec-q-024", type: "mcq", difficulty: "medium",
            question: "What is the primary benefit of using a VPN?",
            options: [
                "It makes the internet free",
                "It encrypts your traffic and hides your actual IP address",
                "It removes viruses automatically",
                "It cleans the hardware"
            ],
            correct: 1,
            cognitiveType: "functional", psychometricTemplate: "functional",
            timePresure: "speed", speedTarget: 40, negativeMarking: false,
            explanation: "VPNs provide privacy and security over public networks.",
            examTags: ["MH-CET"]
        },
        {
            id: "sec-q-025", type: "mcq", difficulty: "easy",
            question: "Which is the BEST practice for strong password security?",
            options: [
                "Use your birth date",
                "Use '123456'",
                "Use a mix of uppercase, lowercase, numbers, and symbols",
                "Write it on a sticky note on the monitor"
            ],
            correct: 2,
            cognitiveType: "recall", psychometricTemplate: "functional",
            timePresure: "speed", speedTarget: 40, negativeMarking: false,
            explanation: "Complexity makes passwords harder to guess or crack via brute force.",
            examTags: ["MH-CET"]
        },
        {
            id: "sec-q-026", type: "mcq", difficulty: "medium",
            question: "What is the best defense against 'Ransomware'?",
            options: [
                "Buying expensive hardware",
                "Using a dedicated gaming mouse",
                "Regularly maintaining data backups off-site/offline",
                "Turning off the monitor"
            ],
            correct: 2,
            cognitiveType: "functional", psychometricTemplate: "functional",
            timePresure: "speed", speedTarget: 40, negativeMarking: false,
            explanation: "Backups allow you to restore data without paying the attacker.",
            examTags: ["MH-CET"]
        },
        {
            id: "sec-q-027", type: "mcq", difficulty: "easy",
            question: "SSL stands for:",
            options: [
                "Secure Sockets Layer",
                "System Security Link",
                "Standard Software List",
                "Safe Server Log"
            ],
            correct: 0,
            cognitiveType: "acronym", psychometricTemplate: "acronym",
            timePresure: "speed", speedTarget: 40, negativeMarking: false,
            explanation: "SSL is the predecessor to TLS; both provide web encryption.",
            examTags: ["MH-CET"]
        },
        {
            id: "sec-q-028", type: "mcq", difficulty: "easy",
            question: "Which of the following is NOT a security threat?",
            options: ["Ransomware", "Encryption", "Spyware", "Phishing"],
            correct: 1,
            cognitiveType: "identification", psychometricTemplate: "identification",
            timePresure: "speed", speedTarget: 40, negativeMarking: false,
            explanation: "Encryption is a security TOOL used to PROTECT data.",
            examTags: ["MH-CET"]
        },
        {
            id: "sec-q-029", type: "mcq", difficulty: "medium",
            question: "A Firewall can be implemented as:",
            options: ["Only software", "Only hardware", "Both hardware and software", "Neither"],
            correct: 2,
            cognitiveType: "recall", psychometricTemplate: "functional",
            timePresure: "speed", speedTarget: 40, negativeMarking: false,
            explanation: "Hardware firewalls (routers) and software firewalls (Windows Defender) are both common.",
            examTags: ["MH-CET"]
        },
        {
            id: "sec-q-030", type: "mcq", difficulty: "medium",
            question: "In security, OTP stands for:",
            options: [
                "One-Time Password",
                "Online Transfer Protocol",
                "Open Ticket Path",
                "Over The Phone"
            ],
            correct: 0,
            cognitiveType: "acronym", psychometricTemplate: "acronym",
            timePresure: "speed", speedTarget: 40, negativeMarking: false,
            explanation: "An OTP is a temporary code valid for only one session.",
            examTags: ["MH-CET"]
        }
    ]
};
