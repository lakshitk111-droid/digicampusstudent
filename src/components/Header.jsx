import React, { useState, useRef, useEffect } from 'react';
import { Search, Bell, User, Menu, Clock, FileText, GraduationCap, ClipboardList, BookOpen, AlertCircle, Sun, Moon, School, Building2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import { useMode } from '../context/ModeContext';
import { todaysClasses as schoolTodaysClasses, studentProfile } from '../data/schoolData';
import ProfilePanel from './ProfilePanel';

const Header = ({ toggleSidebar }) => {
  const { theme, toggleTheme } = useTheme();
  const { mode, toggleMode } = useMode();
  const [showNotifications, setShowNotifications] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const notificationRef = useRef(null);
  const searchRef = useRef(null);
  const navigate = useNavigate();

  // Search State
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [showSearchDropdown, setShowSearchDropdown] = useState(false);

  // Demo Search Data
  const SEARCH_DATA = [
    { id: 1, type: 'Notice', title: 'Exam Schedule Released', desc: 'Final schedule for Sem 6 exams.', url: '/', icon: AlertCircle },
    { id: 2, type: 'Notice', title: 'Holiday Notice', desc: 'Campus closed on Feb 26.', url: '/', icon: AlertCircle },
    { id: 3, type: 'Course', title: 'Data Structures', desc: 'CS301 - Dr. Sarah Smith', url: '/classroom', icon: BookOpen },
    { id: 4, type: 'Course', title: 'DBMS', desc: 'CS302 - Prof. John Doe', url: '/classroom', icon: BookOpen },
    { id: 5, type: 'Exam', title: 'Mid-Semester Exam', desc: 'Starting May 20th', url: '/examinations', icon: ClipboardList },
    { id: 6, type: 'Result', title: 'Sem 5 Results', desc: 'Published on Jan 15', url: '/results', icon: GraduationCap },
    { id: 7, type: 'Assignment', title: 'OS Project', desc: 'Due next week', url: '/assignments', icon: FileText },
    { id: 8, type: 'Student', title: 'Alex Morgan', desc: 'Profile & Settings', url: '/profile', icon: User },
  ];

  // Handle Search Input
  const handleSearchChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
    
    if (query.trim().length > 0) {
      const filtered = SEARCH_DATA.filter(item => 
        item.title.toLowerCase().includes(query.toLowerCase()) || 
        item.type.toLowerCase().includes(query.toLowerCase())
      );
      setSearchResults(filtered);
      setShowSearchDropdown(true);
    } else {
      setSearchResults([]);
      setShowSearchDropdown(false);
    }
  };

  // Handle Search Selection
  const handleSelectResult = (url) => {
    navigate(url);
    setShowSearchDropdown(false);
    setSearchQuery('');
  };

  // Close notifications and search when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (notificationRef.current && !notificationRef.current.contains(event.target)) {
        setShowNotifications(false);
      }
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setShowSearchDropdown(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // College Data
  const collegeClasses = [
    { name: 'Data Structures & Algorithms', code: 'CS301', time: '09:00 AM - 10:00 AM', faculty: 'Dr. Sarah Smith', type: 'Lecture' },
    { name: 'Database Management Systems', code: 'CS302', time: '11:00 AM - 01:00 PM', faculty: 'Prof. John Doe', type: 'Lab' },
    { name: 'Computer Networks', code: 'CS303', time: '02:00 PM - 03:00 PM', faculty: 'Ms. Emily White', type: 'Lecture' },
  ];

  // Transform School Data to match College Data structure for uniform rendering
  const schoolClasses = schoolTodaysClasses.map(cls => ({
    name: cls.subject,
    code: `Period ${cls.period}`,
    time: cls.time,
    faculty: cls.teacher,
    type: cls.type
  }));

  const activeClasses = mode === 'school' ? schoolClasses : collegeClasses;

  const notifications = [
    { id: 1, title: 'System Update', message: 'Platform maintenance scheduled for tonight.', time: '2h ago' },
    { id: 2, title: 'Assignment Due', message: 'DBMS Project submission deadline approaching.', time: '5h ago' },
  ];

  return (
    <>
      <header className="sticky top-0 z-50 bg-white border-b border-gray-200 h-16 flex items-center justify-between px-4 lg:px-6 shadow-sm">
        <div className="flex items-center gap-4">
          <button onClick={toggleSidebar} className="lg:hidden p-1 hover:bg-gray-100 rounded-md">
            <Menu className="w-6 h-6 text-gray-600" />
          </button>
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-md flex items-center justify-center text-white font-bold text-xl">
              L
            </div>
            <span className="text-xl font-bold text-primary hidden sm:block">LK digicampus</span>
          </div>
        </div>

        <div className="flex-1 max-w-xl mx-4 hidden md:block">
          <div className="relative" ref={searchRef}>
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <input 
              type="text" 
              value={searchQuery}
              onChange={handleSearchChange}
              onFocus={() => searchQuery && setShowSearchDropdown(true)}
              placeholder="Search students, notices, classes..." 
              className="w-full pl-10 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary text-sm transition-all"
            />
            
            {/* Search Dropdown */}
            {showSearchDropdown && (
              <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-gray-200 rounded-xl shadow-lg z-50 max-h-96 overflow-y-auto">
                {searchResults.length > 0 ? (
                  <div className="py-2">
                    <h3 className="px-4 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wider">Search Results</h3>
                    {searchResults.map((result) => (
                      <div 
                        key={result.id}
                        onClick={() => handleSelectResult(result.url)}
                        className="px-4 py-3 hover:bg-gray-50 cursor-pointer flex items-center gap-3 transition-colors border-b border-gray-50 last:border-0"
                      >
                        <div className="w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center shrink-0">
                          <result.icon className="w-4 h-4 text-primary" />
                        </div>
                        <div>
                          <p className="text-sm font-medium text-gray-800">{result.title}</p>
                          <p className="text-xs text-gray-500">{result.desc}</p>
                        </div>
                        <span className="ml-auto text-[10px] bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full font-medium">
                          {result.type}
                        </span>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="p-4 text-center text-gray-500 text-sm">
                    No results found for "{searchQuery}"
                  </div>
                )}
              </div>
            )}
          </div>
        </div>

        <div className="flex items-center gap-3 sm:gap-4">
          {/* Mode Switch */}
          <button
            onClick={() => {
              toggleMode();
              navigate('/');
            }}
            className="flex items-center gap-2 bg-gray-100 dark:bg-slate-700 rounded-lg p-1 pr-3 transition-colors cursor-pointer group"
            title={`Switch to ${mode === 'college' ? 'School' : 'College'} Mode`}
          >
            <div className={`
              p-1.5 rounded-md shadow-sm transition-all duration-300
              ${mode === 'college' ? 'bg-white text-primary' : 'text-gray-500 hover:bg-white/50'}
            `}>
              <Building2 className="w-4 h-4" />
            </div>
            <div className={`
              p-1.5 rounded-md shadow-sm transition-all duration-300
              ${mode === 'school' ? 'bg-white text-primary' : 'text-gray-500 hover:bg-white/50'}
            `}>
              <School className="w-4 h-4" />
            </div>
            <span className="text-xs font-semibold text-gray-600 dark:text-gray-300 min-w-[50px] text-center">
              {mode === 'college' ? 'College' : 'School'}
            </span>
          </button>

          <button 
            onClick={toggleTheme} 
            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-slate-700 transition-colors cursor-pointer"
            title={theme === 'light' ? 'Switch to Dark Mode' : 'Switch to Light Mode'}
          >
            {theme === 'light' ? (
              <Sun className="w-5 h-5 text-gray-600 dark:text-gray-300" />
            ) : (
              <Moon className="w-5 h-5 text-gray-600 dark:text-gray-300" />
            )}
          </button>
          <div className="relative" ref={notificationRef}>
            <button 
              onClick={() => setShowNotifications(!showNotifications)}
              className={`relative p-2 rounded-full transition-colors ${showNotifications ? 'bg-gray-100' : 'hover:bg-gray-100'}`}
            >
              <Bell className="w-5 h-5 text-gray-600" />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
            </button>

            {/* Notification Dropdown */}
            {showNotifications && (
              <div className="absolute right-0 mt-2 w-80 sm:w-96 bg-white border border-gray-200 rounded-xl shadow-lg z-50 max-h-[80vh] overflow-y-auto">
                <div className="p-4 border-b border-gray-100">
                  <h3 className="font-bold text-gray-800">Notifications</h3>
                </div>
                
                <div className="p-3 space-y-4">
                   {/* Today's Classes Section */}
                   <div>
                      <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wider px-1 mb-2">Today's Classes</h4>
                      <div className="space-y-2">
                          {activeClasses.map((cls, idx) => (
                              <div key={idx} className="p-3 bg-gray-50 rounded-lg border border-gray-100">
                                  <div className="flex justify-between items-start mb-1">
                                      <h5 className="font-semibold text-sm text-gray-800 leading-tight">{cls.name}</h5>
                                      <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded ml-2 shrink-0 ${cls.type === 'Lecture' ? 'bg-blue-100 text-blue-700' : 'bg-purple-100 text-purple-700'}`}>
                                          {cls.type === 'Lab' ? 'Practical' : cls.type}
                                      </span>
                                  </div>
                                  <div className="space-y-1">
                                      <div className="flex items-center gap-2 text-xs text-gray-500">
                                          <Clock className="w-3 h-3" />
                                          <span>{cls.time}</span>
                                      </div>
                                      <div className="flex items-center gap-2 text-xs text-gray-500">
                                          <User className="w-3 h-3" />
                                          <span>{cls.faculty}</span>
                                      </div>
                                      <div className="text-xs font-medium text-green-600 mt-1">
                                          Physical Class
                                      </div>
                                  </div>
                              </div>
                          ))}
                      </div>
                   </div>

                   {/* Other Notifications */}
                   <div>
                      <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wider px-1 mb-2">Alerts</h4>
                      <div className="space-y-1">
                          {notifications.map(notif => (
                              <div key={notif.id} className="p-3 hover:bg-gray-50 rounded-lg cursor-pointer transition-colors">
                                  <p className="text-sm font-medium text-gray-800">{notif.title}</p>
                                  <p className="text-xs text-gray-500 line-clamp-2">{notif.message}</p>
                                  <span className="text-[10px] text-gray-400 mt-1 block">{notif.time}</span>
                              </div>
                          ))}
                      </div>
                   </div>
                </div>
              </div>
            )}
          </div>
          
          <div className="flex items-center gap-3 border-l pl-4 border-gray-200">
            <div className="text-right hidden sm:block">
              <p className="text-sm font-semibold text-gray-800">{mode === 'school' ? studentProfile.name : 'Alex Morgan'}</p>
              <p className="text-xs text-gray-500">Student</p>
            </div>
            <div 
              onClick={() => setIsProfileOpen(true)}
              className="w-9 h-9 bg-accent-blue rounded-full flex items-center justify-center cursor-pointer border-2 border-white shadow-sm hover:shadow-md transition-shadow overflow-hidden"
            >
              {mode === 'school' ? (
                <img src={studentProfile.photo} alt="Profile" className="w-full h-full object-cover" />
              ) : (
                <User className="w-5 h-5 text-primary" />
              )}
            </div>
          </div>
        </div>
      </header>

      {/* Floating Profile Panel */}
      <ProfilePanel isOpen={isProfileOpen} onClose={() => setIsProfileOpen(false)} />
    </>
  );
};

export default Header;
