import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import { AlertTriangle, CheckCircle, Info, TrendingUp, BookOpen, Calculator } from 'lucide-react';
import SemesterFilter from '../components/SemesterFilter';
import { useMode } from '../context/ModeContext';
import { subjects as schoolSubjects } from '../data/schoolData';

const ATTENDANCE_DATA = {
  "1st Semester": {
    totalClasses: 120,
    classesAttended: 108,
    overallPercentage: 90.0,
    status: "Good Standing",
    subjects: [
      { name: 'Math-I', attended: 28, total: 30, pct: 93 },
      { name: 'Physics', attended: 25, total: 28, pct: 89 },
      { name: 'BEE', attended: 20, total: 22, pct: 90 },
      { name: 'Eng', attended: 18, total: 20, pct: 90 },
      { name: 'Lab-I', attended: 17, total: 20, pct: 85 },
    ]
  },
  "2nd Semester": {
    totalClasses: 125,
    classesAttended: 95,
    overallPercentage: 76.0,
    status: "Good Standing",
    subjects: [
      { name: 'Math-II', attended: 22, total: 30, pct: 73 },
      { name: 'Chem', attended: 20, total: 28, pct: 71 },
      { name: 'C Prog', attended: 20, total: 25, pct: 80 },
      { name: 'Mech', attended: 18, total: 22, pct: 81 },
      { name: 'Lab-II', attended: 15, total: 20, pct: 75 },
    ]
  },
  "3rd Semester": {
    totalClasses: 130,
    classesAttended: 85,
    overallPercentage: 65.4,
    status: "Warning",
    subjects: [
      { name: 'DS', attended: 18, total: 30, pct: 60 },
      { name: 'DLD', attended: 18, total: 28, pct: 64 },
      { name: 'Java', attended: 20, total: 25, pct: 80 },
      { name: 'DMS', attended: 14, total: 25, pct: 56 },
      { name: 'Lab-III', attended: 15, total: 22, pct: 68 },
    ]
  },
  "4th Semester": {
    totalClasses: 140,
    classesAttended: 130,
    overallPercentage: 92.8,
    status: "Good Standing",
    subjects: [
      { name: 'DAA', attended: 28, total: 30, pct: 93 },
      { name: 'OS', attended: 28, total: 30, pct: 93 },
      { name: 'DBMS', attended: 28, total: 30, pct: 93 },
      { name: 'COA', attended: 26, total: 30, pct: 86 },
      { name: 'Lab-IV', attended: 20, total: 20, pct: 100 },
    ]
  },
  "5th Semester": {
    totalClasses: 135,
    classesAttended: 70,
    overallPercentage: 51.8,
    status: "Low Attendance",
    subjects: [
      { name: 'CN', attended: 15, total: 30, pct: 50 },
      { name: 'SE', attended: 15, total: 30, pct: 50 },
      { name: 'Web', attended: 12, total: 25, pct: 48 },
      { name: 'TOC', attended: 15, total: 25, pct: 60 },
      { name: 'Lab-V', attended: 13, total: 25, pct: 52 },
    ]
  },
  "6th Semester": {
    totalClasses: 135,
    classesAttended: 116,
    overallPercentage: 85.9,
    status: "Good Standing",
    subjects: [
      { name: 'DS', attended: 24, total: 30, pct: 80 },
      { name: 'DBMS', attended: 28, total: 30, pct: 93 },
      { name: 'CN', attended: 18, total: 25, pct: 72 },
      { name: 'OS', attended: 26, total: 28, pct: 92 },
      { name: 'Web', attended: 20, total: 22, pct: 90 },
    ]
  }
};

// Generate School Attendance Data dynamically from schoolData subjects
const SCHOOL_ATTENDANCE_DATA = {
  totalClasses: 230,
  classesAttended: 209,
  overallPercentage: 90.8,
  status: "Good Standing",
  subjects: [
    { name: 'Mathematics', attended: 45, total: 50, pct: 90 },
    { name: 'Science', attended: 40, total: 45, pct: 88 },
    { name: 'English', attended: 38, total: 40, pct: 95 },
    { name: 'Social Studies', attended: 30, total: 35, pct: 85 },
    { name: 'Computer Science', attended: 24, total: 25, pct: 96 },
    { name: 'Hindi', attended: 32, total: 35, pct: 91 },
  ]
};

