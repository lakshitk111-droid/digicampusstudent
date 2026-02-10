import React from 'react';
import { User, Mail, Phone, MapPin, FileText, Download, Droplet, Calendar, Hash } from 'lucide-react';
import { useMode } from '../context/ModeContext';
import { studentProfile } from '../data/schoolData';

const Profile = () => {
  const { mode } = useMode();

  const isSchool = mode === 'school';
  const data = isSchool ? studentProfile : {
    name: "Alex Morgan",
    subtitle: "B.Tech Computer Science • 6th Semester",
    email: "alex.morgan@digicampus.edu",
    phone: "+1 (555) 123-4567",
    address: "42 Campus Avenue, Student Dorm B",
    photo: "https://ui-avatars.com/api/?name=Alex+Morgan&background=random&size=200"
  };

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-800">My Profile</h1>
      
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="h-32 bg-gradient-to-r from-primary to-blue-400"></div>
        <div className="px-6 pb-6">
          <div className="relative flex justify-between items-end -mt-12 mb-6">
            <div className="w-24 h-24 rounded-full border-4 border-white bg-gray-200 overflow-hidden">
              <img src={data.photo} alt="Profile" className="w-full h-full object-cover" />
            </div>
            <button 
              onClick={() => alert("Edit Profile Coming Soon!")}
              className="px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm font-medium hover:bg-gray-50 text-gray-700"
            >
              Edit Profile
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-xl font-bold text-gray-800 mb-1">{data.name}</h2>
              <p className="text-gray-500 mb-4">{isSchool ? `${data.class} • Roll No: ${data.rollNo}` : data.subtitle}</p>
              
              <div className="space-y-3">
                {!isSchool && (
                  <div className="flex items-center gap-3 text-gray-600">
                    <Mail className="w-4 h-4" />
                    <span>{data.email}</span>
                  </div>
                )}
                <div className="flex items-center gap-3 text-gray-600">
                  <Phone className="w-4 h-4" />
                  <span>{isSchool ? data.contact : data.phone}</span>
                </div>
                <div className="flex items-center gap-3 text-gray-600">
                  <MapPin className="w-4 h-4" />
                  <span>{data.address}</span>
                </div>
                
                {isSchool && (
                  <>
                    <div className="flex items-center gap-3 text-gray-600">
                      <Calendar className="w-4 h-4" />
                      <span>DOB: {data.dob}</span>
                    </div>
                    <div className="flex items-center gap-3 text-gray-600">
                      <Droplet className="w-4 h-4" />
                      <span>Blood Group: {data.bloodGroup}</span>
                    </div>
                    <div className="flex items-center gap-3 text-gray-600">
                      <Hash className="w-4 h-4" />
                      <span>Admission No: {data.admissionNo}</span>
                    </div>
                    <div className="flex items-center gap-3 text-gray-600">
                      <User className="w-4 h-4" />
                      <span>Parent: {data.fatherName}</span>
                    </div>
                  </>
                )}
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="font-semibold text-gray-800 border-b pb-2">Documents</h3>
              {[
                { name: 'Admission_Letter.pdf', size: '2.4 MB' },
                { name: 'Grade_Card_Prev.pdf', size: '1.1 MB' },
                { name: 'ID_Proof.jpg', size: '0.8 MB' },
              ].map((doc, idx) => (
                <div key={idx} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg border border-gray-100">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-white rounded border border-gray-200 text-primary">
                      <FileText className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-800">{doc.name}</p>
                      <p className="text-xs text-gray-500">{doc.size}</p>
                    </div>
                  </div>
                  <button 
                    onClick={() => alert(`Downloading ${doc.name}...`)}
                    className="text-gray-400 hover:text-primary"
                  >
                    <Download className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
