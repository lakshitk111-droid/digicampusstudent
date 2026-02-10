import React, { useState } from 'react';
import { FileText, Clock, CheckCircle, AlertCircle } from 'lucide-react';
import SemesterFilter from '../components/SemesterFilter';
import { useMode } from '../context/ModeContext';
import { homework } from '../data/schoolData';

const Assignments = () => {
  const { mode } = useMode();
  const [activeSemester, setActiveSemester] = useState('6th Semester');

  const collegeAssignments = [
    // 6th Semester
    { title: 'B-Tree Implementation', subject: 'Advanced Data Structures', semester: '6th Semester', due: 'Feb 10, 2026', status: 'Submitted', color: 'text-green-600 bg-green-50 border-green-200' },
    { title: 'Graph Algorithms Analysis', subject: 'Advanced Data Structures', semester: '6th Semester', due: 'Feb 15, 2026', status: 'Pending', color: 'text-orange-600 bg-orange-50 border-orange-200' },
    { title: 'Search Algorithms Lab', subject: 'Artificial Intelligence', semester: '6th Semester', due: 'Feb 12, 2026', status: 'Submitted', color: 'text-green-600 bg-green-50 border-green-200' },
    { title: 'Linear Regression Project', subject: 'Machine Learning', semester: '6th Semester', due: 'Feb 20, 2026', status: 'Submitted', color: 'text-green-600 bg-green-50 border-green-200' },
    { title: 'Classification Task', subject: 'Machine Learning', semester: '6th Semester', due: 'Feb 25, 2026', status: 'Pending', color: 'text-orange-600 bg-orange-50 border-orange-200' },
    { title: 'AWS EC2 Setup', subject: 'Cloud Computing', semester: '6th Semester', due: 'Feb 05, 2026', status: 'Submitted', color: 'text-green-600 bg-green-50 border-green-200' },
    { title: 'Project Plan Document', subject: 'Software Project Management', semester: '6th Semester', due: 'Feb 28, 2026', status: 'Pending', color: 'text-orange-600 bg-orange-50 border-orange-200' },

    // 5th Semester
    { title: 'Implementation of AVL Trees', subject: 'Data Structures & Algorithms', semester: '5th Semester', due: 'Sep 10, 2025', status: 'Submitted', color: 'text-green-600 bg-green-50 border-green-200' },
    { title: 'SQL Queries', subject: 'DBMS', semester: '5th Semester', due: 'Oct 12, 2025', status: 'Submitted', color: 'text-green-600 bg-green-50 border-green-200' },
    { title: 'Network Protocols Essay', subject: 'Computer Networks', semester: '5th Semester', due: 'Nov 05, 2025', status: 'Late', color: 'text-red-600 bg-red-50 border-red-200' },
    
    // 4th Semester
    { title: 'Logic Problems', subject: 'Discrete Mathematics', semester: '4th Semester', due: 'Mar 10, 2025', status: 'Submitted', color: 'text-green-600 bg-green-50 border-green-200' },
    { title: 'Software Lifecycle Report', subject: 'Software Engineering', semester: '4th Semester', due: 'Apr 05, 2025', status: 'Submitted', color: 'text-green-600 bg-green-50 border-green-200' },

    // 3rd Semester
    { title: 'OOP Project', subject: 'Object Oriented Programming', semester: '3rd Semester', due: 'Oct 20, 2024', status: 'Submitted', color: 'text-green-600 bg-green-50 border-green-200' },
    { title: 'Digital Circuit Design', subject: 'Digital Electronics', semester: '3rd Semester', due: 'Nov 15, 2024', status: 'Submitted', color: 'text-green-600 bg-green-50 border-green-200' },

    // 2nd Semester
    { title: 'Vector Calculus Problems', subject: 'Mathematics II', semester: '2nd Semester', due: 'Mar 15, 2024', status: 'Submitted', color: 'text-green-600 bg-green-50 border-green-200' },
    { title: 'Data Structures Basics', subject: 'Data Structures (Basics)', semester: '2nd Semester', due: 'Apr 10, 2024', status: 'Submitted', color: 'text-green-600 bg-green-50 border-green-200' },

    // 1st Semester
    { title: 'Calculus Assignment 1', subject: 'Mathematics I', semester: '1st Semester', due: 'Sep 20, 2023', status: 'Submitted', color: 'text-green-600 bg-green-50 border-green-200' },
    { title: 'C Programming Lab', subject: 'Programming Fundamentals', semester: '1st Semester', due: 'Oct 25, 2023', status: 'Submitted', color: 'text-green-600 bg-green-50 border-green-200' }
  ];

  const schoolAssignments = homework.map(hw => ({
    title: hw.title,
    subject: hw.subject,
    semester: 'Current',
    due: hw.due,
    status: hw.status,
    color: hw.status === 'Submitted' ? 'text-green-600 bg-green-50 border-green-200' : 'text-orange-600 bg-orange-50 border-orange-200'
  }));

  const filteredAssignments = mode === 'school' 
    ? schoolAssignments 
    : collegeAssignments.filter(a => a.semester === activeSemester);

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-800">{mode === 'school' ? 'Homework & Assignments' : 'Assignments'}</h1>
      
      {mode === 'college' && <SemesterFilter activeSemester={activeSemester} onSemesterChange={setActiveSemester} />}

      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase">{mode === 'school' ? 'Homework' : 'Assignment'}</th>
                <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase">Subject</th>
                <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase">Due Date</th>
                <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase">Status</th>
                <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {filteredAssignments.length > 0 ? (
                filteredAssignments.map((assign, idx) => (
                  <tr key={idx} className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="p-2 bg-blue-50 text-primary rounded-lg">
                          <FileText className="w-5 h-5" />
                        </div>
                        <span className="font-medium text-gray-800">{assign.title}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600">{assign.subject}</td>
                    <td className="px-6 py-4 text-sm text-gray-600">{assign.due}</td>
                    <td className="px-6 py-4">
                      <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium border ${assign.color}`}>
                        {assign.status === 'Submitted' && <CheckCircle className="w-3 h-3" />}
                        {assign.status === 'Pending' && <Clock className="w-3 h-3" />}
                        {assign.status === 'Late' && <AlertCircle className="w-3 h-3" />}
                        {assign.status}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <button 
                        onClick={() => alert(assign.status === 'Submitted' ? `Viewing ${assign.title}` : `Uploading ${assign.title}`)}
                        className="text-sm text-primary hover:underline font-medium"
                      >
                        {assign.status === 'Submitted' ? 'View' : 'Upload'}
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="5" className="px-6 py-8 text-center text-gray-500">
                    No assignments found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};


export default Assignments;
