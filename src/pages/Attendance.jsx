import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
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
    </div>
  );
};

export default Attendance;
