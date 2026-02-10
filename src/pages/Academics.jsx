import React, { useState } from 'react';
import { 
  BookOpen, User, Download, ArrowLeft, FileText, 
  CheckCircle, Clock, Award, Calendar, BarChart, 
  AlertCircle, List, Target, X, ChevronDown, Check, Loader2
} from 'lucide-react';

// --- MOCK DATA ---
const SEMESTERS = [
  "1st Semester", "2nd Semester", "3rd Semester", 
  "4th Semester", "5th Semester", "6th Semester"
];

const COURSES_DATA = [
  // --- 6th Semester (Current/Active) ---
  {
    id: 'cs601', semester: '6th Semester', code: 'CS601', name: 'Advanced Data Structures', credits: 4, faculty: 'Dr. Alan Turing',
    type: 'Core',
    description: 'In-depth study of advanced data structures including B-Trees, Red-Black Trees, Heaps, and Graph algorithms.',
    outcomes: ['Master advanced tree structures', 'Analyze algorithm complexity', 'Implement efficient graph algorithms'],
    topics: ['Red-Black Trees', 'B-Trees & B+ Trees', 'Binomial & Fibonacci Heaps', 'Disjoint Sets', 'Graph Algorithms'],
    assignments: [
      { id: 1, title: 'B-Tree Implementation', status: 'Submitted', marks: '18/20', feedback: 'Good code structure.' },
      { id: 2, title: 'Graph Algorithms Analysis', status: 'Pending', marks: '-', feedback: '-' }
    ],
    exams: [
      { title: 'Internal Test 1', marks: '25/30' },
      { title: 'Mid-Semester Exam', marks: '42/50' },
      { title: 'End-Semester Exam', marks: 'Pending' }
    ],
    attendance: { total: 40, attended: 35, percentage: 87.5 },
    evaluation: { breakdown: 'Assignments (20%), Internals (20%), Mid-Sem (20%), End-Sem (40%)', passing: '40% Overall', grade: 'In Progress' }
  },
  {
    id: 'cs602', semester: '6th Semester', code: 'CS602', name: 'Artificial Intelligence', credits: 4, faculty: 'Prof. Marvin Minsky',
    type: 'Core',
    description: 'Introduction to AI, problem solving agents, search algorithms, game playing, and knowledge representation.',
    outcomes: ['Understand AI fundamentals', 'Implement search algorithms', 'Design knowledge-based systems'],
    topics: ['Intelligent Agents', 'Search Algorithms (A*, BFS, DFS)', 'Game Theory', 'Constraint Satisfaction Problems', 'Knowledge Representation'],
    assignments: [
      { id: 1, title: 'Search Algorithms Lab', status: 'Submitted', marks: '19/20', feedback: 'Optimized solution.' }
    ],
    exams: [
      { title: 'Internal Test 1', marks: '27/30' },
      { title: 'Mid-Semester Exam', marks: '44/50' },
      { title: 'End-Semester Exam', marks: 'Pending' }
    ],
    attendance: { total: 38, attended: 36, percentage: 94.7 },
    evaluation: { breakdown: 'Assignments (20%), Internals (20%), Mid-Sem (20%), End-Sem (40%)', passing: '40% Overall', grade: 'In Progress' }
  },
  {
    id: 'cs603', semester: '6th Semester', code: 'CS603', name: 'Machine Learning', credits: 4, faculty: 'Dr. Andrew Ng',
    type: 'Core',
    description: 'Supervised and unsupervised learning, regression, classification, clustering, and neural networks.',
    outcomes: ['Build ML models', 'Evaluate model performance', 'Apply ML to real-world problems'],
    topics: ['Linear Regression', 'Logistic Regression', 'Decision Trees', 'SVM', 'Clustering (K-Means)', 'Neural Networks'],
    assignments: [
      { id: 1, title: 'Linear Regression Project', status: 'Submitted', marks: '20/20', feedback: 'Excellent analysis.' },
      { id: 2, title: 'Classification Task', status: 'Pending', marks: '-', feedback: '-' }
    ],
    exams: [
      { title: 'Internal Test 1', marks: '22/30' },
      { title: 'Mid-Semester Exam', marks: '40/50' },
      { title: 'End-Semester Exam', marks: 'Pending' }
    ],
    attendance: { total: 42, attended: 30, percentage: 71.4 },
    evaluation: { breakdown: 'Assignments (20%), Internals (20%), Mid-Sem (20%), End-Sem (40%)', passing: '40% Overall', grade: 'In Progress' }
  },
  {
    id: 'cs604', semester: '6th Semester', code: 'CS604', name: 'Cloud Computing', credits: 3, faculty: 'Ms. Ada Lovelace',
    type: 'Core',
    description: 'Cloud computing models, virtualization, cloud security, and services (IaaS, PaaS, SaaS).',
    outcomes: ['Understand cloud architecture', 'Deploy applications on cloud', 'Manage cloud resources'],
    topics: ['Virtualization', 'Cloud Models (Public, Private, Hybrid)', 'AWS/Azure Basics', 'Containerization (Docker)', 'Cloud Security'],
    assignments: [
      { id: 1, title: 'AWS EC2 Setup', status: 'Submitted', marks: '15/15', feedback: 'Correctly configured.' }
    ],
    exams: [
      { title: 'Internal Test 1', marks: '25/30' },
      { title: 'Mid-Semester Exam', marks: '38/50' },
      { title: 'End-Semester Exam', marks: 'Pending' }
    ],
    attendance: { total: 30, attended: 28, percentage: 93.3 },
    evaluation: { breakdown: 'Assignments (20%), Internals (20%), Mid-Sem (20%), End-Sem (40%)', passing: '40% Overall', grade: 'In Progress' }
  },
  {
    id: 'cs605', semester: '6th Semester', code: 'CS605', name: 'Software Project Management', credits: 3, faculty: 'Mr. Frederick Brooks',
    type: 'Elective',
    description: 'Principles of software project management, planning, scheduling, risk management, and quality assurance.',
    outcomes: ['Plan software projects', 'Estimate costs and effort', 'Manage project risks'],
    topics: ['Project Planning', 'Cost Estimation', 'Risk Management', 'Quality Assurance', 'Agile Project Management'],
    assignments: [
      { id: 1, title: 'Project Plan Document', status: 'Pending', marks: '-', feedback: '-' }
    ],
    exams: [
      { title: 'Internal Test 1', marks: '28/30' },
      { title: 'Mid-Semester Exam', marks: '46/50' },
      { title: 'End-Semester Exam', marks: 'Pending' }
    ],
    attendance: { total: 25, attended: 25, percentage: 100.0 },
    evaluation: { breakdown: 'Assignments (30%), Projects (30%), End-Sem (40%)', passing: '40% Overall', grade: 'In Progress' }
  },
  {
    id: 'cs606', semester: '6th Semester', code: 'CS606', name: 'Information Security', credits: 3, faculty: 'Dr. Whitfield Diffie',
    type: 'Elective',
    description: 'Fundamentals of information security, cryptography, network security, and security policies.',
    outcomes: ['Identify security threats', 'Apply cryptographic techniques', 'Secure network communications'],
    topics: ['Cryptography Basics', 'Public Key Infrastructure', 'Network Security Protocols', 'Firewalls & IDS', 'Ethical Hacking'],
    assignments: [],
    exams: [
      { title: 'Internal Test 1', marks: '24/30' },
      { title: 'Mid-Semester Exam', marks: '41/50' },
      { title: 'End-Semester Exam', marks: 'Pending' }
    ],
    attendance: { total: 35, attended: 32, percentage: 91.4 },
    evaluation: { breakdown: 'Assignments (20%), Internals (20%), Mid-Sem (20%), End-Sem (40%)', passing: '40% Overall', grade: 'In Progress' }
  },

  // --- 5th Semester ---
  {
    id: 'cs501', semester: '5th Semester', code: 'CS501', name: 'Data Structures & Algorithms', credits: 4, faculty: 'Dr. Sarah Smith',
    type: 'Core',
    description: 'Comprehensive study of data structures (trees, graphs, heaps) and algorithm analysis.',
    outcomes: ['Understand data structures', 'Analyze algorithm efficiency', 'Solve complex problems'],
    topics: ['Stacks & Queues', 'Trees', 'Graphs', 'Sorting & Searching', 'Hashing'],
    assignments: [
      { id: 1, title: 'Implementation of AVL Trees', status: 'Submitted', marks: '18/20', feedback: 'Excellent logic.' }
    ],
    exams: [
      { title: 'Internal Test 1', marks: '24/30' },
      { title: 'Mid-Semester Exam', marks: '42/50' },
      { title: 'End-Semester Exam', marks: '85/100' }
    ],
    attendance: { total: 45, attended: 40, percentage: 88.8 },
    evaluation: { breakdown: 'Standard', passing: '40%', grade: 'A' }
  },
  {
    id: 'cs502', semester: '5th Semester', code: 'CS502', name: 'Database Management Systems', credits: 4, faculty: 'Prof. John Doe',
    type: 'Core',
    description: 'Design and implementation of database systems, SQL, normalization, and transaction management.',
    outcomes: ['Design relational databases', 'Write complex SQL queries', 'Understand transactions'],
    topics: ['ER Models', 'Relational Algebra', 'SQL', 'Normalization', 'Concurrency Control'],
    assignments: [
      { id: 1, title: 'SQL Queries', status: 'Submitted', marks: '17/20', feedback: 'Good.' }
    ],
    exams: [
      { title: 'Internal Test 1', marks: '26/30' },
      { title: 'Mid-Semester Exam', marks: '45/50' },
      { title: 'End-Semester Exam', marks: '88/100' }
    ],
    attendance: { total: 42, attended: 38, percentage: 90.4 },
    evaluation: { breakdown: 'Standard', passing: '40%', grade: 'A+' }
  },
  {
    id: 'cs503', semester: '5th Semester', code: 'CS503', name: 'Computer Networks', credits: 3, faculty: 'Ms. Emily White',
    type: 'Core',
    description: 'Introduction to computer networks, OSI model, TCP/IP, and network security basics.',
    outcomes: ['Understand network layers', 'Analyze network protocols', 'Basic network configuration'],
    topics: ['OSI Model', 'TCP/IP', 'Data Link Layer', 'Network Layer', 'Transport Layer'],
    assignments: [],
    exams: [
      { title: 'Internal Test 1', marks: '20/30' },
      { title: 'Mid-Semester Exam', marks: '38/50' },
      { title: 'End-Semester Exam', marks: '80/100' }
    ],
    attendance: { total: 30, attended: 25, percentage: 83.3 },
    evaluation: { breakdown: 'Standard', passing: '40%', grade: 'B+' }
  },
  {
    id: 'cs504', semester: '5th Semester', code: 'CS504', name: 'Operating Systems', credits: 3, faculty: 'Dr. Alan Grant',
    type: 'Core',
    description: 'Process management, memory management, file systems, and concurrency.',
    outcomes: ['Understand OS concepts', 'Process scheduling', 'Memory management'],
    topics: ['Processes & Threads', 'CPU Scheduling', 'Deadlocks', 'Memory Management', 'File Systems'],
    assignments: [],
    exams: [
      { title: 'Internal Test 1', marks: '18/30' },
      { title: 'Mid-Semester Exam', marks: '35/50' },
      { title: 'End-Semester Exam', marks: '78/100' }
    ],
    attendance: { total: 40, attended: 30, percentage: 75.0 },
    evaluation: { breakdown: 'Standard', passing: '40%', grade: 'B' }
  },

  // --- 4th Semester ---
  {
    id: 'cs401', semester: '4th Semester', code: 'CS401', name: 'Discrete Mathematics', credits: 4, faculty: 'Dr. Paul Green',
    type: 'Core',
    description: 'Logic, set theory, combinatorics, and graph theory basics.',
    outcomes: ['Apply mathematical logic', 'Solve counting problems', 'Understand graph theory'],
    topics: ['Logic & Proofs', 'Set Theory', 'Combinatorics', 'Graph Theory', 'Relations & Functions'],
    assignments: [{ id: 1, title: 'Logic Problems', status: 'Submitted', marks: '20/20', feedback: '-' }],
    exams: [
      { title: 'Internal Test 1', marks: '28/30' },
      { title: 'Mid-Semester Exam', marks: '45/50' },
      { title: 'End-Semester Exam', marks: '90/100' }
    ],
    attendance: { total: 50, attended: 48, percentage: 96.0 },
    evaluation: { breakdown: 'Standard', passing: '40%', grade: 'O' }
  },
  {
    id: 'cs402', semester: '4th Semester', code: 'CS402', name: 'Computer Organization', credits: 4, faculty: 'Prof. Lisa Ray',
    type: 'Core',
    description: 'Digital logic, processor architecture, and assembly language.',
    outcomes: ['Understand computer architecture', 'Assembly programming', 'Memory organization'],
    topics: ['Digital Logic', 'Instruction Set Architecture', 'Assembly Language', 'Memory Hierarchy', 'I/O Organization'],
    assignments: [],
    exams: [
      { title: 'Internal Test 1', marks: '22/30' },
      { title: 'Mid-Semester Exam', marks: '40/50' },
      { title: 'End-Semester Exam', marks: '85/100' }
    ],
    attendance: { total: 50, attended: 45, percentage: 90.0 },
    evaluation: { breakdown: 'Standard', passing: '40%', grade: 'A+' }
  },
  {
    id: 'cs403', semester: '4th Semester', code: 'CS403', name: 'Design & Analysis of Algorithms', credits: 4, faculty: 'Dr. Cormen',
    type: 'Core',
    description: 'Advanced algorithm design techniques including Divide and Conquer, Dynamic Programming, and Greedy algorithms.',
    outcomes: ['Design efficient algorithms', 'Analyze time complexity', 'Solve optimization problems'],
    topics: ['Divide and Conquer', 'Dynamic Programming', 'Greedy Algorithms', 'Graph Algorithms', 'NP-Completeness'],
    assignments: [],
    exams: [
      { title: 'End-Semester Exam', marks: '82/100' }
    ],
    attendance: { total: 45, attended: 42, percentage: 93.3 },
    evaluation: { breakdown: 'Standard', passing: '40%', grade: 'A' }
  },

  // --- 3rd Semester ---
  {
    id: 'cs301_hist', semester: '3rd Semester', code: 'CS301', name: 'Object Oriented Programming', credits: 4, faculty: 'Prof. Stroustrup',
    type: 'Core',
    description: 'Object-oriented programming concepts using C++ and Java.',
    outcomes: ['Understand OOP principles', 'Implement classes and objects', 'Use inheritance and polymorphism'],
    topics: ['Classes & Objects', 'Inheritance', 'Polymorphism', 'Exception Handling', 'File I/O'],
    assignments: [],
    exams: [
      { title: 'End-Semester Exam', marks: '88/100' }
    ],
    attendance: { total: 48, attended: 46, percentage: 95.8 },
    evaluation: { breakdown: 'Standard', passing: '40%', grade: 'A+' }
  },
  {
    id: 'cs302_hist', semester: '3rd Semester', code: 'CS302', name: 'Digital Electronics', credits: 3, faculty: 'Dr. Shannon',
    type: 'Core',
    description: 'Boolean algebra, logic gates, combinational and sequential circuits.',
    outcomes: ['Analyze logic circuits', 'Design combinational circuits', 'Understand sequential circuits'],
    topics: ['Boolean Algebra', 'Logic Gates', 'K-Maps', 'Flip-Flops', 'Counters'],
    assignments: [],
    exams: [
      { title: 'End-Semester Exam', marks: '75/100' }
    ],
    attendance: { total: 40, attended: 35, percentage: 87.5 },
    evaluation: { breakdown: 'Standard', passing: '40%', grade: 'B+' }
  },
  {
    id: 'cs303_hist', semester: '3rd Semester', code: 'CS303', name: 'Mathematics III', credits: 4, faculty: 'Prof. Fourier',
    type: 'Core',
    description: 'Differential equations, Laplace transforms, and Fourier series.',
    outcomes: ['Solve differential equations', 'Apply Laplace transforms', 'Understand Fourier series'],
    topics: ['ODEs', 'Laplace Transforms', 'Fourier Series', 'Partial Differential Equations', 'Complex Variables'],
    assignments: [],
    exams: [
      { title: 'End-Semester Exam', marks: '92/100' }
    ],
    attendance: { total: 50, attended: 50, percentage: 100.0 },
    evaluation: { breakdown: 'Standard', passing: '40%', grade: 'O' }
  },

  // --- 2nd Semester ---
  {
    id: 'cs201_hist', semester: '2nd Semester', code: 'CS201', name: 'Mathematics II', credits: 4, faculty: 'Dr. Gauss',
    type: 'Core',
    description: 'Linear algebra, vector calculus, and multiple integrals.',
    outcomes: ['Solve linear systems', 'Understand vector calculus', 'Evaluate multiple integrals'],
    topics: ['Matrices & Determinants', 'Vector Calculus', 'Multiple Integrals', 'Eigenvalues & Eigenvectors', 'Gradient, Divergence, Curl'],
    assignments: [],
    exams: [
      { title: 'End-Semester Exam', marks: '85/100' }
    ],
    attendance: { total: 45, attended: 43, percentage: 95.5 },
    evaluation: { breakdown: 'Standard', passing: '40%', grade: 'A+' }
  },
  {
    id: 'cs202_hist', semester: '2nd Semester', code: 'CS202', name: 'Data Structures (Basics)', credits: 3, faculty: 'Prof. Knuth',
    type: 'Core',
    description: 'Introduction to basic data structures like arrays, linked lists, stacks, and queues.',
    outcomes: ['Implement basic data structures', 'Understand linear data structures', 'Basic algorithm analysis'],
    topics: ['Arrays', 'Linked Lists', 'Stacks', 'Queues', 'Introduction to Algorithms'],
    assignments: [],
    exams: [
      { title: 'End-Semester Exam', marks: '80/100' }
    ],
    attendance: { total: 40, attended: 38, percentage: 95.0 },
    evaluation: { breakdown: 'Standard', passing: '40%', grade: 'A' }
  },
  {
    id: 'cs203_hist', semester: '2nd Semester', code: 'CS203', name: 'Object-Oriented Programming (C++)', credits: 3, faculty: 'Dr. Stroustrup',
    type: 'Core',
    description: 'Basics of OOP using C++.',
    outcomes: ['Understand classes', 'Basic inheritance', 'Polymorphism'],
    topics: ['Classes', 'Objects', 'Constructors', 'Inheritance', 'Operator Overloading'],
    assignments: [],
    exams: [
      { title: 'End-Semester Exam', marks: '88/100' }
    ],
    attendance: { total: 42, attended: 40, percentage: 95.2 },
    evaluation: { breakdown: 'Standard', passing: '40%', grade: 'A+' }
  },
  {
    id: 'cs204_hist', semester: '2nd Semester', code: 'CS204', name: 'Computer Organization', credits: 3, faculty: 'Prof. Von Neumann',
    type: 'Core',
    description: 'Basic computer organization and architecture.',
    outcomes: ['Understand computer structure', 'Instruction execution', 'Memory organization'],
    topics: ['Basic Architecture', 'Instruction Cycle', 'Memory', 'I/O', 'Bus Structure'],
    assignments: [],
    exams: [
      { title: 'End-Semester Exam', marks: '78/100' }
    ],
    attendance: { total: 38, attended: 35, percentage: 92.1 },
    evaluation: { breakdown: 'Standard', passing: '40%', grade: 'B+' }
  },

  // --- 1st Semester ---
  {
    id: 'cs101_hist', semester: '1st Semester', code: 'CS101', name: 'Mathematics I', credits: 4, faculty: 'Dr. Newton',
    type: 'Core',
    description: 'Calculus, infinite series, and differential calculus.',
    outcomes: ['Apply calculus concepts', 'Analyze series convergence', 'Solve differentiation problems'],
    topics: ['Differential Calculus', 'Integral Calculus', 'Infinite Series', 'Mean Value Theorems', 'Taylor Series'],
    assignments: [],
    exams: [
      { title: 'End-Semester Exam', marks: '90/100' }
    ],
    attendance: { total: 50, attended: 48, percentage: 96.0 },
    evaluation: { breakdown: 'Standard', passing: '40%', grade: 'O' }
  },
  {
    id: 'cs102_hist', semester: '1st Semester', code: 'CS102', name: 'Programming Fundamentals', credits: 4, faculty: 'Prof. Ritchie',
    type: 'Core',
    description: 'Introduction to C programming and problem solving.',
    outcomes: ['Write C programs', 'Solve problems using algorithms', 'Understand structured programming'],
    topics: ['C Basics', 'Control Structures', 'Arrays', 'Functions', 'Pointers'],
    assignments: [],
    exams: [
      { title: 'End-Semester Exam', marks: '95/100' }
    ],
    attendance: { total: 45, attended: 45, percentage: 100.0 },
    evaluation: { breakdown: 'Standard', passing: '40%', grade: 'O' }
  },
  {
    id: 'cs103_hist', semester: '1st Semester', code: 'CS103', name: 'Digital Logic', credits: 3, faculty: 'Dr. Boole',
    type: 'Core',
    description: 'Binary systems, boolean algebra, and logic gates.',
    outcomes: ['Understand binary systems', 'Analyze logic gates', 'Simplify boolean expressions'],
    topics: ['Number Systems', 'Boolean Algebra', 'Logic Gates', 'K-Maps', 'Combinational Circuits'],
    assignments: [],
    exams: [
      { title: 'End-Semester Exam', marks: '85/100' }
    ],
    attendance: { total: 40, attended: 38, percentage: 95.0 },
    evaluation: { breakdown: 'Standard', passing: '40%', grade: 'A+' }
  },
  {
    id: 'cs104_hist', semester: '1st Semester', code: 'CS104', name: 'Communication Skills', credits: 2, faculty: 'Ms. Shakespeare',
    type: 'Elective',
    description: 'Effective communication, writing, and presentation skills.',
    outcomes: ['Communicate effectively', 'Write professional documents', 'Deliver presentations'],
    topics: ['Verbal Communication', 'Non-verbal Communication', 'Technical Writing', 'Presentation Skills', 'Group Discussions'],
    assignments: [],
    exams: [
      { title: 'End-Semester Exam', marks: '88/100' }
    ],
    attendance: { total: 30, attended: 28, percentage: 93.3 },
    evaluation: { breakdown: 'Standard', passing: '40%', grade: 'A+' }
  }
];

