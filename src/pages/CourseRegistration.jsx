import React, { useState } from 'react';
import { BookOpen, PlusCircle, MinusCircle, AlertCircle, CheckCircle } from 'lucide-react';

const CourseRegistration = () => {
  const [courses, setCourses] = useState([
    {
      id: 'cs401',
      code: 'CS401',
      name: 'Advanced Algorithms',
      credits: 4,
      semester: '6th',
      type: 'Core',
      status: 'Registered'
    },
    {
      id: 'cs402',
      code: 'CS402',
      name: 'Machine Learning',
      credits: 4,
      semester: '6th',
      type: 'Core',
      status: 'Registered'
    },
    {
      id: 'cs403',
      code: 'CS403',
      name: 'Cloud Computing',
      credits: 3,
      semester: '6th',
      type: 'Elective',
      status: 'Not Registered'
    },
    {
      id: 'cs404',
      code: 'CS404',
      name: 'Cyber Security',
      credits: 3,
      semester: '6th',
      type: 'Elective',
      status: 'Not Registered'
    },
    {
      id: 'hu401',
      code: 'HU401',
      name: 'Professional Ethics',
      credits: 2,
      semester: '6th',
      type: 'Core',
      status: 'Registered'
    }
  ]);

  const [totalCredits, setTotalCredits] = useState(10);
  const MAX_CREDITS = 24;

  const handleRegister = (courseId, credits) => {
    if (totalCredits + credits > MAX_CREDITS) {
      alert(`Cannot register! Credit limit of ${MAX_CREDITS} exceeded.`);
      return;
    }
    setCourses(courses.map(c => c.id === courseId ? { ...c, status: 'Pending Approval' } : c));
    setTotalCredits(prev => prev + credits);
    alert("Course registered successfully (Pending Approval).");
  };

  const handleDrop = (courseId, credits) => {
    setCourses(courses.map(c => c.id === courseId ? { ...c, status: 'Dropped' } : c));
    setTotalCredits(prev => prev - credits);
    alert("Course dropped successfully.");
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-800">Course Registration</h1>
        <div className="bg-white px-4 py-2 rounded-lg border border-gray-200 shadow-sm">
          <span className="text-sm text-gray-600">Total Credits: </span>
          <span className={`font-bold ${totalCredits > MAX_CREDITS ? 'text-red-600' : 'text-primary'}`}>
            {totalCredits} / {MAX_CREDITS}
          </span>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="p-6 border-b border-gray-100">
          <h2 className="text-lg font-semibold text-gray-800 flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-primary" />
            Available Courses for 6th Semester
          </h2>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-100">
                <th className="p-4 text-sm font-semibold text-gray-600">Course Code</th>
                <th className="p-4 text-sm font-semibold text-gray-600">Course Name</th>
                <th className="p-4 text-sm font-semibold text-gray-600">Type</th>
                <th className="p-4 text-sm font-semibold text-gray-600">Credits</th>
                <th className="p-4 text-sm font-semibold text-gray-600">Status</th>
                <th className="p-4 text-sm font-semibold text-gray-600">Action</th>
              </tr>
            </thead>
            <tbody>
              {courses.map((course) => (
                <tr key={course.id} className="border-b border-gray-50 hover:bg-gray-50/50">
                  <td className="p-4 text-sm font-medium text-gray-800">{course.code}</td>
                  <td className="p-4 text-sm text-gray-800">{course.name}</td>
                  <td className="p-4 text-sm text-gray-600">
                    <span className={`px-2 py-1 rounded text-xs font-medium ${
                      course.type === 'Core' ? 'bg-blue-50 text-blue-600' : 'bg-purple-50 text-purple-600'
                    }`}>
                      {course.type}
                    </span>
                  </td>
                  <td className="p-4 text-sm text-gray-600">{course.credits}</td>
                  <td className="p-4 text-sm">
                    <span className={`flex items-center gap-1.5 text-xs font-medium px-2 py-1 rounded-full w-fit ${
                      course.status === 'Registered' ? 'bg-green-100 text-green-700' :
                      course.status === 'Pending Approval' ? 'bg-amber-100 text-amber-700' :
                      course.status === 'Dropped' ? 'bg-red-100 text-red-700' :
                      'bg-gray-100 text-gray-600'
                    }`}>
                      {course.status === 'Registered' && <CheckCircle className="w-3 h-3" />}
                      {course.status === 'Pending Approval' && <AlertCircle className="w-3 h-3" />}
                      {course.status}
                    </span>
                  </td>
                  <td className="p-4">
                    {course.status === 'Not Registered' || course.status === 'Dropped' ? (
                      <button 
                        onClick={() => handleRegister(course.id, course.credits)}
                        className="flex items-center gap-1 px-3 py-1.5 bg-primary text-white text-xs font-medium rounded hover:bg-blue-800 transition-colors"
                      >
                        <PlusCircle className="w-3 h-3" />
                        Register
                      </button>
                    ) : (
                      <button 
                        onClick={() => handleDrop(course.id, course.credits)}
                        className="flex items-center gap-1 px-3 py-1.5 bg-white border border-red-200 text-red-600 text-xs font-medium rounded hover:bg-red-50 transition-colors"
                      >
                        <MinusCircle className="w-3 h-3" />
                        Drop
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default CourseRegistration;
