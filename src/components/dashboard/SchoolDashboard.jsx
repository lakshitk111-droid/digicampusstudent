import React from 'react';
import { studentProfile, todaysClasses, homework, notices, exams } from '../../data/schoolData';
import { Clock, BookOpen, Calendar, AlertCircle, CheckCircle } from 'lucide-react';

const SchoolDashboard = () => {
  return (
    <div className="space-y-6">
      {/* Student Summary Card */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 flex flex-col sm:flex-row items-center gap-6 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-r from-blue-600 to-blue-400 opacity-10"></div>
        
        <div className="relative z-10">
          <div className="w-24 h-24 rounded-full border-4 border-white shadow-md overflow-hidden">
            <img src={studentProfile.photo} alt={studentProfile.name} className="w-full h-full object-cover" />
          </div>
        </div>

        <div className="flex-1 z-10 text-center sm:text-left">
          <h2 className="text-2xl font-bold text-gray-800">{studentProfile.name}</h2>
          <div className="flex flex-wrap justify-center sm:justify-start gap-4 mt-2 text-sm text-gray-600">
            <span className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full font-medium">
              {studentProfile.class}
            </span>
            <span className="flex items-center gap-1">
              <span className="font-semibold">Roll No:</span> {studentProfile.rollNo}
            </span>
            <span className="flex items-center gap-1">
              <span className="font-semibold">Year:</span> {studentProfile.academicYear}
            </span>
          </div>
        </div>
        
        <div className="z-10 text-center sm:text-right">
           <div className="text-3xl font-bold text-blue-600">{studentProfile.attendance}%</div>
           <div className="text-xs text-gray-500 uppercase font-semibold">Attendance</div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm flex items-center gap-4">
          <div className="p-3 bg-orange-100 text-orange-600 rounded-lg">
            <BookOpen className="w-6 h-6" />
          </div>
          <div>
            <p className="text-xs text-gray-500 font-semibold uppercase">Homework Due</p>
            <p className="text-xl font-bold text-gray-800">{homework.filter(h => h.status === 'Pending').length} Pending</p>
          </div>
        </div>

        <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm flex items-center gap-4">
           <div className="p-3 bg-purple-100 text-purple-600 rounded-lg">
            <Calendar className="w-6 h-6" />
          </div>
          <div>
            <p className="text-xs text-gray-500 font-semibold uppercase">Upcoming Exams</p>
            <p className="text-xl font-bold text-gray-800">{exams.filter(e => e.status === 'Upcoming').length} Tests</p>
          </div>
        </div>
        
        <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm flex items-center gap-4">
           <div className="p-3 bg-green-100 text-green-600 rounded-lg">
            <CheckCircle className="w-6 h-6" />
          </div>
          <div>
            <p className="text-xs text-gray-500 font-semibold uppercase">Tasks Done</p>
            <p className="text-xl font-bold text-gray-800">{homework.filter(h => h.status === 'Submitted').length} Completed</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Today's Classes */}
        <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
          <h3 className="text-lg font-bold text-gray-800 mb-4">Today's Classes</h3>
          <div className="space-y-3">
            {todaysClasses.map((cls, idx) => (
              <div key={idx} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg border border-gray-100">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-white flex items-center justify-center font-bold text-blue-600 border border-gray-200">
                    {idx + 1}
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 text-sm">{cls.subject}</h4>
                    <p className="text-xs text-gray-500">{cls.teacher}</p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-xs font-bold text-gray-600">{cls.time}</div>
                  <span className="text-[10px] bg-blue-100 text-blue-700 px-1.5 py-0.5 rounded uppercase">{cls.type}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Notices */}
        <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
          <h3 className="text-lg font-bold text-gray-800 mb-4">Important Notices</h3>
          <div className="space-y-4">
             {notices.slice(0, 3).map((notice) => (
                <div key={notice.id} className="flex gap-3 pb-3 border-b border-gray-50 last:border-0 last:pb-0">
                   <div className={`mt-1 w-2 h-2 rounded-full shrink-0 ${notice.category === 'Holiday' ? 'bg-green-500' : 'bg-blue-500'}`}></div>
                   <div>
                      <h4 className="text-sm font-semibold text-gray-800">{notice.title}</h4>
                      <p className="text-xs text-gray-500 mt-0.5 line-clamp-2">{notice.content}</p>
                      <span className="text-[10px] text-gray-400 mt-1 block">{notice.date}</span>
                   </div>
                </div>
             ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SchoolDashboard;
