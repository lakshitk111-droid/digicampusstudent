import React from 'react';
import { Calendar as CalendarIcon, Clock, AlertCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const RightPanel = () => {
  const navigate = useNavigate();

  return (
    <aside className="hidden xl:block w-80 sticky top-16 h-[calc(100vh-4rem)] overflow-y-auto bg-white border-l border-gray-200 p-4 space-y-6">
      
      {/* Today's Classes - Mini */}
      <div>
        <h3 className="text-sm font-bold text-gray-800 mb-3 flex items-center justify-between">
          Today's Schedule
          <span 
            onClick={() => navigate('/schedule')}
            className="text-xs text-primary font-medium cursor-pointer hover:underline"
          >
            View All
          </span>
        </h3>
        <div className="space-y-3">
          {[
            { subject: 'Data Structures', time: '09:00 AM', type: 'Lecture' },
            { subject: 'Database Mgmt', time: '11:00 AM', type: 'Lab' },
          ].map((cls, idx) => (
            <div key={idx} className="flex items-start gap-3 p-3 rounded-lg bg-gray-50 border border-gray-100">
              <div className="p-2 bg-white rounded-md border border-gray-100 shadow-sm">
                <Clock className="w-4 h-4 text-primary" />
              </div>
              <div>
                <p className="text-sm font-semibold text-gray-800">{cls.subject}</p>
                <p className="text-xs text-gray-500">{cls.time} • {cls.type}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Upcoming Events */}
      <div>
        <h3 className="text-sm font-bold text-gray-800 mb-3">Upcoming Events</h3>
        <div className="space-y-3">
          {[
            { title: 'Tech Symposium', date: 'Feb 12', color: 'bg-blue-100 text-blue-700' },
            { title: 'Guest Lecture', date: 'Feb 15', color: 'bg-purple-100 text-purple-700' },
          ].map((evt, idx) => (
            <div key={idx} className="flex items-center gap-3">
              <div className={`w-12 h-12 rounded-lg flex flex-col items-center justify-center ${evt.color}`}>
                <span className="text-xs font-bold">{evt.date.split(' ')[1]}</span>
                <span className="text-[10px] uppercase">{evt.date.split(' ')[0]}</span>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-800">{evt.title}</p>
                <p className="text-xs text-gray-500">Auditorium A</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Deadlines */}
      <div>
        <h3 className="text-sm font-bold text-gray-800 mb-3">Deadlines</h3>
        <div className="p-3 bg-red-50 border border-red-100 rounded-lg">
          <div className="flex items-start gap-2 mb-2">
            <AlertCircle className="w-4 h-4 text-red-500 mt-0.5" />
            <div>
              <p className="text-sm font-semibold text-gray-800">OS Project Submission</p>
              <p className="text-xs text-red-600 font-medium">Due in 2 days</p>
            </div>
          </div>
          <div className="w-full bg-red-200 h-1.5 rounded-full overflow-hidden">
            <div className="bg-red-500 h-full w-3/4"></div>
          </div>
        </div>
      </div>

    </aside>
  );
};

export default RightPanel;
