import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import RightPanel from '../components/RightPanel';

const MainLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
  const closeSidebar = () => setIsSidebarOpen(false);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col font-sans">
      <Header toggleSidebar={toggleSidebar} />
      
      <div className="flex flex-1 container mx-auto max-w-[1600px] px-0 lg:px-4 xl:px-6 pt-4 lg:pt-6 gap-6">
        <Sidebar isOpen={isSidebarOpen} closeSidebar={closeSidebar} />
        
        <main className="flex-1 min-w-0 pb-10 px-4 lg:px-0">
          <Outlet />
        </main>
        
        <RightPanel />
      </div>
    </div>
  );
};

export default MainLayout;
