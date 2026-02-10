import React from 'react';
import { CheckCircle, Circle, Clock } from 'lucide-react';

const AdmissionTimeline = () => {
  const steps = [
    { title: 'Form Submitted', status: 'completed', date: 'Jan 10, 10:00 AM' },
    { title: 'Fees Paid', status: 'completed', date: 'Jan 12, 02:30 PM' },
    { title: 'Docs Verified', status: 'pending', date: 'In Progress' },
    { title: 'Confirmed', status: 'pending', date: 'Waiting' },
  ];

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
      <h3 className="text-lg font-bold text-gray-800 mb-4">Admission Status</h3>
      <div className="relative">
        {/* Line */}
        <div className="absolute left-3 top-2 bottom-2 w-0.5 bg-gray-200"></div>

        <div className="space-y-6">
          {steps.map((step, idx) => (
            <div key={idx} className="relative flex items-start gap-4">
              <div className={`
                z-10 w-6 h-6 rounded-full flex items-center justify-center bg-white
                ${step.status === 'completed' ? 'text-green-500' : 'text-gray-300'}
              `}>
                {step.status === 'completed' ? (
                  <CheckCircle className="w-6 h-6 fill-white" />
                ) : (
                  <Circle className="w-5 h-5 fill-white border-2 border-current rounded-full" />
                )}
              </div>
              <div className="flex-1">
                <p className={`text-sm font-semibold ${step.status === 'completed' ? 'text-gray-800' : 'text-gray-500'}`}>
                  {step.title}
                </p>
                <p className="text-xs text-gray-400">{step.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdmissionTimeline;