const Attendance = () => {
  const { mode } = useMode();
  const [activeSemester, setActiveSemester] = useState("6th Semester");
  
  // Select data based on mode
  const currentData = mode === 'school' 
    ? SCHOOL_ATTENDANCE_DATA 
    : ATTENDANCE_DATA[activeSemester];

  const pieData = [
    { name: 'Present', value: currentData.overallPercentage, color: '#1e3a8a' },
    { name: 'Absent', value: parseFloat((100 - currentData.overallPercentage).toFixed(1)), color: '#ef4444' },
  ];

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-800">Attendance</h1>

      {/* Semester Filter - Only show in College Mode */}
      {mode === 'college' && (
        <SemesterFilter activeSemester={activeSemester} onSemesterChange={setActiveSemester} />
      )}

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Overview Cards */}
        <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <p className="text-sm text-gray-500 mb-1">Total Classes</p>
            <p className="text-3xl font-bold text-gray-800">{currentData.totalClasses}</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <p className="text-sm text-gray-500 mb-1">Classes Attended</p>
            <p className="text-3xl font-bold text-green-600">{currentData.classesAttended}</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
             <p className="text-sm text-gray-500 mb-1">Overall Percentage</p>
             <p className="text-3xl font-bold text-primary">{currentData.overallPercentage}%</p>
          </div>
        </div>

        {/* Bar Chart */}
        <div className="lg:col-span-2 bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <h3 className="font-bold text-gray-800 mb-6">Subject-wise Attendance (%)</h3>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={currentData.subjects}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis dataKey="name" axisLine={false} tickLine={false} />
                <YAxis axisLine={false} tickLine={false} domain={[0, 100]} />
                <Tooltip 
                  cursor={{fill: '#f3f4f6'}}
                  contentStyle={{borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)'}}
                />
                <Bar dataKey="pct" fill="#3b82f6" radius={[4, 4, 0, 0]} barSize={40} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Pie Chart */}
        <div className="lg:col-span-1 bg-white p-6 rounded-xl shadow-sm border border-gray-100">
           <h3 className="font-bold text-gray-800 mb-6">Overall Status</h3>
           <div className="h-64">
             <ResponsiveContainer width="100%" height="100%">
               <PieChart>
                 <Pie
                   data={pieData}
                   innerRadius={60}
                   outerRadius={80}
                   paddingAngle={5}
                   dataKey="value"
                 >
                   {pieData.map((entry, index) => (
                     <Cell key={`cell-${index}`} fill={entry.color} />
                   ))}
                 </Pie>
                 <Tooltip />
               </PieChart>
             </ResponsiveContainer>
           </div>
           <div className="flex justify-center gap-6">
             {pieData.map((entry, idx) => (
               <div key={idx} className="flex items-center gap-2">
                 <div className="w-3 h-3 rounded-full" style={{backgroundColor: entry.color}}></div>
                 <span className="text-sm text-gray-600">{entry.name}</span>
               </div>
             ))}
           </div>
        </div>
      </div>

      {/* Attendance Advisory Section - College Only */}
      {mode === 'college' && (
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="p-6 border-b border-gray-50 bg-indigo-50">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-indigo-100 text-indigo-600 rounded-lg">
                <Calculator className="w-6 h-6" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-gray-800">Attendance Advisory</h2>
                <p className="text-sm text-gray-600">Smart analysis to help you maintain 75% eligibility</p>
              </div>
            </div>
          </div>
          
          <div className="p-6 grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Subject-wise Analysis */}
            <div className="space-y-6">
              <h3 className="font-semibold text-gray-800 flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-gray-500" />
                Subject-wise Recovery Plan
              </h3>
              
              <div className="space-y-4">
                {currentData.subjects.map((subject, idx) => {
                  // Calculate classes needed to reach 75%
                  // Formula: (CurrentAttended + x) / (CurrentTotal + x) >= 0.75
                  // x >= 3 * Total - 4 * Attended
                  const classesNeeded = Math.ceil(3 * subject.total - 4 * subject.attended);
                  const isSafe = subject.pct >= 75;
                  
                  return (
                    <div key={idx} className={`p-4 rounded-lg border ${isSafe ? 'bg-green-50 border-green-100' : 'bg-red-50 border-red-100'}`}>
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <h4 className="font-bold text-gray-800">{subject.name}</h4>
                          <p className="text-xs text-gray-500">Current: {subject.attended}/{subject.total} ({subject.pct}%)</p>
                        </div>
                        <span className={`px-2 py-1 rounded text-xs font-bold ${isSafe ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                          {isSafe ? 'Safe' : 'Critical'}
                        </span>
                      </div>
                      
                      <div className="flex items-start gap-2 text-sm">
                        {isSafe ? (
                          <>
                            <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 shrink-0" />
                            <p className="text-green-700">
                              You are in the safe zone. You can afford to miss <strong>{Math.floor((subject.attended - 0.75 * subject.total) / 0.75)}</strong> classes while staying above 75%.
                            </p>
                          </>
                        ) : (
                          <>
                            <AlertTriangle className="w-4 h-4 text-red-600 mt-0.5 shrink-0" />
                            <p className="text-red-700">
                              You need to attend the next <strong>{classesNeeded > 0 ? classesNeeded : 1}</strong> consecutive classes to reach 75%.
                            </p>
                          </>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* General Strategy */}
            <div className="space-y-6">
              <h3 className="font-semibold text-gray-800 flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-gray-500" />
                Overall Strategy & Tips
              </h3>

              <div className="bg-blue-50 border border-blue-100 rounded-xl p-5">
                <div className="flex gap-4">
                  <div className="p-2 bg-blue-100 text-blue-600 rounded-lg h-fit">
                    <Info className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-blue-800 mb-2">The 75% Rule Explained</h4>
                    <p className="text-sm text-blue-700 mb-4">
                      According to university regulations, a minimum of 75% attendance is mandatory to be eligible for end-semester examinations. Falling below this may result in debarment.
                    </p>
                    
                    <ul className="space-y-3">
                      <li className="flex gap-2 text-sm text-blue-800">
                        <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5 shrink-0"></div>
                        <span><strong>Medical Leave:</strong> Submit valid medical certificates within 3 days of rejoining.</span>
                      </li>
                      <li className="flex gap-2 text-sm text-blue-800">
                        <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5 shrink-0"></div>
                        <span><strong>Duty Leave:</strong> Apply for OD if representing college in events/sports.</span>
                      </li>
                      <li className="flex gap-2 text-sm text-blue-800">
                        <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5 shrink-0"></div>
                        <span><strong>Condonation:</strong> 65-75% may be condoned with a penalty fee if valid reasons exist.</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-orange-50 border border-orange-100 rounded-xl p-5">
                <h4 className="font-bold text-orange-800 mb-3">Action Plan for This Week</h4>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 p-3 bg-white rounded-lg border border-orange-100 shadow-sm">
                    <input type="checkbox" className="w-4 h-4 text-orange-600 rounded focus:ring-orange-500" />
                    <span className="text-sm text-gray-700">Attend all lab sessions (high weightage)</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-white rounded-lg border border-orange-100 shadow-sm">
                    <input type="checkbox" className="w-4 h-4 text-orange-600 rounded focus:ring-orange-500" />
                    <span className="text-sm text-gray-700">Meet HOD regarding medical certificate status</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-white rounded-lg border border-orange-100 shadow-sm">
                    <input type="checkbox" className="w-4 h-4 text-orange-600 rounded focus:ring-orange-500" />
                    <span className="text-sm text-gray-700">Check updated attendance on Friday evening</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Attendance;
