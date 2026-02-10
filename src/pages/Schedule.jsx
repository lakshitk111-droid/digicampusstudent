import React, { useState } from 'react';
import { Clock, User, MapPin, BookOpen, Calendar as CalendarIcon, GraduationCap } from 'lucide-react';
import { useMode } from '../context/ModeContext';
import { weeklySchedule } from '../data/schoolData';

const COLLEGE_SCHEDULE_DATA = {
  Monday: [
    { subject: 'Advanced Data Structures', code: 'CS601', time: '09:00 AM - 10:00 AM', faculty: 'Dr. Alan Turing', type: 'Lecture', location: 'Room 401', semester: 'Sem 6' },
    { subject: 'Artificial Intelligence', code: 'CS602', time: '10:00 AM - 11:00 AM', faculty: 'Prof. Marvin Minsky', type: 'Lecture', location: 'Room 401', semester: 'Sem 6' },
    { subject: 'Machine Learning', code: 'CS603', time: '11:00 AM - 01:00 PM', faculty: 'Dr. Andrew Ng', type: 'Lab', location: 'AI Lab', semester: 'Sem 6' },
  ],
  Tuesday: [
    { subject: 'Cloud Computing', code: 'CS604', time: '09:00 AM - 10:00 AM', faculty: 'Ms. Ada Lovelace', type: 'Lecture', location: 'Room 402', semester: 'Sem 6' },
    { subject: 'Software Project Mgmt', code: 'CS605', time: '10:00 AM - 11:00 AM', faculty: 'Mr. Frederick Brooks', type: 'Lecture', location: 'Room 402', semester: 'Sem 6' },
    { subject: 'Adv. Data Structures', code: 'CS601', time: '11:00 AM - 01:00 PM', faculty: 'Dr. Alan Turing', type: 'Lab', location: 'Computer Lab 1', semester: 'Sem 6' },
  ],
  Wednesday: [
    { subject: 'Information Security', code: 'CS606', time: '09:00 AM - 10:00 AM', faculty: 'Dr. Whitfield Diffie', type: 'Lecture', location: 'Room 403', semester: 'Sem 6' },
    { subject: 'Machine Learning', code: 'CS603', time: '10:00 AM - 11:00 AM', faculty: 'Dr. Andrew Ng', type: 'Lecture', location: 'Room 403', semester: 'Sem 6' },
    { subject: 'Adv. Data Structures', code: 'CS601', time: '11:00 AM - 12:00 PM', faculty: 'Dr. Alan Turing', type: 'Lecture', location: 'Room 403', semester: 'Sem 6' },
    { subject: 'Library', code: 'LIB', time: '02:00 PM - 03:00 PM', faculty: '-', type: 'Self Study', location: 'Central Library', semester: 'Sem 6' },
  ],
  Thursday: [
    { subject: 'Artificial Intelligence', code: 'CS602', time: '09:00 AM - 11:00 AM', faculty: 'Prof. Marvin Minsky', type: 'Lab', location: 'AI Lab', semester: 'Sem 6' },
    { subject: 'Cloud Computing', code: 'CS604', time: '11:00 AM - 12:00 PM', faculty: 'Ms. Ada Lovelace', type: 'Lecture', location: 'Room 401', semester: 'Sem 6' },
    { subject: 'Software Project Mgmt', code: 'CS605', time: '02:00 PM - 04:00 PM', faculty: 'Mr. Frederick Brooks', type: 'Workshop', location: 'Seminar Hall', semester: 'Sem 6' },
  ],
  Friday: [
    { subject: 'Information Security', code: 'CS606', time: '09:00 AM - 10:00 AM', faculty: 'Dr. Whitfield Diffie', type: 'Lecture', location: 'Room 402', semester: 'Sem 6' },
    { subject: 'Mini Project', code: 'PRJ601', time: '10:00 AM - 12:00 PM', faculty: 'Multiple', type: 'Practical', location: 'Project Lab', semester: 'Sem 6' },
    { subject: 'Mentoring', code: 'MEN', time: '02:00 PM - 03:00 PM', faculty: 'Class Teacher', type: 'Meeting', location: 'Room 402', semester: 'Sem 6' },
  ],
  Saturday: [
    { subject: 'Placement Training', code: 'PT601', time: '09:00 AM - 12:00 PM', faculty: 'External', type: 'Training', location: 'Auditorium', semester: 'Sem 6' },
  ]
};

const DAYS = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

