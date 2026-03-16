// src/data/computer-awareness/software-and-os.data.js
// MAH BBA CET - COMPUTER AWARENESS - SOFTWARE & OS MODULE
// SCHEMA VALIDATED AGAINST DATA_SCHEMA.md

export const softwareAndOsData = {
    subject: "Computer Awareness",
    chapter: "Software & OS",
    examTags: ["MH-CET"],
    studyGuide: {
        topics: [
            {
                id: "operating-systems",
                title: "1. Operating Systems",
                content: {
                    coreConcept: "1. The Manager: An Operating System (OS) is the most important software on a computer. It manages the computer's memory and processes, as well as all of its hardware and software.\n2. The Interface: It provides a 'User Interface' (like Windows desktop or Android icons) so humans can talk to the machine.\n3. Core Tasks: Process Management (running apps), Memory Management (RAM usage), File Management (folders), and Device Management (Mouse/Printer).",
                    formulaBank: "Common OS Types:\n1. Desktop: Windows (Microsoft), macOS (Apple), Linux (Open Source).\n2. Mobile: Android (Google), iOS (Apple).\n3. Server: Windows Server, Ubuntu Server.\n4. Real-Time (RTOS): Used in robots and spacecraft where timing is critical.",
                    logic: "The Booting Process:\nStep 1: Power on -> BIOS (in ROM) runs first.\nStep 2: BIOS checks hardware (POST - Power On Self Test).\nStep 3: BIOS looks for the OS on the Hard Drive.\nStep 4: OS is loaded into RAM. This process is called 'Booting'.",
                    traps: "TRAP 1: Browser vs OS\nGoogle Chrome is NOT an OS; it is an application software. However, specialized laptops run 'ChromeOS' which is an operating system.\n\nTRAP 2: Open Source vs Freeware\nLinux is Open Source (you can see and change the code). Freeware (like Adobe Reader) is free to use but the code is kept secret (Proprietary).\n\nTRAP 3: DOS vs Windows\nMS-DOS used a 'Command Line Interface' (typing text). Modern Windows uses a 'Graphical User Interface' (GUI) with icons.",
                    examples: [
                        { q: "Which software acts as an interface between user and hardware?", a: "Operating System (OS)" },
                        { q: "Is Android open source or proprietary?", a: "Mainly Open Source (based on Linux)" },
                        { q: "What is the process of starting a computer called?", a: "Booting" },
                        { q: "Which OS is developed by Apple for iPhones?", a: "iOS" },
                        { q: "First program that runs when you power on?", a: "BIOS" },
                        { q: "Is Linux an application software?", a: "No, it is System Software (specifically an OS)." },
                        { q: "What does GUI stand for?", a: "Graphical User Interface" },
                        { q: "Mention one task of the OS.", a: "Memory Management / File Management" },
                        { q: "OS from Microsoft launching in 1985?", a: "Windows" },
                        { q: "Which OS uses a Command Line Interface (CLI)?", a: "MS-DOS" },
                        { q: "Which OS component schedules processes for the CPU?", a: "Kernel / Scheduler" },
                        { q: "What is a 'Cold Boot'?", a: "Starting a computer from a powered-off state." },
                        { q: "What is a 'Warm Boot'?", a: "Restarting a computer without turning off the power." },
                        { q: "Which OS is famous for the 'Spinning Pinwheel' (beach ball)?", a: "macOS" },
                        { q: "What does 'Plug and Play' mean in an OS?", a: "Automatic recognition of new hardware devices." },
                        { q: "Which OS utility is used to remove unnecessary files?", a: "Disk Cleanup" },
                        { q: "What is the 'Kernel' of an OS?", a: "The core part that manages hardware-level communications." },
                        { q: "Which OS introduced the 'Start' button?", a: "Windows 95" },
                        { q: "What is a multi-user OS?", a: "An OS that allows multiple users to access the computer at once." },
                        { q: "What is 'Virtual Memory'?", a: "Space on the hard drive used by the OS to simulate extra RAM." },
                        { q: "Which OS is primarily used on IBM mainframes?", a: "z/OS" },
                        { q: "What is the primary function of a Device Driver?", a: "Allows the OS to communicate with specific hardware (like a printer)." },
                        { q: "Which OS uses the 'bash' shell by default?", a: "Linux / macOS" },
                        { q: "What is a 'Distro' in the context of Linux?", a: "A specific distribution like Ubuntu, Fedora, or Mint." },
                        { q: "Which OS was the predecessor to Windows?", a: "MS-DOS" }
                    ],
                    speedSummary: "- OS = System Software | Managed hardware & apps.\n- Windows/macOS/Linux = Desktop | Android/iOS = Mobile.\n- BIOS starts the Booting process."
                }
            },
            {
                id: "office-productivity",
                title: "2. MS Office Productivity",
                content: {
                    coreConcept: "1. MS Word: A 'Word Processor' for letters, reports, and books.\n2. MS Excel: A 'Spreadsheet' for math, accounting, and data analysis.\n3. MS PowerPoint: A 'Presentation' tool for slides and pitches.",
                    formulaBank: "Key Shortcuts & Rules:\n1. Excel Formulas: Always start with '=' (e.g., =SUM(A1:A5)).\n2. $ Sign: Used for Absolute References (e.g., $B$2) to lock a cell.\n3. Transitions: Effects *between* slides.\n4. Animations: Effects *on objects* (text/images) inside one slide.\n5. Word Mail Merge: Creating 100 letters using 1 template + 1 address list.",
                    logic: "Excel Logic (Cell Addresses):\n- Column A + Row 1 = Cell A1.\n- To calculate Average of A1 to A5: =AVERAGE(A1:A5).\n- To count only numbers: =COUNT(A1:A5).\n- To count everything (text + numbers): =COUNTA(A1:A5).",
                    traps: "TRAP 1: Word vs. Excel for Data\nIf you need to do complex math, use Excel. If you just need a clean table for a report, use Word. Exams often ask 'Which is best for budget tracking?' -> Excel.\n\nTRAP 2: Transition vs. Animation\nStudents often mix these up. Slide Transition = The whole page slides; Animation = The text on the page flies in.\n\nTRAP 3: File Extensions\nOld versions (before 2007) used .doc, .xls, .ppt. Modern versions use .docx, .xlsx, .pptx (The 'x' stands for XML).",
                    examples: [
                        { q: "Shortcut for 'Undo' in Office?", a: "Ctrl + Z" },
                        { q: "Excel formula for finding the highest value?", a: "=MAX(range)" },
                        { q: "What key starts a PowerPoint from Slide 1?", a: "F5" },
                        { q: "Extension for an Excel 365 file?", a: ".xlsx" },
                        { q: "Feature to create labels for 500 people?", a: "Mail Merge" },
                        { q: "Shortcut for 'Find and Replace'?", a: "Ctrl + H" },
                        { q: "Formula to add A1 and B1?", a: "=A1+B1" },
                        { q: "Which key edits a cell in Excel?", a: "F2" },
                        { q: "Difference between .ppt and .pptx?", a: ".pptx is the newer XML-based format." },
                        { q: "What defines a range in Excel?", a: "The colon symbol (:), e.g., A1:A10." },
                        { q: "Which Excel tool summarizes large datasets quickly?", a: "Pivot Table" },
                        { q: "What is 'Word Wrap'?", a: "Automatically moving text to the next line when it reaches the margin." },
                        { q: "Shortcut to save a document?", a: "Ctrl + S" },
                        { q: "In Excel, what does #VALUE! mean?", a: "The formula contains an invalid data type (e.g., adding text to a number)." },
                        { q: "What is 'Portrait' and 'Landscape' in Word?", a: "Page Orientations." },
                        { q: "Which PowerPoint view is best for rehearsing timings?", a: "Presenter View / Slide Show" },
                        { q: "Shortcut for 'Select All'?", a: "Ctrl + A" },
                        { q: "What is a 'Footer'?", a: "Text that appears at the bottom of every page." },
                        { q: "Which Excel function checks if a condition is met?", a: "=IF()" },
                        { q: "Can you password protect an Office file?", a: "Yes, via File > Info > Protect Document." },
                        { q: "What is 'AutoFill' in Excel?", a: "Dragging the fill handle to automatically continue a series (1, 2, 3...)." },
                        { q: "What is 'Track Changes' in Word?", a: "A feature that records all edits made to a document." },
                        { q: "Which tab allows you to change the theme of your slides?", a: "Design Tab" },
                        { q: "How do you insert a Page Break in Word?", a: "Ctrl + Enter" },
                        { q: "What is the 'Format Painter'?", a: "A tool to copy formatting from one object and apply it to another." }
                    ],
                    speedSummary: "- Word = Documents | Excel = Math/Cells | PowerPoint = Slides.\n- Transitions = Between slides | Animations = Inside slides.\n- Formulas start with '='."
                }
            },
            {
                id: "software-categories",
                title: "3. Software Categories",
                content: {
                    coreConcept: "1. System Software: Programs that run the hardware (OS, Device Drivers, Utilities like WinZip).\n2. Application Software: Programs that do work for the user (Word, VLC, Photoshop, Chrome).\n3. Translators: Computers only speak Binary (0,1). Higher languages (C++, Java, Python) must be translated.",
                    formulaBank: "The Translator Pair:\n1. Compiler: Scans the *whole* code at once and creates an .exe file (Faster execution).\n2. Interpreter: Translates *line-by-line* as the program runs (Easier to debug).\n3. Assembler: Translates Assembly (low-level) to Machine Code.",
                    logic: "Software Licensing:\n- Proprietary: Paid, secret code (MS Office, Windows).\n- Open Source: Free, public code (Linux, Android, VLC).\n- Shareware: Free trial for 30 days, then pay (WinRAR).\n- Freeware: Free forever, but code is secret (Adobe Reader, Skype).",
                    traps: "TRAP 1: Language Hierarchy\nLow-level language (Binary/Assembly) is close to hardware. High-level (Python/Java) is close to human English.\n\nTRAP 2: Utility vs Application\nWinZip and Antivirus are 'Utilities' because they help the computer. Photoshop is an 'Application' because it helps the user create art.\n\nTRAP 3: Compiler vs Interpreter\nIf you see 'translates the entire source code at once', the answer is ALWAYS Compiler.",
                    examples: [
                        { q: "Interpreter translates code in what way?", a: "Line by line." },
                        { q: "WinRAR is an example of which license?", a: "Shareware (free trial)" },
                        { q: "Is Python a high-level or low-level language?", a: "High-level (looks like English)" },
                        { q: "Which software compresses files?", a: "WinZip / 7-Zip (Utility Software)" },
                        { q: "VLC Media player is open-source?", a: "Yes." },
                        { q: "What translates Assembly to Machine code?", a: "Assembler" },
                        { q: "Is an Antivirus system or application software?", a: "System Software (Utility)" },
                        { q: "Extension for a Windows executable file?", a: ".exe" },
                        { q: "Can you modify the code of Proprietary software?", a: "No, the source code is hidden." },
                        { q: "Primary difference between Freeware and Open Source?", a: "Open Source allows code modification; Freeware does not." },
                        { q: "Which software helps you 'browse' the internet?", a: "Web Browser (Application Software)" },
                        { q: "What is 'Firmware'?", a: "Software permanently programmed into a hardware device." },
                        { q: "Is Adobe Photoshop a horizontal or vertical market software?", a: "Horizontal (used across many different industries)." },
                        { q: "What is 'Customized' software?", a: "Software built specifically for one client's needs." },
                        { q: "Which language is known as 'Mother of all languages'?", a: "C (High-level but close to hardware)" },
                        { q: "What are 'Device Drivers'?", a: "System software that allows the OS to talk to hardware like printers." },
                        { q: "Which translator is used by Java?", a: "Both (Compiler to Bytecode, then Interpreter/JIT to Machine Code)" },
                        { q: "What is 'Bloatware'?", a: "Unwanted software pre-installed on a new computer." },
                        { q: "Is Tally a financial application or system software?", a: "Application Software (Vertical market for accounts)." },
                        { q: "What does 'SaaS' stand for?", a: "Software as a Service (Cloud-based apps)." },
                        { q: "Which utility reorganizes files on a hard drive for speed?", a: "Disk Defragmenter" },
                        { q: "Is a Compiler faster than an Interpreter during execution?", a: "Yes, because the code is already translated into machine language." },
                        { q: "What is 'Spyware'?", a: "Malicious software that secretly monitors user activity." },
                        { q: "Which software category does the BIOS belong to?", a: "System Software (Firmware)." },
                        { q: "What is an 'IDE' used for?", a: "Integrated Development Environment, used by developers to write and test code." }
                    ],
                    speedSummary: "- System S/W (OS) vs Application S/W (User apps).\n- Compiler = Whole code | Interpreter = Line by line.\n- Open Source = Free + Change code | Proprietary = Paid + Secret code."
                }
            }
        ]
    },
    flashcards: [
        { id: "sw-fc-001", term: "System Software", definition: "Includes OS (Windows, Linux) and utility software." },
        { id: "sw-fc-002", term: "Application Software", definition: "MS Word, Excel, Photoshop, Browsers." },
        { id: "sw-fc-003", term: "Open Source", definition: "Free to use and modify (Linux, VLC)." },
        { id: "sw-fc-004", term: "Proprietary", definition: "Paid license, closed source (MS Office, Photoshop)." },
        { id: "sw-fc-005", term: "Excel Formula", definition: "Starts with '='. E.g., =SUM(A1:B10)." },
        { id: "sw-fc-006", term: "Absolute Reference", definition: "Use $ sign (e.g., $A$1) to fix a cell reference." },
        { id: "sw-fc-007", term: "Transition vs Animation", definition: "Transition: Between slides. Animation: On objects on a slide." },
        { id: "sw-fc-008", term: "Compiler", definition: "Translates entire program at once." },
        { id: "sw-fc-009", term: "Interpreter", definition: "Translates code line by line (e.g., Python)." },
        { id: "sw-fc-010", term: "GUI", definition: "Graphical User Interface (Windows, icons)." }
    ],
    questions: [
        // --- TOPIC 1: Operating Systems (15 Questions) ---
        {
            id: "sw-q-001", type: "mcq", difficulty: "easy",
            question: "Which of the following is an OPERATING SYSTEM?",
            options: ["MS Excel", "Google Chrome", "Linux", "MS Word"],
            correct: 2,
            cognitiveType: "identification", psychometricTemplate: "identification",
            timePresure: "speed", speedTarget: 40, negativeMarking: false,
            explanation: "Linux is an operating system. Excel, Word, and Chrome are application software.",
            examTags: ["MH-CET"]
        },
        {
            id: "sw-q-002", type: "mcq", difficulty: "easy",
            question: "Which of the following is NOT an operating system?",
            options: ["Android", "Windows 11", "MS Excel", "macOS"],
            correct: 2,
            cognitiveType: "identification", psychometricTemplate: "identification",
            timePresure: "speed", speedTarget: 40, negativeMarking: false,
            explanation: "MS Excel is an application software used for spreadsheets, not an operating system.",
            examTags: ["MH-CET"]
        },
        {
            id: "sw-q-003", type: "mcq", difficulty: "easy",
            question: "MS Excel is an example of:",
            options: ["Operating System", "System Software", "Application Software", "Utility Software"],
            correct: 2,
            cognitiveType: "identification", psychometricTemplate: "identification",
            timePresure: "speed", speedTarget: 40, negativeMarking: false,
            explanation: "Excel is application software designed for specific user tasks.",
            examTags: ["MH-CET"]
        },
        {
            id: "sw-q-004", type: "mcq", difficulty: "easy",
            question: "Which of the following is SYSTEM software?",
            options: ["Chrome", "Tally", "Windows", "VLC"],
            correct: 2,
            cognitiveType: "identification", psychometricTemplate: "identification",
            timePresure: "speed", speedTarget: 40, negativeMarking: false,
            explanation: "Operating systems like Windows are the core of system software.",
            examTags: ["MH-CET"]
        },
        {
            id: "sw-q-005", type: "mcq", difficulty: "easy",
            question: "Antivirus software is typically categorized as:",
            options: ["Application Software", "Utility Software", "System Software", "Operating System"],
            correct: 1,
            cognitiveType: "identification", psychometricTemplate: "identification",
            timePresure: "speed", speedTarget: 40, negativeMarking: false,
            explanation: "Utility software maintains and protects the computer system.",
            examTags: ["MH-CET"]
        },
        {
            id: "sw-q-006", type: "mcq", difficulty: "easy",
            question: "Which pair contains ONLY application software?",
            options: [
                "Windows & Word",
                "Chrome & Linux",
                "Tally & Photoshop",
                "Android & Excel"
            ],
            correct: 2,
            cognitiveType: "identification", psychometricTemplate: "identification",
            timePresure: "speed", speedTarget: 40, negativeMarking: false,
            explanation: "Tally and Photoshop are both application software. Windows, Linux, and Android are OS.",
            examTags: ["MH-CET"]
        },
        {
            id: "sw-q-007", type: "mcq", difficulty: "easy",
            question: "MS PowerPoint belongs to which category?",
            options: ["System Software", "Application Software", "Utility Software", "Firmware"],
            correct: 1,
            cognitiveType: "identification", psychometricTemplate: "identification",
            timePresure: "speed", speedTarget: 40, negativeMarking: false,
            explanation: "PowerPoint is a presentation application.",
            examTags: ["MH-CET"]
        },
        {
            id: "sw-q-008", type: "mcq", difficulty: "easy",
            question: "Linux is an example of which type of software?",
            options: [
                "Proprietary Application",
                "Open-source Operating System",
                "Utility Tool",
                "Firmware"
            ],
            correct: 1,
            cognitiveType: "identification", psychometricTemplate: "identification",
            timePresure: "speed", speedTarget: 40, negativeMarking: false,
            explanation: "Linux is a famous open-source operating system.",
            examTags: ["MH-CET"]
        },
        {
            id: "sw-q-009", type: "mcq", difficulty: "easy",
            question: "Which function is performed by an operating system?",
            options: [
                "Statistical Calculation",
                "Memory Management",
                "Creating Presentations",
                "Sending Emails"
            ],
            correct: 1,
            cognitiveType: "functional", psychometricTemplate: "functional",
            timePresure: "speed", speedTarget: 40, negativeMarking: false,
            explanation: "Memory management, process management, and file management are core OS jobs.",
            examTags: ["MH-CET"]
        },
        {
            id: "sw-q-010", type: "mcq", difficulty: "medium",
            question: "Which of the following is NOT a function of the OS?",
            options: [
                "Process Management",
                "File Management",
                "Spell Checking",
                "Device Management"
            ],
            correct: 2,
            cognitiveType: "functional", psychometricTemplate: "identification",
            timePresure: "speed", speedTarget: 40, negativeMarking: false,
            explanation: "Spell checking is a function of word processing applications (like MS Word), not the OS core.",
            examTags: ["MH-CET"]
        },
        {
            id: "sw-q-011", type: "mcq", difficulty: "medium",
            question: "Process management in a computer is primarily handled by the:",
            options: ["ALU", "Control Unit", "Operating System", "Application Software"],
            correct: 2,
            cognitiveType: "functional", psychometricTemplate: "functional",
            timePresure: "speed", speedTarget: 40, negativeMarking: false,
            explanation: "The OS manages the allocation and scheduling of CPU time (processes).",
            examTags: ["MH-CET"]
        },
        {
            id: "sw-q-012", type: "mcq", difficulty: "easy",
            question: "What does GUI stand for?",
            options: [
                "Graphical User Interface",
                "Global User Integration",
                "General Utility Interface",
                "Graphical Unit Interaction"
            ],
            correct: 0,
            cognitiveType: "acronym", psychometricTemplate: "acronym",
            timePresure: "speed", speedTarget: 40, negativeMarking: false,
            explanation: "GUI allows users to interact with computers via icons and menus.",
            examTags: ["MH-CET"]
        },
        {
            id: "sw-q-013", type: "mcq", difficulty: "medium",
            question: "Which of the following Operating Systems is developed by 'Google'?",
            options: ["iOS", "Windows", "Unix", "Android"],
            correct: 3,
            cognitiveType: "recall", psychometricTemplate: "functional",
            timePresure: "speed", speedTarget: 40, negativeMarking: false,
            explanation: "Android is a Google-developed mobile operating system.",
            examTags: ["MH-CET"]
        },
        {
            id: "sw-q-014", type: "mcq", difficulty: "easy",
            question: "Which of these is a mobile operating system?",
            options: ["Windows 10", "Linux", "iOS", "MS DOS"],
            correct: 2,
            cognitiveType: "identification", psychometricTemplate: "identification",
            timePresure: "speed", speedTarget: 40, negativeMarking: false,
            explanation: "iOS (Apple) is a mobile OS. The others are primarily desktop/legacy.",
            examTags: ["MH-CET"]
        },
        {
            id: "sw-q-015", type: "mcq", difficulty: "medium",
            question: "Which OS is known for being 'Open Source'?",
            options: ["Windows", "Linux", "macOS", "msOS"],
            correct: 1,
            cognitiveType: "identification", psychometricTemplate: "identification",
            timePresure: "speed", speedTarget: 40, negativeMarking: false,
            explanation: "Linux code is freely available for everyone to modify (Open Source).",
            examTags: ["MH-CET"]
        },

        // --- TOPIC 2: MS Office Productivity (15 Questions) ---
        {
            id: "sw-q-016", type: "mcq", difficulty: "easy",
            question: "Which formula calculates the sum of cells from A1 to A10 in Excel?",
            options: ["=ADD(A1:A10)", "=SUM(A1-A10)", "=SUM(A1:A10)", "=TOTAL(A1:A10)"],
            correct: 2,
            cognitiveType: "functional", psychometricTemplate: "functional",
            timePresure: "speed", speedTarget: 40, negativeMarking: false,
            explanation: "=SUM with a colon (:) defines a range.",
            examTags: ["MH-CET"]
        },
        {
            id: "sw-q-017", type: "mcq", difficulty: "medium",
            question: "In Excel, which function returns TRUE or FALSE based on a specific condition?",
            options: ["=IF", "=CHECK", "=QUERY", "=MATCH"],
            correct: 0,
            cognitiveType: "functional", psychometricTemplate: "functional",
            timePresure: "speed", speedTarget: 40, negativeMarking: false,
            explanation: "The IF function tests conditions and returns different values for True/False.",
            examTags: ["MH-CET"]
        },
        {
            id: "sw-q-018", type: "mcq", difficulty: "medium",
            question: "What does the formula =AVERAGE(B1:B5) calculate?",
            options: [
                "Sum of B1 to B5",
                "Mean of values B1 to B5",
                "Largest value in B1 to B5",
                "Number of cells in B1 to B5"
            ],
            correct: 1,
            cognitiveType: "functional", psychometricTemplate: "functional",
            timePresure: "speed", speedTarget: 40, negativeMarking: false,
            explanation: "AVERAGE returns the arithmetic mean of arguments.",
            examTags: ["MH-CET"]
        },
        {
            id: "sw-q-019", type: "mcq", difficulty: "hard",
            question: "In Excel, the $ symbol in $A$1 indicates which type of reference?",
            options: ["Relative", "Absolute", "Dynamic", "Global"],
            correct: 1,
            cognitiveType: "recall", psychometricTemplate: "functional",
            timePresure: "speed", speedTarget: 40, negativeMarking: false,
            explanation: "The $ sign 'locks' the row and column, making it an absolute reference.",
            examTags: ["MH-CET"]
        },
        {
            id: "sw-q-020", type: "mcq", difficulty: "medium",
            question: "Which shortcut key allows you to edit the active cell in Excel?",
            options: ["F1", "F2", "F5", "F7"],
            correct: 1,
            cognitiveType: "functional", psychometricTemplate: "functional",
            timePresure: "speed", speedTarget: 40, negativeMarking: false,
            explanation: "F2 puts the active cell in edit mode.",
            examTags: ["MH-CET"]
        },
        {
            id: "sw-q-021", type: "mcq", difficulty: "medium",
            question: "Which shortcut key is used to find and replace text in MS Word?",
            options: ["Ctrl + F", "Ctrl + G", "Ctrl + H", "Ctrl + R"],
            correct: 2,
            cognitiveType: "functional", psychometricTemplate: "functional",
            timePresure: "speed", speedTarget: 40, negativeMarking: false,
            explanation: "Ctrl + H triggers the 'Find and Replace' dialog.",
            examTags: ["MH-CET"]
        },
        {
            id: "sw-q-022", type: "mcq", difficulty: "medium",
            question: "Which MS Word feature is used to create personalized letters for multiple people using a database?",
            options: ["Table of Contents", "Mail Merge", "Track Changes", "Format Painter"],
            correct: 1,
            cognitiveType: "functional", psychometricTemplate: "functional",
            timePresure: "speed", speedTarget: 40, negativeMarking: false,
            explanation: "Mail Merge combines a document template with a list of data (recipients).",
            examTags: ["MH-CET"]
        },
        {
            id: "sw-q-023", type: "mcq", difficulty: "easy",
            question: "What is the standard file extension for MS Word 2016 files?",
            options: [".doc", ".word", ".docx", ".pdf"],
            correct: 2,
            cognitiveType: "recall", psychometricTemplate: "functional",
            timePresure: "speed", speedTarget: 40, negativeMarking: false,
            explanation: ".docx is the XML-based standard extension used since Office 2007.",
            examTags: ["MH-CET"]
        },
        {
            id: "sw-q-024", type: "mcq", difficulty: "medium",
            question: "Which tab in MS Word contains the 'Mail Merge' options?",
            options: ["Insert", "Page Layout", "Mailings", "Review"],
            correct: 2,
            cognitiveType: "recall", psychometricTemplate: "functional",
            timePresure: "speed", speedTarget: 40, negativeMarking: false,
            explanation: "All mail merge functions are located in the Mailings tab.",
            examTags: ["MH-CET"]
        },
        {
            id: "sw-q-025", type: "mcq", difficulty: "easy",
            question: "Which operation is performed by Ctrl + Z in MS Office?",
            options: ["Copy", "Paste", "Undo", "Redo"],
            correct: 2,
            cognitiveType: "functional", psychometricTemplate: "functional",
            timePresure: "speed", speedTarget: 40, negativeMarking: false,
            explanation: "Ctrl + Z triggers the Undo function.",
            examTags: ["MH-CET"]
        },
        {
            id: "sw-q-026", type: "mcq", difficulty: "hard",
            question: "In PowerPoint, what is the difference between 'Slide Transition' and 'Animation'?",
            options: [
                "Transition is for text; Animation is for images",
                "Transition occurs between slides; Animation occurs on slide objects",
                "Animation is faster than Transition",
                "There is no difference"
            ],
            correct: 1,
            cognitiveType: "functional", psychometricTemplate: "functional",
            timePresure: "speed", speedTarget: 40, negativeMarking: false,
            explanation: "Transitions are effects applied when moving from one slide to another. Animations are applied to objects (text/images) within a single slide.",
            examTags: ["MH-CET"]
        },
        {
            id: "sw-q-027", type: "mcq", difficulty: "easy",
            question: "Which key starts a PowerPoint slideshow from the beginning?",
            options: ["F1", "F2", "F5", "Shift + F5"],
            correct: 2,
            cognitiveType: "functional", psychometricTemplate: "functional",
            timePresure: "speed", speedTarget: 40, negativeMarking: false,
            explanation: "F5 starts from the first slide. Shift + F5 starts from the current slide.",
            examTags: ["MH-CET"]
        },
        {
            id: "sw-q-028", type: "mcq", difficulty: "medium",
            question: "Which PowerPoint view allows you to see all slides as thumbnails on one screen?",
            options: ["Normal View", "Slide Sorter View", "Reading View", "Slide Master View"],
            correct: 1,
            cognitiveType: "functional", psychometricTemplate: "functional",
            timePresure: "speed", speedTarget: 40, negativeMarking: false,
            explanation: "Slide Sorter displays the sequence of all slides, making reorganization easy.",
            examTags: ["MH-CET"]
        },
        {
            id: "sw-q-029", type: "mcq", difficulty: "easy",
            question: "A PowerPoint file typically uses which file extension?",
            options: [".ppt", ".pptx", ".ppsx", ".pdf"],
            correct: 1,
            cognitiveType: "recall", psychometricTemplate: "functional",
            timePresure: "speed", speedTarget: 40, negativeMarking: false,
            explanation: ".pptx is the standard extension for current PowerPoint versions.",
            examTags: ["MH-CET"]
        },
        {
            id: "sw-q-030", type: "mcq", difficulty: "medium",
            question: "In Excel, to count ONLY numeric values in a range, which function is used?",
            options: ["=COUNTA", "=COUNT", "=COUNTIF", "=SUM"],
            correct: 1,
            cognitiveType: "functional", psychometricTemplate: "functional",
            timePresure: "speed", speedTarget: 40, negativeMarking: false,
            explanation: "=COUNT ignores text/blank cells and only counts numbers. =COUNTA counts everything non-blank.",
            examTags: ["MH-CET"]
        },

        // --- TOPIC 3: Software Categories and Concepts (15 Questions) ---
        {
            id: "sw-q-031", type: "mcq", difficulty: "medium",
            question: "WinRAR is a famous example of which type of software distribution?",
            options: ["Freeware", "Shareware", "Open Source", "Proprietary"],
            correct: 1,
            cognitiveType: "identification", psychometricTemplate: "identification",
            timePresure: "speed", speedTarget: 40, negativeMarking: false,
            explanation: "Shareware provides a trial period (like WinRAR) before requiring payment.",
            examTags: ["MH-CET"]
        },
        {
            id: "sw-q-032", type: "mcq", difficulty: "easy",
            question: "Which type of software can be freely used, modified, and redistributed by anyone?",
            options: ["Freeware", "Proprietary", "Open Source", "Commercial"],
            correct: 2,
            cognitiveType: "identification", psychometricTemplate: "identification",
            timePresure: "speed", speedTarget: 40, negativeMarking: false,
            explanation: "Open Source software (like Linux or Android) allows access to and modification of source code.",
            examTags: ["MH-CET"]
        },
        {
            id: "sw-q-033", type: "mcq", difficulty: "medium",
            question: "Which language translator converts the entire source code into machine code in one go?",
            options: ["Interpreter", "Compiler", "Assembler", "Debugger"],
            correct: 1,
            cognitiveType: "functional", psychometricTemplate: "functional",
            timePresure: "speed", speedTarget: 40, negativeMarking: false,
            explanation: "A Compiler processes the whole program at once, creating an .exe file.",
            examTags: ["MH-CET"]
        },
        {
            id: "sw-q-034", type: "mcq", difficulty: "medium",
            question: "An Interpreter translates a program:",
            options: [
                "All at once",
                "Line by line",
                "Block by block",
                "Only when requested"
            ],
            correct: 1,
            cognitiveType: "functional", psychometricTemplate: "functional",
            timePresure: "speed", speedTarget: 40, negativeMarking: false,
            explanation: "Interpreters execute code line by line (Python is a famous example).",
            examTags: ["MH-CET"]
        },
        {
            id: "sw-q-035", type: "mcq", difficulty: "medium",
            question: "Which file extension represents an executable file in Windows?",
            options: [".exe", ".txt", ".bin", ".dat"],
            correct: 0,
            cognitiveType: "recall", psychometricTemplate: "functional",
            timePresure: "speed", speedTarget: 40, negativeMarking: false,
            explanation: ".exe stands for executable.",
            examTags: ["MH-CET"]
        },
        {
            id: "sw-q-036", type: "mcq", difficulty: "easy",
            question: "What does PDF stand for?",
            options: [
                "Personal Data Form",
                "Portable Document Format",
                "Private Document Folder",
                "Printed Data File"
            ],
            correct: 1,
            cognitiveType: "acronym", psychometricTemplate: "acronym",
            timePresure: "speed", speedTarget: 40, negativeMarking: false,
            explanation: "Portable Document Format (Adobe).",
            examTags: ["MH-CET"]
        },
        {
            id: "sw-q-037", type: "mcq", difficulty: "medium",
            question: "VLC Media Player is an example of:",
            options: ["Proprietary Software", "Open Source Software", "System Software", "OS"],
            correct: 1,
            cognitiveType: "identification", psychometricTemplate: "identification",
            timePresure: "speed", speedTarget: 40, negativeMarking: false,
            explanation: "VLC is free and open source.",
            examTags: ["MH-CET"]
        },
        {
            id: "sw-q-038", type: "mcq", difficulty: "easy",
            question: "A file with .xlsx extension is created using:",
            options: ["MS Word", "MS PowerPoint", "MS Excel", "NotePad"],
            correct: 2,
            cognitiveType: "identification", psychometricTemplate: "identification",
            timePresure: "speed", speedTarget: 40, negativeMarking: false,
            explanation: ".xlsx is the Excel spreadsheet format.",
            examTags: ["MH-CET"]
        },
        {
            id: "sw-q-039", type: "mcq", difficulty: "easy",
            question: "Which of the following is used to compress multiple files into a single, smaller file?",
            options: ["WinZip", "NotePad", "MS Paint", "VLC"],
            correct: 0,
            cognitiveType: "functional", psychometricTemplate: "functional",
            timePresure: "speed", speedTarget: 40, negativeMarking: false,
            explanation: "Utility programs like WinZip or 7-Zip compress data.",
            examTags: ["MH-CET"]
        },
        {
            id: "sw-q-040", type: "mcq", difficulty: "easy",
            question: "JPEG is an extension used for which type of files?",
            options: ["Text", "Audio", "Images", "Video"],
            correct: 2,
            cognitiveType: "identification", psychometricTemplate: "identification",
            timePresure: "speed", speedTarget: 40, negativeMarking: false,
            explanation: "JPEG is a standard format for compressed image files.",
            examTags: ["MH-CET"]
        },
        {
            id: "sw-q-041", type: "mcq", difficulty: "medium",
            question: "Which translator converts 'Assembly Language' to 'Machine Language'?",
            options: ["Compiler", "Interpreter", "Assembler", "Optimizer"],
            correct: 2,
            cognitiveType: "functional", psychometricTemplate: "functional",
            timePresure: "speed", speedTarget: 40, negativeMarking: false,
            explanation: "Assembler is specialized for translating assembly code.",
            examTags: ["MH-CET"]
        },
        {
            id: "sw-q-042", type: "mcq", difficulty: "easy",
            question: "Which number system is directly understood by the computer (Machine Code)?",
            options: ["Decimal", "Binary", "Octal", "Hexadecimal"],
            correct: 1,
            cognitiveType: "recall", psychometricTemplate: "functional",
            timePresure: "speed", speedTarget: 40, negativeMarking: false,
            explanation: "Computers operate on 'on' (1) and 'off' (0) signals - the Binary system.",
            examTags: ["MH-CET"]
        },
        {
            id: "sw-q-043", type: "mcq", difficulty: "easy",
            question: "What does the 'X' in .docx or .xlsx stand for?",
            options: ["eXtreme", "XML", "X-factor", "eXecutable"],
            correct: 1,
            cognitiveType: "recall", psychometricTemplate: "functional",
            timePresure: "speed", speedTarget: 40, negativeMarking: false,
            explanation: "The 'x' indicates the newer XML-based file formats.",
            examTags: ["MH-CET"]
        },
        {
            id: "sw-q-044", type: "mcq", difficulty: "medium",
            question: "Proprietary software is characterized by:",
            options: [
                "Hidden source code and paid licensing",
                "Free access to source code",
                "Only works on Linux",
                "Cannot be uninstalled"
            ],
            correct: 0,
            cognitiveType: "recall", psychometricTemplate: "functional",
            timePresure: "speed", speedTarget: 40, negativeMarking: false,
            explanation: "Proprietary software (like MS Office) is owned by a company and the source code is kept private.",
            examTags: ["MH-CET"]
        },
        {
            id: "sw-q-045", type: "mcq", difficulty: "medium",
            question: "Which of the following is NOT an utility software?",
            options: ["Antivirus", "Disk Defragmenter", "Linux OS", "WinZip"],
            correct: 2,
            cognitiveType: "identification", psychometricTemplate: "identification",
            timePresure: "speed", speedTarget: 40, negativeMarking: false,
            explanation: "Linux is an Operating System (System Software). The others are utilities.",
            examTags: ["MH-CET"]
        }
    ]
};
