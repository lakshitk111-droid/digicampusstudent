import React, { useState } from 'react';
import { 
  HelpCircle, Phone, Mail, Clock, MessageSquare, 
  ChevronDown, ChevronUp, AlertCircle, FileText, 
  CheckCircle, Send, BookOpen, GraduationCap, 
  CreditCard, PenTool, User
} from 'lucide-react';

const Help = () => {
  const [activeTab, setActiveTab] = useState('faq'); // 'faq' or 'ticket'
  const [expandedFaq, setExpandedFaq] = useState(null);
  const [ticketForm, setTicketForm] = useState({
    category: '',
    subject: '',
    description: '',
    attachment: null
  });
  const [submittedTickets, setSubmittedTickets] = useState([
    {
      id: 'TKT-2025-001',
      category: 'Academics',
      subject: 'Incorrect Grade in Data Structures',
      date: '2025-02-05',
      status: 'In Progress'
    },
    {
      id: 'TKT-2025-002',
      category: 'Payments',
      subject: 'Fee Receipt Not Generated',
      date: '2025-01-20',
      status: 'Resolved'
    }
  ]);
  const [showSuccess, setShowSuccess] = useState(false);

  const faqs = [
    {
      question: 'How do I check my semester results?',
      answer: 'You can check your semester results by navigating to the "Results" section in the sidebar. Select your semester to view detailed grade sheets.'
    },
    {
      question: 'How can I download my syllabus?',
      answer: 'Go to the "Academics" section and click on the "Syllabus" tab. You will find downloadable PDF links for each subject.'
    },
    {
      question: 'What to do if attendance is incorrect?',
      answer: 'If you notice a discrepancy in your attendance, please raise a support ticket under the "Attendance Issues" category or contact your class advisor immediately.'
    },
    {
      question: 'How to submit assignments?',
      answer: 'Navigate to the "Assignments" module. Click on the pending assignment and use the "Upload Submission" button to submit your work.'
    },
    {
      question: 'How to contact examination cell?',
      answer: 'You can contact the examination cell via the support email exams@lkdigicampus.demo or visit the Exam Cell office in Block A, Ground Floor.'
    }
  ];

  const categories = [
    { name: 'Academics Support', icon: GraduationCap, color: 'text-blue-600', bg: 'bg-blue-50' },
    { name: 'Examination Support', icon: PenTool, color: 'text-purple-600', bg: 'bg-purple-50' },
    { name: 'Attendance Issues', icon: CheckCircle, color: 'text-green-600', bg: 'bg-green-50' },
    { name: 'Payment & Fees', icon: CreditCard, color: 'text-orange-600', bg: 'bg-orange-50' },
    { name: 'Technical Issues', icon: AlertCircle, color: 'text-red-600', bg: 'bg-red-50' },
    { name: 'General Queries', icon: HelpCircle, color: 'text-gray-600', bg: 'bg-gray-50' },
  ];

  const handleTicketSubmit = (e) => {
    e.preventDefault();
    const newTicket = {
      id: `TKT-2025-${String(submittedTickets.length + 3).padStart(3, '0')}`,
      category: ticketForm.category || 'General',
      subject: ticketForm.subject,
      date: new Date().toISOString().split('T')[0],
      status: 'Open'
    };
    setSubmittedTickets([newTicket, ...submittedTickets]);
    setShowSuccess(true);
    setTicketForm({ category: '', subject: '', description: '', attachment: null });
    setTimeout(() => setShowSuccess(false), 3000);
  };

  const toggleFaq = (index) => {
    setExpandedFaq(expandedFaq === index ? null : index);
  };

  return (
    <div className="max-w-6xl mx-auto space-y-6 pb-10">
      {/* Header & Status */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
        <div>
          <h1 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
            <HelpCircle className="w-8 h-8 text-primary" />
            Help & Support Center
          </h1>
          <p className="text-gray-500 mt-1">We are here to help you with any issues or queries.</p>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 text-sm">
          <div className="flex items-center gap-2 bg-green-50 text-green-700 px-3 py-1.5 rounded-lg border border-green-100">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="font-medium">Support Online</span>
          </div>
          <div className="flex items-center gap-2 text-gray-600 bg-gray-50 px-3 py-1.5 rounded-lg border border-gray-100">
            <Clock className="w-4 h-4" />
            <span>Mon-Fri: 9:00 AM – 6:00 PM</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column: Categories & Ticket Form */}
        <div className="lg:col-span-2 space-y-6">
          
          {/* Quick Categories */}
          <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
            <h2 className="text-lg font-bold text-gray-800 mb-4">Quick Help Categories</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {categories.map((cat, idx) => (
                <button 
                  key={idx}
                  onClick={() => {
                    setTicketForm(prev => ({ ...prev, category: cat.name }));
                    document.getElementById('ticket-form')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className={`${cat.bg} p-4 rounded-xl border border-transparent hover:border-gray-200 transition-all text-left group`}
                >
                  <cat.icon className={`w-6 h-6 ${cat.color} mb-2 group-hover:scale-110 transition-transform`} />
                  <p className={`font-semibold text-sm ${cat.color.replace('text-', 'text-opacity-80')}`}>{cat.name}</p>
                </button>
              ))}
            </div>
          </div>

          {/* Ticket Form */}
          <div id="ticket-form" className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
            <h2 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
              <MessageSquare className="w-5 h-5 text-primary" />
              Raise a Support Ticket
            </h2>
            
            {showSuccess && (
              <div className="mb-4 p-4 bg-green-50 border border-green-100 text-green-700 rounded-lg flex items-center gap-2 animate-fadeIn">
                <CheckCircle className="w-5 h-5" />
                Ticket submitted successfully! We will contact you shortly.
              </div>
            )}

            <form onSubmit={handleTicketSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Issue Category</label>
                  <select 
                    required
                    value={ticketForm.category}
                    onChange={(e) => setTicketForm({...ticketForm, category: e.target.value})}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none"
                  >
                    <option value="">Select Category</option>
                    {categories.map((c, i) => <option key={i} value={c.name}>{c.name}</option>)}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                  <input 
                    type="text"
                    required
                    placeholder="Brief summary of the issue"
                    value={ticketForm.subject}
                    onChange={(e) => setTicketForm({...ticketForm, subject: e.target.value})}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                <textarea 
                  required
                  rows="4"
                  placeholder="Describe your issue in detail..."
                  value={ticketForm.description}
                  onChange={(e) => setTicketForm({...ticketForm, description: e.target.value})}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none resize-none"
                ></textarea>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Attachment (Optional)</label>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center hover:bg-gray-50 transition-colors cursor-pointer">
                  <p className="text-sm text-gray-500">Click to upload screenshot or document</p>
                  <p className="text-xs text-gray-400 mt-1">(Demo only - no upload)</p>
                </div>
              </div>

              <div className="flex justify-end">
                <button 
                  type="submit"
                  className="bg-primary hover:bg-primary-dark text-white px-6 py-2 rounded-lg font-medium flex items-center gap-2 transition-colors shadow-sm"
                >
                  <Send className="w-4 h-4" />
                  Submit Ticket
                </button>
              </div>
            </form>
          </div>

          {/* FAQ Section */}
          <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
            <h2 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-primary" />
              Frequently Asked Questions
            </h2>
            <div className="space-y-2">
              {faqs.map((faq, index) => (
                <div key={index} className="border border-gray-100 rounded-lg overflow-hidden">
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full flex justify-between items-center p-4 bg-gray-50 hover:bg-gray-100 text-left transition-colors"
                  >
                    <span className="font-medium text-gray-700">{faq.question}</span>
                    {expandedFaq === index ? <ChevronUp className="w-4 h-4 text-gray-500" /> : <ChevronDown className="w-4 h-4 text-gray-500" />}
                  </button>
                  {expandedFaq === index && (
                    <div className="p-4 bg-white text-gray-600 text-sm leading-relaxed border-t border-gray-100 animate-fadeIn">
                      {faq.answer}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Info & History */}
        <div className="space-y-6">
          
          {/* Contact Info Card */}
          <div className="bg-gradient-to-br from-primary to-primary-dark text-white p-6 rounded-xl shadow-lg">
            <h3 className="font-bold text-lg mb-4 border-b border-white/20 pb-2">Contact Support</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="p-2 bg-white/10 rounded-lg">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-blue-100 uppercase tracking-wide">Email</p>
                  <p className="font-medium">support@lkdigicampus.demo</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="p-2 bg-white/10 rounded-lg">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-blue-100 uppercase tracking-wide">Phone</p>
                  <p className="font-medium">+91-9XXXXXXX90</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2 bg-white/10 rounded-lg">
                  <MapPinIcon className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-blue-100 uppercase tracking-wide">Office</p>
                  <p className="font-medium text-sm">Block A, Admin Wing,<br/>LK DigiCampus, Tech City</p>
                </div>
              </div>
            </div>
          </div>

          {/* Ticket History */}
          <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
            <h3 className="font-bold text-gray-800 mb-4 flex items-center justify-between">
              <span>My Tickets</span>
              <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">{submittedTickets.length}</span>
            </h3>
            
            <div className="space-y-3">
              {submittedTickets.length > 0 ? (
                submittedTickets.map((ticket, idx) => (
                  <div key={idx} className="p-3 border border-gray-100 rounded-lg hover:bg-gray-50 transition-colors">
                    <div className="flex justify-between items-start mb-1">
                      <span className="text-xs font-mono text-gray-400">{ticket.id}</span>
                      <span className={`text-[10px] px-2 py-0.5 rounded-full font-bold uppercase ${
                        ticket.status === 'Resolved' ? 'bg-green-100 text-green-600' :
                        ticket.status === 'In Progress' ? 'bg-blue-100 text-blue-600' :
                        'bg-orange-100 text-orange-600'
                      }`}>
                        {ticket.status}
                      </span>
                    </div>
                    <h4 className="text-sm font-semibold text-gray-800 line-clamp-1">{ticket.subject}</h4>
                    <div className="flex justify-between items-center mt-2 text-xs text-gray-500">
                      <span>{ticket.category}</span>
                      <span>{ticket.date}</span>
                    </div>
                  </div>
                ))
              ) : (
                <div className="text-center py-8 text-gray-400">
                  <FileText className="w-8 h-8 mx-auto mb-2 opacity-20" />
                  <p className="text-sm">No tickets raised yet</p>
                </div>
              )}
            </div>
          </div>

          {/* Quick Tip */}
          <div className="bg-yellow-50 p-4 rounded-xl border border-yellow-100">
            <div className="flex gap-3">
              <div className="p-2 bg-yellow-100 rounded-full h-fit text-yellow-600">
                <AlertCircle className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-bold text-yellow-800 text-sm">Emergency Support?</h4>
                <p className="text-xs text-yellow-700 mt-1">
                  For urgent technical issues during exams, please contact the invigilator or visit the Exam Cell immediately.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

// Helper Icon for map pin
const MapPinIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
);

export default Help;
