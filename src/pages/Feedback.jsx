import React, { useState } from 'react';
import { MessageSquare, Star, Send, History, CheckCircle, AlertCircle, ThumbsUp, User, BookOpen } from 'lucide-react';
import { useMode } from '../context/ModeContext';

const Feedback = () => {
  const { mode } = useMode();
  const isSchool = mode === 'school';
  const [activeTab, setActiveTab] = useState('new');
  const [submitted, setSubmitted] = useState(false);

  // Form State
  const [formData, setFormData] = useState({
    semester: '6th Semester',
    subject: '',
    target: '',
    category: 'Course',
    rating: 0,
    comments: ''
  });

  // Mock Data
  const COURSES = [
    'Advanced Data Structures',
    'Artificial Intelligence',
    'Machine Learning',
    'Cloud Computing',
    'Software Project Management',
    'Information Security'
  ];

  const FACULTY = [
    'Dr. S. Sharma',
    'Prof. R. Kumar',
    'Dr. A. Gupta',
    'Prof. M. Singh',
    'Dr. K. Patel'
  ];

  const PAST_FEEDBACK = [
    {
      id: 1,
      semester: '5th Semester',
      target: 'Database Management Systems',
      category: 'Course',
      rating: 5,
      comments: 'Excellent course structure and practical labs.',
      date: '2025-12-10',
      status: 'Submitted'
    },
    {
      id: 2,
      semester: '5th Semester',
      target: 'Prof. R. Kumar',
      category: 'Faculty',
      rating: 4,
      comments: 'Great explanations but needs to slow down a bit.',
      date: '2025-12-12',
      status: 'Submitted'
    },
    {
      id: 3,
      semester: '5th Semester',
      target: 'Library Facilities',
      category: 'Infrastructure',
      rating: 3,
      comments: 'More books needed for reference section.',
      date: '2025-11-20',
      status: 'Reviewed'
    },
    {
      id: 4,
      semester: '4th Semester',
      target: 'Computer Networks',
      category: 'Course',
      rating: 5,
      comments: 'Very comprehensive curriculum.',
      date: '2025-05-15',
      status: 'Submitted'
    }
  ];

  const SCHOOL_SUBJECTS = [
    'English',
    'Mathematics',
    'Science',
    'Social Science',
    'Hindi',
    'Computer Science',
    'General Knowledge',
    'Environmental Studies'
  ];

  const SCHOOL_PAST_FEEDBACK = [
    {
      id: 101,
      subject: 'Mathematics',
      target: 'Mathematics',
      category: 'Subject',
      rating: 5,
      comments: 'Very clear explanations in class.',
      date: '2025-12-15',
      status: 'Submitted'
    },
    {
      id: 102,
      subject: 'Science',
      target: 'Physics Teacher',
      category: 'Teacher',
      rating: 4,
      comments: 'Good lab sessions but need more time.',
      date: '2025-12-10',
      status: 'Action Taken'
    },
    {
      id: 103,
      subject: 'English',
      target: 'English',
      category: 'Subject',
      rating: 5,
      comments: 'Enjoying the new curriculum.',
      date: '2025-11-28',
      status: 'Submitted'
    },
    {
      id: 104,
      subject: 'Computer Science',
      target: 'Computer Science',
      category: 'Subject',
      rating: 3,
      comments: 'Need more practice on coding.',
      date: '2025-10-15',
      status: 'Submitted'
    }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.rating === 0) {
      alert("Please select a rating.");
      return;
    }
    
    // Simulate API call
    setTimeout(() => {
      setSubmitted(true);
      // Reset after 3 seconds
      setTimeout(() => {
        setSubmitted(false);
        setFormData({ ...formData, rating: 0, comments: '', target: '' });
        setActiveTab('past'); // Switch to past feedback to show "result" (simulated)
      }, 2000);
    }, 800);
  };

  const renderStars = (rating, interactive = false) => {
    return (
      <div className="flex gap-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <button
            key={star}
            type="button"
            disabled={!interactive}
            onClick={() => interactive && setFormData({ ...formData, rating: star })}
            className={`transition-colors ${interactive ? 'cursor-pointer hover:scale-110' : 'cursor-default'}`}
          >
            <Star 
              className={`w-6 h-6 ${
                star <= rating 
                  ? 'fill-amber-400 text-amber-400' 
                  : 'fill-gray-100 text-gray-300'
              }`} 
            />
          </button>
        ))}
      </div>
    );
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">Student Feedback</h1>
          <p className="text-gray-500">Share your feedback to help us improve</p>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex border-b border-gray-200">
        <button
          onClick={() => setActiveTab('new')}
          className={`flex items-center gap-2 px-6 py-3 text-sm font-medium border-b-2 transition-colors ${
            activeTab === 'new'
              ? 'border-primary text-primary'
              : 'border-transparent text-gray-500 hover:text-gray-700'
          }`}
        >
          <MessageSquare className="w-4 h-4" />
          New Feedback
        </button>
        <button
          onClick={() => setActiveTab('past')}
          className={`flex items-center gap-2 px-6 py-3 text-sm font-medium border-b-2 transition-colors ${
            activeTab === 'past'
              ? 'border-primary text-primary'
              : 'border-transparent text-gray-500 hover:text-gray-700'
          }`}
        >
          <History className="w-4 h-4" />
          Past Feedback
        </button>
      </div>

      {/* Content */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        {activeTab === 'new' ? (
          <div className="max-w-2xl mx-auto">
            {submitted ? (
              <div className="text-center py-12 animate-in fade-in zoom-in duration-300">
                <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Feedback Submitted!</h3>
                <p className="text-gray-500">Thank you for your valuable feedback.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {isSchool ? 'Select Subject' : 'Select Semester'}
                    </label>
                    <select 
                      value={isSchool ? formData.subject : formData.semester}
                      onChange={(e) => setFormData({ ...formData, [isSchool ? 'subject' : 'semester']: e.target.value })}
                      className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                    >
                      {isSchool ? (
                        <>
                          <option value="">-- Select Subject --</option>
                          {SCHOOL_SUBJECTS.map(subj => (
                            <option key={subj} value={subj}>{subj}</option>
                          ))}
                        </>
                      ) : (
                        ['1st Semester', '2nd Semester', '3rd Semester', '4th Semester', '5th Semester', '6th Semester'].map(sem => (
                          <option key={sem} value={sem}>{sem}</option>
                        ))
                      )}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
                    <select 
                      value={formData.category}
                      onChange={(e) => setFormData({ ...formData, category: e.target.value, target: '' })}
                      className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                    >
                      {isSchool ? (
                        <>
                          <option value="Subject">Subject</option>
                          <option value="Teacher">Teacher</option>
                        </>
                      ) : (
                        <>
                          <option value="Course">Course Content</option>
                          <option value="Faculty">Faculty / Teaching</option>
                          <option value="Infrastructure">Infrastructure / Facilities</option>
                        </>
                      )}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {isSchool 
                      ? (formData.category === 'Teacher' ? 'Select Teacher' : 'Subject') 
                      : (formData.category === 'Course' ? 'Select Course' : 
                         formData.category === 'Faculty' ? 'Select Faculty' : 'Select Facility')}
                  </label>
                  <select 
                    value={formData.target}
                    onChange={(e) => setFormData({ ...formData, target: e.target.value })}
                    required
                    className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                  >
                    <option value="">-- Select --</option>
                    {isSchool ? (
                       formData.subject && (
                         formData.category === 'Teacher' 
                           ? <option value={`${formData.subject} Teacher`}>{formData.subject} Teacher</option>
                           : <option value={formData.subject}>{formData.subject}</option>
                       )
                    ) : (
                       <>
                         {formData.category === 'Course' && COURSES.map(c => <option key={c} value={c}>{c}</option>)}
                         {formData.category === 'Faculty' && FACULTY.map(f => <option key={f} value={f}>{f}</option>)}
                         {formData.category === 'Infrastructure' && ['Library', 'Canteen', 'Lab Equipment', 'Washrooms', 'Classrooms'].map(i => <option key={i} value={i}>{i}</option>)}
                       </>
                    )}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Rating</label>
                  <div className="flex items-center gap-4 bg-gray-50 p-4 rounded-lg border border-gray-100">
                    {renderStars(formData.rating, true)}
                    <span className="text-sm font-medium text-gray-600">
                      {formData.rating === 1 ? 'Poor' :
                       formData.rating === 2 ? 'Fair' :
                       formData.rating === 3 ? 'Good' :
                       formData.rating === 4 ? 'Very Good' :
                       formData.rating === 5 ? 'Excellent' : 'Select a rating'}
                    </span>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Comments / Suggestions</label>
                  <textarea 
                    rows="4"
                    value={formData.comments}
                    onChange={(e) => setFormData({ ...formData, comments: e.target.value })}
                    placeholder="Tell us more about your experience..."
                    className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary resize-none"
                  ></textarea>
                </div>

                <div className="pt-2">
                  <button 
                    type="submit"
                    className="w-full md:w-auto px-8 py-3 bg-primary text-white font-medium rounded-lg hover:bg-blue-800 transition-colors flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    Submit Feedback
                  </button>
                </div>
              </form>
            )}
          </div>
        ) : (
          <div className="space-y-6">
            {/* Summary Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              <div className="bg-blue-50 border border-blue-100 p-4 rounded-lg flex items-center gap-4">
                <div className="w-10 h-10 bg-white text-primary rounded-full flex items-center justify-center shadow-sm">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-blue-600 font-semibold uppercase">Total Submitted</p>
                  <p className="text-xl font-bold text-blue-900">{isSchool ? SCHOOL_PAST_FEEDBACK.length : PAST_FEEDBACK.length}</p>
                </div>
              </div>
              <div className="bg-amber-50 border border-amber-100 p-4 rounded-lg flex items-center gap-4">
                <div className="w-10 h-10 bg-white text-amber-600 rounded-full flex items-center justify-center shadow-sm">
                  <Star className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-amber-600 font-semibold uppercase">Avg. Rating</p>
                  <p className="text-xl font-bold text-amber-900">4.2/5.0</p>
                </div>
              </div>
              <div className="bg-green-50 border border-green-100 p-4 rounded-lg flex items-center gap-4">
                <div className="w-10 h-10 bg-white text-green-600 rounded-full flex items-center justify-center shadow-sm">
                  <ThumbsUp className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-green-600 font-semibold uppercase">Action Taken</p>
                  <p className="text-xl font-bold text-green-900">1</p>
                </div>
              </div>
            </div>

            {/* List */}
            <div className="space-y-4">
              {(isSchool ? SCHOOL_PAST_FEEDBACK : PAST_FEEDBACK).map((item) => (
                <div key={item.id} className="border border-gray-100 rounded-lg p-4 hover:bg-gray-50 transition-colors">
                  <div className="flex flex-col md:flex-row justify-between items-start gap-4">
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <span className={`px-2 py-1 rounded text-xs font-semibold ${
                          item.category === 'Course' || item.category === 'Subject' ? 'bg-purple-50 text-purple-700' :
                          item.category === 'Faculty' || item.category === 'Teacher' ? 'bg-blue-50 text-blue-700' :
                          'bg-orange-50 text-orange-700'
                        }`}>
                          {item.category}
                        </span>
                        <span className="text-xs text-gray-400">•</span>
                        <span className="text-xs text-gray-500">{item.date}</span>
                        {!isSchool && (
                          <>
                            <span className="text-xs text-gray-400">•</span>
                            <span className="text-xs text-gray-500">{item.semester}</span>
                          </>
                        )}
                      </div>
                      <h3 className="font-semibold text-gray-800">
                        {isSchool ? item.subject : item.target}
                      </h3>
                      <p className="text-sm text-gray-600">{item.comments}</p>
                    </div>
                    <div className="flex flex-col items-end gap-2 shrink-0">
                      {renderStars(item.rating)}
                      <div className="flex items-center gap-1.5 text-xs text-green-600 bg-green-50 px-2 py-1 rounded">
                        <CheckCircle className="w-3 h-3" />
                        {item.status}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Feedback;
