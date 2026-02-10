import React from 'react';
import { Briefcase, TrendingUp, Users, CheckCircle, XCircle, Clock } from 'lucide-react';

const Placements = () => {
  const companies = [
    {
      id: 1,
      name: 'TechSolutions Inc.',
      role: 'Software Engineer',
      package: '12 - 15 LPA',
      eligibility: 'CGPA > 8.0',
      deadline: '2026-03-01'
    },
    {
      id: 2,
      name: 'DataSystems Corp',
      role: 'Data Analyst',
      package: '8 - 10 LPA',
      eligibility: 'CGPA > 7.5',
      deadline: '2026-02-28'
    },
    {
      id: 3,
      name: 'CloudWorks',
      role: 'DevOps Engineer',
      package: '10 - 12 LPA',
      eligibility: 'CGPA > 7.0',
      deadline: '2026-03-05'
    }
  ];

  const applications = [
    {
      id: 1,
      company: 'InnovateTech',
      role: 'Frontend Developer',
      status: 'Interview Scheduled',
      date: '2026-02-15'
    },
    {
      id: 2,
      company: 'GlobalSystems',
      role: 'Backend Intern',
      status: 'Rejected',
      date: '2026-01-20'
    }
  ];

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-800">Placements</h1>

      {/* Placement Dashboard */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex items-center gap-4">
          <div className="p-3 bg-green-50 text-green-600 rounded-lg">
            <CheckCircle className="w-6 h-6" />
          </div>
          <div>
            <p className="text-sm text-gray-500">Placement Status</p>
            <p className="text-xl font-bold text-gray-800">Eligible</p>
          </div>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex items-center gap-4">
          <div className="p-3 bg-blue-50 text-blue-600 rounded-lg">
            <TrendingUp className="w-6 h-6" />
          </div>
          <div>
            <p className="text-sm text-gray-500">Placement Rate</p>
            <p className="text-xl font-bold text-gray-800">85%</p>
          </div>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex items-center gap-4">
          <div className="p-3 bg-purple-50 text-purple-600 rounded-lg">
            <Users className="w-6 h-6" />
          </div>
          <div>
            <p className="text-sm text-gray-500">Companies Visited</p>
            <p className="text-xl font-bold text-gray-800">42</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Company List */}
        <div className="lg:col-span-2 bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="p-6 border-b border-gray-100">
            <h2 className="text-lg font-semibold text-gray-800 flex items-center gap-2">
              <Briefcase className="w-5 h-5 text-primary" />
              Active Drives
            </h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-100">
                  <th className="p-4 text-sm font-semibold text-gray-600">Company</th>
                  <th className="p-4 text-sm font-semibold text-gray-600">Role</th>
                  <th className="p-4 text-sm font-semibold text-gray-600">Package</th>
                  <th className="p-4 text-sm font-semibold text-gray-600">Action</th>
                </tr>
              </thead>
              <tbody>
                {companies.map((company) => (
                  <tr key={company.id} className="border-b border-gray-50 hover:bg-gray-50/50">
                    <td className="p-4">
                      <p className="text-sm font-medium text-gray-800">{company.name}</p>
                      <p className="text-xs text-gray-500">Elig: {company.eligibility}</p>
                    </td>
                    <td className="p-4 text-sm text-gray-600">{company.role}</td>
                    <td className="p-4 text-sm text-gray-600 font-medium">{company.package}</td>
                    <td className="p-4">
                      <button 
                        onClick={() => alert(`Applied to ${company.name} successfully!`)}
                        className="px-3 py-1.5 bg-primary text-white text-xs font-medium rounded hover:bg-blue-800 transition-colors"
                      >
                        Apply Now
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Placement Records */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
            <Clock className="w-5 h-5 text-primary" />
            My Applications
          </h2>
          <div className="space-y-4">
            {applications.map((app) => (
              <div key={app.id} className="p-3 bg-gray-50 rounded-lg border border-gray-100">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-sm font-medium text-gray-800">{app.company}</h3>
                  <span className={`text-xs px-2 py-0.5 rounded-full ${
                    app.status === 'Rejected' ? 'bg-red-100 text-red-600' : 'bg-amber-100 text-amber-600'
                  }`}>
                    {app.status}
                  </span>
                </div>
                <p className="text-xs text-gray-600 mb-1">{app.role}</p>
                <p className="text-xs text-gray-400">Applied on: {app.date}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Placements;
