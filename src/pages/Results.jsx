import React, { useState } from 'react';
import { BarChart2, Award, FileText, Download, ChevronRight, TrendingUp } from 'lucide-react';
import SemesterFilter from '../components/SemesterFilter';
import { useMode } from '../context/ModeContext';
import { results } from '../data/schoolData';

const Results = () => {
  const { mode } = useMode();
  const [activeSemester, setActiveSemester] = useState('6th Semester');
  
  // School Mode State
  const [schoolResultType, setSchoolResultType] = useState('Final Exam');
  const [activeUnitTest, setActiveUnitTest] = useState('Unit Test 1');

  // Mock Data
  const COLLEGE_RESULTS_DATA = {
    '6th Semester': {
      sgpa: 'Pending',
      cgpa: '8.85',
      status: 'In Progress',
      subjects: [
        { code: 'CS601', name: 'Advanced Data Structures', credits: 4, grade: 'Pending', points: '-' },
        { code: 'CS602', name: 'Artificial Intelligence', credits: 4, grade: 'Pending', points: '-' },
        { code: 'CS603', name: 'Machine Learning', credits: 4, grade: 'Pending', points: '-' },
        { code: 'CS604', name: 'Cloud Computing', credits: 3, grade: 'Pending', points: '-' },
        { code: 'CS605', name: 'Software Project Management', credits: 3, grade: 'Pending', points: '-' },
        { code: 'CS606', name: 'Information Security', credits: 3, grade: 'Pending', points: '-' },
      ]
    },
    '5th Semester': {
      sgpa: '9.20',
      cgpa: '8.85',
      status: 'Passed',
      subjects: [
        { code: 'CS501', name: 'Data Structures & Algorithms', credits: 4, grade: 'O', points: 10 },
        { code: 'CS502', name: 'Database Management Systems', credits: 4, grade: 'A+', points: 9 },
        { code: 'CS503', name: 'Computer Networks', credits: 3, grade: 'A', points: 8 },
        { code: 'CS504', name: 'Operating Systems', credits: 3, grade: 'A+', points: 9 },
        { code: 'CS505', name: 'Web Technologies', credits: 3, grade: 'O', points: 10 },
      ]
    },
    '4th Semester': {
      sgpa: '8.90',
      cgpa: '8.76',
      status: 'Passed',
      subjects: [
        { code: 'CS401', name: 'Discrete Mathematics', credits: 4, grade: 'A+', points: 9 },
        { code: 'CS402', name: 'Computer Organization', credits: 4, grade: 'A', points: 8 },
        { code: 'CS403', name: 'Design & Analysis of Algorithms', credits: 4, grade: 'A+', points: 9 },
        { code: 'CS404', name: 'Theory of Computation', credits: 3, grade: 'B+', points: 7 },
        { code: 'CS405', name: 'Probability & Statistics', credits: 3, grade: 'O', points: 10 },
      ]
    },
    '3rd Semester': {
      sgpa: '8.50',
      cgpa: '8.71',
      status: 'Passed',
      subjects: [
        { code: 'CS301', name: 'Object Oriented Programming', credits: 4, grade: 'A', points: 8 },
        { code: 'CS302', name: 'Digital Electronics', credits: 3, grade: 'B+', points: 7 },
        { code: 'CS303', name: 'Mathematics III', credits: 4, grade: 'O', points: 10 },
        { code: 'CS304', name: 'Data Structures (Lab)', credits: 2, grade: 'O', points: 10 },
        { code: 'CS305', name: 'Economics', credits: 3, grade: 'A', points: 8 },
      ]
    },
    '2nd Semester': {
      sgpa: '8.80',
      cgpa: '8.82',
      status: 'Passed',
      subjects: [
        { code: 'CS201', name: 'Mathematics II', credits: 4, grade: 'A+', points: 9 },
        { code: 'CS202', name: 'Data Structures (Basics)', credits: 3, grade: 'A', points: 8 },
        { code: 'CS203', name: 'OOP (C++)', credits: 3, grade: 'A+', points: 9 },
        { code: 'CS204', name: 'Computer Organization', credits: 3, grade: 'B+', points: 7 },
        { code: 'CS205', name: 'Environmental Science', credits: 2, grade: 'O', points: 10 },
      ]
    },
    '1st Semester': {
      sgpa: '8.85',
      cgpa: '8.85',
      status: 'Passed',
      subjects: [
        { code: 'CS101', name: 'Mathematics I', credits: 4, grade: 'O', points: 10 },
        { code: 'CS102', name: 'Programming Fundamentals', credits: 4, grade: 'A+', points: 9 },
        { code: 'CS103', name: 'Digital Logic', credits: 3, grade: 'A', points: 8 },
        { code: 'CS104', name: 'Communication Skills', credits: 2, grade: 'A+', points: 9 },
        { code: 'CS105', name: 'Engineering Physics', credits: 4, grade: 'A', points: 8 },
      ]
    }
  };

  const schoolResult = results[0]; // Demo: Term 1
  
  // School Data Definitions
  const UNIT_TEST_DATA = {
    "Unit Test 1": {
      percentage: "78.0",
      total: "78/100",
      status: "Pass",
      subjects: [
        { name: "Mathematics", marks: 18, max: 20, grade: "A" },
        { name: "Science", marks: 15, max: 20, grade: "B+" },
        { name: "English", marks: 17, max: 20, grade: "A" },
        { name: "Social Studies", marks: 14, max: 20, grade: "B" },
        { name: "Computer Science", marks: 14, max: 20, grade: "B" },
      ]
    },
    "Unit Test 2": {
      percentage: "82.0",
      total: "82/100",
      status: "Pass",
      subjects: [
        { name: "Mathematics", marks: 19, max: 20, grade: "A+" },
        { name: "Science", marks: 16, max: 20, grade: "A" },
        { name: "English", marks: 18, max: 20, grade: "A+" },
        { name: "Social Studies", marks: 15, max: 20, grade: "B+" },
        { name: "Computer Science", marks: 14, max: 20, grade: "B" },
      ]
    },
    "Unit Test 3": {
      percentage: "45.0",
      total: "45/100",
      status: "Pass", // > 40%
      subjects: [
        { name: "Mathematics", marks: 10, max: 20, grade: "C" },
        { name: "Science", marks: 9, max: 20, grade: "P" },
        { name: "English", marks: 12, max: 20, grade: "B" },
        { name: "Social Studies", marks: 8, max: 20, grade: "P" },
        { name: "Computer Science", marks: 6, max: 20, grade: "F" }, // < 40% (8/20)
      ]
    }
  };

  const PRE_BOARD_DATA = {
    percentage: "86.4",
    total: "432",
    status: "Pass",
    subjects: [
      { name: "Mathematics", marks: 92, max: 100, grade: "A+" },
      { name: "Science", marks: 85, max: 100, grade: "A" },
      { name: "English", marks: 88, max: 100, grade: "A" },
      { name: "Social Studies", marks: 78, max: 100, grade: "B+" },
      { name: "Computer Science", marks: 89, max: 100, grade: "A" },
    ]
  };

  const FINAL_EXAM_DATA = {
    percentage: `${schoolResult.percentage}`,
    total: schoolResult.total,
    status: 'Pass',
    subjects: schoolResult.subjects.map(s => ({
      name: s.subject,
      marks: s.marks,
      max: 100,
      grade: s.grade
    }))
  };

  // Determine current result based on mode and selection
  let currentResult;
  if (mode === 'school') {
    if (schoolResultType === 'Unit Tests') {
      const utData = UNIT_TEST_DATA[activeUnitTest];
      currentResult = {
        sgpa: `${utData.percentage}%`,
        cgpa: utData.total,
        status: utData.status,
        subjects: utData.subjects.map(s => ({
          code: '-',
          name: s.name,
          credits: s.max, // reusing credits field for Max Marks
          grade: s.grade,
          points: s.marks // reusing points field for Marks Obtained
        }))
      };
    } else if (schoolResultType === 'Pre-Boards') {
      currentResult = {
        sgpa: `${PRE_BOARD_DATA.percentage}%`,
        cgpa: PRE_BOARD_DATA.total,
        status: PRE_BOARD_DATA.status,
        subjects: PRE_BOARD_DATA.subjects.map(s => ({
          code: '-',
          name: s.name,
          credits: s.max,
          grade: s.grade,
          points: s.marks
        }))
      };
    } else {
      // Final Exam
      currentResult = {
        sgpa: `${FINAL_EXAM_DATA.percentage}%`,
        cgpa: FINAL_EXAM_DATA.total,
        status: FINAL_EXAM_DATA.status,
        subjects: FINAL_EXAM_DATA.subjects.map(s => ({
          code: '-',
          name: s.name,
          credits: s.max,
          grade: s.grade,
          points: s.marks
        }))
      };
    }
  } else {
    // College Mode
    currentResult = COLLEGE_RESULTS_DATA[activeSemester] || { sgpa: '-', cgpa: '-', status: 'N/A', subjects: [] };
  }

  const handleDownload = () => {
    const fileName = schoolResultType === 'Pre-Boards' 
      ? 'PreBoards_Result_RahulSharma.pdf' 
      : `Result_${schoolResultType.replace(' ', '_')}.pdf`;
    
    // Demo download action
    const link = document.createElement('a');
    link.href = '#';
    link.download = fileName;
    document.body.appendChild(link);
    // link.click(); // Prevent actual click in demo
    alert(`Downloading: ${fileName}`);
    document.body.removeChild(link);
  };

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-800">Results & Grades</h1>
      
      {mode === 'college' && <SemesterFilter activeSemester={activeSemester} onSemesterChange={setActiveSemester} />}

      {/* School Mode Result Type Selector */}
      {mode === 'school' && (
        <div className="flex flex-col gap-4 mb-6">
          <div className="flex gap-2 bg-gray-100 p-1 rounded-lg w-fit">
            {['Unit Tests', 'Pre-Boards', 'Final Exam'].map((type) => (
              <button
                key={type}
                onClick={() => setSchoolResultType(type)}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
                  schoolResultType === type
                    ? 'bg-white text-primary shadow-sm'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                {type}
              </button>
            ))}
          </div>

          {/* Unit Test Sub-Selector */}
          {schoolResultType === 'Unit Tests' && (
            <div className="flex gap-2">
              {['Unit Test 1', 'Unit Test 2', 'Unit Test 3'].map((test) => (
                <button
                  key={test}
                  onClick={() => setActiveUnitTest(test)}
                  className={`px-3 py-1.5 rounded-full text-xs font-medium border transition-all ${
                    activeUnitTest === test
                      ? 'bg-primary text-white border-primary'
                      : 'bg-white text-gray-600 border-gray-200 hover:bg-gray-50'
                  }`}
                >
                  {test}
                </button>
              ))}
            </div>
          )}
        </div>
      )}

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-gray-500 uppercase">{mode === 'school' ? 'Percentage' : 'SGPA'}</p>
            <p className="text-3xl font-bold text-gray-800 mt-1">{currentResult.sgpa}</p>
          </div>
          <div className="w-12 h-12 bg-blue-50 text-primary rounded-full flex items-center justify-center">
            <BarChart2 className="w-6 h-6" />
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-gray-500 uppercase">{mode === 'school' ? 'Total Marks' : 'CGPA'}</p>
            <p className="text-3xl font-bold text-gray-800 mt-1">{currentResult.cgpa}</p>
          </div>
          <div className="w-12 h-12 bg-purple-50 text-purple-600 rounded-full flex items-center justify-center">
            <TrendingUp className="w-6 h-6" />
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-gray-500 uppercase">Status</p>
            <p className="text-xl font-bold text-green-600 mt-2">{currentResult.status}</p>
          </div>
          <div className="w-12 h-12 bg-green-50 text-green-600 rounded-full flex items-center justify-center">
            <Award className="w-6 h-6" />
          </div>
        </div>
      </div>

      {/* Detailed Result */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="p-6 border-b border-gray-100 flex justify-between items-center">
          <h2 className="text-lg font-semibold text-gray-800">Detailed Scorecard</h2>
          <button 
            onClick={handleDownload}
            className="flex items-center gap-2 text-primary hover:underline text-sm font-medium"
          >
            <Download className="w-4 h-4" />
            Download Marksheet
          </button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase">Subject Code</th>
                <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase">Subject Name</th>
                <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase">{mode === 'school' ? 'Max Marks' : 'Credits'}</th>
                <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase">Grade</th>
                <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase">{mode === 'school' ? 'Marks Obtained' : 'Grade Points'}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {currentResult.subjects.map((sub, idx) => (
                <tr key={idx} className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 text-sm font-medium text-gray-600">{sub.code}</td>
                  <td className="px-6 py-4 text-sm font-medium text-gray-800">{sub.name}</td>
                  <td className="px-6 py-4 text-sm text-gray-600">{sub.credits}</td>
                  <td className="px-6 py-4">
                    <span className={`px-2 py-1 rounded text-xs font-bold ${
                      sub.grade === 'O' || sub.grade === 'A+' || sub.grade === 'A' || sub.grade === 'Pass' ? 'bg-green-100 text-green-700' :
                      sub.grade === 'Pending' ? 'bg-gray-100 text-gray-600' :
                      sub.grade === 'F' || sub.grade === 'Needs Improvement' ? 'bg-red-100 text-red-700' :
                      'bg-blue-100 text-blue-700'
                    }`}>
                      {sub.grade}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm font-bold text-gray-800">{sub.points}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Results;
