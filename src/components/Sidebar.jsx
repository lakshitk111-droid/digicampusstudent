import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { 
  Home, User, BookOpen, GraduationCap, FileText, 
  ClipboardList, CheckSquare, Calendar, HelpCircle, 
  MessageSquare, BarChart2, PenTool, Layers, Briefcase, 
  CreditCard, FilePlus, Users, Bell, Trophy, Clock
} from 'lucide-react';
import { useMode } from '../context/ModeContext';

const Sidebar = ({ isOpen, closeSidebar }) => {
  const navigate = useNavigate();
  const { mode } = useMode();

  const collegeNavItems = [
    { name: 'Home / Feed', path: '/', icon: Home },
    { name: 'Profile', path: '/profile', icon: User },
    { name: 'Classroom', path: '/classroom', icon: BookOpen },
    { name: 'Academics', path: '/academics', icon: GraduationCap },
    { name: 'Examinations', path: '/examinations', icon: PenTool },
    { name: 'Course Reg.', path: '/course-registration', icon: Layers },
    { name: 'Assignments', path: '/assignments', icon: FileText },
    { name: 'Attendance', path: '/attendance', icon: CheckSquare },
    { name: 'Results', path: '/results', icon: BarChart2 },
    { name: 'Placements', path: '/placements', icon: Briefcase },
    { name: 'Payments', path: '/payments', icon: CreditCard },
    { name: 'Student Form', path: '/student-form', icon: FilePlus },
    { name: 'Calendar', path: '/calendar', icon: Calendar },
    { name: 'Feedback', path: '/feedback', icon: MessageSquare },
    { name: 'Help / Support', path: '/help', icon: HelpCircle },
  ];

  const schoolNavItems = [
    { name: 'Dashboard', path: '/', icon: Home },
    { name: 'Profile', path: '/profile', icon: User },
    { name: 'Classes / Timetable', path: '/schedule', icon: Clock },
    { name: 'Subjects', path: '/subjects', icon: BookOpen },
    { name: 'Homework', path: '/assignments', icon: FileText },
    { name: 'Attendance', path: '/attendance', icon: CheckSquare },
    { name: 'Exams & Tests', path: '/examinations', icon: PenTool },
    { name: 'Results', path: '/results', icon: BarChart2 },
    { name: 'Academic Calendar', path: '/calendar', icon: Calendar },
    { name: 'Notices', path: '/notices', icon: Bell },
    { name: 'Fees', path: '/payments', icon: CreditCard },
    { name: 'Events', path: '/events', icon: Trophy },
    { name: 'Parent Comm.', path: '/communication', icon: Users },
    { name: 'Feedback', path: '/feedback', icon: MessageSquare },
    { name: 'Help & Support', path: '/help', icon: HelpCircle },
  ];

  const navItems = mode === 'college' ? collegeNavItems : schoolNavItems;


  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={closeSidebar}
        />
      )}

      {/* Sidebar Container */}
      <aside className={`
        fixed lg:sticky top-16 left-0 h-[calc(100vh-4rem)]
        w-64 bg-white border-r border-gray-200 
        transform transition-transform duration-300 ease-in-out z-40
        ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
        overflow-y-auto flex flex-col
      `}>
        <div className="p-4 space-y-1">
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              onClick={() => window.innerWidth < 1024 && closeSidebar()}
              className={({ isActive }) => `
                flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all duration-200
                ${isActive 
                  ? 'bg-primary/10 text-primary' 
                  : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'}
              `}
            >
              <item.icon className={`w-5 h-5 ${item.name === 'Home / Feed' ? '' : ''}`} />
              {item.name}
            </NavLink>
          ))}
        </div>

        <div className="p-4 mt-auto border-t border-gray-100">
          <div className="bg-gradient-to-br from-primary to-primary-light rounded-xl p-4 text-white text-center">
            <p className="font-semibold text-sm mb-1">Semester End</p>
            <p className="text-xs text-blue-100 mb-3">12 Days Remaining</p>
            <button 
              onClick={() => navigate('/schedule')}
              className="w-full py-1.5 bg-white/20 hover:bg-white/30 rounded text-xs font-medium transition-colors"
            >
              View Schedule
            </button>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
