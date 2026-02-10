import React, { useState } from 'react';
import { FileText, Download, Calendar, Clock, AlertCircle, CheckCircle, ArrowLeft, MapPin, BookOpen, Hourglass } from 'lucide-react';
import SemesterFilter from '../components/SemesterFilter';
import { useMode } from '../context/ModeContext';
import { exams } from '../data/schoolData';

const Examinations = () => {
  const { mode } = useMode();
  const [activeSemester, setActiveSemester] = useState('6th Semester');
  const [selectedExam, setSelectedExam] = useState(null);

  const EXAMS_DATA = {
    '1st Semester': [
      { 
        id: '1-1', name: 'Internal Assessment', subject: 'Mathematics I', date: '2023-09-15', time: '10:00 AM - 11:30 AM', type: 'Theory', status: 'Completed',
        instructions: 'Answer all questions. Calculator allowed.', duration: '90 Minutes', reportingTime: '09:45 AM', materials: 'Scientific Calculator', center: 'Block A, Room 101'
      },
      { 
        id: '1-2', name: 'Mid-Semester Exam', subject: 'Programming Fundamentals', date: '2023-10-20', time: '10:00 AM - 12:00 PM', type: 'Theory', status: 'Completed',
        instructions: 'Strictly no electronic devices. Write in Blue/Black pen only.', duration: '2 Hours', reportingTime: '09:30 AM', materials: 'None', center: 'Main Exam Hall'
      },
      { 
        id: '1-3', name: 'Practical Lab', subject: 'Digital Logic', date: '2023-11-05', time: '09:00 AM - 12:00 PM', type: 'Practical', status: 'Completed',
        instructions: 'Bring verified lab record. Viva-voce included.', duration: '3 Hours', reportingTime: '08:45 AM', materials: 'Lab Coat, Record', center: 'Digital Electronics Lab'
      }
    ],
    '2nd Semester': [
      { 
        id: '2-1', name: 'Internal Assessment', subject: 'Data Structures', date: '2024-02-15', time: '10:00 AM - 11:30 AM', type: 'Theory', status: 'Completed',
        instructions: 'Focus on linked lists and stacks.', duration: '90 Minutes', reportingTime: '09:45 AM', materials: 'None', center: 'Block B, Room 204'
      },
      { 
        id: '2-2', name: 'Mid-Semester Exam', subject: 'Computer Organization', date: '2024-03-25', time: '02:00 PM - 04:00 PM', type: 'Theory', status: 'Completed',
        instructions: 'Draw clear architecture diagrams.', duration: '2 Hours', reportingTime: '01:30 PM', materials: 'None', center: 'Main Exam Hall'
      },
      { 
        id: '2-3', name: 'Practical Lab', subject: 'OOP Lab', date: '2024-04-10', time: '09:00 AM - 12:00 PM', type: 'Practical', status: 'Completed',
        instructions: 'Implement C++ concepts discussed in class.', duration: '3 Hours', reportingTime: '08:45 AM', materials: 'Lab Record', center: 'CS Lab 1'
      }
    ],
    '3rd Semester': [
      { 
        id: '3-1', name: 'Internal Assessment', subject: 'DBMS', date: '2024-09-10', time: '10:00 AM - 11:30 AM', type: 'Theory', status: 'Completed',
        instructions: 'SQL queries required for Section B.', duration: '90 Minutes', reportingTime: '09:45 AM', materials: 'None', center: 'Block C, Room 302'
      },
      { 
        id: '3-2', name: 'Mid-Semester Exam', subject: 'Operating Systems', date: '2024-10-15', time: '10:00 AM - 12:00 PM', type: 'Theory', status: 'Completed',
        instructions: 'Process scheduling algorithms calculation required.', duration: '2 Hours', reportingTime: '09:30 AM', materials: 'Calculator', center: 'Main Exam Hall'
      },
      { 
        id: '3-3', name: 'Practical Lab', subject: 'OS Lab', date: '2024-11-02', time: '02:00 PM - 05:00 PM', type: 'Practical', status: 'Completed',
        instructions: 'Linux shell scripting and system calls.', duration: '3 Hours', reportingTime: '01:45 PM', materials: 'Lab Manual', center: 'CS Lab 2'
      }
    ],
    '4th Semester': [
      { 
        id: '4-1', name: 'Internal Assessment', subject: 'Software Engineering', date: '2025-02-12', time: '10:00 AM - 11:30 AM', type: 'Theory', status: 'Completed',
        instructions: 'Case study analysis required.', duration: '90 Minutes', reportingTime: '09:45 AM', materials: 'None', center: 'Block A, Room 105'
      },
      { 
        id: '4-2', name: 'Mid-Semester Exam', subject: 'Computer Networks', date: '2025-03-20', time: '02:00 PM - 04:00 PM', type: 'Theory', status: 'Completed',
        instructions: 'Subnetting calculations mandatory.', duration: '2 Hours', reportingTime: '01:30 PM', materials: 'Calculator', center: 'Main Exam Hall'
      },
      { 
        id: '4-3', name: 'Practical Lab', subject: 'Web Technologies', date: '2025-04-05', time: '09:00 AM - 12:00 PM', type: 'Practical', status: 'Completed',
        instructions: 'Create responsive layouts using CSS Grid/Flexbox.', duration: '3 Hours', reportingTime: '08:45 AM', materials: 'None', center: 'Web Lab'
      }
    ],
    '5th Semester': [
      { 
        id: '5-1', name: 'Internal Assessment', subject: 'Artificial Intelligence', date: '2025-09-05', time: '10:00 AM - 11:30 AM', type: 'Theory', status: 'Completed',
        instructions: 'Search algorithms and heuristics.', duration: '90 Minutes', reportingTime: '09:45 AM', materials: 'None', center: 'Block B, Room 210'
      },
      { 
        id: '5-2', name: 'Mid-Semester Exam', subject: 'Data Mining', date: '2025-10-18', time: '10:00 AM - 12:00 PM', type: 'Theory', status: 'Completed',
        instructions: 'Clustering and association rule mining.', duration: '2 Hours', reportingTime: '09:30 AM', materials: 'Calculator', center: 'Main Exam Hall'
      },
      { 
        id: '5-3', name: 'Practical Lab', subject: 'Cloud Computing', date: '2025-11-10', time: '02:00 PM - 05:00 PM', type: 'Practical', status: 'Completed',
        instructions: 'AWS instance setup and deployment.', duration: '3 Hours', reportingTime: '01:45 PM', materials: 'Lab Record', center: 'Cloud Lab'
      }
    ],
    '6th Semester': [
      { 
        id: '6-1', name: 'Internal Assessment', subject: 'Advanced Algorithms', date: '2026-04-15', time: '10:00 AM - 11:30 AM', type: 'Theory', status: 'Upcoming',
        instructions: 'Dynamic programming and graph algorithms.', duration: '90 Minutes', reportingTime: '09:45 AM', materials: 'None', center: 'Block C, Room 305'
      },
      { 
        id: '6-2', name: 'Mid-Semester Exam', subject: 'Machine Learning', date: '2026-05-20', time: '10:00 AM - 12:00 PM', type: 'Theory', status: 'Upcoming',
        instructions: 'Statistical analysis and model evaluation.', duration: '2 Hours', reportingTime: '09:30 AM', materials: 'Scientific Calculator', center: 'Main Exam Hall'
      },
      { 
        id: '6-3', name: 'Practical Lab', subject: 'Security Lab', date: '2026-05-25', time: '02:00 PM - 05:00 PM', type: 'Practical', status: 'Upcoming',
        instructions: 'Network vulnerability scanning and penetration testing.', duration: '3 Hours', reportingTime: '01:45 PM', materials: 'Lab Manual', center: 'Cyber Security Lab'
      }
    ]
  };

  const schoolExams = exams.map((e, i) => ({
    id: `school-${i}`,
    name: e.name,
    subject: e.subject,
    date: e.date,
    time: '09:00 AM - 12:00 PM',
    type: e.type,
    status: e.status,
    instructions: 'Standard exam instructions apply.',
    duration: '3 Hours',
    reportingTime: '08:30 AM',
    materials: 'Stationery',
    center: 'Exam Hall 1'
  }));

  const currentExams = mode === 'school' ? schoolExams : (EXAMS_DATA[activeSemester] || []);

  if (selectedExam) {
    return (
      <div className="space-y-6">
        <button 
          onClick={() => setSelectedExam(null)}
          className="flex items-center gap-2 text-gray-600 hover:text-primary transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          Back to Exam Schedule
        </button>

        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 pb-6 border-b border-gray-100">
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-2">{selectedExam.subject}</h2>
              <p className="text-gray-500 font-medium">{selectedExam.name} • {mode === 'school' ? 'Current' : activeSemester}</p>
            </div>
            <span className={`px-4 py-2 rounded-full text-sm font-semibold mt-4 md:mt-0 ${
              selectedExam.status === 'Completed' 
                ? 'bg-green-50 text-green-700' 
                : 'bg-amber-50 text-amber-700'
            }`}>
              {selectedExam.status}
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div>
                <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">Exam Details</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-gray-700">
                    <Calendar className="w-5 h-5 text-primary" />
                    <span className="font-medium">{selectedExam.date}</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-700">
                    <Clock className="w-5 h-5 text-primary" />
                    <span className="font-medium">{selectedExam.time}</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-700">
                    <Hourglass className="w-5 h-5 text-primary" />
                    <span>Duration: <span className="font-medium">{selectedExam.duration}</span></span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-700">
                    <MapPin className="w-5 h-5 text-primary" />
                    <span>Center: <span className="font-medium">{selectedExam.center}</span></span>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">Instructions & Requirements</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3 text-gray-700">
                    <AlertCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <div>
                      <span className="block font-medium mb-1">Instructions</span>
                      <p className="text-sm text-gray-600 leading-relaxed">{selectedExam.instructions}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 text-gray-700">
                    <Clock className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <div>
                      <span className="block font-medium mb-1">Reporting Time</span>
                      <p className="text-sm text-gray-600">Please report by {selectedExam.reportingTime}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 text-gray-700">
                    <BookOpen className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <div>
                      <span className="block font-medium mb-1">Allowed Materials</span>
                      <p className="text-sm text-gray-600">{selectedExam.materials}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-800">Examinations</h1>

      {/* Semester Filters */}
      {mode === 'college' && <SemesterFilter activeSemester={activeSemester} onSemesterChange={setActiveSemester} />}

      {/* Exam Overview */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <h2 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
          <Calendar className="w-5 h-5 text-primary" />
          Exam Schedule - {mode === 'school' ? 'Current' : activeSemester}
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-100">
                <th className="p-3 text-sm font-semibold text-gray-600">Exam Name</th>
                <th className="p-3 text-sm font-semibold text-gray-600">Subject</th>
                <th className="p-3 text-sm font-semibold text-gray-600">Date & Time</th>
                <th className="p-3 text-sm font-semibold text-gray-600">Type</th>
                <th className="p-3 text-sm font-semibold text-gray-600">Status</th>
              </tr>
            </thead>
            <tbody>
              {currentExams.length > 0 ? currentExams.map((exam) => (
                <tr 
                  key={exam.id} 
                  onClick={() => setSelectedExam(exam)}
                  className="border-b border-gray-50 hover:bg-gray-50/50 cursor-pointer transition-colors"
                >
                  <td className="p-3 text-sm font-medium text-gray-800">{exam.name}</td>
                  <td className="p-3 text-sm text-gray-600">{exam.subject}</td>
                  <td className="p-3 text-sm text-gray-600">
                    <div>{exam.date}</div>
                    <div className="text-xs text-gray-500">{exam.time}</div>
                  </td>
                  <td className="p-3 text-sm text-gray-600">
                    <span className={`px-2 py-1 rounded text-xs font-medium ${
                      exam.type === 'Theory' ? 'bg-blue-50 text-blue-600' : 'bg-purple-50 text-purple-600'
                    }`}>
                      {exam.type}
                    </span>
                  </td>
                  <td className="p-3 text-sm">
                    <span className={`flex items-center gap-1.5 ${
                      exam.status === 'Completed' ? 'text-green-600' : 'text-amber-600'
                    }`}>
                      {exam.status === 'Completed' ? <CheckCircle className="w-4 h-4" /> : <Clock className="w-4 h-4" />}
                      {exam.status}
                    </span>
                  </td>
                </tr>
              )) : (
                <tr>
                   <td colSpan="5" className="p-6 text-center text-gray-500">No exams scheduled.</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Admit Card */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
            <FileText className="w-5 h-5 text-primary" />
            Admit Card
          </h2>
          <div className="bg-blue-50 border border-blue-100 rounded-lg p-4 mb-4">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm font-medium text-blue-900">{mode === 'school' ? 'Term 2' : activeSemester} Examinations</p>
                <p className="text-xs text-blue-700 mt-1">Roll No: {mode === 'school' ? '24' : 'CS2023001'}</p>
              </div>
              <div className="text-right">
                <p className="text-xs text-blue-700">Exam Center</p>
                <p className="text-sm font-medium text-blue-900">Main Block, Hall A</p>
              </div>
            </div>
            <div className="mt-3 pt-3 border-t border-blue-200 flex justify-between items-center">
              <span className="text-xs text-blue-700">Seat Number: A-42</span>
            </div>
          </div>
          <button 
            onClick={() => alert(`Downloading Admit Card...`)}
            className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-primary text-white rounded-lg hover:bg-blue-800 transition-colors"
          >
            <Download className="w-4 h-4" />
            Download Admit Card
          </button>
        </div>

        {/* Exam Instructions */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
            <AlertCircle className="w-5 h-5 text-primary" />
            Instructions
          </h2>
          <ul className="space-y-3 text-sm text-gray-600">
            <li className="flex gap-2">
              <span className="text-primary font-bold">•</span>
              Report to the examination hall 30 minutes before the scheduled time.
            </li>
            <li className="flex gap-2">
              <span className="text-primary font-bold">•</span>
              Carry your Admit Card and ID card.
            </li>
            <li className="flex gap-2">
              <span className="text-primary font-bold">•</span>
              Electronic gadgets including smartwatches are strictly prohibited.
            </li>
            <li className="flex gap-2">
              <span className="text-primary font-bold">•</span>
              Use only blue or black ballpoint pen for writing.
            </li>
            <li className="flex gap-2">
              <span className="text-primary font-bold">•</span>
              No student will be allowed to leave the hall in the first hour.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Examinations;
