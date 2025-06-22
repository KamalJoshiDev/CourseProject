import React from 'react';
import { useState } from 'react';
import {
  ChartBarIcon,
  UserGroupIcon,
  DocumentCheckIcon,
  DocumentPlusIcon,
  Cog6ToothIcon,         
  ArrowLeftOnRectangleIcon, // Previously "LogoutIcon"
  XMarkIcon,             // Previously "XIcon"
  CheckIcon,
  ArrowLeftCircleIcon
} from '@heroicons/react/24/outline'; 

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState('users');
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className={`${sidebarOpen ? 'w-64' : 'w-20'} bg-gray-800 text-white transition-all duration-300`}>
        <div className="p-4 flex items-center justify-between">
     
          <button 
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="p-1 rounded-md hover:bg-indigo-700"
          >
            {sidebarOpen ? '◀' : '▶'}
          </button>
        </div>
        
        <nav className="mt-8">
          <NavItem 
            icon={<UserGroupIcon className="h-6 w-6" />} 
            text="Users" 
            active={activeTab === 'users'} 
            onClick={() => setActiveTab('users')}
            sidebarOpen={sidebarOpen}
          />
          <NavItem 
            icon={<DocumentCheckIcon className="h-6 w-6" />} 
            text="User Data" 
            active={activeTab === 'userData'} 
            onClick={() => setActiveTab('userData')}
            sidebarOpen={sidebarOpen}
          />
          <NavItem 
            icon={<DocumentPlusIcon className="h-6 w-6" />} 
            text="Add Data" 
            active={activeTab === 'addData'} 
            onClick={() => setActiveTab('addData')}
            sidebarOpen={sidebarOpen}
          />
          <NavItem 
            icon={<ChartBarIcon className="h-6 w-6" />} 
            text="Analytics" 
            active={activeTab === 'analytics'} 
            onClick={() => setActiveTab('analytics')}
            sidebarOpen={sidebarOpen}
          />
          <NavItem 
            icon={<Cog6ToothIcon className="h-6 w-6" />} 
            text="Settings" 
            active={activeTab === 'settings'} 
            onClick={() => setActiveTab('settings')}
            sidebarOpen={sidebarOpen}
          />
        </nav>
        
        <div className="absolute bottom-0 w-full p-4">
          <button className="flex items-center space-x-2 text-red-300 hover:text-white">
            <ArrowLeftOnRectangleIcon className="h-6 w-6" />
            {sidebarOpen && <span>Logout</span>}
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        {/* Header */}
        <header className="bg-white shadow-sm p-4 flex justify-between items-center">
          <h2 className="text-xl font-semibold text-gray-800 capitalize">
            {activeTab === 'users' && 'User Management'}
            {activeTab === 'userData' && 'User Submitted Data'}
            {activeTab === 'addData' && 'Add New Data'}
            {activeTab === 'analytics' && 'Analytics'}
            {activeTab === 'settings' && 'Settings'}
          </h2>
          <div className="flex items-center space-x-4">
            <div className="relative">
              <input 
                type="text" 
                placeholder="Search..." 
                className="pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              <svg className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <div className="h-10 w-10 rounded-full bg-indigo-500 flex items-center justify-center text-white font-semibold">
              A
            </div>
          </div>
        </header>

        {/* Content Area */}
        <main className="p-6">
          {activeTab === 'users' && <UsersTab />}
          {activeTab === 'userData' && <UserDataTab />}
          {activeTab === 'addData' && <AddDataTab />}
          {activeTab === 'analytics' && <AnalyticsTab />}
          {activeTab === 'settings' && <SettingsTab />}
        </main>
      </div>
    </div>
  );
};

const NavItem = ({ icon, text, active, onClick, sidebarOpen }) => {
  return (
    <button
      onClick={onClick}
      className={`flex items-center w-full p-4 ${active ? 'bg-indigo-700' : 'hover:bg-indigo-700'} transition-colors duration-200`}
    >
      <div className="flex items-center space-x-3">
        {icon}
        {sidebarOpen && <span>{text}</span>}
      </div>
    </button>
  );
};

