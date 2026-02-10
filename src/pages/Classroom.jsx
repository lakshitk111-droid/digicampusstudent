import React, { useState } from 'react';
import { Book, Video, FileText, MessageSquare, ArrowLeft, Calendar, User, Clock, CheckCircle } from 'lucide-react';

import SemesterFilter from '../components/SemesterFilter';

const Classroom = () => {
  const [activeSemester, setActiveSemester] = useState('6th Semester');
  const [selectedClassroom, setSelectedClassroom] = useState(null);

  const allClassrooms = [
    // --- 6th Semester (Active) ---
    { 
      id: 601,
      semester: '6th Semester', 
      subject: 'Adv. Data Structures', 
      faculty: 'Dr. Alan Turing', 
      code: 'CS601', 
      color: 'bg-blue-600', 
      type: 'Lecture', 
      status: 'Active',
      description: 'In-depth study of advanced data structures including B-Trees, Red-Black Trees, Heaps, and Graph algorithms.',
      schedule: 'Mon, Wed, Fri - 10:00 AM',
      syllabus: ['Red-Black Trees', 'B-Trees', 'Fibonacci Heaps', 'Graph Algorithms'],
      assessments: { assignments: '30%', midSem: '20%', endSem: '50%' }
    },
    { 
      id: 602,
      semester: '6th Semester', 
      subject: 'Advanced AI', 
      faculty: 'Prof. Marvin Minsky', 
      code: 'CS602', 
      color: 'bg-indigo-600', 
      type: 'Lab', 
      status: 'Active',
      description: 'Advanced topics in Artificial Intelligence, including Neural Networks, Deep Learning, and NLP.',
      schedule: 'Tue, Thu - 02:00 PM',
      syllabus: ['Deep Learning', 'NLP', 'Reinforcement Learning', 'Computer Vision'],
      assessments: { assignments: '40%', midSem: '20%', endSem: '40%' }
    },
    { 
      id: 603,
      semester: '6th Semester', 
      subject: 'Machine Learning', 
      faculty: 'Dr. Andrew Ng', 
      code: 'CS603', 
      color: 'bg-purple-600', 
      type: 'Lecture', 
      status: 'Active',
      description: 'Supervised and unsupervised learning, regression, classification, clustering, and neural networks.',
      schedule: 'Mon, Wed - 11:30 AM',
      syllabus: ['Regression', 'Classification', 'Clustering', 'Neural Networks'],
      assessments: { assignments: '20%', midSem: '30%', endSem: '50%' }
    },
    { 
      id: 604,
      semester: '6th Semester', 
      subject: 'Info. Security', 
      faculty: 'Dr. Whitfield Diffie', 
      code: 'CS606', 
      color: 'bg-emerald-600', 
      type: 'Lecture', 
      status: 'Active',
      description: 'Fundamentals of information security, cryptography, network security, and security policies.',
      schedule: 'Tue, Thu - 09:00 AM',
      syllabus: ['Cryptography', 'Network Security', 'Firewalls', 'Ethical Hacking'],
      assessments: { assignments: '25%', midSem: '25%', endSem: '50%' }
    },

    // --- 5th Semester (Completed) ---
    { 
      id: 501,
      semester: '5th Semester', 
      subject: 'Artificial Intelligence', 
      faculty: 'Prof. John McCarthy', 
      code: 'CS501', 
      color: 'bg-orange-600', 
      type: 'Lecture', 
      status: 'Completed', 
      grade: 'A', 
      attendance: '92%',
      description: 'Introduction to AI, problem solving agents, search algorithms, and game playing.',
      schedule: 'Completed',
      syllabus: ['Agents', 'Search Algos', 'Game Theory', 'Logic'],
      assessments: { assignments: 'Completed', midSem: 'Completed', endSem: 'Completed' }
    },
    { 
      id: 502,
      semester: '5th Semester', 
      subject: 'Data Mining', 
      faculty: 'Dr. Jiawei Han', 
      code: 'CS502', 
      color: 'bg-teal-600', 
      type: 'Lab', 
      status: 'Completed', 
      grade: 'A-', 
      attendance: '88%',
      description: 'Data preprocessing, mining frequent patterns, associations, and correlations.',
      schedule: 'Completed',
      syllabus: ['Preprocessing', 'Association Rules', 'Classification', 'Clustering'],
      assessments: { assignments: 'Completed', midSem: 'Completed', endSem: 'Completed' }
    },
    { 
      id: 503,
      semester: '5th Semester', 
      subject: 'Cloud Computing', 
      faculty: 'Ms. Ada Lovelace', 
      code: 'CS503', 
      color: 'bg-cyan-600', 
      type: 'Lecture', 
      status: 'Completed', 
      grade: 'B+', 
      attendance: '85%',
      description: 'Cloud computing models, virtualization, cloud security, and services (IaaS, PaaS, SaaS).',
      schedule: 'Completed',
      syllabus: ['Virtualization', 'Cloud Models', 'AWS Basics', 'Security'],
      assessments: { assignments: 'Completed', midSem: 'Completed', endSem: 'Completed' }
    },

    // --- 4th Semester (Completed) ---
    { 
      id: 401,
      semester: '4th Semester', 
      subject: 'Software Engineering', 
      faculty: 'Dr. Karen Brown', 
      code: 'CS401', 
      color: 'bg-rose-600', 
      type: 'Lecture', 
      status: 'Completed', 
      grade: 'A', 
      attendance: '90%',
      description: 'Software development life cycle, agile methodologies, and project management.',
      schedule: 'Completed',
      syllabus: ['SDLC', 'Agile', 'Testing', 'Project Mgmt'],
      assessments: { assignments: 'Completed', midSem: 'Completed', endSem: 'Completed' }
    },
    { 
      id: 402,
      semester: '4th Semester', 
      subject: 'Web Technologies', 
      faculty: 'Mr. David Lee', 
      code: 'CS402', 
      color: 'bg-amber-600', 
      type: 'Lab', 
      status: 'Completed', 
      grade: 'A+', 
      attendance: '95%',
      description: 'Frontend and backend web development using modern frameworks.',
      schedule: 'Completed',
      syllabus: ['HTML/CSS', 'JavaScript', 'React', 'Node.js'],
      assessments: { assignments: 'Completed', midSem: 'Completed', endSem: 'Completed' }
    },
    { 
      id: 403,
      semester: '4th Semester', 
      subject: 'Theory of Computation', 
      faculty: 'Prof. Noam Chomsky', 
      code: 'CS403', 
      color: 'bg-violet-600', 
      type: 'Lecture', 
      status: 'Completed', 
      grade: 'B', 
      attendance: '82%',
      description: 'Mathematical foundations of computation, automata theory, and complexity.',
      schedule: 'Completed',
      syllabus: ['Automata', 'Context-Free Grammars', 'Turing Machines', 'Complexity'],
      assessments: { assignments: 'Completed', midSem: 'Completed', endSem: 'Completed' }
    },

    // --- 3rd Semester (Completed) ---
    { 
      id: 301,
      semester: '3rd Semester', 
      subject: 'Database Mgmt', 
      faculty: 'Prof. John Doe', 
      code: 'CS301', 
      color: 'bg-blue-600', 
      type: 'Lab', 
      status: 'Completed', 
      grade: 'A', 
      attendance: '91%',
      description: 'Design and implementation of relational database systems, SQL, and normalization.',
      schedule: 'Completed',
      syllabus: ['ER Modeling', 'SQL', 'Normalization', 'Transactions'],
      assessments: { assignments: 'Completed', midSem: 'Completed', endSem: 'Completed' }
    },
    { 
      id: 302,
      semester: '3rd Semester', 
      subject: 'Operating Systems', 
      faculty: 'Dr. Alan Grant', 
      code: 'CS302', 
      color: 'bg-indigo-600', 
      type: 'Lecture', 
      status: 'Completed', 
      grade: 'B+', 
      attendance: '88%',
      description: 'Process management, memory management, file systems, and concurrency.',
      schedule: 'Completed',
      syllabus: ['Processes', 'Scheduling', 'Memory Mgmt', 'File Systems'],
      assessments: { assignments: 'Completed', midSem: 'Completed', endSem: 'Completed' }
    },
    { 
      id: 303,
      semester: '3rd Semester', 
      subject: 'Computer Networks', 
      faculty: 'Ms. Emily White', 
      code: 'CS303', 
      color: 'bg-purple-600', 
      type: 'Lecture', 
      status: 'Completed', 
      grade: 'A-', 
      attendance: '85%',
      description: 'Introduction to computer networks, OSI model, TCP/IP, and network security basics.',
      schedule: 'Completed',
      syllabus: ['OSI Model', 'TCP/IP', 'Routing', 'Switching'],
      assessments: { assignments: 'Completed', midSem: 'Completed', endSem: 'Completed' }
    },

    // --- 2nd Semester (Completed) ---
    { 
      id: 201,
      semester: '2nd Semester', 
      subject: 'Mathematics II', 
      faculty: 'Dr. Gauss', 
      code: 'MA201', 
      color: 'bg-emerald-600', 
      type: 'Lecture', 
      status: 'Completed', 
      grade: 'A+', 
      attendance: '96%',
      description: 'Linear algebra, vector calculus, and multiple integrals.',
      schedule: 'Completed',
      syllabus: ['Linear Algebra', 'Vector Calculus', 'Integrals', 'Differential Eq'],
      assessments: { assignments: 'Completed', midSem: 'Completed', endSem: 'Completed' }
    },
    { 
      id: 202,
      semester: '2nd Semester', 
      subject: 'Data Structures', 
      faculty: 'Prof. Knuth', 
      code: 'CS201', 
      color: 'bg-orange-600', 
      type: 'Lab', 
      status: 'Completed', 
      grade: 'A', 
      attendance: '93%',
      description: 'Introduction to basic data structures like arrays, linked lists, stacks, and queues.',
      schedule: 'Completed',
      syllabus: ['Arrays', 'Linked Lists', 'Stacks', 'Queues'],
      assessments: { assignments: 'Completed', midSem: 'Completed', endSem: 'Completed' }
    },
    { 
      id: 203,
      semester: '2nd Semester', 
      subject: 'OOPS', 
      faculty: 'Dr. Stroustrup', 
      code: 'CS202', 
      color: 'bg-teal-600', 
      type: 'Lecture', 
      status: 'Completed', 
      grade: 'O', 
      attendance: '98%',
      description: 'Object-oriented programming concepts using C++ and Java.',
      schedule: 'Completed',
      syllabus: ['Classes', 'Objects', 'Inheritance', 'Polymorphism'],
      assessments: { assignments: 'Completed', midSem: 'Completed', endSem: 'Completed' }
    },
    { 
      id: 204,
      semester: '2nd Semester', 
      subject: 'Comp. Organization', 
      faculty: 'Prof. Von Neumann', 
      code: 'CS203', 
      color: 'bg-cyan-600', 
      type: 'Lecture', 
      status: 'Completed', 
      grade: 'B+', 
      attendance: '89%',
      description: 'Basic computer organization and architecture.',
      schedule: 'Completed',
      syllabus: ['Architecture', 'Memory', 'I/O', 'Instruction Cycle'],
      assessments: { assignments: 'Completed', midSem: 'Completed', endSem: 'Completed' }
    },

    // --- 1st Semester (Completed) ---
    { 
      id: 101,
      semester: '1st Semester', 
      subject: 'Mathematics I', 
      faculty: 'Dr. Newton', 
      code: 'MA101', 
      color: 'bg-rose-600', 
      type: 'Lecture', 
      status: 'Completed', 
      grade: 'O', 
      attendance: '97%',
      description: 'Calculus, infinite series, and differential calculus.',
      schedule: 'Completed',
      syllabus: ['Calculus', 'Series', 'Limits', 'Derivatives'],
      assessments: { assignments: 'Completed', midSem: 'Completed', endSem: 'Completed' }
    },
    { 
      id: 102,
      semester: '1st Semester', 
      subject: 'Prog. Fundamentals', 
      faculty: 'Prof. Ritchie', 
      code: 'CS101', 
      color: 'bg-amber-600', 
      type: 'Lab', 
      status: 'Completed', 
      grade: 'A', 
      attendance: '95%',
      description: 'Introduction to C programming and problem solving.',
      schedule: 'Completed',
      syllabus: ['C Basics', 'Loops', 'Functions', 'Pointers'],
      assessments: { assignments: 'Completed', midSem: 'Completed', endSem: 'Completed' }
    },
    { 
      id: 103,
      semester: '1st Semester', 
      subject: 'Digital Logic', 
      faculty: 'Dr. Boole', 
      code: 'CS102', 
      color: 'bg-violet-600', 
      type: 'Lecture', 
      status: 'Completed', 
      grade: 'A+', 
      attendance: '94%',
      description: 'Binary systems, boolean algebra, and logic gates.',
      schedule: 'Completed',
      syllabus: ['Binary', 'Logic Gates', 'K-Maps', 'Circuits'],
      assessments: { assignments: 'Completed', midSem: 'Completed', endSem: 'Completed' }
    },
    { 
      id: 104,
      semester: '1st Semester', 
      subject: 'Comm. Skills', 
      faculty: 'Ms. Shakespeare', 
      code: 'HS101', 
      color: 'bg-blue-600', 
      type: 'Lecture', 
      status: 'Completed', 
      grade: 'A', 
      attendance: '92%',
      description: 'Effective communication, writing, and presentation skills.',
      schedule: 'Completed',
      syllabus: ['Speaking', 'Writing', 'Listening', 'Presenting'],
      assessments: { assignments: 'Completed', midSem: 'Completed', endSem: 'Completed' }
    }
  ];

  const filteredClassrooms = allClassrooms.filter(cls => cls.semester === activeSemester);

  if (selectedClassroom) {
    return (
      <div className="space-y-6 animate-in fade-in duration-300">
        <button 
          onClick={() => setSelectedClassroom(null)}
          className="flex items-center gap-2 text-gray-600 hover:text-primary font-medium transition-colors"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Classroom List
        </button>

        <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
          <div className={`h-32 ${selectedClassroom.color} p-6 flex flex-col justify-end relative`}>
            <div className="absolute top-6 right-6">
                <span className={`
                    px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide
                    ${selectedClassroom.status === 'Active' ? 'bg-green-400 text-green-900' : 'bg-white/90 text-gray-700'}
                `}>
                    {selectedClassroom.status}
                </span>
            </div>
            <h1 className="text-3xl font-bold text-white mb-1">{selectedClassroom.subject}</h1>
            <p className="text-white/90 font-medium flex items-center gap-2">
                <span className="bg-black/20 px-2 py-0.5 rounded text-sm font-mono">{selectedClassroom.code}</span>
                <span>• {selectedClassroom.semester}</span>
            </p>
          </div>
          
          <div className="p-6 grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-8">
                <section>
                    <h3 className="text-lg font-bold text-gray-800 mb-3 flex items-center gap-2">
                        <Book className="w-5 h-5 text-primary" /> Course Description
                    </h3>
                    <p className="text-gray-600 leading-relaxed">{selectedClassroom.description}</p>
                </section>

                <section>
                    <h3 className="text-lg font-bold text-gray-800 mb-3 flex items-center gap-2">
                        <FileText className="w-5 h-5 text-primary" /> Syllabus Overview
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {selectedClassroom.syllabus.map((item, idx) => (
                            <div key={idx} className="flex items-center gap-2 p-3 bg-gray-50 rounded-lg border border-gray-100 text-gray-700 text-sm">
                                <div className="w-2 h-2 rounded-full bg-primary/60"></div>
                                {item}
                            </div>
                        ))}
                    </div>
                </section>

                <section>
                    <h3 className="text-lg font-bold text-gray-800 mb-3 flex items-center gap-2">
                        <CheckCircle className="w-5 h-5 text-primary" /> Assessment Structure
                    </h3>
                    <div className="grid grid-cols-3 gap-4">
                        <div className="p-4 bg-orange-50 rounded-xl border border-orange-100 text-center">
                            <p className="text-xs text-orange-600 font-semibold uppercase mb-1">Assignments</p>
                            <p className="text-xl font-bold text-gray-800">{selectedClassroom.assessments.assignments}</p>
                        </div>
                        <div className="p-4 bg-blue-50 rounded-xl border border-blue-100 text-center">
                            <p className="text-xs text-blue-600 font-semibold uppercase mb-1">Mid-Sem</p>
                            <p className="text-xl font-bold text-gray-800">{selectedClassroom.assessments.midSem}</p>
                        </div>
                        <div className="p-4 bg-purple-50 rounded-xl border border-purple-100 text-center">
                            <p className="text-xs text-purple-600 font-semibold uppercase mb-1">End-Sem</p>
                            <p className="text-xl font-bold text-gray-800">{selectedClassroom.assessments.endSem}</p>
                        </div>
                    </div>
                </section>
            </div>

            <div className="space-y-6">
                <div className="p-5 rounded-xl bg-gray-50 border border-gray-200 space-y-4">
                    <h4 className="font-bold text-gray-800 text-sm uppercase tracking-wider border-b border-gray-200 pb-2">Class Details</h4>
                    
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-500">
                            <User className="w-5 h-5" />
                        </div>
                        <div>
                            <p className="text-xs text-gray-500">Faculty</p>
                            <p className="text-sm font-semibold text-gray-800">{selectedClassroom.faculty}</p>
                        </div>
                    </div>

                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-500">
                            <Calendar className="w-5 h-5" />
                        </div>
                        <div>
                            <p className="text-xs text-gray-500">Class Type</p>
                            <p className="text-sm font-semibold text-gray-800">{selectedClassroom.type}</p>
                        </div>
                    </div>

                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-500">
                            <Clock className="w-5 h-5" />
                        </div>
                        <div>
                            <p className="text-xs text-gray-500">Weekly Schedule</p>
                            <p className="text-sm font-semibold text-gray-800">{selectedClassroom.schedule}</p>
                        </div>
                    </div>
                </div>

                {selectedClassroom.status === 'Completed' && (
                    <div className="p-5 rounded-xl bg-green-50 border border-green-200 space-y-4">
                        <h4 className="font-bold text-green-800 text-sm uppercase tracking-wider border-b border-green-200/50 pb-2">Performance</h4>
                        
                        <div className="flex justify-between items-center">
                            <span className="text-sm text-green-700 font-medium">Final Grade</span>
                            <span className="text-xl font-bold text-green-800">{selectedClassroom.grade}</span>
                        </div>
                        <div className="flex justify-between items-center">
                            <span className="text-sm text-green-700 font-medium">Attendance</span>
                            <span className="text-xl font-bold text-green-800">{selectedClassroom.attendance}</span>
                        </div>
                        <div className="mt-2 pt-2 border-t border-green-200/50">
                            <p className="text-xs text-green-600">Semester completed successfully.</p>
                        </div>
                    </div>
                )}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-800">Classroom Records</h1>
      
      {/* Semester Filter */}
      <SemesterFilter activeSemester={activeSemester} onSemesterChange={setActiveSemester} />

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {filteredClassrooms.length > 0 ? (
            filteredClassrooms.map((cls, idx) => (
            <div key={idx} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow group">
                <div className={`h-28 ${cls.color} p-4 flex flex-col justify-between relative`}>
                <div className="flex justify-between items-start">
                    <h3 className="text-white font-bold text-lg leading-tight">{cls.subject}</h3>
                    <div className="flex flex-col items-end gap-1">
                        <span className="text-white/80 text-xs font-mono bg-black/20 px-2 py-1 rounded">{cls.code}</span>
                        <span className={`
                            text-[10px] font-bold uppercase px-2 py-0.5 rounded
                            ${cls.status === 'Active' ? 'bg-green-400/90 text-green-900' : 'bg-white/90 text-gray-700'}
                        `}>
                            {cls.status}
                        </span>
                    </div>
                </div>
                <div className="flex justify-between items-end">
                    <p className="text-white/90 text-sm">{cls.faculty}</p>
                    <span className="text-white/70 text-xs font-medium">{cls.semester}</span>
                </div>
                </div>
                
                <div className="p-4">
                <div className="flex items-center justify-around border-b border-gray-100 pb-4 mb-4">
                    <div className="flex flex-col items-center gap-1 text-gray-400 cursor-not-allowed">
                    <Book className="w-5 h-5" />
                    <span className="text-xs">Materials</span>
                    </div>
                    <div className="flex flex-col items-center gap-1 text-gray-400 cursor-not-allowed">
                    <Video className="w-5 h-5" />
                    <span className="text-xs">Lectures</span>
                    </div>
                    <div className="flex flex-col items-center gap-1 text-gray-400 cursor-not-allowed">
                    <FileText className="w-5 h-5" />
                    <span className="text-xs">Assign.</span>
                    </div>
                </div>
                
                <div className="space-y-2 mb-4">
                    {cls.status === 'Active' ? (
                        <>
                            <p className="text-xs font-semibold text-gray-500 uppercase">Latest Update</p>
                            <div className="flex items-start gap-2 text-sm text-gray-700 p-2 bg-gray-50 rounded">
                                <MessageSquare className="w-4 h-4 text-gray-400 mt-0.5" />
                                <p className="line-clamp-2 text-xs">Class syllabus updated for the new semester.</p>
                            </div>
                        </>
                    ) : (
                         <>
                            <p className="text-xs font-semibold text-gray-500 uppercase">Performance</p>
                            <div className="flex items-center justify-between px-2 text-sm">
                                <span className="text-gray-600">Grade: <span className="font-bold text-gray-800">{cls.grade}</span></span>
                                <span className="text-gray-600">Att: <span className="font-bold text-gray-800">{cls.attendance}</span></span>
                            </div>
                        </>
                    )}
                </div>

                <button 
                    onClick={() => setSelectedClassroom(cls)}
                    className="w-full py-2 bg-white border border-gray-200 text-gray-700 font-medium rounded-lg text-sm hover:bg-gray-50 hover:text-primary hover:border-primary/30 transition-all flex items-center justify-center gap-2"
                >
                    View Details
                </button>
                </div>
            </div>
            ))
        ) : (
            <div className="col-span-full py-12 text-center text-gray-500 bg-gray-50 rounded-xl border border-dashed border-gray-200">
                <p>No classroom records found for {activeSemester}.</p>
            </div>
        )}
      </div>
    </div>
  );
};

export default Classroom;
