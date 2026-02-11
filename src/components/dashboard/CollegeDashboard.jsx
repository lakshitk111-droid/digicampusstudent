import React from 'react';
import { BookOpen, Calendar, CheckCircle, AlertTriangle, TrendingUp, Clock, FileText } from 'lucide-react';
import NoticeFeed from './NoticeFeed';

const CollegeDashboard = () => {
  // Mock Data for College Student
  const studentProfile = {
    name: "Alex Morgan",
    course: "B.Tech Computer Science",
    semester: "6th Semester",
    rollNo: "CS2023042",
    attendance: 72, // Intentionally kept below 75% to make advisory relevant
    cgpa: "8.4"
  };

  const stats = {
    assignmentsPending: 3,
    upcomingExams: 2,
    projectsSubmitted: 4
  };

  const attendanceAdvisory = [
    {
      id: 1,
      title: "Critical Subjects",
      description: "Your attendance in 'Advanced Data Structures' (68%) and 'Computer Networks' (70%) is critically low.",
      action: "Attend next 5 consecutive lectures to reach safe zone."
    },
    {
      id: 2,
      title: "Medical Leaves",
      description: "If you have any valid medical reasons for past absences, submit the certificates to the HOD office by this Friday.",
      action: "Submit documents before Feb 15."
    },
    {
      id: 3,
      title: "Makeup Classes",
      description: "Check with Prof. Alan for extra lab sessions scheduled this Saturday to cover up for missed practicals.",
      action: "Register for Saturday Lab Session."
    },
    {
      id: 4,
      title: "General Maintenance",
      description: "To maintain an overall 75%, you cannot afford to miss more than 2 classes per subject for the rest of the month.",
      action: "Target 100% attendance for next 2 weeks."
    }
  ];

  return (
    <div className="space-y-6">
      {/* Student Summary Card - Similar to School Part */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 flex flex-col sm:flex-row items-center gap-6 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-r from-indigo-600 to-indigo-400 opacity-10"></div>
        
        <div className="relative z-10">
          <div className="w-24 h-24 rounded-full border-4 border-white shadow-md overflow-hidden">
            <img 
              src="https://ui-avatars.com/api/?name=Alex+Morgan&background=random&size=200" 
              alt={studentProfile.name} 
              className="w-full h-full object-cover" 
            />
          </div>
        </div>

        <div className="flex-1 z-10 text-center sm:text-left">
          <h2 className="text-2xl font-bold text-gray-800">{studentProfile.name}</h2>
          <div className="flex flex-wrap justify-center sm:justify-start gap-4 mt-2 text-sm text-gray-600">
            <span className="px-3 py-1 bg-indigo-50 text-indigo-700 rounded-full font-medium">
              {studentProfile.course}
            </span>
            <span className="flex items-center gap-1">
              <span className="font-semibold">Sem:</span> {studentProfile.semester}
            </span>
            <span className="flex items-center gap-1">
              <span className="font-semibold">ID:</span> {studentProfile.rollNo}
            </span>
             <span className="flex items-center gap-1">
              <span className="font-semibold">CGPA:</span> {studentProfile.cgpa}
            </span>
          </div>
        </div>
        
        <div className="z-10 text-center sm:text-right">
           <div className={`text-3xl font-bold ${studentProfile.attendance < 75 ? 'text-red-600' : 'text-green-600'}`}>
             {studentProfile.attendance}%
           </div>
           <div className="text-xs text-gray-500 uppercase font-semibold">Overall Attendance</div>
        </div>
      </div>

      {/* Stats Grid - Similar to School Part */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm flex items-center gap-4">
          <div className="p-3 bg-orange-100 text-orange-600 rounded-lg">
            <BookOpen className="w-6 h-6" />
          </div>
          <div>
            <p className="text-xs text-gray-500 font-semibold uppercase">Assignments</p>
            <p className="text-xl font-bold text-gray-800">{stats.assignmentsPending} Pending</p>
          </div>
        </div>

        <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm flex items-center gap-4">
           <div className="p-3 bg-purple-100 text-purple-600 rounded-lg">
            <Calendar className="w-6 h-6" />
          </div>
          <div>
            <p className="text-xs text-gray-500 font-semibold uppercase">Exams</p>
            <p className="text-xl font-bold text-gray-800">{stats.upcomingExams} Upcoming</p>
          </div>
        </div>
        
        <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm flex items-center gap-4">
           <div className="p-3 bg-green-100 text-green-600 rounded-lg">
            <CheckCircle className="w-6 h-6" />
          </div>
          <div>
            <p className="text-xs text-gray-500 font-semibold uppercase">Projects</p>
            <p className="text-xl font-bold text-gray-800">{stats.projectsSubmitted} Submitted</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column: Attendance Advisory (New Section) */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
            <div className="p-6 border-b border-gray-50 bg-amber-50">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-amber-100 text-amber-600 rounded-lg">
                  <AlertTriangle className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-800">Attendance Advisory</h3>
                  <p className="text-sm text-gray-600">Detailed roadmap to reach 75% eligibility criteria</p>
                </div>
              </div>
            </div>
            
            <div className="p-6">
              <div className="mb-6 flex items-center p-4 bg-red-50 border border-red-100 rounded-lg text-red-700">
                <TrendingUp className="w-5 h-5 mr-3 flex-shrink-0" />
                <p className="text-sm font-medium">
                  Your current attendance is <strong>{studentProfile.attendance}%</strong>. You need <strong>+3%</strong> to meet the mandatory requirement.
                </p>
              </div>

              <div className="space-y-4">
                {attendanceAdvisory.map((item) => (
                  <div key={item.id} className="flex gap-4 p-4 bg-gray-50 rounded-lg border border-gray-100">
                    <div className="mt-1">
                      <div className="w-2 h-2 rounded-full bg-indigo-500"></div>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-800 text-sm mb-1">{item.title}</h4>
                      <p className="text-sm text-gray-600 mb-2">{item.description}</p>
                      <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-white border border-gray-200 rounded text-xs font-medium text-indigo-600">
                        <CheckCircle className="w-3 h-3" />
                        {item.action}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-6 border-t border-gray-100">
                <h4 className="text-sm font-bold text-gray-800 mb-3">Calculated Target</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-3 bg-blue-50 rounded-lg border border-blue-100 text-center">
                    <p className="text-xs text-blue-600 uppercase font-semibold mb-1">Required Classes</p>
                    <p className="text-xl font-bold text-blue-800">12 Hours</p>
                  </div>
                  <div className="p-3 bg-green-50 rounded-lg border border-green-100 text-center">
                    <p className="text-xs text-green-600 uppercase font-semibold mb-1">Safe Date</p>
                    <p className="text-xl font-bold text-green-800">Feb 28, 2026</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Today's Classes Summary for College */}
          <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
             <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-bold text-gray-800">Today's Schedule</h3>
                <span className="text-xs font-medium text-gray-500 bg-gray-100 px-2 py-1 rounded">Feb 11, 2026</span>
             </div>
             <div className="space-y-3">
                {[
                  { time: "09:00 - 10:00", subject: "Advanced Data Structures", type: "Lecture", room: "LH-102" },
                  { time: "10:00 - 11:00", subject: "Computer Networks", type: "Lecture", room: "LH-104" },
                  { time: "11:15 - 01:15", subject: "AI & ML Lab", type: "Lab", room: "Lab Complex B" }
                ].map((cls, idx) => (
                  <div key={idx} className="flex items-center justify-between p-3 border-l-4 border-indigo-500 bg-gray-50 rounded-r-lg">
                     <div>
                        <h4 className="font-semibold text-gray-800 text-sm">{cls.subject}</h4>
                        <p className="text-xs text-gray-500">{cls.time} • {cls.room}</p>
                     </div>
                     <span className="text-[10px] uppercase font-bold text-indigo-600 bg-indigo-50 px-2 py-1 rounded">{cls.type}</span>
                  </div>
                ))}
             </div>
          </div>
        </div>

        {/* Right Column: Notices (Existing Content) */}
        <div className="lg:col-span-1">
          <NoticeFeed />
        </div>
      </div>
    </div>
  );
};

export default CollegeDashboard;