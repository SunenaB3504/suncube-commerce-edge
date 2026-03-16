// src/data/computer-awareness/internet-and-networking.data.js
// MAH BBA CET - COMPUTER AWARENESS - INTERNET & NETWORKING MODULE
// SCHEMA VALIDATED AGAINST DATA_SCHEMA.md

export const internetAndNetworkingData = {
    subject: "Computer Awareness",
    chapter: "Internet & Networking",
    examTags: ["MH-CET"],
    studyGuide: {
        topics: [
            {
                id: "internet-protocols",
                title: "1. Internet Protocols & Services",
                content: {
                    coreConcept: "1. The Language: Protocols are a set of rules that allow computers to 'talk' to each other. Without them, the internet would just be a pile of disconnected wires.\n2. TCP/IP: The base language of the internet. IP handles the 'Address' (where it's going), and TCP handles the 'Delivery' (making sure it gets there and isn't broken).\n3. Identity: Every device on a network has a unique IP Address (Example: 192.168.1.1).",
                    formulaBank: "The Protocol Cheat Sheet:\n1. HTTP (Web): HyperText Transfer Protocol. (HTTPS is the Secure version).\n2. FTP (Files): File Transfer Protocol. For moving bulk files.\n3. SMTP (Mail Out): Simple Mail Transfer Protocol. For SENDING emails.\n4. POP3 / IMAP (Mail In): For RECEIVING emails. IMAP keeps mail on the server.\n5. DNS: Domain Name System. Translates 'google.com' to an IP address.",
                    logic: "The DNS Phonebook Logic:\nStep 1: User types 'google.com' in the browser.\nStep 2: Browser asks the DNS Server: 'What is the IP of google.com?'\nStep 3: DNS replies: 'It is 142.250.190.46'.\nStep 4: Browser connects directly to that IP address.",
                    traps: "TRAP 1: HTTP vs HTML\nHTML is the language used to *build* a page. HTTP is the protocol used to *send* that page across the internet.\n\nTRAP 2: SMTP vs POP3\nThink of SMTP as the 'Postman' who takes your letter *away*. Think of POP3 as the 'Mailbox' where you *collect* your letters.\n\nTRAP 3: IP Address Versions\nIPv4 uses 4 sets of numbers (e.g., 172.16.254.1). IPv6 is the newer, much larger version (e.g., 2001:0db8:85a3:0000:0000:8a2e:0370:7334).",
                    examples: [
                        { q: "Protocol for secure online banking?", a: "HTTPS" },
                        { q: "What does the 'S' in HTTPS stand for?", a: "Secure" },
                        { q: "Who invented the World Wide Web?", a: "Tim Berners-Lee" },
                        { q: "Protocol used to download files?", a: "FTP" },
                        { q: "What translates domain names into IP addresses?", a: "DNS" },
                        { q: "Protocol for sending an email to a friend?", a: "SMTP" },
                        { q: "Which protocol ensures data packets reach safely?", a: "TCP" },
                        { q: "Maximum number in an IP octet (e.g., 192)?", a: "255" },
                        { q: "Is the WWW the same as the Internet?", a: "No, WWW is just one service running on the Internet." },
                        { q: "In an email, what does BCC stand for?", a: "Blind Carbon Copy" },
                        { q: "Which protocol is used by the World Wide Web for data transfer?", a: "HTTP" },
                        { q: "What is an IPv4 address composed of?", a: "Four decimal numbers separated by dots (e.g., 192.168.1.1)." },
                        { q: "What is the primary difference between IPv4 and IPv6?", a: "IPv6 provides a much larger address space (128-bit) compared to IPv4 (32-bit)." },
                        { q: "Which service allows users to remote login into another computer?", a: "Telnet / SSH" },
                        { q: "Specify one protocol used for VOIP (Voice over IP)?", a: "SIP / RTP" },
                        { q: "What is the full form of MAC Address?", a: "Media Access Control Address" },
                        { q: "Is a MAC address permanent or temporary?", a: "Permanent (it is burnt into the NIC)." },
                        { q: "Which protocol is used to fetch emails from a server to a device?", a: "POP3 / IMAP" },
                        { q: "What does 'latency' mean in a network?", a: "The delay in the transfer of data across a network." },
                        { q: "What is 'Bandwidth'?", a: "The maximum amount of data that can be transmitted over a path in a given time." },
                        { q: "What is a 'Packet' in networking?", a: "A small segment of a larger message sent over a network." },
                        { q: "Which protocol is used for synchronizing clocks over a network?", a: "NTP (Network Time Protocol)" },
                        { q: "What is a 'Gateway'?", a: "A node that connects two networks using different protocols." },
                        { q: "What is the purpose of the 'Ping' command?", a: "To test the reachability of a host on an IP network." },
                        { q: "Which organization manages domain names globally?", a: "ICANN" }
                    ],
                    speedSummary: "- HTTP = Web | SMTP = Postman | DNS = Phonebook.\n- IP Address = Computer's house address.\n- HTTPS = Encrypted & Safe."
                }
            },
            {
                id: "networking-hardware",
                title: "2. Networking Hardware & Topology",
                content: {
                    coreConcept: "1. The Hardware: Physical devices that connect computers together.\n2. Topology: The 'Shape' or 'Layout' of the network connection.",
                    formulaBank: "Key Networking Devices:\n1. Hub: A 'dumb' device that sends data to *everyone* connected to it.\n2. Switch: A 'smart' device that sends data *only* to the intended recipient.\n3. Router: The 'traffic police' that connects your home network to the Global Internet.\n4. Modem: Converts Digital signals to Analog (and vice versa) for telephone lines.",
                    logic: "Topology Comparison:\n- STAR: All devices connect to a central Hub/Switch. (Most common today).\n- BUS: All devices connect to a single 'Backbone' cable.\n- RING: Data travels in a circle from one computer to the next.\n- MESH: Every device is connected to every other device. (Most reliable).",
                    traps: "TRAP 1: Hub vs Switch\nIf 5 computers are on a Hub, and Computer A sends a private message to B, *everyone* sees it. On a Switch, *only* B sees it.\n\nTRAP 2: Intranet vs Internet\nThe Internet is public and global. An 'Intranet' is a private network used only inside a specific company or school.\n\nTRAP 3: LAN vs WAN\nLAN (Local) is for one building. WAN (Wide) is for connecting cities or countries. The Internet is the ultimate WAN.",
                    examples: [
                        { q: "Device that connects different networks?", a: "Router" },
                        { q: "Which topology uses a central hub?", a: "Star Topology" },
                        { q: "MODEM stands for...?", a: "Modulator-Demodulator" },
                        { q: "Network for a single home or office?", a: "LAN (Local Area Network)" },
                        { q: "Topology where every node connects to every other node?", a: "Mesh Topology" },
                        { q: "A private network inside an office?", a: "Intranet" },
                        { q: "Which device is 'dumb' and broadcasts to all?", a: "Hub" },
                        { q: "Network type spanning an entire city?", a: "MAN (Metropolitan Area Network)" },
                        { q: "Device used to boost a weak network signal?", a: "Repeater" },
                        { q: "What does Bluetooth create?", a: "PAN (Personal Area Network)" },
                        { q: "Which cable type is fastest for networking?", a: "Fiber Optic" },
                        { q: "What is an 'RJ-45' connector used for?", a: "Ethernet networking cables." },
                        { q: "What does a 'Bridge' do in a network?", a: "Connects two LAN segments together as a single network." },
                        { q: "What is the primary advantage of Star topology?", a: "Easy to add or remove devices without affecting the whole network." },
                        { q: "Which topology uses a 'Terminator' at both ends?", a: "Bus Topology" },
                        { q: "What is 'PoE'?", a: "Power over Ethernet (delivering power and data via the same cable)." },
                        { q: "Which device divides a network into logical segments?", a: "Switch" },
                        { q: "What is a 'VLAN'?", a: "Virtual Local Area Network." },
                        { q: "What is the range of a typical Bluetooth Class 2 device?", a: "About 10 meters." },
                        { q: "Which networking tool is used to test if a cable is working?", a: "Multimeter / Cable Tester" },
                        { q: "What is 'Attenuation'?", a: "The loss of signal strength as it travels through a medium." },
                        { q: "Which fiber optic type is used for longer distances?", a: "Single-mode Fiber" },
                        { q: "What is a 'SSID'?", a: "Service Set Identifier (the name of a Wi-Fi network)." },
                        { q: "Which wireless standard is used for Wi-Fi 6?", a: "802.11ax" },
                        { q: "What does a 'Firewall' do?", a: "Monitors and controls incoming/outgoing network traffic based on security rules." }
                    ],
                    speedSummary: "- Hub = Broadcasts | Switch = Selective | Router = Connects Networks.\n- Star = Centralized | Mesh = Highly Reliable.\n- LAN = Building | WAN = Global."
                }
            },
            {
                id: "www-cloud",
                title: "3. WWW & Cloud Computing",
                content: {
                    coreConcept: "1. The Web (WWW): A system of interlinked documents (webpages) accessed via the Internet.\n2. Cloud Computing: Using a network of remote servers on the internet to store/manage data, rather than your own local computer.",
                    formulaBank: "The Cloud Models:\n1. SaaS (Software): Using apps online (e.g., Gmail, Google Docs, Spotify).\n2. IaaS (Infrastructure): Renting 'virtual' computers/storage (e.g., Amazon AWS).\n3. PaaS (Platform): Tools for developers to build apps without managing servers.",
                    logic: "How a Website Loads:\nStep 1: Your Browser (Client) sends a request for a page.\nStep 2: The request goes to a Web Server.\nStep 3: The Server finds the page and sends it back to you.\nCookies: Small files stored on your computer by a website to remember your login or cart.",
                    traps: "TRAP 1: Browser vs Search Engine\nGoogle and Bing are Search Engines (websites). Chrome and Safari are Browsers (software programs). You use a Browser to visit a Search Engine.\n\nTRAP 2: Cloud Storage vs Backup\nCloud storage (like Dropbox) is for accessing files anywhere. Backup is specifically for keeping a *copy* safe in case of disaster.\n\nTRAP 3: Homepage vs Website\nA Homepage is just the *front door* (first page). A Website is the entire *building* (all pages together).",
                    examples: [
                        { q: "Which software do you use to view webpages?", a: "Web Browser (Chrome, Safari, Firefox)" },
                        { q: "Microsoft 365 is which cloud model?", a: "SaaS (Software as a Service)" },
                        { q: "Is Google a browser or a search engine?", a: "Search Engine." },
                        { q: "What stores your login on a website?", a: "Cookie" },
                        { q: "Renting server space from Amazon is...?", a: "IaaS (Infrastructure as a Service)" },
                        { q: "The first page of a website?", a: "Homepage" },
                        { q: "A clickable link on a webpage?", a: "Hyperlink" },
                        { q: "What does HTML stand for?", a: "HyperText Markup Language" },
                        { q: "Copies of sites stored locally for speed?", a: "Cache" },
                        { q: "What is a 'Spam' email?", a: "Unsolicited or junk bulk email." },
                        { q: "What is 'Phishing'?", a: "A cyber attack that uses email/websites to steal user data." },
                        { q: "Which cloud service model is used by developers for app hosting?", a: "PaaS (Platform as a Service)" },
                        { q: "What is an 'URL'?", a: "Uniform Resource Locator (a web address)." },
                        { q: "What is the purpose of 'Incognito Mode'?", a: "To browse without saving history or cookies." },
                        { q: "What is 'E-commerce'?", a: "Buying and selling of goods/services over the internet." },
                        { q: "Specify one major cloud provider.", a: "AWS (Amazon) / Azure (Microsoft) / Google Cloud." },
                        { q: "What is a 'Search Engine Crawler'?", a: "A bot that indexed web pages for search results." },
                        { q: "What does 'WWW' stand for?", a: "World Wide Web." },
                        { q: "What is 'Streaming'?", a: "Viewing media online without downloading the whole file first." },
                        { q: "What is 'FTP' primarily used for?", a: "Transferring files over the internet." },
                        { q: "What is a 'Blog'?", a: "A personal website containing logs of thoughts or articles." },
                        { q: "What is 'Social Media'?", a: "Websites that allow users to create and share content and participate in social networking." },
                        { q: "What is 'VPN'?", a: "Virtual Private Network (creates a secure connection over a public network)." },
                        { q: "What is 'Dark Web'?", a: "Part of the internet that is not indexed by search engines and requires special software to access." },
                        { q: "What is 'Web 3.0'?", a: "The next generation of the web, emphasizing decentralization and blockchain." }
                    ],
                    speedSummary: "- Browser = The Window | Search Engine = The Librarian.\n- SaaS = Just use it | IaaS = Rent the machine.\n- Cookies remember you | Caches speed things up."
                }
            }
        ]
    },
    flashcards: [
        { id: "net-fc-001", term: "HTTP vs HTTPS", definition: "HTTPS is secure/encrypted; HTTP is not." },
        { id: "net-fc-002", term: "SMTP", definition: "Simple Mail Transfer Protocol - For SENDING emails." },
        { id: "net-fc-003", term: "POP3/IMAP", definition: "For RECEIVING emails." },
        { id: "net-fc-004", term: "DNS", definition: "Domain Name System - Maps names to IP addresses." },
        { id: "net-fc-005", term: "LAN", definition: "Local Area Network - Office/Home range." },
        { id: "net-fc-006", term: "WAN", definition: "Wide Area Network - Country/Global (Internet)." },
        { id: "net-fc-007", term: "Router", definition: "Connects different networks, directs traffic." },
        { id: "net-fc-008", term: "Topology", definition: "Physical layout (Star, Bus, Mesh)." },
        { id: "net-fc-009", term: "SaaS", definition: "Software as a Service - e.g., Gmail." },
        { id: "net-fc-010", term: "URL", definition: "Uniform Resource Locator - Web address." }
    ],
    questions: [
        // --- TOPIC 1: Internet Protocols (15 Questions) ---
        {
            id: "net-q-001", type: "mcq", difficulty: "easy",
            question: "Which protocol is used for SECURE data transfer over the web?",
            options: ["HTTP", "FTP", "HTTPS", "SMTP"],
            correct: 2,
            cognitiveType: "identification", psychometricTemplate: "functional",
            timePresure: "speed", speedTarget: 40, negativeMarking: false,
            explanation: "HTTPS (HyperText Transfer Protocol Secure) uses encryption to protect data.",
            examTags: ["MH-CET"]
        },
        {
            id: "net-q-002", type: "mcq", difficulty: "easy",
            question: "What does the 'S' in HTTPS stand for?",
            options: ["Server", "Secure", "Socket", "Standard"],
            correct: 1,
            cognitiveType: "acronym", psychometricTemplate: "acronym",
            timePresure: "speed", speedTarget: 40, negativeMarking: false,
            explanation: "S stands for Secure.",
            examTags: ["MH-CET"]
        },
        {
            id: "net-q-003", type: "mcq", difficulty: "easy",
            question: "Which protocol is primarily used for transferring files between computers?",
            options: ["HTTP", "FTP", "DNS", "IP"],
            correct: 1,
            cognitiveType: "functional", psychometricTemplate: "functional",
            timePresure: "speed", speedTarget: 40, negativeMarking: false,
            explanation: "FTP stands for File Transfer Protocol.",
            examTags: ["MH-CET"]
        },
        {
            id: "net-q-004", type: "mcq", difficulty: "medium",
            question: "Which protocol converts a domain name (like google.com) into an IP address?",
            options: ["HTTP", "DNS", "FTP", "TCP"],
            correct: 1,
            cognitiveType: "functional", psychometricTemplate: "functional",
            timePresure: "speed", speedTarget: 40, negativeMarking: false,
            explanation: "The DNS (Domain Name System) acts as the phone book of the internet.",
            examTags: ["MH-CET"]
        },
        {
            id: "net-q-005", type: "mcq", difficulty: "easy",
            question: "Which protocol is used for SENDING emails?",
            options: ["POP3", "IMAP", "SMTP", "HTTP"],
            correct: 2,
            cognitiveType: "functional", psychometricTemplate: "functional",
            timePresure: "speed", speedTarget: 40, negativeMarking: false,
            explanation: "SMTP (Simple Mail Transfer Protocol) is for sending; POP/IMAP are for receiving.",
            examTags: ["MH-CET"]
        },
        {
            id: "net-q-006", type: "mcq", difficulty: "medium",
            question: "Which protocol is used to RECEIVE emails and typically leaves the messages on the server?",
            options: ["SMTP", "POP3", "IMAP", "FTP"],
            correct: 2,
            cognitiveType: "functional", psychometricTemplate: "functional",
            timePresure: "speed", speedTarget: 40, negativeMarking: false,
            explanation: "IMAP synchronizes with the server, while POP3 typically downloads and deletes from server.",
            examTags: ["MH-CET"]
        },
        {
            id: "net-q-007", type: "mcq", difficulty: "medium",
            question: "What is the primary difference between HTTP and HTTPS?",
            options: [
                "HTTPS is faster",
                "HTTPS is encrypted/secure",
                "HTTP is newer",
                "HTTP is for videos only"
            ],
            correct: 1,
            cognitiveType: "recall", psychometricTemplate: "functional",
            timePresure: "speed", speedTarget: 40, negativeMarking: false,
            explanation: "HTTPS uses SSL/TLS encryption for security.",
            examTags: ["MH-CET"]
        },
        {
            id: "net-q-008", type: "mcq", difficulty: "easy",
            question: "URL stands for:",
            options: [
                "Uniform Resource Locator",
                "United Resource Link",
                "Universal Radio List",
                "Unique Response Location"
            ],
            correct: 0,
            cognitiveType: "acronym", psychometricTemplate: "acronym",
            timePresure: "speed", speedTarget: 40, negativeMarking: false,
            explanation: "URL is the address of a web resource.",
            examTags: ["MH-CET"]
        },
        {
            id: "net-q-009", type: "mcq", difficulty: "medium",
            question: "TCP/IP is often referred to as:",
            options: [
                "A web browser",
                "The foundation of internet communication",
                "A type of fiber optic cable",
                "A security software"
            ],
            correct: 1,
            cognitiveType: "recall", psychometricTemplate: "functional",
            timePresure: "speed", speedTarget: 40, negativeMarking: false,
            explanation: "TCP handles data delivery; IP handles addressing.",
            examTags: ["MH-CET"]
        },
        {
            id: "net-q-010", type: "mcq", difficulty: "medium",
            question: "Which unique address identifies a device on a network?",
            options: ["Home Address", "URL", "IP Address", "ZIP Code"],
            correct: 2,
            cognitiveType: "functional", psychometricTemplate: "functional",
            timePresure: "speed", speedTarget: 40, negativeMarking: false,
            explanation: "IP (Internet Protocol) address uniquely identifies every device on a TCP/IP network.",
            examTags: ["MH-CET"]
        },
        {
            id: "net-q-011", type: "mcq", difficulty: "medium",
            question: "How many sets of numbers are there in a standard IPv4 address (e.g., 192.168.1.1)?",
            options: ["2", "3", "4", "6"],
            correct: 2,
            cognitiveType: "recall", psychometricTemplate: "functional",
            timePresure: "speed", speedTarget: 40, negativeMarking: false,
            explanation: "IPv4 uses four 8-bit octets.",
            examTags: ["MH-CET"]
        },
        {
            id: "net-q-012", type: "mcq", difficulty: "easy",
            question: "Who is credited with inventing the World Wide Web (WWW) in 1989?",
            options: ["Bill Gates", "Mark Zuckerberg", "Tim Berners-Lee", "Steve Jobs"],
            correct: 2,
            cognitiveType: "recall", psychometricTemplate: "functional",
            timePresure: "speed", speedTarget: 40, negativeMarking: false,
            explanation: "Tim Berners-Lee invented the WWW at CERN.",
            examTags: ["MH-CET"]
        },
        {
            id: "net-q-013", type: "mcq", difficulty: "medium",
            question: "Which of the following is NOT the same as the 'Internet'?",
            options: ["WAN", "WWW", "Global Network", "Cyberspace"],
            correct: 1,
            cognitiveType: "identification", psychometricTemplate: "identification",
            timePresure: "speed", speedTarget: 40, negativeMarking: false,
            explanation: "The WWW is just one service on the Internet (others include email, FTP).",
            examTags: ["MH-CET"]
        },
        {
            id: "net-q-014", type: "mcq", difficulty: "medium",
            question: "Which layer of the TCP/IP protocol suite handles logical addressing?",
            options: ["Network Access Layer", "Internet Protocol (IP) Layer", "Transport Layer", "Application Layer"],
            correct: 1,
            cognitiveType: "functional", psychometricTemplate: "functional",
            timePresure: "speed", speedTarget: 40, negativeMarking: false,
            explanation: "The Internet Layer handles IP addressing and routing.",
            examTags: ["MH-CET"]
        },
        {
            id: "net-q-015", type: "mcq", difficulty: "medium",
            question: "Why is DNS often called the 'phone book of the internet'?",
            options: [
                "It lists all computer owners",
                "It maps human-readable names to numeric IP addresses",
                "It stores phone numbers",
                "It is printed annually"
            ],
            correct: 1,
            cognitiveType: "recall", psychometricTemplate: "functional",
            timePresure: "speed", speedTarget: 40, negativeMarking: false,
            explanation: "DNS translates google.com into its actual server IP address.",
            examTags: ["MH-CET"]
        },

        // --- TOPIC 2: Networking Basics (15 Questions) ---
        {
            id: "net-q-016", type: "mcq", difficulty: "easy",
            question: "Which network covers a small geographic area like a single office or home?",
            options: ["WAN", "MAN", "LAN", "PAN"],
            correct: 2,
            cognitiveType: "identification", psychometricTemplate: "identification",
            timePresure: "speed", speedTarget: 40, negativeMarking: false,
            explanation: "LAN stands for Local Area Network.",
            examTags: ["MH-CET"]
        },
        {
            id: "net-q-017", type: "mcq", difficulty: "easy",
            question: "The Internet is the best-known example of which network type?",
            options: ["LAN", "PAN", "WAN", "CAN"],
            correct: 2,
            cognitiveType: "identification", psychometricTemplate: "identification",
            timePresure: "speed", speedTarget: 40, negativeMarking: false,
            explanation: "The Internet spans the entire globe, making it a Wide Area Network (WAN).",
            examTags: ["MH-CET"]
        },
        {
            id: "net-q-018", type: "mcq", difficulty: "medium",
            question: "Bluetooth devices connected to each other form which type of network?",
            options: ["LAN", "PAN", "MAN", "WAN"],
            correct: 1,
            cognitiveType: "identification", psychometricTemplate: "identification",
            timePresure: "speed", speedTarget: 40, negativeMarking: false,
            explanation: "PAN stands for Personal Area Network.",
            examTags: ["MH-CET"]
        },
        {
            id: "net-q-019", type: "mcq", difficulty: "medium",
            question: "Which network type covers an entire city or a large campus?",
            options: ["LAN", "MAN", "WAN", "SAN"],
            correct: 1,
            cognitiveType: "identification", psychometricTemplate: "identification",
            timePresure: "speed", speedTarget: 40, negativeMarking: false,
            explanation: "MAN stands for Metropolitan Area Network.",
            examTags: ["MH-CET"]
        },
        {
            id: "net-q-020", type: "mcq", difficulty: "easy",
            question: "WiFi is a technology used in which network category?",
            options: ["WLAN", "WMAN", "WWAN", "WPAN"],
            correct: 0,
            cognitiveType: "identification", psychometricTemplate: "identification",
            timePresure: "speed", speedTarget: 40, negativeMarking: false,
            explanation: "WLAN stands for Wireless Local Area Network.",
            examTags: ["MH-CET"]
        },
        {
            id: "net-q-021", type: "mcq", difficulty: "hard",
            question: "In networking, 'Multicasting' refers to sending data to:",
            options: [
                "A single receiver",
                "All receivers on the network",
                "A specific group of stations",
                "Nobody"
            ],
            correct: 2,
            cognitiveType: "functional", psychometricTemplate: "functional",
            timePresure: "speed", speedTarget: 40, negativeMarking: false,
            explanation: "Multicasting targets a specific group; Broadcasting targets everyone; Unicasting targets one.",
            examTags: ["MH-CET"]
        },
        {
            id: "net-q-022", type: "mcq", difficulty: "medium",
            question: "When data is sent to ALL devices on a network, it is called:",
            options: ["Unicasting", "Multicasting", "Broadcasting", "Simplexing"],
            correct: 2,
            cognitiveType: "functional", psychometricTemplate: "functional",
            timePresure: "speed", speedTarget: 40, negativeMarking: false,
            explanation: "Broadcasting sends a message from one to all.",
            examTags: ["MH-CET"]
        },
        {
            id: "net-q-023", type: "mcq", difficulty: "easy",
            question: "One-to-one data transmission is known as:",
            options: ["Unicast", "Multicast", "Broadcast", "Anycast"],
            correct: 0,
            cognitiveType: "functional", psychometricTemplate: "functional",
            timePresure: "speed", speedTarget: 40, negativeMarking: false,
            explanation: "Unicast is direct one-to-one communication.",
            examTags: ["MH-CET"]
        },
        {
            id: "net-q-024", type: "mcq", difficulty: "medium",
            question: "Which of the following typically uses 'Unicast' transmission?",
            options: ["Radio stations", "Sending an email to a friend", "TV broadcasting", "Public announcements"],
            correct: 1,
            cognitiveType: "recall", psychometricTemplate: "functional",
            timePresure: "speed", speedTarget: 40, negativeMarking: false,
            explanation: "Direct email is a unicast transmission.",
            examTags: ["MH-CET"]
        },
        {
            id: "net-q-025", type: "mcq", difficulty: "medium",
            question: "Which device connects different networks and directs traffic between them?",
            options: ["Hub", "Switch", "Router", "Bridge"],
            correct: 2,
            cognitiveType: "functional", psychometricTemplate: "functional",
            timePresure: "speed", speedTarget: 40, negativeMarking: false,
            explanation: "Routers are intelligent devices that determine the best path for data between networks.",
            examTags: ["MH-CET"]
        },
        {
            id: "net-q-026", type: "mcq", difficulty: "medium",
            question: "Which networking device is considered 'dumb' because it sends data to ALL connected ports?",
            options: ["Switch", "Hub", "Router", "Gateway"],
            correct: 1,
            cognitiveType: "identification", psychometricTemplate: "identification",
            timePresure: "speed", speedTarget: 40, negativeMarking: false,
            explanation: "A Hub does not filter data; it just repeats signals to everyone.",
            examTags: ["MH-CET"]
        },
        {
            id: "net-q-027", type: "mcq", difficulty: "medium",
            question: "A 'Switch' is smarter than a 'Hub' because:",
            options: [
                "It is faster",
                "It sends data only to the intended recipient device",
                "It has more ports",
                "It uses wireless signals"
            ],
            correct: 1,
            cognitiveType: "recall", psychometricTemplate: "functional",
            timePresure: "speed", speedTarget: 40, negativeMarking: false,
            explanation: "Switches learn MAC addresses and filter traffic accordingly.",
            examTags: ["MH-CET"]
        },
        {
            id: "net-q-028", type: "mcq", difficulty: "easy",
            question: "Which device converts digital signals to analog for transmission over telephone lines?",
            options: ["Switch", "Repeater", "Modem", "Server"],
            correct: 2,
            cognitiveType: "functional", psychometricTemplate: "functional",
            timePresure: "speed", speedTarget: 40, negativeMarking: false,
            explanation: "MODEM stands for MOdulator-DEModulator.",
            examTags: ["MH-CET"]
        },
        {
            id: "net-q-029", type: "mcq", difficulty: "medium",
            question: "Which network topology connects all devices to a single central hub or switch?",
            options: ["Bus", "Star", "Ring", "Mesh"],
            correct: 1,
            cognitiveType: "identification", psychometricTemplate: "identification",
            timePresure: "speed", speedTarget: 40, negativeMarking: false,
            explanation: "In a Star topology, the central node is the point of connection.",
            examTags: ["MH-CET"]
        },
        {
            id: "net-q-030", type: "mcq", difficulty: "medium",
            question: "What is the purpose of a 'Repeater' in a network?",
            options: [
                "To connect to the internet",
                "To regenerate and boost signals for long distances",
                "To block viruses",
                "To store files"
            ],
            correct: 1,
            cognitiveType: "functional", psychometricTemplate: "functional",
            timePresure: "speed", speedTarget: 40, negativeMarking: false,
            explanation: "Repeaters prevent signal degradation (attenuation).",
            examTags: ["MH-CET"]
        },

        // --- TOPIC 3: WWW and Cloud Computing (15 Questions) ---
        {
            id: "net-q-031", type: "mcq", difficulty: "easy",
            question: "'Google' is primarily a:",
            options: ["Web Browser", "Search Engine", "Operating System", "Hardware Component"],
            correct: 1,
            cognitiveType: "identification", psychometricTemplate: "identification",
            timePresure: "speed", speedTarget: 40, negativeMarking: false,
            explanation: "Google is a search engine. Note: Chrome is the browser.",
            examTags: ["MH-CET"]
        },
        {
            id: "net-q-032", type: "mcq", difficulty: "easy",
            question: "'Google Chrome' is an example of a:",
            options: ["Search Engine", "Web Browser", "Social Network", "Database"],
            correct: 1,
            cognitiveType: "identification", psychometricTemplate: "identification",
            timePresure: "speed", speedTarget: 40, negativeMarking: false,
            explanation: "Chrome is the software used to browse the web.",
            examTags: ["MH-CET"]
        },
        {
            id: "net-q-033", type: "mcq", difficulty: "easy",
            question: "Which of the following is a web BROWSER (not a search engine)?",
            options: ["Bing", "Baidu", "Firefox", "DuckDuckGo"],
            correct: 2,
            cognitiveType: "identification", psychometricTemplate: "identification",
            timePresure: "speed", speedTarget: 40, negativeMarking: false,
            explanation: "Firefox is a browser. The others are search engines.",
            examTags: ["MH-CET"]
        },
        {
            id: "net-q-034", type: "mcq", difficulty: "medium",
            question: "A 'Cookie' in a web context is used to:",
            options: [
                "Delete browsing history",
                "Store user preferences and login information",
                "Provide high-speed internet",
                "Cool the motherboard"
            ],
            correct: 1,
            cognitiveType: "functional", psychometricTemplate: "functional",
            timePresure: "speed", speedTarget: 40, negativeMarking: false,
            explanation: "Cookies help websites recognize returning users.",
            examTags: ["MH-CET"]
        },
        {
            id: "net-q-035", type: "mcq", difficulty: "medium",
            question: "What is a 'Hyperlink'?",
            options: [
                "An extremely fast internet connection",
                "A clickable element that takes you to another page",
                "A type of computer virus",
                "The power cable for a router"
            ],
            correct: 1,
            cognitiveType: "recall", psychometricTemplate: "functional",
            timePresure: "speed", speedTarget: 40, negativeMarking: false,
            explanation: "Hyperlinks are the basis of web navigation.",
            examTags: ["MH-CET"]
        },
        {
            id: "net-q-036", type: "mcq", difficulty: "easy",
            question: "'Homepage' refers to:",
            options: [
                "The Google search page only",
                "The first or main page of any website",
                "The desktop screen",
                "A social media profile"
            ],
            correct: 1,
            cognitiveType: "recall", psychometricTemplate: "functional",
            timePresure: "speed", speedTarget: 40, negativeMarking: false,
            explanation: "The root or landing page of a site is the homepage.",
            examTags: ["MH-CET"]
        },
        {
            id: "net-q-037", type: "mcq", difficulty: "medium",
            question: "What does a 'Browser Cache' store?",
            options: [
                "Permanent user files",
                "Copies of web pages for faster subsequent loading",
                "Encrypted passwords",
                "Operating system updates"
            ],
            correct: 1,
            cognitiveType: "functional", psychometricTemplate: "functional",
            timePresure: "speed", speedTarget: 40, negativeMarking: false,
            explanation: "Caching saves bandwidth and time by reusing local copies of site assets.",
            examTags: ["MH-CET"]
        },
        {
            id: "net-q-038", type: "mcq", difficulty: "medium",
            question: "'CC' in an email context stands for:",
            options: ["Computer Copy", "Carbon Copy", "Classified Copy", "Crypted Code"],
            correct: 1,
            cognitiveType: "acronym", psychometricTemplate: "acronym",
            timePresure: "speed", speedTarget: 40, negativeMarking: false,
            explanation: "Carbon Copy recipients are visible to all others on the email thread.",
            examTags: ["MH-CET"]
        },
        {
            id: "net-q-039", type: "mcq", difficulty: "medium",
            question: "Gmail and Google Docs are examples of which cloud service model?",
            options: ["SaaS", "PaaS", "IaaS", "DaaS"],
            correct: 0,
            cognitiveType: "identification", psychometricTemplate: "identification",
            timePresure: "speed", speedTarget: 40, negativeMarking: false,
            explanation: "SaaS = Software as a Service.",
            examTags: ["MH-CET"]
        },
        {
            id: "net-q-040", type: "mcq", difficulty: "easy",
            question: "Google Drive and Dropbox are examples of:",
            options: ["Social Media", "Cloud Storage", "Web Browsers", "Operating Systems"],
            correct: 1,
            cognitiveType: "identification", psychometricTemplate: "identification",
            timePresure: "speed", speedTarget: 40, negativeMarking: false,
            explanation: "These services host files in remote data centers.",
            examTags: ["MH-CET"]
        },
        {
            id: "net-q-041", type: "mcq", difficulty: "hard",
            question: "Which cloud model provides access to virtual machines and storage infrastructure?",
            options: ["SaaS", "PaaS", "IaaS", "BaaS"],
            correct: 2,
            cognitiveType: "identification", psychometricTemplate: "identification",
            timePresure: "speed", speedTarget: 40, negativeMarking: false,
            explanation: "IaaS = Infrastructure as a Service (e.g., AWS, Azure).",
            examTags: ["MH-CET"]
        },
        {
            id: "net-q-042", type: "mcq", difficulty: "medium",
            question: "How does 'BCC' differ from 'CC'?",
            options: [
                "BCC is only for business emails",
                "BCC recipients are hidden from other recipients",
                "BCC is a copy for the sender only",
                "There is no difference"
            ],
            correct: 1,
            cognitiveType: "recall", psychometricTemplate: "functional",
            timePresure: "speed", speedTarget: 40, negativeMarking: false,
            explanation: "BCC = Blind Carbon Copy.",
            examTags: ["MH-CET"]
        },
        {
            id: "net-q-043", type: "mcq", difficulty: "medium",
            question: "What is the primary function of a 'Web Server'?",
            options: [
                "To create web pages",
                "To host and serve web content to users on request",
                "To provide an internet connection",
                "To browse the web"
            ],
            correct: 1,
            cognitiveType: "functional", psychometricTemplate: "functional",
            timePresure: "speed", speedTarget: 40, negativeMarking: false,
            explanation: "Servers 'serve' data (sites) to clients (browsers).",
            examTags: ["MH-CET"]
        },
        {
            id: "net-q-044", type: "mcq", difficulty: "easy",
            question: "What does HTML stand for?",
            options: [
                "HyperText Markup Language",
                "High Tech Machine Language",
                "Hyperlink Text Management List",
                "Hybrid Text Model Language"
            ],
            correct: 0,
            cognitiveType: "acronym", psychometricTemplate: "acronym",
            timePresure: "speed", speedTarget: 40, negativeMarking: false,
            explanation: "HTML is the standard language for creating web pages.",
            examTags: ["MH-CET"]
        },
        {
            id: "net-q-045", type: "mcq", difficulty: "easy",
            question: "Which file extension is commonly used for web pages?",
            options: [".exe", ".html", ".docx", ".zip"],
            correct: 1,
            cognitiveType: "identification", psychometricTemplate: "identification",
            timePresure: "speed", speedTarget: 40, negativeMarking: false,
            explanation: ".html or .htm are the primary web extensions.",
            examTags: ["MH-CET"]
        }
    ]
};
