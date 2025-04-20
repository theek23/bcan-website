import React, { useState } from 'react';
import AdminLayout from '../../layouts/AdminLayout';

const Inquiries = () => {
  // Sample inquiries data
  const [inquiries, setInquiries] = useState([
    { 
      id: 1, 
      name: "John Doe", 
      email: "john@example.com", 
      subject: "Product Inquiry", 
      message: "I'm interested in learning more about your premium services. Could you provide additional information?", 
      date: "2025-04-15", 
      status: "New" 
    },
    { 
      id: 2, 
      name: "Jane Smith", 
      email: "jane@example.com", 
      subject: "Shipping Question", 
      message: "I placed an order three days ago and haven't received a shipping confirmation. Could you check on this for me?", 
      date: "2025-04-14", 
      status: "In Progress" 
    },
    { 
      id: 3, 
      name: "Bob Johnson", 
      email: "bob@example.com", 
      subject: "Support Request", 
      message: "I'm having trouble setting up my account. The verification email never arrived.", 
      date: "2025-04-12", 
      status: "Resolved" 
    },
    { 
      id: 4, 
      name: "Sarah Williams", 
      email: "sarah@example.com", 
      subject: "Return Policy", 
      message: "I need to return an item I purchased last week. What is your return policy and process?", 
      date: "2025-04-10", 
      status: "New" 
    },
    { 
      id: 5, 
      name: "Mike Brown", 
      email: "mike@example.com", 
      subject: "Feature Request", 
      message: "I love your product but I think it would be more useful if it included the ability to export data to CSV.", 
      date: "2025-04-08", 
      status: "In Progress" 
    }
  ]);

  // State for selected inquiry (for viewing details)
  const [selectedInquiry, setSelectedInquiry] = useState(null);

  // Toggle inquiry details
  const toggleDetails = (inquiry) => {
    if (selectedInquiry && selectedInquiry.id === inquiry.id) {
      setSelectedInquiry(null);
    } else {
      setSelectedInquiry(inquiry);
    }
  };

  // Update inquiry status
  const updateStatus = (id, newStatus) => {
    setInquiries(inquiries.map(inquiry => 
      inquiry.id === id ? {...inquiry, status: newStatus} : inquiry
    ));
    
    if (selectedInquiry && selectedInquiry.id === id) {
      setSelectedInquiry({...selectedInquiry, status: newStatus});
    }
  };

  return (
    <AdminLayout>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Inquiries Management</h1>
        <div className="flex gap-2">
          <button className="bg-green-600 hover:bg-green-700 px-4 py-2 rounded-lg flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
            </svg>
            Export
          </button>
          <button className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            New Message
          </button>
        </div>
      </div>
      
      {/* Search and Filter */}
      <div className="bg-gray-800 rounded-lg p-4 mb-6 flex flex-col sm:flex-row gap-4">
        <div className="flex-1">
          <input
            type="text"
            placeholder="Search inquiries..."
            className="w-full px-4 py-2 bg-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="flex gap-4">
          <select className="px-4 py-2 bg-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500">
            <option value="">All Statuses</option>
            <option value="new">New</option>
            <option value="in-progress">In Progress</option>
            <option value="resolved">Resolved</option>
          </select>
          <select className="px-4 py-2 bg-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500">
            <option value="">All Dates</option>
            <option value="today">Today</option>
            <option value="week">This Week</option>
            <option value="month">This Month</option>
          </select>
        </div>
      </div>
      
      {/* Selected Inquiry Details */}
      {selectedInquiry && (
        <div className="bg-gray-800 rounded-lg shadow-md p-6 mb-6">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h3 className="text-xl font-bold">{selectedInquiry.subject}</h3>
              <p className="text-gray-400">From: {selectedInquiry.name} ({selectedInquiry.email})</p>
              <p className="text-gray-400">Date: {selectedInquiry.date}</p>
            </div>
            <div className="flex items-center">
              <span className="mr-3">Status:</span>
              <select 
                className={`px-3 py-1 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                  selectedInquiry.status === 'New' ? 'bg-yellow-900 text-yellow-300' : 
                  selectedInquiry.status === 'In Progress' ? 'bg-blue-900 text-blue-300' : 
                  'bg-green-900 text-green-300'
                }`}
                value={selectedInquiry.status}
                onChange={(e) => updateStatus(selectedInquiry.id, e.target.value)}
              >
                <option value="New">New</option>
                <option value="In Progress">In Progress</option>
                <option value="Resolved">Resolved</option>
              </select>
            </div>
          </div>
          <div className="bg-gray-700 p-4 rounded-lg mb-4">
            <p>{selectedInquiry.message}</p>
          </div>
          <div className="mt-4">
            <h4 className="font-bold mb-2">Reply</h4>
            <textarea 
              className="w-full px-4 py-2 bg-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 min-h-[100px]"
              placeholder="Type your response here..."
            ></textarea>
            <div className="flex justify-end mt-3">
              <button className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg">
                Send Response
              </button>
            </div>
          </div>
        </div>
      )}
      
      {/* Inquiries Table */}
      <div className="bg-gray-800 rounded-lg shadow-md p-6">
        <div className="overflow-x-auto">
          <table className="min-w-full">
            <thead>
              <tr>
                <th className="px-4 py-2 text-left text-gray-400">ID</th>
                <th className="px-4 py-2 text-left text-gray-400">Name</th>
                <th className="px-4 py-2 text-left text-gray-400">Subject</th>
                <th className="px-4 py-2 text-left text-gray-400">Date</th>
                <th className="px-4 py-2 text-left text-gray-400">Status</th>
                <th className="px-4 py-2 text-left text-gray-400">Actions</th>
              </tr>
            </thead>
            <tbody>
              {inquiries.map((inquiry) => (
                <tr 
                  key={inquiry.id} 
                  className={`border-t border-gray-700 ${selectedInquiry && selectedInquiry.id === inquiry.id ? 'bg-gray-700' : ''}`}
                >
                  <td className="px-4 py-3">{inquiry.id}</td>
                  <td className="px-4 py-3">
                    <div>
                      <div>{inquiry.name}</div>
                      <div className="text-gray-400 text-sm">{inquiry.email}</div>
                    </div>
                  </td>
                  <td className="px-4 py-3">{inquiry.subject}</td>
                  <td className="px-4 py-3">{inquiry.date}</td>
                  <td className="px-4 py-3">
                    <span className={`px-2 py-1 rounded-full text-xs ${
                      inquiry.status === 'New' ? 'bg-yellow-900 text-yellow-300' : 
                      inquiry.status === 'In Progress' ? 'bg-blue-900 text-blue-300' : 
                      'bg-green-900 text-green-300'
                    }`}>
                      {inquiry.status}
                    </span>
                  </td>
                  <td className="px-4 py-3">
                    <div className="flex space-x-2">
                      <button 
                        className="p-1 text-blue-400 hover:text-blue-300"
                        onClick={() => toggleDetails(inquiry)}
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                        </svg>
                      </button>
                      <button className="p-1 text-green-400 hover:text-green-300">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </button>
                      <button className="p-1 text-red-400 hover:text-red-300">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                        </svg>
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        {/* Pagination */}
        <div className="flex justify-between items-center mt-6">
          <div className="text-sm text-gray-400">
            Showing 1 to 5 of 5 entries
          </div>
          <div className="flex space-x-1">
            <button className="px-3 py-1 bg-gray-700 rounded-lg text-gray-300 hover:bg-gray-600">Previous</button>
            <button className="px-3 py-1 bg-blue-600 rounded-lg text-white">1</button>
            <button className="px-3 py-1 bg-gray-700 rounded-lg text-gray-300 hover:bg-gray-600">Next</button>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
};

export default Inquiries;