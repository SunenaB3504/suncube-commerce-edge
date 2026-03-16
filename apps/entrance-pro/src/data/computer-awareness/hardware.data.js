// src/data/computer-awareness/hardware.data.js
// MAH BBA CET - COMPUTER AWARENESS - HARDWARE MODULE
// SCHEMA VALIDATED AGAINST DATA_SCHEMA.md

export const hardwareData = {
    subject: "Computer Awareness",
    chapter: "Hardware & Architecture",
    examTags: ["MH-CET"],
    studyGuide: {
        topics: [
            {
                id: "io-devices",
                title: "1. Input and Output Devices",
                content: {
                    coreConcept: "1. The Boundary: I/O devices are the 'bridges' between the human world and the digital brain of the computer.\n2. Input Devices: These take physical data (like key presses, sound, or light) and turn them into binary (0s and 1s) for the CPU.\n3. Output Devices: These take binary results from the CPU and turn them into something humans can sense (like images on a screen, printed text, or sound).",
                    formulaBank: "Key Specs to Know:\n1. DPI (Dots Per Inch): Measure of Mouse sensitivity or Printer resolution.\n2. Refresh Rate (Hz): How many times a Monitor updates its image per second (e.g., 60Hz, 144Hz).\n3. OMR / OCR / MICR: \n   - OMR: Optical Mark Recognition (Exam sheets)\n   - OCR: Optical Character Recognition (Scanning text)\n   - MICR: Magnetic Ink Character Recognition (Cheque numbers)",
                    logic: "The Flow of Data:\nStep 1: User provides input via an Input Device (e.g., typing 'hello').\nStep 2: The device converts this into electrical signals/binary.\nStep 3: The CPU processes the data.\nStep 4: The result is displayed on an Output Device (e.g., Monitor shows 'hello').\nDual Devices: Some devices like Touchscreens and Modems do BOTH jobs.",
                    traps: "TRAP 1: The MICR Confusion\nStudents often think MICR is for searching. It is specifically for processing bank cheques using special magnetic ink.\n\nTRAP 2: Plotter vs Printer\nA Plotter is NOT just a big printer. It uses pens to draw continuous vector lines, primarily for architectural blueprints and engineering drawings.\n\nTRAP 3: I/O or Just 'I'?\nA Touchscreen is BOTH input and output. A standard Monitor is ONLY output. Don't confuse the two!",
                    examples: [
                        { q: "Which device is used for playing flight simulators?", a: "Joystick (Input)" },
                        { q: "Specialized device for large engineering drawings?", a: "Plotter (Output)" },
                        { q: "Device to digitize a physical photo?", a: "Scanner (Input)" },
                        { q: "What does MICR stand for?", a: "Magnetic Ink Character Recognition" },
                        { q: "Is a Modem input or output?", a: "Both. It receives and sends data." },
                        { q: "Which device is used for biometric security?", a: "Fingerprint/Retina Scanner (Input)" },
                        { q: "What measures printer quality?", a: "DPI (Dots Per Inch)" },
                        { q: "Input device used for checking MCQ sheets?", a: "OMR (Optical Mark Recognition)" },
                        { q: "Device used to point and click on a GUI?", a: "Mouse (Input)" },
                        { q: "Is a Braille Reader input or output?", a: "Output (provides tactile feedback for the blind)" },
                        { q: "What is 'OCR' used for?", a: "Optical Character Recognition (turning images of text into editable text)." },
                        { q: "Which input device is used to enter sound into a computer?", a: "Microphone" },
                        { q: "Specify one 'Dual' (I/O) device.", a: "Touchscreen / Modem / Sound Card." },
                        { q: "What does 'Laser' printer use for printing?", a: "Dry ink powder called Toner." },
                        { q: "What is an 'Inkjet' printer?", a: "A printer that sprays tiny drops of liquid ink onto paper." },
                        { q: "Which device is used in stores to scan item prices?", a: "Barcode Reader (Input)." },
                        { q: "What is a 'Webcam'?", a: "An input device that captures video/photos." },
                        { q: "Which output device displays the computer screen to a wall?", a: "Projector." },
                        { q: "What is 'Refresh Rate'?", a: "How many times per second a monitor updates its image (measured in Hz)." },
                        { q: "Which device is used to draw directly on a screen or tablet?", a: "Light Pen / Stylus (Input)." },
                        { q: "Difference between Impact and Non-impact printers?", a: "Impact (Dot Matrix) hits the paper; Non-impact (Laser/Inkjet) does not." },
                        { q: "What is 'Force Feedback' in a joystick?", a: "A feature that provides physical resistance/vibration to the user." },
                        { q: "Which device is used specifically in CAD/CAM for high precision drafting?", a: "Digitizer / Graphics Tablet (Input)." },
                        { q: "What is a 'Trackball'?", a: "An input device similar to a mouse, but with a ball on top moved by fingers." },
                        { q: "Is a Speaker an input or output device?", a: "Output." }
                    ],
                    speedSummary: "- Input = Data IN (Keyboard, Mouse, Scanner)\n- Output = Data OUT (Monitor, Printer, Speaker)\n- MICR = Cheques | OMR = Exams | Plotter = Blueprints"
                }
            },
            {
                id: "memory-hierarchy",
                title: "2. Memory Hierarchy",
                content: {
                    coreConcept: "1. The Balancing Act: Computers need memory that is FAST (Registers) and memory that is LARGE (Hard Drives). Since fast memory is expensive, we use a 'Hierarchy'.\n2. Volatile vs Non-Volatile: Volatile memory (RAM) is erased when power goes out. Non-Volatile (ROM, SSD) keeps data forever.",
                    formulaBank: "Storage Units Table:\n1 bit = 0 or 1\n4 bits = 1 Nibble\n8 bits = 1 Byte\n1024 Bytes = 1 KB\n1024 KB = 1 MB\n1024 MB = 1 GB\n1024 GB = 1 TB",
                    logic: "The Speed Ladder (Fastest to Slowest):\n1. Registers: Inside the CPU (Ultra-fast).\n2. Cache: Small memory near CPU to store 'active' instructions.\n3. RAM (Primary): Main workspace where programs run.\n4. SSD/HDD (Secondary): Permanent storage for files.\nLogic: If the CPU needs data, it checks Registers -> Cache -> RAM -> HDD.",
                    traps: "TRAP 1: RAM vs ROM\nRAM is for 'Work in Progress' (Volatile). ROM is for 'Startup Instructions' (Non-Volatile). Students often flip these.\n\nTRAP 2: SSD vs HDD\nHDD has spinning disks (mechanical). SSD has no moving parts (electronic). SSD is MUCH faster and more durable.\n\nTRAP 3: Virtual Memory\nVirtual memory is NOT a separate chip. It is a part of the Hard Disk used by the CPU to 'pretend' it has more RAM.",
                    examples: [
                        { q: "Which memory is the absolute fastest?", a: "Registers (inside CPU)" },
                        { q: "Smallest unit of computer data?", a: "Bit (Binary Digit)" },
                        { q: "How many bits in a Byte?", a: "8 bits" },
                        { q: "Is RAM volatile or non-volatile?", a: "Volatile (loses data without power)" },
                        { q: "Where is BIOS stored?", a: "ROM (Read-Only Memory)" },
                        { q: "Fastest memory between CPU and RAM?", a: "Cache Memory" },
                        { q: "What does 1024 MB equal?", a: "1 GB" },
                        { q: "Does an SSD have moving parts?", a: "No. It uses flash memory." },
                        { q: "Primary function of RAM?", a: "Stores currently running apps and data for quick access." },
                        { q: "Unit equal to 4 bits?", a: "Nibble" },
                        { q: "What is 'SRAM'?", a: "Static RAM (Faster, used for Cache)." },
                        { q: "What is 'DRAM'?", a: "Dynamic RAM (Commonly used for system memory, needs refreshing)." },
                        { q: "What does 'EPROM' stand for?", a: "Erasable Programmable Read-Only Memory." },
                        { q: "Which storage device is used for long-term archiving on magnetic tapes?", a: "Tape Drive (Sequential access)." },
                        { q: "What is 'Flash Memory'?", a: "A type of non-volatile storage used in Pen Drives and SSDs." },
                        { q: "Which unit comes after Terabyte (TB)?", a: "Petabyte (PB)." },
                        { q: "What is 'Seek Time' in an HDD?", a: "The time taken for the read-write head to reach the correct track." },
                        { q: "Is a CD-ROM an optical or magnetic storage?", a: "Optical Storage." },
                        { q: "What is the capacity of a standard single-layer DVD?", a: "4.7 GB." },
                        { q: "What is 'Blue-ray'?", a: "High-capacity optical disc (up to 25-50GB)." },
                        { q: "What does 'Sequential Access' mean?", a: "Reading data one by one from start to end (like a tape recorder)." },
                        { q: "What is 'Direct Access'?", a: "Jumping directly to the data you want (like a hard disk)." },
                        { q: "Which memory level is L1 and L2?", a: "Cache Levels (L1 is closest to the CPU core)." },
                        { q: "What happens during a 'Page Fault'?", a: "The OS tries to access data that isn't currently in RAM and must fetch it from Disk." },
                        { q: "What is 'Buffer' memory?", a: "A temporary storage area that holds data while it is being transferred." }
                    ],
                    speedSummary: "- Registers > Cache > RAM > SSD > HDD\n- Volatile = Temporary (RAM) | Non-Volatile = Permanent (ROM, Disk)\n- 8 bits = 1 Byte | 1024 is the magic multiplier."
                }
            },
            {
                id: "cpu-architecture",
                title: "3. CPU & Architecture",
                content: {
                    coreConcept: "1. The Brain: The CPU (Central Processing Unit) is where all calculations and decisions happen.\n2. The Von Neumann Model: Almost all computers follow a standard design: Input -> CPU (Processing) -> Output, with Memory assisting the CPU.",
                    formulaBank: "CPU Components:\n1. ALU (Arithmetic Logic Unit): Does Math (+,-,*,/) and Logic (<,>,=).\n2. CU (Control Unit): The traffic police. It directs data flow and timing.\n3. Registers: Tiny workbenches inside the CPU.\n4. Clock Speed: Measured in GHz (GigaHertz). Higher = faster processing.",
                    logic: "The Machine Cycle (Fetch-Decode-Execute):\n1. FETCH: Get instruction from memory.\n2. DECODE: CU determines what the instruction means.\n3. EXECUTE: ALU performs the operation.\n4. STORE: Write result back to memory.",
                    traps: "TRAP 1: The CU Math Error\nStudents often think the Control Unit (CU) does math. IT DOES NOT. The ALU does the math; the CU only tells the ALU when to start.\n\nTRAP 2: Clock Speed vs. Productivity\nJust because a CPU has a high GHz doesn't mean it's better. Architecture (number of cores) also matters significantly.\n\nTRAP 3: The Bus System\nThe Bus is NOT a transport for people. In hardware, it's a 'highway' of wires that carries data between the CPU, RAM, and other parts.",
                    examples: [
                        { q: "Which part of CPU does 'Greater Than' check?", a: "ALU (Logic portion)" },
                        { q: "CPU unit that manages data timing?", a: "Control Unit (CU)" },
                        { q: "Fetch-Decode-Execute is known as...?", a: "The Machine Cycle" },
                        { q: "Unit of CPU speed?", a: "GHz (GigaHertz)" },
                        { q: "Does the CU perform addition?", a: "No, that's the ALU's job." },
                        { q: "Register that stores the next instruction address?", a: "Program Counter (PC)" },
                        { q: "Who designed the modern computer model?", a: "John von Neumann" },
                        { q: "Pathway for data transfer inside computer?", a: "Bus" },
                        { q: "Main circuit board of a computer?", a: "Motherboard" },
                        { q: "What is a 'Core' in a CPU?", a: "An independent processing unit within the CPU chip." },
                        { q: "What is 'Overclocking'?", a: "Running a CPU at a higher speed than its manufacturer's rating." },
                        { q: "What does 'Multi-core' mean?", a: "A CPU with more than one independent processing unit (e.g., Dual-core, Quad-core)." },
                        { q: "What is a '32-bit' vs '64-bit' processor?", a: "The width of the data path (how much data it can process at once)." },
                        { q: "What is 'Instructions Per Second' (IPS)?", a: "A measure of a computer's processor speed." },
                        { q: "What is 'RISC' architecture?", a: "Reduced Instruction Set Computing (simpler, faster instructions)." },
                        { q: "What is 'CISC' architecture?", a: "Complex Instruction Set Computing (larger set of elaborate instructions)." },
                        { q: "Which component keeps the physical CPU cool?", a: "Heat Sink / Fan." },
                        { q: "What is the 'System Clock'?", a: "An internal clock that generates electronic pulses at a fixed rate to synchronize operations." },
                        { q: "What is a 'Register'?", a: "A small high-speed storage location directly inside the CPU." },
                        { q: "What is the 'Instruction Set'?", a: "The collection of all basic operations a CPU can perform." },
                        { q: "Which bus carries the memory address the CPU wants to access?", a: "Address Bus." },
                        { q: "Which bus carries the actual data?", a: "Data Bus." },
                        { q: "What is 'Pipelining'?", a: "A technique where the CPU starts executing a second instruction before the first is finished." },
                        { q: "What is a 'Microprocessor'?", a: "An entire CPU contained on a single silicon chip." },
                        { q: "Which company is the largest manufacturer of PC microprocessors?", a: "Intel." }
                    ],
                    speedSummary: "- CPU = ALU (Math) + CU (Directing) + Registers (Storage)\n- Cycle = Fetch -> Decode -> Execute\n- High GHz = More cycles per second."
                }
            }
        ]
    },
    flashcards: [
        { id: "hw-fc-001", term: "Input Devices", definition: "Mouse, Keyboard, Scanner, Microphone, Webcam, Joystick." },
        { id: "hw-fc-002", term: "Output Devices", definition: "Monitor, Printer, Plotter, Speaker, Projector." },
        { id: "hw-fc-003", term: "Both I/O", definition: "Touchscreen, Modem." },
        { id: "hw-fc-004", term: "RAM", definition: "Random Access Memory - Volatile, Primary memory." },
        { id: "hw-fc-005", term: "ROM", definition: "Read Only Memory - Non-volatile, stores BIOS." },
        { id: "hw-fc-006", term: "Cache", definition: "Fastest memory, sits between CPU and RAM." },
        { id: "hw-fc-007", term: "Registers", definition: "Small, ultra-fast storage inside CPU." },
        { id: "hw-fc-008", term: "ALU", definition: "Arithmetic Logic Unit - Performs calculations and logic." },
        { id: "hw-fc-009", term: "CU", definition: "Control Unit - Coordinates and directs operations." },
        { id: "hw-fc-010", term: "SSD", definition: "Solid State Drive - Faster than HDD, no moving parts." }
    ],
    questions: [
        // --- TOPIC 1: Input and Output Devices (15 Questions) ---
        {
            id: "hw-q-001", type: "mcq", difficulty: "easy",
            question: "Which of the following is NOT an output device?",
            options: ["Monitor", "Printer", "Scanner", "Speaker"],
            correct: 2,
            cognitiveType: "identification", psychometricTemplate: "identification",
            timePresure: "speed", speedTarget: 40, negativeMarking: false,
            explanation: "Monitor, Printer, and Speaker are output devices. Scanner is an INPUT device used to digitize documents.",
            examTags: ["MH-CET"]
        },
        {
            id: "hw-q-002", type: "mcq", difficulty: "easy",
            question: "Which of the following is NOT an input device?",
            options: ["Mouse", "Keyboard", "Plotter", "Webcam"],
            correct: 2,
            cognitiveType: "identification", psychometricTemplate: "identification",
            timePresure: "speed", speedTarget: 40, negativeMarking: false,
            explanation: "Mouse, Keyboard, and Webcam are input devices. Plotter is an OUTPUT device used for large-scale graphics.",
            examTags: ["MH-CET"]
        },
        {
            id: "hw-q-003", type: "mcq", difficulty: "easy",
            question: "Identify the device that is NOT an output device:",
            options: ["Projector", "Headphones", "Microphone", "Monitor"],
            correct: 2,
            cognitiveType: "identification", psychometricTemplate: "identification",
            timePresure: "speed", speedTarget: 40, negativeMarking: false,
            explanation: "Microphone is an input device (audio), whereas others are output.",
            examTags: ["MH-CET"]
        },
        {
            id: "hw-q-004", type: "mcq", difficulty: "easy",
            question: "Which of the following is NOT an input device?",
            options: ["Joystick", "Barcode Reader", "Braille Reader", "Light Pen"],
            correct: 2,
            cognitiveType: "identification", psychometricTemplate: "identification",
            timePresure: "speed", speedTarget: 40, negativeMarking: false,
            explanation: "Braille Reader is an output device for the visually impaired. The others are input devices.",
            examTags: ["MH-CET"]
        },
        {
            id: "hw-q-005", type: "mcq", difficulty: "easy",
            question: "Which of these is NOT an output device?",
            options: ["Dot Matrix Printer", "OMR Reader", "LCD Monitor", "Plotter"],
            correct: 1,
            cognitiveType: "identification", psychometricTemplate: "identification",
            timePresure: "speed", speedTarget: 40, negativeMarking: false,
            explanation: "OMR (Optical Mark Recognition) is an input device used for checking exam sheets.",
            examTags: ["MH-CET"]
        },
        {
            id: "hw-q-006", type: "mcq", difficulty: "easy",
            question: "Which of the following belongs only to the INPUT device category?",
            options: ["Biometric Scanner", "Touchscreen", "Modem", "Sound Card"],
            correct: 0,
            cognitiveType: "identification", psychometricTemplate: "identification",
            timePresure: "speed", speedTarget: 40, negativeMarking: false,
            explanation: "Biometric scanner is purely input. Touchscreen and Modem are both input and output.",
            examTags: ["MH-CET"]
        },
        {
            id: "hw-q-007", type: "mcq", difficulty: "easy",
            question: "Which of the following is an INPUT device?",
            options: ["Monitor", "Plotter", "Digitizer", "Printer"],
            correct: 2,
            cognitiveType: "identification", psychometricTemplate: "identification",
            timePresure: "speed", speedTarget: 40, negativeMarking: false,
            explanation: "Digitizer is an input device (drawing tablet). Others are output.",
            examTags: ["MH-CET"]
        },
        {
            id: "hw-q-008", type: "mcq", difficulty: "easy",
            question: "Which of the following is an OUTPUT device?",
            options: ["Trackball", "Scanner", "Modem", "Projector"],
            correct: 3,
            cognitiveType: "identification", psychometricTemplate: "identification",
            timePresure: "speed", speedTarget: 40, negativeMarking: false,
            explanation: "Projector is an output device. Trackball and Scanner are input. Modem is both.",
            examTags: ["MH-CET"]
        },
        {
            id: "hw-q-009", type: "mcq", difficulty: "easy",
            question: "Which pair contains ONLY output devices?",
            options: ["Monitor & Mouse", "Printer & Plotter", "Scanner & Speaker", "Keyboard & Projector"],
            correct: 1,
            cognitiveType: "identification", psychometricTemplate: "identification",
            timePresure: "speed", speedTarget: 40, negativeMarking: false,
            explanation: "Printer and Plotter are both output devices.",
            examTags: ["MH-CET"]
        },
        {
            id: "hw-q-010", type: "mcq", difficulty: "easy",
            question: "Which device converts physical documents into digital format?",
            options: ["Printer", "Scanner", "Plotter", "Monitor"],
            correct: 1,
            cognitiveType: "functional", psychometricTemplate: "functional",
            timePresure: "speed", speedTarget: 40, negativeMarking: false,
            explanation: "The Scanner is used to digitize physical paperwork.",
            examTags: ["MH-CET"]
        },
        {
            id: "hw-q-011", type: "mcq", difficulty: "easy",
            question: "Which device is used to produce large-scale engineering drawings and vector graphics?",
            options: ["DMP Printer", "Inkjet Printer", "Plotter", "Scanner"],
            correct: 2,
            cognitiveType: "functional", psychometricTemplate: "functional",
            timePresure: "speed", speedTarget: 40, negativeMarking: false,
            explanation: "Plotters are specialized output devices for high-quality, large-format engineering and architectural drawings.",
            examTags: ["MH-CET"]
        },
        {
            id: "hw-q-012", type: "mcq", difficulty: "easy",
            question: "Which device can function as BOTH an input and an output device?",
            options: ["Keyboard", "Mouse", "Modem", "Scanner"],
            correct: 2,
            cognitiveType: "functional", psychometricTemplate: "functional",
            timePresure: "speed", speedTarget: 40, negativeMarking: false,
            explanation: "A Modem sends (output) and receives (input) data. Touchscreens also share this dual role.",
            examTags: ["MH-CET"]
        },
        {
            id: "hw-q-013", type: "mcq", difficulty: "easy",
            question: "In OMR, what does the 'R' stand for?",
            options: ["Reader", "Recognition", "Random", "Record"],
            correct: 1,
            cognitiveType: "acronym", psychometricTemplate: "acronym",
            timePresure: "speed", speedTarget: 40, negativeMarking: false,
            explanation: "OMR stands for Optical Mark Recognition.",
            examTags: ["MH-CET"]
        },
        {
            id: "hw-q-014", type: "mcq", difficulty: "easy",
            question: "Which input device is typically used for playing video games?",
            options: ["Scanner", "Joystick", "OMR", "Biometric"],
            correct: 1,
            cognitiveType: "functional", psychometricTemplate: "functional",
            timePresure: "speed", speedTarget: 40, negativeMarking: false,
            explanation: "Joysticks are primary input devices for flight simulators and various gaming applications.",
            examTags: ["MH-CET"]
        },
        {
            id: "hw-q-015", type: "mcq", difficulty: "easy",
            question: "Which of the following is used to input text and characters into a computer?",
            options: ["Plotter", "Monitor", "Keyboard", "Speaker"],
            correct: 2,
            cognitiveType: "functional", psychometricTemplate: "functional",
            timePresure: "speed", speedTarget: 40, negativeMarking: false,
            explanation: "Keyboard is the primary text-input device.",
            examTags: ["MH-CET"]
        },

        // --- TOPIC 2: Memory Hierarchy (15 Questions) ---
        {
            id: "hw-q-016", type: "mcq", difficulty: "medium",
            question: "Which type of memory loses its data when the power is switched off?",
            options: ["ROM", "SSD", "RAM", "HDD"],
            correct: 2,
            cognitiveType: "recall", psychometricTemplate: "functional",
            timePresure: "speed", speedTarget: 40, negativeMarking: false,
            explanation: "RAM is volatile memory; it requires a constant power supply to retain data.",
            examTags: ["MH-CET"]
        },
        {
            id: "hw-q-017", type: "mcq", difficulty: "medium",
            question: "Which of the following is a type of NON-volatile memory?",
            options: ["RAM", "Cache", "ROM", "Registers"],
            correct: 2,
            cognitiveType: "identification", psychometricTemplate: "identification",
            timePresure: "speed", speedTarget: 40, negativeMarking: false,
            explanation: "ROM (Read Only Memory) is non-volatile; it retains data without power.",
            examTags: ["MH-CET"]
        },
        {
            id: "hw-q-018", type: "mcq", difficulty: "easy",
            question: "Where is the computer's 'BIOS' typically stored?",
            options: ["RAM", "Hard Disk", "ROM", "Cache"],
            correct: 2,
            cognitiveType: "recall", psychometricTemplate: "functional",
            timePresure: "speed", speedTarget: 40, negativeMarking: false,
            explanation: "BIOS (Basic Input/Output System) is stored in the ROM chip to facilitate the startup process.",
            examTags: ["MH-CET"]
        },
        {
            id: "hw-q-019", type: "mcq", difficulty: "medium",
            question: "Is 'Cache memory' volatile or non-volatile?",
            options: ["Volatile", "Non-volatile", "Both", "Depends on OS"],
            correct: 0,
            cognitiveType: "recall", psychometricTemplate: "functional",
            timePresure: "speed", speedTarget: 40, negativeMarking: false,
            explanation: "Cache is high-speed volatile memory, similar to RAM.",
            examTags: ["MH-CET"]
        },
        {
            id: "hw-q-020", type: "mcq", difficulty: "medium",
            question: "Which of the following is the FASTEST memory in a computer system?",
            options: ["RAM", "Hard Disk", "Cache", "SSD"],
            correct: 2,
            cognitiveType: "recall", psychometricTemplate: "functional",
            timePresure: "speed", speedTarget: 40, negativeMarking: false,
            explanation: "Cache is faster than RAM and way faster than secondary storage like SSD/HDD. (Note: Registers are even faster if listed).",
            examTags: ["MH-CET"]
        },
        {
            id: "hw-q-021", type: "mcq", difficulty: "hard",
            question: "Identify the fastest storage unit among the following:",
            options: ["Cache", "Registers", "RAM", "Secondary Storage"],
            correct: 1,
            cognitiveType: "recall", psychometricTemplate: "functional",
            timePresure: "speed", speedTarget: 40, negativeMarking: false,
            explanation: "Registers, located inside the CPU, are the absolute fastest storage locations in the hierarchy.",
            examTags: ["MH-CET"]
        },
        {
            id: "hw-q-022", type: "mcq", difficulty: "medium",
            question: "Which memory acts as a 'bridge' or buffer between the CPU and the RAM?",
            options: ["ROM", "Cache", "HDD", "Tape Drive"],
            correct: 1,
            cognitiveType: "functional", psychometricTemplate: "functional",
            timePresure: "speed", speedTarget: 40, negativeMarking: false,
            explanation: "Cache memory stores frequently used data to speed up CPU access, bridging the gap between CPU speed and RAM speed.",
            examTags: ["MH-CET"]
        },
        {
            id: "hw-q-023", type: "mcq", difficulty: "medium",
            question: "Why is an SSD faster than an HDD?",
            options: ["Because it has more disks", "Because it has no moving parts", "Because it is smaller", "Because it uses lasers"],
            correct: 1,
            cognitiveType: "recall", psychometricTemplate: "functional",
            timePresure: "speed", speedTarget: 40, negativeMarking: false,
            explanation: "SSDs use electronic flash memory and have no moving parts, unlike spinning HDDs.",
            examTags: ["MH-CET"]
        },
        {
            id: "hw-q-024", type: "mcq", difficulty: "medium",
            question: "'Virtual Memory' is actually a part of:",
            options: ["CPU", "Registers", "Secondary Storage", "ROM"],
            correct: 2,
            cognitiveType: "recall", psychometricTemplate: "functional",
            timePresure: "speed", speedTarget: 40, negativeMarking: false,
            explanation: "Virtual memory is a section of the hard drive (secondary storage) used by the system as an overflow for the RAM.",
            examTags: ["MH-CET"]
        },
        {
            id: "hw-q-025", type: "mcq", difficulty: "medium",
            question: "Which of the following is considered PRIMARY memory?",
            options: ["RAM", "HDD", "Pen Drive", "Magnetic Tape"],
            correct: 0,
            cognitiveType: "identification", psychometricTemplate: "identification",
            timePresure: "speed", speedTarget: 40, negativeMarking: false,
            explanation: "RAM and ROM are primary memories. HDD, Tapes, and Pen Drives are secondary storage.",
            examTags: ["MH-CET"]
        },
        {
            id: "hw-q-026", type: "mcq", difficulty: "medium",
            question: "Which of the following is NOT a type of ROM?",
            options: ["PROM", "EPROM", "EEPROM", "DRAM"],
            correct: 3,
            cognitiveType: "identification", psychometricTemplate: "identification",
            timePresure: "speed", speedTarget: 40, negativeMarking: false,
            explanation: "DRAM stands for Dynamic Random Access Memory, which is a type of RAM, not ROM.",
            examTags: ["MH-CET"]
        },
        {
            id: "hw-q-027", type: "mcq", difficulty: "easy",
            question: "Which storage device has spinning disks and moving physical heads?",
            options: ["SSD", "RAM", "HDD", "Flash Drive"],
            correct: 2,
            cognitiveType: "identification", psychometricTemplate: "functional",
            timePresure: "speed", speedTarget: 40, negativeMarking: false,
            explanation: "HDD (Hard Disk Drive) uses mechanical spinning platters.",
            examTags: ["MH-CET"]
        },
        {
            id: "hw-q-028", type: "mcq", difficulty: "medium",
            question: "Which memory is directly accessed by the CPU?",
            options: ["External Hard Drive", "DVD", "RAM", "Cloud Storage"],
            correct: 2,
            cognitiveType: "functional", psychometricTemplate: "functional",
            timePresure: "speed", speedTarget: 40, negativeMarking: false,
            explanation: "The CPU directly accesses primary memory (RAM, Registers, Cache). Secondary storage access requires moving data to RAM first.",
            examTags: ["MH-CET"]
        },
        {
            id: "hw-q-029", type: "mcq", difficulty: "easy",
            question: "Which of the following is used to store the computer's firmware/start-up instructions?",
            options: ["RAM", "ROM", "Monitor", "UPS"],
            correct: 1,
            cognitiveType: "functional", psychometricTemplate: "functional",
            timePresure: "speed", speedTarget: 40, negativeMarking: false,
            explanation: "ROM stores the firmware and BIOS necessary to boot the computer.",
            examTags: ["MH-CET"]
        },
        {
            id: "hw-q-030", type: "mcq", difficulty: "medium",
            question: "Arrange the following in order of speed (Slowest to Fastest):",
            options: [
                "HDD < RAM < Cache < Registers",
                "RAM < Cache < HDD < Registers",
                "Registers < Cache < RAM < HDD",
                "HDD < Cache < RAM < Registers"
            ],
            correct: 0,
            cognitiveType: "recall", psychometricTemplate: "functional",
            timePresure: "speed", speedTarget: 40, negativeMarking: false,
            explanation: "Secondary (HDD) is slowest, followed by Primary (RAM), then Cache, and Registers are the fastest.",
            examTags: ["MH-CET"]
        },

        // --- TOPIC 3: CPU Architecture (15 Questions) ---
        {
            id: "hw-q-031", type: "mcq", difficulty: "easy",
            question: "Which unit of the CPU performs logic comparisons like 'greater than' or 'equal to'?",
            options: ["Control Unit", "ALU", "Register", "Bus"],
            correct: 1,
            cognitiveType: "functional", psychometricTemplate: "functional",
            timePresure: "speed", speedTarget: 40, negativeMarking: false,
            explanation: "The ALU (Arithmetic Logic Unit) executes all arithmetic and logical operations.",
            examTags: ["MH-CET"]
        },
        {
            id: "hw-q-032", type: "mcq", difficulty: "easy",
            question: "Which part of the CPU performs arithmetic operations like addition and subtraction?",
            options: ["Memory Unit", "Control Unit", "ALU", "Monitor"],
            correct: 2,
            cognitiveType: "functional", psychometricTemplate: "functional",
            timePresure: "speed", speedTarget: 40, negativeMarking: false,
            explanation: "Arithmetic operations (+, -, *, /) are the primary job of the ALU.",
            examTags: ["MH-CET"]
        },
        {
            id: "hw-q-033", type: "mcq", difficulty: "easy",
            question: "In the context of the CPU, what does ALU stand for?",
            options: [
                "Arithmetic Logic Unit",
                "Algorithmic Log Unit",
                "Advanced Logical Unit",
                "Average Logic Unit"
            ],
            correct: 0,
            cognitiveType: "acronym", psychometricTemplate: "acronym",
            timePresure: "speed", speedTarget: 40, negativeMarking: false,
            explanation: "ALU stands for Arithmetic Logic Unit.",
            examTags: ["MH-CET"]
        },
        {
            id: "hw-q-034", type: "mcq", difficulty: "easy",
            question: "What does the 'L' in ALU stand for?",
            options: ["Linear", "Link", "Logic", "Load"],
            correct: 2,
            cognitiveType: "acronym", psychometricTemplate: "acronym",
            timePresure: "speed", speedTarget: 40, negativeMarking: false,
            explanation: "L stands for Logic.",
            examTags: ["MH-CET"]
        },
        {
            id: "hw-q-035", type: "mcq", difficulty: "medium",
            question: "Which of the following is NOT a function of the ALU?",
            options: ["Addition", "Logical Comparison", "Fetching Instructions", "Subtraction"],
            correct: 2,
            cognitiveType: "functional", psychometricTemplate: "functional",
            timePresure: "speed", speedTarget: 40, negativeMarking: false,
            explanation: "Fetching instructions is the responsibility of the Control Unit (CU), not the ALU.",
            examTags: ["MH-CET"]
        },
        {
            id: "hw-q-036", type: "mcq", difficulty: "medium",
            question: "Which CPU unit coordinates and directs all computer operations and data flow?",
            options: ["ALU", "Control Unit", "Registers", "Bus"],
            correct: 1,
            cognitiveType: "functional", psychometricTemplate: "functional",
            timePresure: "speed", speedTarget: 40, negativeMarking: false,
            explanation: "The Control Unit (CU) acts as the manager/coordinator of the CPU.",
            examTags: ["MH-CET"]
        },
        {
            id: "hw-q-037", type: "mcq", difficulty: "medium",
            question: "The decoding of instructions is handled by which part of the CPU?",
            options: ["Registers", "ALU", "Control Unit", "I/O Unit"],
            correct: 2,
            cognitiveType: "functional", psychometricTemplate: "functional",
            timePresure: "speed", speedTarget: 40, negativeMarking: false,
            explanation: "The Control Unit decodes the instruction to determine what needs to be done.",
            examTags: ["MH-CET"]
        },
        {
            id: "hw-q-038", type: "mcq", difficulty: "medium",
            question: "Which unit does NOT process data but controls the sequence of data flow?",
            options: ["Control Unit", "ALU", "Hard Disk", "RAM"],
            correct: 0,
            cognitiveType: "functional", psychometricTemplate: "functional",
            timePresure: "speed", speedTarget: 40, negativeMarking: false,
            explanation: "The CU manages the traffic and timing but doesn't do the actual math (ALU) or storage (RAM).",
            examTags: ["MH-CET"]
        },
        {
            id: "hw-q-039", type: "mcq", difficulty: "medium",
            question: "The 'fetch-decode-execute' cycle is managed primarily by the:",
            options: ["ALU", "Registers", "Control Unit", "Monitor"],
            correct: 2,
            cognitiveType: "functional", psychometricTemplate: "functional",
            timePresure: "speed", speedTarget: 40, negativeMarking: false,
            explanation: "The Control Unit manages this cycle for every instruction.",
            examTags: ["MH-CET"]
        },
        {
            id: "hw-q-040", type: "mcq", difficulty: "hard",
            question: "Which register stores the memory address of the NEXT instruction to be executed?",
            options: ["Accumulator", "Program Counter", "Instruction Register", "Data Register"],
            correct: 1,
            cognitiveType: "recall", psychometricTemplate: "functional",
            timePresure: "speed", speedTarget: 40, negativeMarking: false,
            explanation: "The Program Counter (PC) holds the address of the next instruction.",
            examTags: ["MH-CET"]
        },
        {
            id: "hw-q-041", type: "mcq", difficulty: "medium",
            question: "Which bus carries the actual data between the CPU and memory components?",
            options: ["Address Bus", "Data Bus", "Control Bus", "Seat Bus"],
            correct: 1,
            cognitiveType: "recall", psychometricTemplate: "functional",
            timePresure: "speed", speedTarget: 40, negativeMarking: false,
            explanation: "The Data Bus is responsible for moving the actual data bits.",
            examTags: ["MH-CET"]
        },
        {
            id: "hw-q-042", type: "mcq", difficulty: "medium",
            question: "An 'Accumulator' is a specialized type of:",
            options: ["Primary Memory", "External Drive", "Register", "Bus"],
            correct: 2,
            cognitiveType: "identification", psychometricTemplate: "identification",
            timePresure: "speed", speedTarget: 40, negativeMarking: false,
            explanation: "The Accumulator is a general-purpose register used by the ALU.",
            examTags: ["MH-CET"]
        },
        {
            id: "hw-q-043", type: "mcq", difficulty: "easy",
            question: "Which of the following is the fastest storage location INSIDE the computer?",
            options: ["Registers", "L1 Cache", "L2 Cache", "RAM"],
            correct: 0,
            cognitiveType: "recall", psychometricTemplate: "functional",
            timePresure: "speed", speedTarget: 40, negativeMarking: false,
            explanation: "Registers are located directly within the CPU and are faster than any level of cache.",
            examTags: ["MH-CET"]
        },
        {
            id: "hw-q-044", type: "mcq", difficulty: "medium",
            question: "Which bus is UNIDIRECTIONAL (only goes one way from CPU)?",
            options: ["Data Bus", "Address Bus", "Control Bus", "USB"],
            correct: 1,
            cognitiveType: "recall", psychometricTemplate: "functional",
            timePresure: "speed", speedTarget: 40, negativeMarking: false,
            explanation: "The Address Bus is one-way (CPU to components). Data and Control buses are typically bi-directional.",
            examTags: ["MH-CET"]
        },
        {
            id: "hw-q-045", type: "mcq", difficulty: "easy",
            question: "What is the primary function of the CPU in a computer system?",
            options: ["Produce visual output", "Provide power to the motherboard", "Execute instructions and process data", "Store files permanently"],
            correct: 2,
            cognitiveType: "functional", psychometricTemplate: "functional",
            timePresure: "speed", speedTarget: 40, negativeMarking: false,
            explanation: "The CPU is the 'brain' that processes all program instructions.",
            examTags: ["MH-CET"]
        }
    ]
};
