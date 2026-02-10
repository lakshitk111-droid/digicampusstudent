import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Calendar as CalendarIcon, Clock, MapPin, Tag, Filter, X, ChevronDown, ChevronUp } from 'lucide-react';
import { useMode } from '../context/ModeContext';

const Calendar = () => {
  const { mode } = useMode();
  const [currentDate, setCurrentDate] = useState(new Date(2026, 4, 1)); // Default to May 2026 for demo context
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [activeFilter, setActiveFilter] = useState('All');
  const [expandedEventId, setExpandedEventId] = useState(null);

  // Demo Data
  const EVENTS = [
    {
      id: 1,
      title: 'Semester Start',
      category: 'Academic',
      date: new Date(2026, 0, 15),
      time: '09:00 AM',
      description: 'Commencement of 6th Semester classes.',
      semester: '6th Semester',
      location: 'Main Auditorium',
      type: 'Academic'
    },
    {
      id: 2,
      title: 'Republic Day',
      category: 'Holiday',
      date: new Date(2026, 0, 26),
      time: 'All Day',
      description: 'National Holiday.',
      semester: 'All',
      location: '-',
      type: 'Government'
    },
    {
      id: 3,
      title: 'Internal Assessment 1',
      category: 'Exam',
      date: new Date(2026, 3, 15),
      time: '10:00 AM - 11:30 AM',
      description: 'First Internal Assessment for all subjects.',
      semester: '6th Semester',
      location: 'Exam Halls',
      type: 'Theory'
    },
    {
      id: 9,
      title: 'Practical Exams',
      category: 'Exam',
      date: new Date(2026, 3, 25),
      time: '09:00 AM - 04:00 PM',
      description: 'Lab exams for CS601 and CS603.',
      semester: '6th Semester',
      location: 'Computer Labs',
      type: 'Practical'
    },
    {
      id: 4,
      title: 'Guest Lecture: AI Ethics',
      category: 'Event',
      date: new Date(2026, 4, 5),
      time: '02:00 PM - 04:00 PM',
      description: 'Expert talk on Ethics in Artificial Intelligence by Dr. S. Sharma.',
      semester: '6th Semester',
      location: 'Seminar Hall A',
      type: 'Academic'
    },
    {
      id: 5,
      title: 'Project Submission',
      category: 'Academic',
      date: new Date(2026, 4, 10),
      time: '11:59 PM',
      description: 'Final submission of Phase 1 Project Report.',
      semester: '6th Semester',
      location: 'Online Portal',
      type: 'Submission'
    },
    {
      id: 10,
      title: 'Cultural Fest: Technova',
      category: 'Event',
      date: new Date(2026, 4, 12),
      time: '10:00 AM - 10:00 PM',
      description: 'Annual cultural and technical fest.',
      semester: 'All',
      location: 'Campus Grounds',
      type: 'Cultural'
    },
    {
      id: 6,
      title: 'Mid-Semester Exams',
      category: 'Exam',
      date: new Date(2026, 4, 20),
      time: '10:00 AM - 01:00 PM',
      description: 'Mid-Semester Examinations begin.',
      semester: '6th Semester',
      location: 'Main Exam Hall',
      type: 'Theory'
    },
    {
      id: 7,
      title: 'Coding Workshop',
      category: 'Event',
      date: new Date(2026, 4, 25),
      time: '09:00 AM - 05:00 PM',
      description: 'Full day hands-on workshop on Advanced React Patterns.',
      semester: 'All',
      location: 'Computer Lab 3',
      type: 'Academic'
    },
    {
      id: 11,
      title: 'End-Semester Exams',
      category: 'Exam',
      date: new Date(2026, 5, 1),
      time: '10:00 AM - 01:00 PM',
      description: 'Final theory examinations.',
      semester: '6th Semester',
      location: 'Main Exam Hall',
      type: 'Theory'
    },
    {
      id: 8,
      title: 'Summer Break Begins',
      category: 'Holiday',
      date: new Date(2026, 5, 15),
      time: 'All Day',
      description: 'Start of semester break.',
      semester: 'All',
      location: '-',
      type: 'Academic'
    },
    {
      id: 12,
      title: 'Result Declaration',
      category: 'Academic',
      date: new Date(2026, 6, 10),
      time: '10:00 AM',
      description: 'Declaration of 6th Semester results.',
      semester: '6th Semester',
      location: 'Online Portal',
      type: 'Result'
    },
    {
      id: 13,
      title: 'Inter-College Sports Meet',
      category: 'Event',
      date: new Date(2026, 4, 28),
      time: '08:00 AM - 06:00 PM',
      description: 'Annual sports competition between colleges.',
      semester: 'All',
      location: 'Sports Complex',
      type: 'Sports'
    }
  ];

  // Helper functions
  const getDaysInMonth = (date) => {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (date) => {
    return new Date(date.getFullYear(), date.getMonth(), 1).getDay();
  };

  const prevMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
  };

  const nextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));
  };

  const getCategoryColor = (category) => {
    switch (category) {
      case 'Academic': return 'bg-blue-100 text-blue-700 border-blue-200';
      case 'Exam': return 'bg-red-100 text-red-700 border-red-200';
      case 'Holiday': return 'bg-green-100 text-green-700 border-green-200';
      case 'Event': return 'bg-purple-100 text-purple-700 border-purple-200';
      default: return 'bg-gray-100 text-gray-700 border-gray-200';
    }
  };

  // Generate Holidays based on Mode and Month
  const getHolidays = () => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    const daysInMonth = getDaysInMonth(currentDate);
    const holidays = [];

    // 1. Static/Fixed Holidays (Demo Data)
    const fixedHolidays = [
      { month: 0, date: 26, title: 'Republic Day', type: 'Government' },
      { month: 2, date: 25, title: 'Holi', type: 'Government' },
      { month: 7, date: 15, title: 'Independence Day', type: 'Government' },
      { month: 9, date: 2, title: 'Gandhi Jayanti', type: 'Government' },
      { month: 10, date: 12, title: 'Diwali', type: 'Government' },
      { month: 11, date: 25, title: 'Christmas', type: 'Government' },
    ];

    // School Specific Holidays
    const schoolHolidays = [
      { month: 1, date: 15, title: 'Annual Day', type: 'Academic' },
      { month: 4, date: 1, title: 'Summer Vacation Starts', type: 'Academic' },
      { month: 11, date: 20, title: 'Winter Break Starts', type: 'Academic' },
      { month: 0, date: 10, title: 'Sports Day', type: 'Academic' },
    ];

    // 2. Add Fixed Holidays for current month
    fixedHolidays.forEach(h => {
      if (h.month === month) {
        holidays.push({
          date: new Date(year, month, h.date),
          title: h.title,
          type: h.type
        });
      }
    });

    // 3. Add School Specific Holidays (Only if School Mode)
    if (mode === 'school') {
      schoolHolidays.forEach(h => {
        if (h.month === month) {
          holidays.push({
            date: new Date(year, month, h.date),
            title: h.title,
            type: h.type
          });
        }
      });
    }

    // 4. Generate Weekly Holidays (Sundays & Saturdays)
    let saturdayCount = 0;
    for (let d = 1; d <= daysInMonth; d++) {
      const date = new Date(year, month, d);
      const dayOfWeek = date.getDay(); // 0 = Sunday, 6 = Saturday

      // All Sundays
      if (dayOfWeek === 0) {
        holidays.push({
          date: date,
          title: 'Weekly Holiday',
          type: 'Sunday'
        });
      }

      // College Mode: 2nd and 4th Saturdays
      if (dayOfWeek === 6) {
        saturdayCount++;
        if (mode === 'college') {
          if (saturdayCount === 2 || saturdayCount === 4) {
            holidays.push({
              date: date,
              title: `Weekend Holiday`,
              type: `Saturday (${saturdayCount === 2 ? '2nd' : '4th'})`
            });
          }
        }
      }
    }

    // Sort by date
    return holidays.sort((a, b) => a.date - b.date);
  };

  // Toggle Accordion
  const toggleEvent = (id) => {
    setExpandedEventId(expandedEventId === id ? null : id);
  };

  // Render Event List View
  const renderEventList = () => {
    const events = EVENTS.filter(e => e.category === 'Event');
    const now = new Date();
    
    // Sort: Upcoming first, then Past
    const sortedEvents = events.sort((a, b) => {
      const aDiff = a.date - now;
      const bDiff = b.date - now;
      
      // If both are past or both are future, sort by date
      if ((aDiff < 0 && bDiff < 0) || (aDiff >= 0 && bDiff >= 0)) {
        return a.date - b.date;
      }
      // If one is future and one is past, future comes first
      return bDiff - aDiff; 
    });

    return (
      <div className="space-y-4">
        {sortedEvents.map(event => {
          const isPast = event.date < new Date(new Date().setHours(0,0,0,0));
          const isExpanded = expandedEventId === event.id;

          return (
            <div 
              key={event.id}
              onClick={() => toggleEvent(event.id)}
              className={`bg-white rounded-xl shadow-sm border transition-all cursor-pointer overflow-hidden ${
                isPast 
                  ? 'border-gray-100 opacity-70 grayscale-[0.3] hover:opacity-100' 
                  : 'border-gray-200 hover:border-primary/50 hover:shadow-md'
              }`}
            >
              <div className="p-4 flex items-center gap-4">
                {/* Date Badge */}
                <div className={`flex-shrink-0 w-16 text-center rounded-lg p-2 border ${
                  isPast ? 'bg-gray-50 border-gray-100' : 'bg-primary/5 border-primary/10'
                }`}>
                  <span className={`block text-xs font-bold uppercase ${isPast ? 'text-gray-400' : 'text-primary'}`}>
                    {event.date.toLocaleDateString('en-US', { month: 'short' })}
                  </span>
                  <span className={`block text-xl font-bold ${isPast ? 'text-gray-500' : 'text-gray-800'}`}>
                    {event.date.getDate()}
                  </span>
                </div>

                {/* Main Info */}
                <div className="flex-grow min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className={`font-bold text-lg truncate ${isPast ? 'text-gray-600' : 'text-gray-800'}`}>
                      {event.title}
                    </h3>
                    {isPast && (
                      <span className="px-2 py-0.5 text-[10px] font-bold bg-gray-100 text-gray-500 rounded-full uppercase">
                        Past
                      </span>
                    )}
                  </div>
                  
                  <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-gray-500">
                    <span className="flex items-center gap-1">
                      <Tag className="w-3.5 h-3.5" />
                      {event.type}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      {event.time}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5" />
                      {event.location}
                    </span>
                  </div>
                </div>

                {/* Expand Icon */}
                <div className={`transition-transform duration-200 ${isExpanded ? 'rotate-180' : ''}`}>
                  <ChevronDown className="w-5 h-5 text-gray-400" />
                </div>
              </div>

              {/* Expanded Content */}
              {isExpanded && (
                <div className="px-4 pb-4 pt-0 animate-in slide-in-from-top-2 duration-200">
                  <div className={`p-4 rounded-lg text-sm ${isPast ? 'bg-gray-50' : 'bg-blue-50/50'}`}>
                    <p className="text-gray-600 leading-relaxed">
                      {event.description}
                    </p>
                    <div className="mt-3 flex items-center gap-2 text-xs font-medium text-gray-500">
                      <span>Full Date: {event.date.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</span>
                      <span>•</span>
                      <span>Target Audience: {event.semester}</span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          );
        })}
        {sortedEvents.length === 0 && (
          <div className="text-center py-12 text-gray-400 bg-white rounded-xl border border-dashed">
            <p>No events found</p>
          </div>
        )}
      </div>
    );
  };

  // Render Holiday List View
  const renderHolidayList = () => {
    const holidays = getHolidays();

    return (
      <div className="space-y-3">
        {holidays.length > 0 ? (
          holidays.map((holiday, index) => (
            <div 
              key={index}
              className="bg-white p-4 rounded-xl shadow-sm border border-gray-200 flex items-center gap-4 hover:shadow-md transition-all"
            >
              <div className="flex-shrink-0 w-14 text-center">
                 <div className="text-xs font-bold text-red-500 uppercase">{holiday.date.toLocaleDateString('en-US', { month: 'short' })}</div>
                 <div className="text-xl font-bold text-gray-800">{holiday.date.getDate()}</div>
              </div>
              
              <div className="h-10 w-px bg-gray-100"></div>

              <div className="flex-grow">
                <h3 className="font-bold text-gray-800">{holiday.title}</h3>
                <div className="flex items-center gap-2 mt-1">
                  <span className={`px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider rounded ${
                    holiday.type.includes('Sunday') || holiday.type.includes('Saturday')
                      ? 'bg-orange-50 text-orange-600'
                      : holiday.type === 'Government' 
                        ? 'bg-red-50 text-red-600'
                        : 'bg-blue-50 text-blue-600'
                  }`}>
                    {holiday.type}
                  </span>
                  <span className="text-xs text-gray-500 font-medium">
                    {holiday.date.toLocaleDateString('en-US', { weekday: 'long' })}
                  </span>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="text-center py-12 text-gray-400 bg-white rounded-xl border border-dashed">
            <p>No holidays in {currentDate.toLocaleDateString('en-US', { month: 'long' })}</p>
          </div>
        )}
      </div>
    );
  };

  // Filter events
  const filteredEvents = EVENTS.filter(event => 
    activeFilter === 'All' || event.category === activeFilter
  );

  // Generate calendar grid
  const renderCalendarDays = () => {
    const daysInMonth = getDaysInMonth(currentDate);
    const firstDay = getFirstDayOfMonth(currentDate);
    const days = [];

    // Empty cells for previous month
    for (let i = 0; i < firstDay; i++) {
      days.push(<div key={`empty-${i}`} className="h-24 md:h-32 bg-gray-50/30 border border-gray-100"></div>);
    }

    // Days of current month
    for (let day = 1; day <= daysInMonth; day++) {
      const currentDayDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), day);
      const dayEvents = filteredEvents.filter(event => 
        event.date.getDate() === day && 
        event.date.getMonth() === currentDate.getMonth() && 
        event.date.getFullYear() === currentDate.getFullYear()
      );

      const isToday = new Date().toDateString() === currentDayDate.toDateString();

      days.push(
        <div 
          key={day} 
          className={`h-24 md:h-32 border border-gray-100 p-2 transition-colors hover:bg-gray-50 cursor-pointer overflow-hidden ${
            isToday ? 'bg-blue-50/30' : 'bg-white'
          }`}
          onClick={() => dayEvents.length > 0 && setSelectedEvent(dayEvents[0])}
        >
          <div className="flex justify-between items-start mb-1">
            <span className={`text-sm font-medium w-7 h-7 flex items-center justify-center rounded-full ${
              isToday ? 'bg-primary text-white' : 'text-gray-700'
            }`}>
              {day}
            </span>
            {dayEvents.length > 0 && (
              <span className="text-xs font-bold text-gray-400">
                {dayEvents.length}
              </span>
            )}
          </div>
          
          <div className="space-y-1">
            {dayEvents.slice(0, 3).map((event) => (
              <div 
                key={event.id}
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedEvent(event);
                }}
                className={`text-[10px] md:text-xs px-1.5 py-0.5 rounded truncate border-l-2 ${getCategoryColor(event.category).replace('bg-', 'bg-opacity-50 ')}`}
              >
                {event.title}
              </div>
            ))}
            {dayEvents.length > 3 && (
              <div className="text-[10px] text-gray-400 pl-1">
                + {dayEvents.length - 3} more
              </div>
            )}
          </div>
        </div>
      );
    }

    return days;
  };

  const renderListView = () => {
    // Filter by current month and sort
    const sortedEvents = filteredEvents
      .filter(event => 
        event.date.getMonth() === currentDate.getMonth() && 
        event.date.getFullYear() === currentDate.getFullYear()
      )
      .sort((a, b) => a.date - b.date);

    if (sortedEvents.length === 0) {
       return <div className="text-center py-10 text-gray-500 bg-white rounded-xl border border-gray-100 mt-6">No {activeFilter === 'All' ? 'events' : activeFilter.toLowerCase() + 's'} found for {currentDate.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}.</div>;
    }

    return (
      <div className="space-y-3 mt-6">
        <h2 className="text-lg font-bold text-gray-800 mb-2 flex items-center gap-2">
          {activeFilter === 'All' ? 'Upcoming Schedule' : `${activeFilter} Schedule`}
          <span className="text-xs font-normal text-gray-500 bg-gray-100 px-2 py-0.5 rounded-full">
            {sortedEvents.length}
          </span>
        </h2>
        <div className="grid grid-cols-1 gap-3">
          {sortedEvents.map(event => (
            <div 
              key={event.id}
              onClick={() => setSelectedEvent(event)}
              className="bg-white p-4 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-all cursor-pointer flex flex-col sm:flex-row gap-4 items-start sm:items-center group"
            >
               {/* Date Box */}
               <div className="flex-shrink-0 w-full sm:w-20 text-center bg-gray-50 rounded-lg p-2 border border-gray-100 group-hover:border-primary/20 group-hover:bg-primary/5 transition-colors">
                 <span className="block text-xs font-bold text-gray-500 uppercase">{event.date.toLocaleDateString('en-US', { month: 'short' })}</span>
                 <span className="block text-xl font-bold text-gray-800">{event.date.getDate()}</span>
                 <span className="block text-[10px] font-medium text-gray-400 uppercase mt-1">{event.date.toLocaleDateString('en-US', { weekday: 'short' })}</span>
               </div>
  
               {/* Content */}
               <div className="flex-grow w-full">
                 <div className="flex flex-wrap items-center gap-2 mb-1">
                   <span className={`px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider rounded ${getCategoryColor(event.category).replace('bg-', 'bg-opacity-10 ').replace('border-', 'border-opacity-20 ')}`}>
                     {event.category}
                   </span>
                   {event.type && (
                     <span className="px-2 py-0.5 text-[10px] font-bold text-gray-500 bg-gray-100 rounded uppercase tracking-wider">
                       {event.type}
                     </span>
                   )}
                   <span className="text-xs text-gray-400 flex items-center gap-1 ml-auto sm:ml-0">
                     <Clock className="w-3 h-3" /> {event.time}
                   </span>
                 </div>
                 <h3 className="font-bold text-gray-800 group-hover:text-primary transition-colors">{event.title}</h3>
                 <p className="text-sm text-gray-500 line-clamp-1">{event.description}</p>
                 {event.semester && event.semester !== 'All' && (
                   <p className="text-xs text-primary mt-1 font-medium flex items-center gap-1">
                     <Tag className="w-3 h-3" /> For: {event.semester}
                   </p>
                 )}
               </div>
  
               {/* Arrow */}
               <div className="hidden sm:block text-gray-300 group-hover:text-primary group-hover:translate-x-1 transition-all">
                 <ChevronRight className="w-5 h-5" />
               </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  const categories = ['All', 'Academic', 'Exam', 'Holiday', 'Event'];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">Academic Calendar</h1>
          <p className="text-gray-500">Events, exams, and holidays schedule</p>
        </div>
        
        {activeFilter !== 'Event' && (
          <div className="flex items-center gap-3 bg-white p-1 rounded-lg border border-gray-200 shadow-sm">
            <button 
              onClick={prevMonth}
              className="p-2 hover:bg-gray-100 rounded-md text-gray-600 transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <span className="min-w-[140px] text-center font-bold text-gray-800">
              {currentDate.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
            </span>
            <button 
              onClick={nextMonth}
              className="p-2 hover:bg-gray-100 rounded-md text-gray-600 transition-colors"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        )}
      </div>

      {/* Filters */}
      <div className="flex flex-wrap gap-2">
        {categories.map(category => (
          <button
            key={category}
            onClick={() => setActiveFilter(category)}
            className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all ${
              activeFilter === category
                ? 'bg-primary text-white shadow-sm'
                : 'bg-white text-gray-600 border border-gray-200 hover:bg-gray-50'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Conditional Rendering */}
      {activeFilter === 'Event' ? (
        renderEventList()
      ) : activeFilter === 'Holiday' ? (
        renderHolidayList()
      ) : (
        <>
          {/* Calendar Grid */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
            {/* Weekday Headers */}
            <div className="grid grid-cols-7 bg-gray-50 border-b border-gray-200">
              {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
                <div key={day} className="py-3 text-center text-sm font-semibold text-gray-500 uppercase tracking-wider">
                  {day}
                </div>
              ))}
            </div>
            
            {/* Days */}
            <div className="grid grid-cols-7">
              {renderCalendarDays()}
            </div>
          </div>
          
          {/* List View for selected month (Original behavior for other tabs) */}
          {renderListView()}
        </>
      )}

      {/* Event Details Modal */}
      {selectedEvent && activeFilter !== 'Event' && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4" onClick={() => setSelectedEvent(null)}>
          <div 
            className="bg-white rounded-xl shadow-xl max-w-md w-full overflow-hidden animate-in fade-in zoom-in duration-200"
            onClick={e => e.stopPropagation()}
          >
            <div className={`h-24 ${getCategoryColor(selectedEvent.category)} border-none relative`}>
              <button 
                onClick={() => setSelectedEvent(null)}
                className="absolute top-4 right-4 p-1 bg-white/50 hover:bg-white rounded-full transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
              <div className="absolute bottom-4 left-6">
                <span className={`px-2 py-1 rounded text-xs font-bold bg-white/80 backdrop-blur-sm shadow-sm`}>
                  {selectedEvent.category}
                </span>
              </div>
            </div>
            
            <div className="p-6 space-y-4">
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-1">{selectedEvent.title}</h3>
                <p className="text-gray-500 text-sm">{selectedEvent.description}</p>
              </div>

              <div className="space-y-3 pt-2">
                <div className="flex items-center gap-3 text-gray-700">
                  <CalendarIcon className="w-5 h-5 text-gray-400" />
                  <div>
                    <p className="text-xs text-gray-500">Date</p>
                    <p className="font-medium">{selectedEvent.date.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 text-gray-700">
                  <Clock className="w-5 h-5 text-gray-400" />
                  <div>
                    <p className="text-xs text-gray-500">Time</p>
                    <p className="font-medium">{selectedEvent.time}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 text-gray-700">
                  <MapPin className="w-5 h-5 text-gray-400" />
                  <div>
                    <p className="text-xs text-gray-500">Location</p>
                    <p className="font-medium">{selectedEvent.location}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 text-gray-700">
                  <Tag className="w-5 h-5 text-gray-400" />
                  <div>
                    <p className="text-xs text-gray-500">Applicable To</p>
                    <p className="font-medium">{selectedEvent.semester}</p>
                  </div>
                </div>
              </div>

              <div className="pt-4 mt-2 border-t border-gray-100">
                <button 
                  onClick={() => setSelectedEvent(null)}
                  className="w-full py-2.5 bg-gray-100 hover:bg-gray-200 text-gray-800 rounded-lg font-medium transition-colors"
                >
                  Close Details
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Calendar;