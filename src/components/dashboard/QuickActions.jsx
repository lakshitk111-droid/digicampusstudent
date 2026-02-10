import React from 'react';
import { PenTool, MessageCircle, CalendarPlus } from 'lucide-react';

const QuickActions = () => {
  const actions = [
    { icon: PenTool, label: 'Create Post', color: 'bg-blue-50 text-blue-600 hover:bg-blue-100' },
    { icon: MessageCircle, label: 'Ask Question', color: 'bg-purple-50 text-purple-600 hover:bg-purple-100' },
    { icon: CalendarPlus, label: 'Add Event', color: 'bg-orange-50 text-orange-600 hover:bg-orange-100' },
  ];

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4">
      <h3 className="text-sm font-bold text-gray-800 mb-3">Quick Actions</h3>
      <div className="grid grid-cols-3 gap-3">
        {actions.map((action, idx) => (
          <button 
            key={idx}
            onClick={() => alert(`${action.label} action triggered!`)}
            className={`flex flex-col items-center justify-center p-3 rounded-xl transition-all ${action.color}`}
          >
            <action.icon className="w-6 h-6 mb-2" />
            <span className="text-xs font-medium">{action.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default QuickActions;
