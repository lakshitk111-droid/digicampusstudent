import React, { useState } from 'react';
import { FileText, ChevronDown, ChevronUp, Paperclip } from 'lucide-react';

const NoticeFeed = () => {
  const notices = [
    {
      id: 1,
      dept: 'Examination Cell',
      date: 'Feb 07, 2026',
      title: 'Mid-Semester Exam Schedule Released',
      desc: 'The schedule for the upcoming mid-semester examinations has been released. Please check the attached PDF for detailed dates and timings. All students are requested to report 15 mins early.',
      attachment: 'Schedule_Feb2026.pdf',
      color: 'border-l-4 border-red-500'
    },
    {
      id: 2,
      dept: 'Dept. of CSE',
      date: 'Feb 06, 2026',
      title: 'Guest Lecture on AI & Ethics',
      desc: 'Join us for an insightful session with Dr. Alan Grant on the ethical implications of Artificial Intelligence in modern society. Attendance is mandatory for 6th sem students.',
      attachment: null,
      color: 'border-l-4 border-blue-500'
    },
    {
      id: 3,
      dept: 'Sports Committee',
      date: 'Feb 05, 2026',
      title: 'Inter-College Football Tournament Selection',
      desc: 'Trials for the college football team will be held this Saturday at the main ground. Bring your kits.',
      attachment: 'Registration_Form.docx',
      color: 'border-l-4 border-green-500'
    }
  ];

  const [expandedId, setExpandedId] = useState(1);

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-bold text-gray-800">Notices & Feed</h3>
      
      <div className="space-y-4">
        {notices.map((notice) => (
          <div 
            key={notice.id} 
            className={`bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden transition-all ${notice.color}`}
          >
            <div 
              className="p-4 cursor-pointer hover:bg-gray-50 transition-colors"
              onClick={() => setExpandedId(expandedId === notice.id ? null : notice.id)}
            >
              <div className="flex justify-between items-start">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs font-bold text-gray-500 uppercase tracking-wide">{notice.dept}</span>
                    <span className="text-xs text-gray-400">• {notice.date}</span>
                  </div>
                  <h4 className="font-semibold text-gray-800">{notice.title}</h4>
                </div>
                <button className="text-gray-400">
                  {expandedId === notice.id ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                </button>
              </div>
            </div>

            {expandedId === notice.id && (
              <div className="px-4 pb-4 pt-0 text-sm text-gray-600 animate-in slide-in-from-top-2 duration-200">
                <p className="mb-3 leading-relaxed">{notice.desc}</p>
                {notice.attachment && (
                  <div 
                    onClick={(e) => { e.stopPropagation(); alert(`Downloading ${notice.attachment}...`); }}
                    className="flex items-center gap-2 p-2 bg-gray-50 rounded-lg border border-gray-200 w-fit cursor-pointer hover:bg-gray-100"
                  >
                    <Paperclip className="w-4 h-4 text-primary" />
                    <span className="text-primary font-medium">{notice.attachment}</span>
                  </div>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default NoticeFeed;
