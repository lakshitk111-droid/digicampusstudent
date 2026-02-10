import React, { useEffect, useRef } from 'react';
import { X, Mail, Phone, MapPin, User, Calendar, Droplet, Hash, BookOpen, GraduationCap, Building2, LogOut, Edit } from 'lucide-react';
import { useMode } from '../context/ModeContext';
import { studentProfile } from '../data/schoolData';

const ProfilePanel = ({ isOpen, onClose }) => {
  const { mode } = useMode();
  const panelRef = useRef(null);
  
  const isSchool = mode === 'school';
  
  // Close on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (panelRef.current && !panelRef.current.contains(event.target)) {
        onClose();
      }
    };
    
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const data = isSchool ? studentProfile : {
    name: "Alex Morgan",
    subtitle: "B.Tech Computer Science • 6th Semester",
    department: "Computer Science Engineering",
    mentor: "Dr. Alan Turing",
    email: "alex.morgan@digicampus.edu",
    phone: "+1 (555) 123-4567",
    address: "42 Campus Avenue, Student Dorm B",
    photo: "https://ui-avatars.com/api/?name=Alex+Morgan&background=random&size=200"
  };

  return (
    <div className="fixed inset-0 z-[100] flex justify-end">
      {/* Backdrop with blur */}
      <div 
        className="absolute inset-0 bg-black/20 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />
      
      {/* Side Panel */}
      <div 
        ref={panelRef}
        className="relative w-full max-w-md bg-white h-full shadow-2xl animate-slideInRight flex flex-col"
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-100 bg-gray-50/50">
          <h2 className="text-lg font-bold text-gray-800">My Profile</h2>
          <button 
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors text-gray-500"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto p-6">
          {/* Profile Header */}
          <div className="flex flex-col items-center mb-8">
            <div className="relative mb-4">
              <div className="w-24 h-24 rounded-full border-4 border-white shadow-md overflow-hidden bg-gray-100">
                <img src={data.photo} alt="Profile" className="w-full h-full object-cover" />
              </div>
              <div className={`absolute bottom-0 right-0 px-2 py-0.5 rounded-full text-[10px] font-bold text-white border-2 border-white ${isSchool ? 'bg-orange-500' : 'bg-blue-600'}`}>
                {isSchool ? 'SCHOOL' : 'COLLEGE'}
              </div>
            </div>
            <h3 className="text-xl font-bold text-gray-900 text-center">{data.name}</h3>
            <p className="text-sm text-gray-500 text-center mt-1">
              {isSchool ? `${data.class} • Roll No: ${data.rollNo}` : data.subtitle}
            </p>
            {isSchool && (
               <p className="text-xs text-gray-400 mt-1">{data.admissionNo}</p>
            )}
          </div>

          {/* Action Buttons */}
          <div className="grid grid-cols-2 gap-3 mb-8">
            <button 
              onClick={() => alert("Restricted to student access only. Authorized access.")}
              className="flex items-center justify-center gap-2 py-2 px-4 bg-primary text-white rounded-lg text-sm font-medium hover:bg-primary/90 transition-colors"
            >
              <Edit className="w-4 h-4" />
              Edit Profile
            </button>
            <button 
              onClick={() => alert("Restricted to student access only. Authorized access.")}
              className="flex items-center justify-center gap-2 py-2 px-4 bg-gray-100 text-gray-700 rounded-lg text-sm font-medium hover:bg-gray-200 transition-colors"
            >
              <LogOut className="w-4 h-4" />
              Logout
            </button>
          </div>

          {/* Details Sections */}
          <div className="space-y-6">
            {/* Academic Info */}
            <div>
              <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">Academic Details</h4>
              <div className="space-y-3 bg-gray-50 p-4 rounded-xl border border-gray-100">
                {isSchool ? (
                  <>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-white flex items-center justify-center text-primary shadow-sm">
                        <GraduationCap className="w-4 h-4" />
                      </div>
                      <div>
                        <p className="text-xs text-gray-500">Class Teacher</p>
                        <p className="text-sm font-medium text-gray-800">Mrs. Priya Sharma</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-white flex items-center justify-center text-primary shadow-sm">
                        <Calendar className="w-4 h-4" />
                      </div>
                      <div>
                        <p className="text-xs text-gray-500">Academic Year</p>
                        <p className="text-sm font-medium text-gray-800">{data.academicYear}</p>
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-white flex items-center justify-center text-primary shadow-sm">
                        <Building2 className="w-4 h-4" />
                      </div>
                      <div>
                        <p className="text-xs text-gray-500">Department</p>
                        <p className="text-sm font-medium text-gray-800">{data.department}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-white flex items-center justify-center text-primary shadow-sm">
                        <User className="w-4 h-4" />
                      </div>
                      <div>
                        <p className="text-xs text-gray-500">Mentor / HOD</p>
                        <p className="text-sm font-medium text-gray-800">{data.mentor}</p>
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>

            {/* Personal Info */}
            <div>
              <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">Contact Information</h4>
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-sm">
                  <Mail className="w-4 h-4 text-gray-400" />
                  <span className="text-gray-700 truncate">{isSchool ? 'parent.email@example.com' : data.email}</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <Phone className="w-4 h-4 text-gray-400" />
                  <span className="text-gray-700">{isSchool ? data.contact : data.phone}</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <MapPin className="w-4 h-4 text-gray-400" />
                  <span className="text-gray-700">{data.address}</span>
                </div>
                
                {isSchool && (
                  <>
                     <div className="flex items-center gap-3 text-sm">
                      <Calendar className="w-4 h-4 text-gray-400" />
                      <span className="text-gray-700">DOB: {data.dob}</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm">
                      <Droplet className="w-4 h-4 text-gray-400" />
                      <span className="text-gray-700">Blood Group: {data.bloodGroup}</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm">
                      <User className="w-4 h-4 text-gray-400" />
                      <span className="text-gray-700">Parent: {data.fatherName}</span>
                    </div>
                  </>
                )}
              </div>
            </div>
            
            {/* Quick Actions for School */}
            {isSchool && (
                <div>
                     <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">Quick Actions</h4>
                     <button className="w-full py-2 border border-gray-200 rounded-lg text-sm text-gray-600 hover:bg-gray-50 flex items-center justify-center gap-2">
                        <Phone className="w-4 h-4" />
                        Call Parent
                     </button>
                </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePanel;
