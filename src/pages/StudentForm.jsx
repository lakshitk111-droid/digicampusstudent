import React, { useState } from 'react';
import { FileText, Send, Upload, Clock, CheckCircle, XCircle } from 'lucide-react';

const StudentForm = () => {
  const [formType, setFormType] = useState('Bonafide Certificate');
  const [reason, setReason] = useState('');
  
  const [requests, setRequests] = useState([
    {
      id: 1,
      type: 'Bonafide Certificate',
      date: '2026-02-05',
      status: 'Approved',
      comments: 'Collect from Admin Block.'
    },
    {
      id: 2,
      type: 'Fee Receipt Request',
      date: '2026-02-07',
      status: 'Under Review',
      comments: '-'
    }
  ]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!reason) {
      alert("Please provide a reason.");
      return;
    }
    const newRequest = {
      id: requests.length + 1,
      type: formType,
      date: new Date().toISOString().split('T')[0],
      status: 'Submitted',
      comments: 'Pending admin review.'
    };
    setRequests([newRequest, ...requests]);
    setReason('');
    alert("Form submitted successfully!");
  };

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-800">Student Forms & Requests</h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* New Request Form */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-6 flex items-center gap-2">
            <Send className="w-5 h-5 text-primary" />
            New Request
          </h2>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Request Type</label>
              <select 
                value={formType}
                onChange={(e) => setFormType(e.target.value)}
                className="w-full p-2.5 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
              >
                <option>Bonafide Certificate</option>
                <option>Fee Receipt Request</option>
                <option>ID Card Replacement</option>
                <option>Transcript Request</option>
                <option>Hostel Leave Application</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Reason / Description</label>
              <textarea 
                value={reason}
                onChange={(e) => setReason(e.target.value)}
                placeholder="Briefly explain why you need this..."
                className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary h-32 resize-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Supporting Documents (Optional)</label>
              <div className="border-2 border-dashed border-gray-200 rounded-lg p-6 text-center hover:bg-gray-50 transition-colors cursor-pointer" onClick={() => alert("File upload demo")}>
                <Upload className="w-6 h-6 text-gray-400 mx-auto mb-2" />
                <p className="text-xs text-gray-500">Click to upload or drag and drop</p>
                <p className="text-xs text-gray-400 mt-1">PDF, JPG up to 2MB</p>
              </div>
            </div>

            <button 
              type="submit"
              className="w-full py-2.5 bg-primary text-white rounded-lg font-medium hover:bg-blue-800 transition-colors"
            >
              Submit Request
            </button>
          </form>
        </div>

        {/* Request History */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-6 flex items-center gap-2">
            <Clock className="w-5 h-5 text-primary" />
            Request History
          </h2>

          <div className="space-y-4">
            {requests.map((req) => (
              <div key={req.id} className="p-4 bg-gray-50 rounded-lg border border-gray-100">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="text-sm font-semibold text-gray-800">{req.type}</h3>
                    <p className="text-xs text-gray-500">{req.date}</p>
                  </div>
                  <span className={`px-2 py-1 rounded text-xs font-medium flex items-center gap-1 ${
                    req.status === 'Approved' ? 'bg-green-100 text-green-700' :
                    req.status === 'Rejected' ? 'bg-red-100 text-red-700' :
                    'bg-amber-100 text-amber-700'
                  }`}>
                    {req.status === 'Approved' && <CheckCircle className="w-3 h-3" />}
                    {req.status === 'Rejected' && <XCircle className="w-3 h-3" />}
                    {req.status === 'Submitted' && <Clock className="w-3 h-3" />}
                    {req.status === 'Under Review' && <Clock className="w-3 h-3" />}
                    {req.status}
                  </span>
                </div>
                {req.comments && req.comments !== '-' && (
                  <div className="mt-2 pt-2 border-t border-gray-200 text-xs text-gray-600">
                    <span className="font-medium">Admin Note:</span> {req.comments}
                  </div>
                )}
              </div>
            ))}

            {requests.length === 0 && (
              <div className="text-center py-8 text-gray-400 text-sm">
                No requests found.
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentForm;