// Tab Components
const UsersTab = () => {
  const [users, setUsers] = useState([
    { id: 1, name: 'John Doe', email: 'john@example.com', role: 'user', status: 'active', joined: '2023-01-15' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'editor', status: 'active', joined: '2023-02-20' },
    { id: 3, name: 'Bob Johnson', email: 'bob@example.com', role: 'user', status: 'inactive', joined: '2023-03-10' },
    { id: 4, name: 'Alice Brown', email: 'alice@example.com', role: 'admin', status: 'active', joined: '2023-01-05' },
  ]);

  const toggleStatus = (id) => {
    setUsers(users.map(user => 
      user.id === id 
        ? { ...user, status: user.status === 'active' ? 'inactive' : 'active' } 
        : user
    ));
  };

  return (
    <div className="bg-white rounded-lg shadow overflow-hidden">
      <div className="p-4 border-b flex justify-between items-center">
        <h3 className="font-semibold text-lg">User Management</h3>
        <button className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition-colors">
          Add New User
        </button>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Role</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Joined</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {users.map((user) => (
              <tr key={user.id}>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 h-10 w-10 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 font-semibold">
                      {user.name.charAt(0)}
                    </div>
                    <div className="ml-4">
                      <div className="text-sm font-medium text-gray-900">{user.name}</div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{user.email}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full 
                    ${user.role === 'admin' ? 'bg-purple-100 text-purple-800' : 
                      user.role === 'editor' ? 'bg-blue-100 text-blue-800' : 'bg-green-100 text-green-800'}`}>
                    {user.role}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full 
                    ${user.status === 'active' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                    {user.status}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{user.joined}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  <button 
                    onClick={() => toggleStatus(user.id)}
                    className={`mr-2 ${user.status === 'active' ? 'text-red-600 hover:text-red-900' : 'text-green-600 hover:text-green-900'}`}
                  >
                    {user.status === 'active' ? 'Deactivate' : 'Activate'}
                  </button>
                  <button className="text-indigo-600 hover:text-indigo-900">Edit</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="px-6 py-4 border-t flex items-center justify-between">
        <div className="text-sm text-gray-500">
          Showing <span className="font-medium">1</span> to <span className="font-medium">4</span> of <span className="font-medium">4</span> users
        </div>
        <div className="flex space-x-2">
          <button className="px-3 py-1 rounded-md border bg-white text-sm font-medium text-gray-700 hover:bg-gray-50">
            Previous
          </button>
          <button className="px-3 py-1 rounded-md border bg-white text-sm font-medium text-gray-700 hover:bg-gray-50">
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

const UserDataTab = () => {
  const [userData, setUserData] = useState([
    { id: 1, title: 'Market Analysis Q1', submittedBy: 'John Doe', date: '2023-04-15', status: 'pending', content: 'Detailed analysis of market trends for Q1 2023...' },
    { id: 2, title: 'Product Feedback', submittedBy: 'Jane Smith', date: '2023-04-10', status: 'approved', content: 'User feedback collected for our new product...' },
    { id: 3, title: 'Competitor Report', submittedBy: 'Bob Johnson', date: '2023-04-05', status: 'rejected', content: 'Analysis of our main competitors...' },
    { id: 4, title: 'Customer Survey Results', submittedBy: 'Alice Brown', date: '2023-03-28', status: 'approved', content: 'Results from our annual customer survey...' },
  ]);

  const updateStatus = (id, newStatus) => {
    setUserData(userData.map(item => 
      item.id === id ? { ...item, status: newStatus } : item
    ));
  };

  return (
    <div>
      <div className="bg-white rounded-lg shadow overflow-hidden mb-6">
        <div className="p-4 border-b">
          <h3 className="font-semibold text-lg">User Submitted Data</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Title</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Submitted By</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {userData.map((data) => (
                <tr key={data.id}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">{data.title}</div>
                    <div className="text-sm text-gray-500 truncate max-w-xs">{data.content}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{data.submittedBy}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{data.date}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full 
                      ${data.status === 'approved' ? 'bg-green-100 text-green-800' : 
                        data.status === 'rejected' ? 'bg-red-100 text-red-800' : 'bg-yellow-100 text-yellow-800'}`}>
                      {data.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium space-x-2">
                    {data.status !== 'approved' && (
                      <button 
                        onClick={() => updateStatus(data.id, 'approved')}
                        className="text-green-600 hover:text-green-900 flex items-center"
                      >
                        <CheckIcon className="h-4 w-4 mr-1" /> Approve
                      </button>
                    )}
                    {data.status !== 'rejected' && (
                      <button 
                        onClick={() => updateStatus(data.id, 'rejected')}
                        className="text-red-600 hover:text-red-900 flex items-center"
                      >
                        <XMarkIcon className="h-4 w-4 mr-1" /> Reject
                      </button>
                    )}
                    <button className="text-indigo-600 hover:text-indigo-900">View</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

const AddDataTab = () => {
  const [formData, setFormData] = useState({
    title: '',
    category: '',
    content: '',
    isPublic: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    alert('Data submitted successfully!');
    setFormData({
      title: '',
      category: '',
      content: '',
      isPublic: false
    });
  };

  return (
    <div className="bg-white rounded-lg shadow overflow-hidden p-6">
      <h3 className="font-semibold text-lg mb-6">Add New Data</h3>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">Title</label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            required
          />
        </div>
        
        <div className="mb-4">
          <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-1">Category</label>
          <select
            id="category"
            name="category"
            value={formData.category}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            required
          >
            <option value="">Select a category</option>
            <option value="report">Report</option>
            <option value="analysis">Analysis</option>
            <option value="survey">Survey</option>
            <option value="other">Other</option>
          </select>
        </div>
        
        <div className="mb-4">
          <label htmlFor="content" className="block text-sm font-medium text-gray-700 mb-1">Content</label>
          <textarea
            id="content"
            name="content"
            rows="6"
            value={formData.content}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            required
          ></textarea>
        </div>
        
        <div className="mb-6 flex items-center">
          <input
            type="checkbox"
            id="isPublic"
            name="isPublic"
            checked={formData.isPublic}
            onChange={handleChange}
            className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
          />
          <label htmlFor="isPublic" className="ml-2 block text-sm text-gray-700">Make this data public</label>
        </div>
        
        <div className="flex justify-end">
          <button
            type="button"
            className="mr-3 px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Submit Data
          </button>
        </div>
      </form>
    </div>
  );
};

const AnalyticsTab = () => {
  return (
    <div className="bg-white rounded-lg shadow overflow-hidden p-6">
      <h3 className="font-semibold text-lg mb-6">Analytics Dashboard</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-indigo-50 p-6 rounded-lg">
          <h4 className="text-sm font-medium text-indigo-600 mb-1">Total Users</h4>
          <p className="text-3xl font-bold text-gray-900">1,234</p>
          <p className="text-sm text-green-600 mt-1">↑ 12% from last month</p>
        </div>
        <div className="bg-green-50 p-6 rounded-lg">
          <h4 className="text-sm font-medium text-green-600 mb-1">Approved Data</h4>
          <p className="text-3xl font-bold text-gray-900">568</p>
          <p className="text-sm text-green-600 mt-1">↑ 8% from last month</p>
        </div>
        <div className="bg-yellow-50 p-6 rounded-lg">
          <h4 className="text-sm font-medium text-yellow-600 mb-1">Pending Data</h4>
          <p className="text-3xl font-bold text-gray-900">42</p>
          <p className="text-sm text-red-600 mt-1">↓ 5% from last month</p>
        </div>
        <div className="bg-purple-50 p-6 rounded-lg">
          <h4 className="text-sm font-medium text-purple-600 mb-1">Admin Data</h4>
          <p className="text-3xl font-bold text-gray-900">127</p>
          <p className="text-sm text-green-600 mt-1">↑ 3% from last month</p>
        </div>
      </div>
      
      <div className="bg-white p-6 rounded-lg border border-gray-200 mb-8">
        <h4 className="text-md font-medium text-gray-900 mb-4">Monthly Data Submissions</h4>
        <div className="h-64 bg-gray-50 rounded-md flex items-center justify-center">
          <p className="text-gray-500">Chart would be displayed here</p>
        </div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg border border-gray-200">
          <h4 className="text-md font-medium text-gray-900 mb-4">Data by Category</h4>
          <div className="h-64 bg-gray-50 rounded-md flex items-center justify-center">
            <p className="text-gray-500">Pie chart would be displayed here</p>
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg border border-gray-200">
          <h4 className="text-md font-medium text-gray-900 mb-4">User Activity</h4>
          <div className="h-64 bg-gray-50 rounded-md flex items-center justify-center">
            <p className="text-gray-500">Bar chart would be displayed here</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const SettingsTab = () => {
  return (
    <div className="bg-white rounded-lg shadow overflow-hidden p-6">
      <h3 className="font-semibold text-lg mb-6">Settings</h3>
      <div className="space-y-8">
        <div>
          <h4 className="text-md font-medium text-gray-900 mb-4">General Settings</h4>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <label htmlFor="notifications" className="block text-sm font-medium text-gray-700">Email Notifications</label>
                <p className="text-sm text-gray-500">Receive email notifications for new submissions</p>
              </div>
              <input
                type="checkbox"
                id="notifications"
                className="h-5 w-5 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                defaultChecked
              />
            </div>
            <div className="flex items-center justify-between">
              <div>
                <label htmlFor="darkMode" className="block text-sm font-medium text-gray-700">Dark Mode</label>
                <p className="text-sm text-gray-500">Switch to dark theme</p>
              </div>
              <input
                type="checkbox"
                id="darkMode"
                className="h-5 w-5 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
              />
            </div>
          </div>
        </div>
        
        <div>
          <h4 className="text-md font-medium text-gray-900 mb-4">Data Approval Settings</h4>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <label htmlFor="autoApprove" className="block text-sm font-medium text-gray-700">Auto-approve trusted users</label>
                <p className="text-sm text-gray-500">Automatically approve submissions from users with high trust score</p>
              </div>
              <input
                type="checkbox"
                id="autoApprove"
                className="h-5 w-5 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
              />
            </div>
            <div className="flex items-center justify-between">
              <div>
                <label htmlFor="approvalThreshold" className="block text-sm font-medium text-gray-700">Approval Threshold</label>
                <p className="text-sm text-gray-500">Minimum trust score for auto-approval</p>
              </div>
              <select
                id="approvalThreshold"
                className="mt-1 block w-24 pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
              >
                <option>70</option>
                <option>80</option>
                <option selected>90</option>
                <option>100</option>
              </select>
            </div>
          </div>
        </div>
        
        <div className="pt-4 border-t border-gray-200">
          <button className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            Save Settings
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;