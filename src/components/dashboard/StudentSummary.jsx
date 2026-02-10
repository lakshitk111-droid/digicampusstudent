import React, { useState } from 'react';
import { Edit2, Camera } from 'lucide-react';

const StudentSummary = () => {
  const [headline, setHeadline] = useState("Aspiring Data Scientist | Tech Enthusiast");
  const [isEditing, setIsEditing] = useState(false);

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 flex flex-col sm:flex-row items-center sm:items-start gap-6 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-r from-primary to-primary-light opacity-10"></div>
      
      <div className="relative z-10 flex-shrink-0">
        <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full border-4 border-white shadow-md bg-gray-200 flex items-center justify-center overflow-hidden">
           <img src="https://ui-avatars.com/api/?name=Alex+Morgan&background=random&size=200" alt="Profile" className="w-full h-full object-cover" />
        </div>
        <button 
          onClick={() => alert("Upload photo feature coming soon!")}
          className="absolute bottom-0 right-0 p-1.5 bg-white rounded-full shadow border border-gray-200 text-gray-600 hover:text-primary transition-colors"
        >
          <Camera className="w-4 h-4" />
        </button>
      </div>

      <div className="flex-1 z-10 text-center sm:text-left w-full">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2">
          <h2 className="text-2xl font-bold text-gray-800">Alex Morgan</h2>
          <span className="inline-block px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-semibold mt-2 sm:mt-0">
            Active Student
          </span>
        </div>

        <div className="grid grid-cols-2 gap-x-8 gap-y-2 text-sm text-gray-600 mb-4">
          <div>
            <span className="font-medium text-gray-500">ID:</span> STU-2024-089
          </div>
          <div>
            <span className="font-medium text-gray-500">Course:</span> B.Tech CSE
          </div>
          <div>
            <span className="font-medium text-gray-500">Sem:</span> 6th Semester
          </div>
          <div>
            <span className="font-medium text-gray-500">Batch:</span> 2021-25
          </div>
        </div>

        <div className="flex items-center justify-center sm:justify-start gap-2 text-gray-500 text-sm">
          {isEditing ? (
            <input 
              type="text" 
              value={headline} 
              onChange={(e) => setHeadline(e.target.value)}
              onBlur={() => setIsEditing(false)}
              autoFocus
              className="border-b border-primary outline-none bg-transparent w-full max-w-xs"
            />
          ) : (
            <p className="italic">"{headline}"</p>
          )}
          <button onClick={() => setIsEditing(true)} className="text-primary hover:text-primary-light">
            <Edit2 className="w-3 h-3" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default StudentSummary;
