import React, { useState } from 'react';
import AdminLayout from '../../layouts/AdminLayout';

const Content = () => {
  // Sample content categories
  const categories = [
    { id: 1, name: "Home Page" },
    { id: 2, name: "About Us" },
    { id: 3, name: "Products" },
    { id: 4, name: "Blog" }
  ];

  // Sample content data
  const [contentItems, setContentItems] = useState([
    { 
      id: 1, 
      title: "Homepage Banner", 
      type: "Banner",
      category: "Home Page",
      status: "Published",
      lastUpdated: "2025-04-15",
      author: "John Doe"
    },
    { 
      id: 2, 
      title: "About Our Company", 
      type: "Text Block",
      category: "About Us",
      status: "Published",
      lastUpdated: "2025-04-10",
      author: "Jane Smith"
    },
    { 
      id: 3, 
      title: "Product Features", 
      type: "Section",
      category: "Products",
      status: "Draft",
      lastUpdated: "2025-04-18",
      author: "Mike Johnson"
    },
    { 
      id: 4, 
      title: "Recent Blog Post", 
      type: "Article",
      category: "Blog",
      status: "Published",
      lastUpdated: "2025-04-17",
      author: "Sarah Williams"
    },
    { 
      id: 5, 
      title: "Customer Testimonials", 
      type: "Slider",
      category: "Home Page",
      status: "Review Needed",
      lastUpdated: "2025-04-16",
      author: "Bob Brown"
    }
  ]);

  // Active tab state
  const [activeTab, setActiveTab] = useState('all');

  // Filtered content based on active tab
  const getFilteredContent = () => {
    if (activeTab === 'all') return contentItems;
    if (activeTab === 'published') return contentItems.filter(item => item.status === 'Published');
    if (activeTab === 'drafts') return contentItems.filter(item => item.status === 'Draft');
    if (activeTab === 'review') return contentItems.filter(item => item.status === 'Review Needed');
    
    // Filter by category if not one of the special tabs
    return contentItems.filter(item => item.category === activeTab);
  };

  // Get tab class based on active state
  const getTabClass = (tabName) => {
    return `px-4 py-2 cursor-pointer ${
      activeTab === tabName 
        ? 'bg-blue-600 text-white rounded-lg' 
        : 'text-gray-300 hover:bg-gray-700 hover:text-white rounded-lg'
    }`;
  };

  return (
    <AdminLayout>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Content Management</h1>
        <div className="flex gap-2">
          <button className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
            </svg>
            Add Content
          </button>
        </div>
      </div>
      
      {/* Tabs Navigation */}
      <div className="bg-gray-800 rounded-lg p-4 mb-6 overflow-x-auto">
        <div className="flex space-x-2 min-w-max">
          <div 
            className={getTabClass('all')}
            onClick={() => setActiveTab('all')}
          >
            All Content
          </div>
          <div 
            className={getTabClass('published')}
            onClick={() => setActiveTab('published')}
          >
            Published
          </div>
          <div 
            className={getTabClass('drafts')}
            onClick={() => setActiveTab('drafts')}
          >
            Drafts
          </div>
          <div 
            className={getTabClass('review')}
            onClick={() => setActiveTab('review')}
          >
            Review Needed
          </div>
          <div className="border-l border-gray-600 mx-2"></div>
          {categories.map(category => (
            <div 
              key={category.id}
              className={getTabClass(category.name)}
              onClick={() => setActiveTab(category.name)}
            >
              {category.name}
            </div>
          ))}
        </div>
      </div>
      
      {/* Search and Filter */}
      <div className="bg-gray-800 rounded-lg p-4 mb-6 flex flex-col sm:flex-row gap-4">
        <div className="flex-1">
          <input
            type="text"
            placeholder="Search content..."
            className="w-full px-4 py-2 bg-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="flex gap-4">
          <select className="px-4 py-2 bg-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500">
            <option value="">All Types</option>
            <option value="banner">Banner</option>
            <option value="text">Text Block</option>
            <option value="section">Section</option>
            <option value="article">Article</option>
            <option value="slider">Slider</option>
          </select>
          <select className="px-4 py-2 bg-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500">
            <option value="">Sort By</option>
            <option value="newest">Newest First</option>
            <option value="oldest">Oldest First</option>
            <option value="a-z">Title A-Z</option>
            <option value="z-a">Title Z-A</option>
          </select>
        </div>
      </div>
      
      {/* Content Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
        {getFilteredContent().map((item) => (
          <div key={item.id} className="bg-gray-800 rounded-lg shadow-md overflow-hidden">
            {/* Content Preview */}
            <div className="h-40 bg-gray-700 flex items-center justify-center">
              {item.type === 'Banner' && (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              )}
              {item.type === 'Text Block' && (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h7" />
                </svg>
              )}
              {item.type === 'Section' && (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                </svg>
              )}
              {item.type === 'Article' && (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                </svg>
              )}
              {item.type === 'Slider' && (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2" />
                </svg>
              )}
            </div>
            
            {/* Content Details */}
            <div className="p-4">
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-bold text-lg">{item.title}</h3>
                <span className={`px-2 py-1 rounded-full text-xs ${
                  item.status === 'Published' ? 'bg-green-900 text-green-300' : 
                  item.status === 'Draft' ? 'bg-gray-600 text-gray-300' : 
                  'bg-yellow-900 text-yellow-300'
                }`}>
                  {item.status}
                </span>
              </div>
              <div className="text-gray-400 text-sm mb-3">
                <p>Type: {item.type}</p>
                <p>Category: {item.category}</p>
                <p>Updated: {item.lastUpdated}</p>
                <p>Author: {item.author}</p>
              </div>
              <div className="flex justify-between pt-2 border-t border-gray-700">
                <button className="text-blue-400 hover:text-blue-300">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </button>
                <button className="text-blue-400 hover:text-blue-300">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                  </svg>
                </button>
                {item.status !== 'Published' ? (
                  <button className="text-green-400 hover:text-green-300">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </button>
                ) : (
                  <button className="text-yellow-400 hover:text-yellow-300">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                  </button>
                )}
                <button className="text-red-400 hover:text-red-300">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Create New Content Button (Mobile) */}
      <div className="sm:hidden mb-6">
        <button className="w-full bg-blue-600 hover:bg-blue-700 p-3 rounded-lg flex items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
          </svg>
          Add New Content
        </button>
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
    </AdminLayout>
  );
};

export default Content;