const Schedule = () => {
  const { mode } = useMode();
  const [viewMode, setViewMode] = useState('week'); // 'today' or 'week'
  const todayIndex = new Date().getDay();
  const todayName = DAYS[todayIndex];

  const scheduleData = mode === 'school' ? weeklySchedule : COLLEGE_SCHEDULE_DATA;

  // Helper to get date for current week days
  const getDayDate = (dayName) => {
    const today = new Date();
    const currentDayIndex = today.getDay();
    const targetDayIndex = DAYS.indexOf(dayName);
    
    // Calculate difference. 
    // Note: This logic assumes we are looking at the *current* week (Sunday to Saturday)
    const diff = targetDayIndex - currentDayIndex;
    const date = new Date(today);
    date.setDate(today.getDate() + diff);
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
  };

  const renderDaySchedule = (dayName, classes) => {
    const isToday = dayName === todayName;
    const dayIndex = DAYS.indexOf(dayName);
    const isPast = dayIndex < todayIndex;
    
    // Visual state for the day card
    let containerClasses = "bg-white rounded-xl shadow-sm border overflow-hidden transition-all duration-200";
    let headerClasses = "px-6 py-4 border-b flex justify-between items-center";
    
    if (isToday) {
      containerClasses += " border-primary/50 ring-1 ring-primary/20 shadow-md";
      headerClasses += " bg-primary/5 border-primary/10";
    } else if (isPast) {
      containerClasses += " border-gray-100 opacity-70 grayscale-[0.5]"; // Read-only look
      headerClasses += " bg-gray-50/80 border-gray-100";
    } else {
      containerClasses += " border-gray-200 hover:shadow-md hover:border-primary/30";
      headerClasses += " bg-gray-50 border-gray-100";
    }

    return (
      <div key={dayName} className={containerClasses}>
        <div className={headerClasses}>
          <div>
            <h3 className={`font-bold text-lg ${isToday ? 'text-primary' : 'text-gray-800'}`}>{dayName}</h3>
            <p className="text-xs text-gray-500 font-medium">{getDayDate(dayName)}</p>
          </div>
          {isToday && <span className="text-[10px] font-bold bg-primary text-white px-2 py-1 rounded-full uppercase tracking-wide">Today</span>}
          {isPast && !isToday && <span className="text-[10px] font-bold bg-gray-200 text-gray-500 px-2 py-1 rounded-full uppercase tracking-wide">Completed</span>}
        </div>
        
        <div className="p-4 space-y-3">
          {classes && classes.length > 0 ? (
            classes.map((cls, idx) => (
              <div key={idx} className={`group flex flex-col sm:flex-row gap-3 p-3 rounded-lg border transition-all ${isPast ? 'bg-transparent border-transparent' : 'hover:bg-gray-50 border-transparent hover:border-gray-100'}`}>
                <div className="min-w-[120px] flex flex-col justify-center">
                   <span className={`text-xs font-bold flex items-center gap-1.5 ${isToday ? 'text-gray-800' : 'text-gray-600'}`}>
                     <Clock className={`w-3.5 h-3.5 ${isToday ? 'text-primary' : 'text-gray-400'}`} />
                     {cls.time.split(' - ')[0]}
                   </span>
                   <span className="text-[10px] text-gray-400 pl-5">{cls.time.split(' - ')[1]}</span>
                </div>
                
                <div className="flex-1 border-l border-gray-100 pl-3 sm:pl-4">
                  <div className="flex justify-between items-start">
                    <h4 className={`font-bold text-sm transition-colors ${isPast ? 'text-gray-600' : 'text-gray-800 group-hover:text-primary'}`}>
                      {cls.subject}
                    </h4>
                    <span className={`text-[10px] px-1.5 py-0.5 rounded font-medium ${
                      cls.type === 'Lecture' ? 'bg-blue-50 text-blue-600' :
                      cls.type === 'Lab' || cls.type === 'Practical' ? 'bg-purple-50 text-purple-600' :
                      'bg-orange-50 text-orange-600'
                    }`}>
                      {cls.type}
                    </span>
                  </div>
                  
                  <div className="flex items-center gap-2 mt-0.5">
                    <p className="text-xs text-gray-500 font-medium">{cls.code}</p>
                    <span className="text-[10px] text-gray-400">•</span>
                    <span className="text-[10px] font-medium text-gray-500 bg-gray-100 px-1.5 rounded">{cls.semester}</span>
                  </div>
                  
                  <div className="flex items-center gap-4 mt-2">
                    <span className="text-xs text-gray-500 flex items-center gap-1">
                      <User className="w-3 h-3" /> {cls.faculty}
                    </span>
                    <span className="text-xs text-gray-500 flex items-center gap-1">
                      <MapPin className="w-3 h-3" /> {cls.location}
                    </span>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center py-8 text-gray-400">
              <BookOpen className="w-8 h-8 mx-auto mb-2 opacity-20" />
              <p className="text-sm">No classes scheduled</p>
            </div>
          )}
        </div>
      </div>
    );
  };

  return (
    <div className="space-y-6 max-w-5xl mx-auto pb-10">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">Class Schedule</h1>
          <p className="text-gray-500 flex items-center gap-2">
            <span className="bg-primary/10 text-primary px-2 py-0.5 rounded text-xs font-semibold">Active Semester</span>
            Semester 6 • 2025-2026
          </p>
        </div>
        
        <div className="flex p-1 bg-white border border-gray-200 rounded-lg shadow-sm">
          <button 
            onClick={() => setViewMode('today')}
            className={`px-4 py-2 text-sm font-medium rounded-md transition-all ${
              viewMode === 'today' ? 'bg-primary text-white shadow-sm' : 'text-gray-600 hover:bg-gray-50'
            }`}
          >
            Today
          </button>
          <button 
            onClick={() => setViewMode('week')}
            className={`px-4 py-2 text-sm font-medium rounded-md transition-all ${
              viewMode === 'week' ? 'bg-primary text-white shadow-sm' : 'text-gray-600 hover:bg-gray-50'
            }`}
          >
            This Week
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6">
        {viewMode === 'today' ? (
          todayName === 'Sunday' ? (
            <div className="text-center py-12 bg-white rounded-xl border border-gray-200 border-dashed">
              <CalendarIcon className="w-12 h-12 text-gray-300 mx-auto mb-3" />
              <h3 className="text-lg font-bold text-gray-800">No Classes Today</h3>
              <p className="text-gray-500">It's Sunday! Enjoy your weekend.</p>
              <button 
                onClick={() => setViewMode('week')}
                className="mt-4 text-primary font-medium hover:underline"
              >
                View Full Week Schedule
              </button>
            </div>
          ) : (
            renderDaySchedule(todayName, scheduleData[todayName])
          )
        ) : (
          // Weekly View - Explicitly mapping Monday to Saturday to ensure order
          ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'].map((day) => 
            renderDaySchedule(day, scheduleData[day])
          )
        )}
      </div>
    </div>
  );
};

export default Schedule;
