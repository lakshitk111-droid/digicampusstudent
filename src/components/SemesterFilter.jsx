import React from 'react';

const SemesterFilter = ({ activeSemester, onSemesterChange }) => {
  const semesters = [
    "1st Semester", "2nd Semester", "3rd Semester", 
    "4th Semester", "5th Semester", "6th Semester"
  ];

  return (
    <div className="flex overflow-x-auto pb-2 gap-2 scrollbar-hide mb-6">
      {semesters.map((semester) => (
        <button
          key={semester}
          onClick={() => onSemesterChange(semester)}
          className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all duration-200 ${
            activeSemester === semester
              ? 'bg-primary text-white shadow-md'
              : 'bg-white text-gray-600 hover:bg-gray-50 border border-gray-200'
          }`}
        >
          {semester}
        </button>
      ))}
    </div>
  );
};

export default SemesterFilter;
