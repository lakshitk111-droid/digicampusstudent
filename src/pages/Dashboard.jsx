import React from 'react';
import NoticeFeed from '../components/dashboard/NoticeFeed';
import SchoolDashboard from '../components/dashboard/SchoolDashboard';
import { useMode } from '../context/ModeContext';

const Dashboard = () => {
  const { mode } = useMode();

  if (mode === 'school') {
    return <SchoolDashboard />;
  }

  return (
    <div className="space-y-6">
      {/* Only Feed/Notice Section as per new requirements */}
      <div className="grid grid-cols-1">
        <NoticeFeed />
      </div>
    </div>
  );
};

export default Dashboard;
