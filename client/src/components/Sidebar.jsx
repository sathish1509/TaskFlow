import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { 
  HomeIcon, 
  FolderIcon, 
  ClipboardDocumentListIcon as ClipboardListIcon, 
  CalendarIcon, 
  ChartBarIcon, 
  BellIcon, 
  UsersIcon, 
  ArrowRightOnRectangleIcon as LogoutIcon, 
  Bars3Icon as MenuIcon, 
  XMarkIcon as XIcon 
} from '@heroicons/react/24/outline';

const navigation = [
  { name: 'Dashboard', icon: HomeIcon, href: '/' },
  { name: 'Projects', icon: FolderIcon, href: '/projects' },
  { name: 'Tasks', icon: ClipboardListIcon, href: '/tasks' },
  { name: 'Calendar', icon: CalendarIcon, href: '/calendar' },
  { name: 'Analytics', icon: ChartBarIcon, href: '/analytics' },
  { name: 'Notifications', icon: BellIcon, href: '/notifications' },
  { name: 'Team', icon: UsersIcon, href: '/team' },
];

export default function Sidebar({ collapsed, setCollapsed }) {

  return (
    <aside
      className={`
        bg-white dark:bg-gray-800 bg-opacity-70 dark:bg-opacity-70 backdrop-blur-md
        border-r border-gray-200 dark:border-gray-700
        transition-all duration-300 ease-in-out
        ${collapsed ? 'w-20' : 'w-64'}
        h-screen flex flex-col fixed inset-y-0 left-0 z-10
      `}
    >
      {/* Header */}
      <div className={`flex items-center p-4 ${collapsed ? 'justify-center' : 'justify-between'}`}>
        <h1 className={`text-xl font-semibold text-gray-900 dark:text-white ${collapsed ? 'hidden' : 'block'}`}>TaskFlow</h1>
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="p-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700 transition"
        >
          {collapsed ? <MenuIcon className="w-6 h-6" /> : <XIcon className="w-5 h-5" />}
        </button>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-2 space-y-1">
        {navigation.map((item) => (
          <NavLink
            key={item.name}
            to={item.href}
            className={({ isActive }) => `
              group flex items-center px-2 py-2 text-sm font-medium rounded-md
              ${collapsed ? 'justify-center' : ''}
              ${isActive
                ? 'bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white'
                : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-white'}
              transition-all duration-200
            `}
            title={collapsed ? item.name : undefined}
          >
            <item.icon className={`${collapsed ? 'mr-0 w-6 h-6' : 'mr-3 w-5 h-5'} text-gray-500 dark:text-gray-400 group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-all`} aria-hidden="true" />
            <span className={`${collapsed ? 'hidden' : 'block'}`}>{item.name}</span>
          </NavLink>
        ))}
      </nav>

      {/* Footer/User profile */}
      <div className={`p-4 border-t border-gray-200 dark:border-gray-700 flex ${collapsed ? 'justify-center' : 'items-center'}`}>
        <div className="flex items-center">
          <Link to="/profile" className="flex-shrink-0 cursor-pointer">
            <img
              className="h-10 w-10 rounded-full hover:ring-2 hover:ring-indigo-500 transition-all border-2 border-transparent"
              src="https://i.pravatar.cc/150?u=a042581f4e29026024d"
              alt="User avatar"
            />
          </Link>
          <div className={`ml-3 ${collapsed ? 'hidden' : 'block'}`}>
            <Link to="/profile" className="text-sm font-medium text-gray-900 flex items-center dark:text-white hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
              John Doe
            </Link>
            <button
               onClick={() => {
                 localStorage.removeItem('isAuthenticated');
                 window.location.href = '/login';
               }}
              className="text-xs mt-1 flex items-center text-gray-500 dark:text-gray-400 hover:text-red-500 dark:hover:text-red-400 transition-colors"
            >
              <LogoutIcon className="w-4 h-4 mr-1" /> Logout
            </button>
          </div>
        </div>
      </div>
    </aside>
  );
}
