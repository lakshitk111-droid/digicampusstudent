import React from 'react';
import { Video, Users, Clock } from 'lucide-react';

const TodaysClasses = () => {
  const classes = [
    { name: 'Data Structures & Algorithms', code: 'CS301', time: '09:00 AM - 10:00 AM', faculty: 'Dr. Sarah Smith', type: 'Lecture', status: 'Live' },
    { name: 'Database Management Systems', code: 'CS302', time: '11:00 AM - 01:00 PM', faculty: 'Prof. John Doe', type: 'Lab', status: 'Upcoming' },
    { name: 'Computer Networks', code: 'CS303', time: '02:00 PM - 03:00 PM', faculty: 'Ms. Emily White', type: 'Lecture', status: 'Upcoming' },
  ];

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-bold text-gray-800">Today's Classes</h3>
        <span className="text-xs font-medium text-gray-500 bg-gray-100 px-2 py-1 rounded">Feb 07, 2026</span>
      </div>

      <div className="space-y-4">
        {classes.map((cls, idx) => (
          <div key={idx} className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-4 rounded-xl border border-gray-100 hover:border-primary/30 hover:shadow-md transition-all group bg-gray-50/50">
            <div className="flex items-start gap-4">
              <div className={`
                w-12 h-12 rounded-xl flex items-center justify-center font-bold text-lg
                ${cls.status === 'Live' ? 'bg-red-100 text-red-600 animate-pulse' : 'bg-blue-100 text-primary'}
              `}>
                {cls.code.slice(0, 2)}
              </div>
              <div>
                <h4 className="font-bold text-gray-800 group-hover:text-primary transition-colors">{cls.name}</h4>
                <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-gray-500 mt-1">
                  <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {cls.time}</span>
                  <span className="flex items-center gap-1"><Users className="w-3 h-3" /> {cls.faculty}</span>
                  <span className="bg-gray-200 px-1.5 py-0.5 rounded text-[10px] font-semibold uppercase">{cls.type}</span>
                </div>
              </div>
            </div>

            <button 
              onClick={() => alert(cls.status === 'Live' ? `Joining ${cls.name}...` : `Viewing details for ${cls.name}`)}
              className={`
              mt-3 sm:mt-0 w-full sm:w-auto px-4 py-2 rounded-lg text-sm font-medium flex items-center justify-center gap-2 transition-all
              ${cls.status === 'Live' 
                ? 'bg-primary text-white hover:bg-primary-light shadow-lg shadow-primary/30' 
                : 'bg-white border border-gray-200 text-gray-600 hover:bg-gray-50'}
            `}>
              <Video className="w-4 h-4" />
              {cls.status === 'Live' ? 'Join Now' : 'View Details'}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TodaysClasses;
