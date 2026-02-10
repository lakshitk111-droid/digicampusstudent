import React from 'react';
import { Bell, Calendar, Info } from 'lucide-react';
import { notices } from '../data/schoolData';

const Notices = () => {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">Notices & Announcements</h1>
          <p className="text-sm text-gray-500">Stay updated with school news</p>
        </div>
      </div>

      <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
        <div className="divide-y divide-gray-100">
          {notices.map((notice) => (
            <div key={notice.id} className="p-6 hover:bg-gray-50 transition-colors">
              <div className="flex items-start gap-4">
                <div className={`p-3 rounded-full shrink-0 ${
                  notice.category === 'Event' ? 'bg-purple-100 text-purple-600' :
                  notice.category === 'Holiday' ? 'bg-green-100 text-green-600' :
                  'bg-blue-100 text-blue-600'
                }`}>
                  <Bell className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <span className={`text-xs font-bold px-2 py-1 rounded-full ${
                       notice.category === 'Event' ? 'bg-purple-50 text-purple-700' :
                       notice.category === 'Holiday' ? 'bg-green-50 text-green-700' :
                       'bg-blue-50 text-blue-700'
                    }`}>
                      {notice.category}
                    </span>
                    <div className="flex items-center gap-1 text-xs text-gray-500">
                      <Calendar className="w-3 h-3" />
                      {notice.date}
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">{notice.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {notice.content}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Notices;
