import React from 'react';
import { BookOpen, User, FileText } from 'lucide-react';
import { subjects } from '../data/schoolData';

const Subjects = () => {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">Subjects</h1>
          <p className="text-sm text-gray-500">Your academic subjects and syllabus</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {subjects.map((subject, index) => (
          <div key={index} className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-start justify-between mb-4">
              <div className="p-3 bg-blue-50 text-blue-600 rounded-lg">
                <BookOpen className="w-6 h-6" />
              </div>
              <span className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded-full font-medium">
                {subject.periodsPerWeek} Periods/Week
              </span>
            </div>
            
            <h3 className="text-lg font-bold text-gray-800 mb-2">{subject.name}</h3>
            
            <div className="flex items-center gap-2 text-sm text-gray-600 mb-4">
              <User className="w-4 h-4" />
              <span>{subject.teacher}</span>
            </div>

            <button className="w-full flex items-center justify-center gap-2 py-2 border border-gray-200 rounded-lg text-sm font-medium text-gray-600 hover:bg-gray-50 transition-colors">
              <FileText className="w-4 h-4" />
              Download Syllabus
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Subjects;
