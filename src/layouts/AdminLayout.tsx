import React ,{ ReactNode } from 'react';
import { useLocation } from 'react-router-dom';
import Sidebar from '../components/admin/Sidebar';

/**
 * AdminLayout serves as a wrapper component for all admin pages
 * It provides consistent layout with the sidebar and header
 */

const AdminLayout = ({ children }: { children: ReactNode }) => {
  const location = useLocation();
  const pageTitles: { [key: string]: string } = {
    '/admin/dashboard': 'Dashboard Overview',
    '/admin/users': 'Users Management',
    '/admin/inquiries': 'Inquiries Management',
    '/admin/content': 'Content Management'
  };

  const currentUser = {
    name: 'John Doe',
    email: 'john@example.com',
    initials: 'JD'
  };

  return (
    <div className="flex h-screen bg-gray-900 text-white">
      {/* Sidebar Navigation */}
      <Sidebar />
      
      {/* Main Content Area */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <header className="bg-gray-800 shadow-md p-4 flex justify-between items-center">
          <h2 className="text-xl font-bold">{pageTitles[location.pathname] || 'Admin'}</h2>
          <div className="flex items-center">
            <span className="mr-2">{currentUser.name}</span>
            <div className="h-8 w-8 rounded-full bg-blue-500 flex items-center justify-center">
              {currentUser.initials}
            </div>
          </div>
        </header>
        
        {/* Page Content */}
        <main className="flex-1 overflow-y-auto p-6">
          {children}
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;