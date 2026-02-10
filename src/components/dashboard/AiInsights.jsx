import React from 'react';
import { TrendingUp, AlertTriangle, Clock, Sparkles } from 'lucide-react';

const AiInsights = () => {
  return (
    <div className="bg-gradient-to-br from-indigo-900 to-primary rounded-xl shadow-lg text-white p-5 relative overflow-hidden">
      <div className="absolute top-0 right-0 p-3 opacity-10">
        <Sparkles className="w-24 h-24" />
      </div>
      
      <div className="relative z-10">
        <div className="flex items-center gap-2 mb-4">
          <Sparkles className="w-5 h-5 text-yellow-300" />
          <h3 className="font-bold text-lg">AI Insights</h3>
        </div>

        <div className="space-y-3">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 border border-white/10">
            <div className="flex items-start gap-3">
              <AlertTriangle className="w-5 h-5 text-yellow-300 mt-0.5" />
              <div>
                <p className="text-sm font-semibold text-white">Attendance Risk</p>
                <p className="text-xs text-blue-100 mt-1">
                  Your attendance in <span className="font-bold">Computer Networks</span> is 72%. Attend next 2 classes to reach safe zone (75%).
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 border border-white/10">
             <div className="flex items-start gap-3">
              <Clock className="w-5 h-5 text-red-300 mt-0.5" />
              <div>
                <p className="text-sm font-semibold text-white">Assignment Delay Prediction</p>
                <p className="text-xs text-blue-100 mt-1">
                  Based on your history, you might miss the <span className="font-bold">OS Project</span> deadline. Recommended start: Today.
                </p>
              </div>
            </div>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 border border-white/10">
             <div className="flex items-start gap-3">
              <TrendingUp className="w-5 h-5 text-green-300 mt-0.5" />
              <div>
                <p className="text-sm font-semibold text-white">Academic Progress</p>
                <p className="text-xs text-blue-100 mt-1">
                  You are in the top 15% of your batch this semester. Keep it up!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AiInsights;
