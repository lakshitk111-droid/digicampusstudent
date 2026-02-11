import React from 'react';
import SchoolDashboard from '../components/dashboard/SchoolDashboard';
import CollegeDashboard from '../components/dashboard/CollegeDashboard';
import { useMode } from '../context/ModeContext';

const Dashboard = () => {
  const { mode } = useMode();

  if (mode === 'school') {
    return <SchoolDashboard />;
  }

  return <CollegeDashboard />;
};

export default Dashboard;