import SemesterFilter from '../components/SemesterFilter';

const Academics = () => {
  const [activeSemester, setActiveSemester] = useState('6th Semester');
  const [selectedCourse, setSelectedCourse] = useState(null);
  
  // --- Syllabus Download State ---
  const [isSyllabusModalOpen, setSyllabusModalOpen] = useState(false);
  const [downloadSemester, setDownloadSemester] = useState('6th Semester');
  const [downloadSubject, setDownloadSubject] = useState(null);
  const [isDownloading, setIsDownloading] = useState(false);
  const [downloadSuccess, setDownloadSuccess] = useState(false);

  const filteredCourses = COURSES_DATA.filter(course => course.semester === activeSemester);
  const downloadSubjects = COURSES_DATA.filter(course => course.semester === downloadSemester);

  const isHistorical = activeSemester !== '6th Semester'; // 6th is current

  // --- Handlers ---
  const handleOpenSyllabusModal = () => {
    setDownloadSemester(activeSemester);
    setDownloadSubject(null);
    setDownloadSuccess(false);
    setSyllabusModalOpen(true);
  };

  const handleDownloadSyllabus = () => {
    if (!downloadSemester || !downloadSubject) return;

    setIsDownloading(true);
    
    // Simulate download delay
    setTimeout(() => {
      // Create a dummy PDF blob
      const dummyContent = `Syllabus for ${downloadSubject.name} (${downloadSubject.code})\nSemester: ${downloadSemester}\n\n[This is a demo syllabus file generated by DigiCampus]`;
      const blob = new Blob([dummyContent], { type: 'application/pdf' });
      const url = URL.createObjectURL(blob);
      
      const a = document.createElement('a');
      a.href = url;
      a.download = `${downloadSemester.replace(/ /g, '_')}_${downloadSubject.name.replace(/ /g, '_')}_Syllabus.pdf`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);

      setIsDownloading(false);
      setDownloadSuccess(true);
    }, 1500);
  };

  // --- Render Functions ---

  const renderSyllabusModal = () => {
    if (!isSyllabusModalOpen) return null;

    return (
      <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4 backdrop-blur-sm animate-fadeIn">
        <div className="bg-white rounded-xl shadow-2xl w-full max-w-lg overflow-hidden flex flex-col max-h-[90vh]">
          {/* Modal Header */}
          <div className="p-6 border-b border-gray-100 flex items-center justify-between bg-gray-50/50">
            <div>
              <h2 className="text-xl font-bold text-gray-800">Download Syllabus</h2>
              <p className="text-sm text-gray-500 mt-1">Select semester and subject to download</p>
            </div>
            <button 
              onClick={() => setSyllabusModalOpen(false)}
              className="p-2 hover:bg-gray-200 rounded-full text-gray-500 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Modal Body */}
          <div className="p-6 overflow-y-auto space-y-6">
            
            {/* Semester Selection */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700 flex items-center gap-2">
                <Calendar className="w-4 h-4 text-primary" />
                Select Semester
              </label>
              <div className="relative">
                <select 
                  value={downloadSemester}
                  onChange={(e) => {
                    setDownloadSemester(e.target.value);
                    setDownloadSubject(null);
                  }}
                  className="w-full p-3 pl-4 pr-10 bg-gray-50 border border-gray-200 rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary appearance-none cursor-pointer"
                >
                  {SEMESTERS.map(sem => (
                    <option key={sem} value={sem}>{sem}</option>
                  ))}
                </select>
                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
              </div>
            </div>

            {/* Subject Selection */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700 flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-primary" />
                Select Subject
              </label>
              
              <div className="border border-gray-200 rounded-lg overflow-hidden max-h-[250px] overflow-y-auto">
                {downloadSubjects.length > 0 ? (
                  <div className="divide-y divide-gray-100">
                    {downloadSubjects.map(sub => (
                      <button
                        key={sub.id}
                        onClick={() => setDownloadSubject(sub)}
                        className={`w-full text-left p-3 flex items-center justify-between transition-colors ${
                          downloadSubject?.id === sub.id 
                            ? 'bg-blue-50 text-primary' 
                            : 'hover:bg-gray-50 text-gray-700'
                        }`}
                      >
                        <div>
                          <p className="font-medium text-sm">{sub.name}</p>
                          <p className="text-xs text-gray-500 font-mono mt-0.5">{sub.code}</p>
                        </div>
                        {downloadSubject?.id === sub.id && (
                          <CheckCircle className="w-4 h-4 text-primary" />
                        )}
                      </button>
                    ))}
                  </div>
                ) : (
                  <div className="p-8 text-center text-gray-400 text-sm">
                    No subjects found for this semester.
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Modal Footer */}
          <div className="p-6 border-t border-gray-100 bg-gray-50/50 flex flex-col gap-3">
            {downloadSuccess ? (
               <div className="p-3 bg-green-50 text-green-700 rounded-lg text-sm flex items-center justify-center gap-2 animate-fadeIn">
                 <Check className="w-4 h-4" />
                 Download Started Successfully!
               </div>
            ) : (
              <button
                onClick={handleDownloadSyllabus}
                disabled={!downloadSemester || !downloadSubject || isDownloading}
                className={`w-full py-3 rounded-lg font-semibold flex items-center justify-center gap-2 transition-all ${
                  !downloadSemester || !downloadSubject || isDownloading
                    ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                    : 'bg-primary text-white hover:bg-blue-800 shadow-lg hover:shadow-xl active:scale-[0.98]'
                }`}
              >
                {isDownloading ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Preparing Download...
                  </>
                ) : (
                  <>
                    <Download className="w-5 h-5" />
                    Download PDF
                  </>
                )}
              </button>
            )}
            
            {downloadSuccess && (
              <button 
                onClick={() => setSyllabusModalOpen(false)}
                className="text-sm text-gray-500 hover:text-gray-700 text-center mt-2 underline"
              >
                Close Window
              </button>
            )}
          </div>
        </div>
      </div>
    );
  };

  const renderSemesterFilter = () => (
    <SemesterFilter 
      activeSemester={activeSemester} 
      onSemesterChange={(sem) => {
        setActiveSemester(sem);
        setSelectedCourse(null);
      }} 
    />
  );

  const renderCourseList = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {filteredCourses.length > 0 ? (
        filteredCourses.map((sub) => (
          <div 
            key={sub.id} 
            onClick={() => setSelectedCourse(sub)}
            className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:border-primary/50 transition-all cursor-pointer hover:shadow-md group"
          >
            <div className="flex justify-between items-start mb-4">
              <div className="w-10 h-10 bg-blue-50 text-primary rounded-lg flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors">
                <BookOpen className="w-5 h-5" />
              </div>
              <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs font-bold rounded">
                {sub.credits} Credits
              </span>
            </div>
            
            <h3 className="font-bold text-gray-800 mb-1">{sub.name}</h3>
            <p className="text-sm text-gray-500 font-mono mb-4">{sub.code}</p>
            
            <div className="flex items-center gap-2 text-sm text-gray-600 border-t border-gray-50 pt-3">
              <User className="w-4 h-4 text-gray-400" />
              <span>{sub.faculty}</span>
            </div>
          </div>
        ))
      ) : (
        <div className="col-span-full text-center py-10 text-gray-400">
          <BookOpen className="w-12 h-12 mx-auto mb-3 opacity-20" />
          <p>No courses found for {activeSemester}</p>
        </div>
      )}
    </div>
  );

  const renderCourseDetail = () => {
    if (!selectedCourse) return null;

    return (
      <div className="space-y-6 animate-fadeIn">
        {/* Navigation & Header */}
        <div className="flex items-center gap-4">
          <button 
            onClick={() => setSelectedCourse(null)}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors text-gray-600"
          >
            <ArrowLeft className="w-6 h-6" />
          </button>
          <div>
            <h2 className="text-2xl font-bold text-gray-800">{selectedCourse.name}</h2>
            <div className="flex items-center gap-3 text-sm text-gray-500 mt-1">
              <span className="font-mono bg-gray-100 px-2 py-0.5 rounded text-gray-700">{selectedCourse.code}</span>
              <span>•</span>
              <span>{selectedCourse.type} Course</span>
              <span>•</span>
              <span>{selectedCourse.credits} Credits</span>
            </div>
          </div>
        </div>

        {/* Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Main Info Column */}
          <div className="md:col-span-2 space-y-6">
            
            {/* Description & Overview */}
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <h3 className="text-lg font-semibold text-gray-800 mb-3 flex items-center gap-2">
                <FileText className="w-5 h-5 text-primary" />
                Course Overview
              </h3>
              <p className="text-gray-600 leading-relaxed mb-6">{selectedCourse.description}</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Topics */}
                <div>
                  <h4 className="font-medium text-gray-800 mb-2 flex items-center gap-2">
                    <List className="w-4 h-4 text-primary" />
                    Topics Covered
                  </h4>
                  <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
                    {selectedCourse.topics ? (
                      selectedCourse.topics.map((topic, idx) => (
                        <li key={idx}>{topic}</li>
                      ))
                    ) : (
                      <li>Detailed syllabus not available.</li>
                    )}
                  </ul>
                </div>
                
                {/* Outcomes */}
                <div>
                  <h4 className="font-medium text-gray-800 mb-2 flex items-center gap-2">
                    <Target className="w-4 h-4 text-primary" />
                    Learning Outcomes
                  </h4>
                  <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
                    {selectedCourse.outcomes ? (
                      selectedCourse.outcomes.map((outcome, idx) => (
                        <li key={idx}>{outcome}</li>
                      ))
                    ) : (
                      <li>Outcomes not available.</li>
                    )}
                  </ul>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-gray-50 flex items-center gap-2 text-sm text-gray-600">
                <User className="w-4 h-4 text-gray-400" />
                <span className="font-medium">Faculty:</span> {selectedCourse.faculty}
              </div>
            </div>

            {/* Assignments */}
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-primary" />
                Assignments
              </h3>
              <div className="space-y-3">
                {selectedCourse.assignments.length > 0 ? (
                  selectedCourse.assignments.map((asg) => (
                    <div key={asg.id} className="flex flex-col sm:flex-row sm:items-center justify-between p-4 bg-gray-50 rounded-lg border border-gray-100">
                      <div className="mb-2 sm:mb-0">
                        <h4 className="font-medium text-gray-800">{asg.title}</h4>
                        <span className={`text-xs px-2 py-0.5 rounded-full ${
                          asg.status === 'Submitted' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'
                        }`}>
                          {asg.status}
                        </span>
                      </div>
                      <div className="flex items-center gap-4 text-sm">
                        <div className="text-right">
                          <p className="text-gray-500 text-xs">Marks</p>
                          <p className="font-semibold text-gray-700">{asg.marks}</p>
                        </div>
                        <div className="text-right border-l pl-4 border-gray-200 min-w-[100px]">
                          <p className="text-gray-500 text-xs">Feedback</p>
                          <p className="text-gray-600 italic truncate max-w-[150px]">{asg.feedback}</p>
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <p className="text-gray-500 text-sm italic">No assignments recorded.</p>
                )}
              </div>
            </div>

            {/* Tests & Exams */}
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
                <Award className="w-5 h-5 text-primary" />
                Assessments & Results
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {selectedCourse.exams.map((exam, idx) => (
                  <div key={idx} className="p-4 bg-blue-50/50 rounded-lg border border-blue-100 text-center">
                    <p className="text-sm text-gray-500 mb-1">{exam.title}</p>
                    <p className="text-xl font-bold text-primary">{exam.marks}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Sidebar Stats Column */}
          <div className="space-y-6">
            
            {/* Attendance */}
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
                <Clock className="w-5 h-5 text-primary" />
                Attendance
              </h3>
              <div className="flex items-center justify-center py-4">
                <div className="relative w-32 h-32 flex items-center justify-center">
                  <svg className="w-full h-full transform -rotate-90">
                    <circle cx="64" cy="64" r="56" stroke="#e5e7eb" strokeWidth="8" fill="none" />
                    <circle 
                      cx="64" cy="64" r="56" 
                      stroke="#1e3a8a" strokeWidth="8" 
                      fill="none" 
                      strokeDasharray="351.86" 
                      strokeDashoffset={351.86 - (351.86 * selectedCourse.attendance.percentage) / 100}
                      className="transition-all duration-1000 ease-out"
                    />
                  </svg>
                  <div className="absolute text-center">
                    <span className="text-2xl font-bold text-gray-800">{selectedCourse.attendance.percentage}%</span>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4 text-center mt-2">
                <div className="p-2 bg-gray-50 rounded">
                  <p className="text-xs text-gray-500">Total</p>
                  <p className="font-semibold text-gray-700">{selectedCourse.attendance.total}</p>
                </div>
                <div className="p-2 bg-gray-50 rounded">
                  <p className="text-xs text-gray-500">Attended</p>
                  <p className="font-semibold text-gray-700">{selectedCourse.attendance.attended}</p>
                </div>
              </div>
            </div>

            {/* Grading / Evaluation */}
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
                <BarChart className="w-5 h-5 text-primary" />
                Evaluation
              </h3>
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-gray-500 mb-1">Grading Criteria</p>
                  <p className="text-sm text-gray-700">{selectedCourse.evaluation.breakdown}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-1">Passing Criteria</p>
                  <p className="text-sm text-gray-700 font-medium">{selectedCourse.evaluation.passing}</p>
                </div>
                <div className="pt-4 border-t border-gray-100">
                  <p className="text-sm text-gray-500 mb-1">Final Grade</p>
                  <div className="flex items-center justify-between">
                    <span className={`text-2xl font-bold ${
                      selectedCourse.evaluation.grade === 'In Progress' ? 'text-blue-600' : 'text-green-600'
                    }`}>
                      {selectedCourse.evaluation.grade}
                    </span>
                    {selectedCourse.evaluation.grade !== 'In Progress' && (
                      <span className="px-2 py-1 bg-green-100 text-green-700 text-xs font-bold rounded">
                        COMPLETED
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Historical Notice */}
            {isHistorical && (
              <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-gray-400 mt-0.5" />
                <div>
                  <p className="text-sm font-medium text-gray-700">Archived Record</p>
                  <p className="text-xs text-gray-500 mt-1">This course is from a previous semester. Submissions and editing are disabled.</p>
                </div>
              </div>
            )}

          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="space-y-6">
      {!selectedCourse && (
        <>
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-gray-800">Academics</h1>
            <button 
              onClick={() => alert(`Downloading Syllabus for ${activeSemester}...`)}
              className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm font-medium hover:bg-gray-50 text-gray-700"
            >
              <Download className="w-4 h-4" />
              Download Syllabus
            </button>
          </div>

          {/* 1) SEMESTER FILTER */}
          {renderSemesterFilter()}

          {/* 2) COURSE GRID */}
          {renderCourseList()}
        </>
      )}

      {/* 4) DETAILED VIEW */}
      {selectedCourse && renderCourseDetail()}

      {/* SYLLABUS MODAL */}
      {renderSyllabusModal()}
    </div>
  );
};

export default Academics;
