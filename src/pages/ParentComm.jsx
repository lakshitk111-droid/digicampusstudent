import React from 'react';
import { MessageSquare, User, CheckCircle, Clock } from 'lucide-react';
import { parentComm } from '../data/schoolData';

const ParentComm = () => {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">Parent Communication</h1>
          <p className="text-sm text-gray-500">Messages from teachers and school</p>
        </div>
      </div>

      <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
        <div className="divide-y divide-gray-100">
          {parentComm.map((msg) => (
            <div key={msg.id} className={`p-6 transition-colors ${msg.status === 'Unread' ? 'bg-blue-50/50' : 'hover:bg-gray-50'}`}>
              <div className="flex items-start gap-4">
                <div className="p-3 bg-indigo-100 text-indigo-600 rounded-full">
                  <User className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-semibold text-gray-800">{msg.sender}</h4>
                    <span className="text-xs text-gray-500">{msg.date}</span>
                  </div>
                  <p className="text-gray-600 text-sm mb-3">
                    {msg.message}
                  </p>
                  <div className="flex items-center gap-2">
                    {msg.status === 'Unread' ? (
                        <span className="flex items-center gap-1 text-xs font-medium text-orange-600 bg-orange-50 px-2 py-1 rounded">
                            <Clock className="w-3 h-3" /> Action Required
                        </span>
                    ) : (
                        <span className="flex items-center gap-1 text-xs font-medium text-green-600 bg-green-50 px-2 py-1 rounded">
                            <CheckCircle className="w-3 h-3" /> Acknowledged
                        </span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ParentComm;
