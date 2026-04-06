import React, { useState, useEffect } from 'react';
import { 
  UserIcon, 
  Cog6ToothIcon, 
  ChartBarIcon,
  CameraIcon,
  CheckCircleIcon,
  PencilIcon,
  SunIcon,
  MoonIcon,
  EnvelopeIcon
} from '@heroicons/react/24/outline';

const dummyUser = {
  name: 'John Doe',
  role: 'Product Manager',
  email: 'john.doe@example.com',
  phone: '+1 (555) 123-4567',
  bio: 'Passionate about building intuitive products. Coffee addict and occasional designer.',
  avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026024d',
};

const dummyActivity = [
  { id: 1, text: 'You completed Task "Redesign Dashboard"', time: '2 hours ago' },
  { id: 2, text: 'You were assigned to Project "Mobile App MVP"', time: '5 hours ago' },
  { id: 3, text: 'You commented on "API Integration"', time: '1 day ago' },
];

export default function Profile() {
  const [activeTab, setActiveTab] = useState('profile');
  const [isEditing, setIsEditing] = useState(false);
  const [darkMode, setDarkMode] = useState(() => document.documentElement.classList.contains("dark"));
  const [emailNotif, setEmailNotif] = useState(true);

  // Apply dark mode class to HTML element
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <div className="w-full max-w-7xl mx-auto animate-fade-in pb-12">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100 flex items-center">
            My Profile
          </h1>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
            Dashboard / Profile
          </p>
        </div>
        <div className="mt-4 md:mt-0">
          <button 
            onClick={() => setIsEditing(!isEditing)}
            className="flex items-center space-x-2 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl shadow-lg shadow-indigo-200 dark:shadow-none transition-all transform hover:-translate-y-0.5 active:translate-y-0"
          >
            <PencilIcon className="w-4 h-4" />
            <span>{isEditing ? 'Cancel Edit' : 'Edit Profile'}</span>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Left Sidebar - Profile Card (Top Section) */}
        <div className="lg:col-span-4 space-y-8">
          <div className="relative overflow-hidden bg-white/70 dark:bg-gray-800/70 backdrop-blur-xl rounded-3xl shadow-xl border border-white/40 dark:border-gray-700/50 p-6 flex flex-col items-center text-center">
            {/* Background Blob */}
            <div className="absolute top-0 right-0 -mr-16 -mt-16 w-48 h-48 bg-indigo-500/20 rounded-full blur-3xl"></div>
            
            <div className="relative group cursor-pointer mb-4">
              <img 
                src={dummyUser.avatar} 
                alt={dummyUser.name} 
                className="w-28 h-28 rounded-full object-cover border-4 border-white dark:border-gray-700 shadow-lg"
              />
              <div className="absolute inset-0 bg-black/40 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <CameraIcon className="w-8 h-8 text-white" />
              </div>
            </div>
            
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white flex items-center justify-center">
              {dummyUser.name}
              <CheckCircleIcon className="w-5 h-5 text-indigo-500 ml-2" />
            </h2>
            <p className="text-sm font-medium text-indigo-600 dark:text-indigo-400 mt-1">
              {dummyUser.role}
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
              {dummyUser.email}
            </p>
          </div>

          {/* Nav Tabs for smaller devices could go here, but we put them on the right */}
        </div>

        {/* Right Content Area */}
        <div className="lg:col-span-8">
          
          {/* Tabs */}
          <div className="flex space-x-2 mb-6 overflow-x-auto pb-2 scrollbar-none">
            {['profile', 'settings', 'activity'].map(tab => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`flex items-center px-5 py-2.5 rounded-full text-sm font-semibold transition-all shadow-sm ${
                  activeTab === tab 
                  ? 'bg-indigo-600 text-white'
                  : 'bg-white/60 dark:bg-gray-800/60 text-gray-600 dark:text-gray-300 hover:bg-indigo-50 dark:hover:bg-gray-700'
                }`}
              >
                {tab === 'profile' && <UserIcon className="w-4 h-4 mr-2" />}
                {tab === 'settings' && <Cog6ToothIcon className="w-4 h-4 mr-2" />}
                {tab === 'activity' && <ChartBarIcon className="w-4 h-4 mr-2" />}
                <span className="capitalize">{tab}</span>
              </button>
            ))}
          </div>

          {/* Main Card */}
          <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-xl rounded-3xl shadow-xl border border-white/40 dark:border-gray-700/50 p-6 md:p-8">
            
            {/* --- PROFILE TAB --- */}
            {activeTab === 'profile' && (
              <div className="animate-fade-in space-y-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Personal Information</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Full Name</label>
                    <input 
                      type="text" 
                      defaultValue={dummyUser.name}
                      disabled={!isEditing}
                      className="w-full px-4 py-2.5 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-indigo-500 disabled:opacity-60 transition"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Email Address</label>
                    <input 
                      type="email" 
                      defaultValue={dummyUser.email}
                      disabled={!isEditing}
                      className="w-full px-4 py-2.5 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-indigo-500 disabled:opacity-60 transition"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Phone Number</label>
                    <input 
                      type="tel" 
                      defaultValue={dummyUser.phone}
                      disabled={!isEditing}
                      className="w-full px-4 py-2.5 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-indigo-500 disabled:opacity-60 transition"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Role</label>
                    <input 
                      type="text" 
                      defaultValue={dummyUser.role}
                      disabled
                      className="w-full px-4 py-2.5 bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl opacity-60 cursor-not-allowed"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Biography</label>
                    <textarea 
                      defaultValue={dummyUser.bio}
                      disabled={!isEditing}
                      rows={3}
                      className="w-full px-4 py-2.5 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-indigo-500 disabled:opacity-60 transition resize-none"
                    />
                  </div>
                </div>

                {isEditing && (
                  <div className="flex justify-end space-x-3 mt-8 pt-6 border-t border-gray-100 dark:border-gray-700">
                    <button 
                      onClick={() => setIsEditing(false)}
                      className="px-6 py-2.5 rounded-xl border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 font-medium transition"
                    >
                      Cancel
                    </button>
                    <button 
                      onClick={() => setIsEditing(false)}
                      className="px-6 py-2.5 rounded-xl bg-indigo-600 text-white hover:bg-indigo-700 font-medium shadow-md transition"
                    >
                      Save Changes
                    </button>
                  </div>
                )}
              </div>
            )}

            {/* --- SETTINGS TAB --- */}
            {activeTab === 'settings' && (
              <div className="animate-fade-in space-y-8">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Account Settings</h3>
                  <div className="space-y-4">
                    
                    {/* Toggle: Dark Mode */}
                    <div className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-700">
                      <div className="flex items-center space-x-4">
                        <div className="p-2 bg-indigo-100 dark:bg-indigo-900/40 rounded-lg text-indigo-600 dark:text-indigo-400">
                          {darkMode ? <MoonIcon className="w-5 h-5"/> : <SunIcon className="w-5 h-5" />}
                        </div>
                        <div>
                          <p className="font-semibold text-gray-900 dark:text-white">Dark Mode</p>
                          <p className="text-sm text-gray-500">Toggle dark appearance</p>
                        </div>
                      </div>
                      <button 
                        onClick={() => setDarkMode(!darkMode)}
                        className={`w-12 h-6 rounded-full transition-colors flex items-center px-1 ${darkMode ? 'bg-indigo-600' : 'bg-gray-300 dark:bg-gray-600'}`}
                      >
                        <div className={`w-4 h-4 bg-white rounded-full shadow-md transform transition-transform ${darkMode ? 'translate-x-6' : 'translate-x-0'}`}></div>
                      </button>
                    </div>

                    {/* Toggle: Email Notifications */}
                    <div className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-700">
                      <div className="flex items-center space-x-4">
                        <div className="p-2 bg-green-100 dark:bg-green-900/40 rounded-lg text-green-600 dark:text-green-400">
                          <EnvelopeIcon className="w-5 h-5"/>
                        </div>
                        <div>
                          <p className="font-semibold text-gray-900 dark:text-white">Email Notifications</p>
                          <p className="text-sm text-gray-500">Receive daily summaries</p>
                        </div>
                      </div>
                      <button 
                        onClick={() => setEmailNotif(!emailNotif)}
                        className={`w-12 h-6 rounded-full transition-colors flex items-center px-1 ${emailNotif ? 'bg-indigo-600' : 'bg-gray-300 dark:bg-gray-600'}`}
                      >
                        <div className={`w-4 h-4 bg-white rounded-full shadow-md transform transition-transform ${emailNotif ? 'translate-x-6' : 'translate-x-0'}`}></div>
                      </button>
                    </div>

                  </div>
                </div>

                <div className="pt-6 border-t border-gray-100 dark:border-gray-700">
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Change Password</h3>
                  <div className="space-y-4 max-w-lg">
                    <input 
                      type="password" 
                      placeholder="Current Password"
                      className="w-full px-4 py-2.5 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-indigo-500 transition"
                    />
                    <input 
                      type="password" 
                      placeholder="New Password"
                      className="w-full px-4 py-2.5 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-indigo-500 transition"
                    />
                    <input 
                      type="password" 
                      placeholder="Confirm New Password"
                      className="w-full px-4 py-2.5 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-indigo-500 transition"
                    />
                    <button className="px-6 py-2.5 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-xl font-medium shadow-md transition hover:bg-gray-800 dark:hover:bg-gray-100 mt-2">
                      Update Password
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* --- ACTIVITY TAB --- */}
            {activeTab === 'activity' && (
              <div className="animate-fade-in space-y-8">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Activity Overview</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div className="p-5 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl text-white shadow-lg relative overflow-hidden">
                      <ChartBarIcon className="absolute right-[-10px] bottom-[-10px] w-24 h-24 opacity-20" />
                      <p className="text-indigo-100 text-sm font-medium">Tasks Completed</p>
                      <h4 className="text-4xl font-bold mt-2">142</h4>
                    </div>
                    <div className="p-5 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl text-white shadow-lg relative overflow-hidden">
                      <ChartBarIcon className="absolute right-[-10px] bottom-[-10px] w-24 h-24 opacity-20" />
                      <p className="text-blue-100 text-sm font-medium">Projects Involved</p>
                      <h4 className="text-4xl font-bold mt-2">8</h4>
                    </div>
                    <div className="p-5 bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl relative overflow-hidden">
                      <p className="text-gray-500 dark:text-gray-400 text-sm font-medium">Pending Tasks</p>
                      <h4 className="text-4xl font-bold text-gray-900 dark:text-white mt-2">23</h4>
                    </div>
                  </div>
                </div>

                <div className="pt-4">
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-6">Recent Activity</h3>
                  <div className="space-y-6 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-gray-200 dark:before:via-gray-600 before:to-transparent">
                    {dummyActivity.map((activity, index) => (
                      <div key={activity.id} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                        <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white dark:border-gray-800 bg-indigo-100 dark:bg-indigo-900/50 text-indigo-500 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                          {index === 0 ? <CheckCircleIcon className="w-5 h-5"/> : <CheckCircleIcon className="w-4 h-4 opacity-50"/>}
                        </div>
                        <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-4 rounded-xl border border-gray-100 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-sm transition-all hover:shadow-md hover:-translate-y-1">
                          <div className="flex items-center justify-between space-x-2 mb-1">
                            <div className="font-semibold text-gray-900 dark:text-white">{activity.text}</div>
                            <time className="text-xs text-indigo-500 dark:text-indigo-400 flex-shrink-0">{activity.time}</time>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
            
          </div>
        </div>
      </div>
    </div>
  );
}
