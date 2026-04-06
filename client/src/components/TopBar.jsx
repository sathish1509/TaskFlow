import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  MagnifyingGlassIcon,
  BellIcon,
  ChevronDownIcon,
  SunIcon,
  MoonIcon,
} from "@heroicons/react/24/outline";

const searchOptions = [
  { name: 'Dashboard', path: '/' },
  { name: 'Projects', path: '/projects' },
  { name: 'Tasks', path: '/tasks' },
  { name: 'Calendar', path: '/calendar' },
  { name: 'Analytics', path: '/analytics' },
  { name: 'Notifications', path: '/notifications' },
  { name: 'Team', path: '/team' },
  { name: 'Profile', path: '/profile' }
];

export default function TopBar() {
  const [query, setQuery] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  const [isDark, setIsDark] = useState(() => document.documentElement.classList.contains("dark"));
  const navigate = useNavigate();
  const searchRef = useRef(null);

  const toggleTheme = () => {
    if (isDark) {
      document.documentElement.classList.remove("dark");
    } else {
      document.documentElement.classList.add("dark");
    }
    setIsDark(!isDark);
  };

  const filteredOptions = searchOptions.filter(option => 
    option.name.toLowerCase().includes(query.toLowerCase())
  );

  useEffect(() => {
    function handleClickOutside(event) {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSelect = (path) => {
    navigate(path);
    setQuery("");
    setShowDropdown(false);
  };

  return (
    <header className="flex items-center justify-between px-6 py-4 bg-white/70 dark:bg-gray-800/70 backdrop-blur-md border-b border-gray-200 dark:border-gray-700 shadow-sm sticky top-0 z-20">
      <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100">
        Dashboard
      </h2>

      <div className="flex items-center space-x-4">
        <div className="relative hidden md:block" ref={searchRef}>
          <input
            type="text"
            placeholder="Search pages…"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setShowDropdown(true);
            }}
            onFocus={() => setShowDropdown(true)}
            className="pl-10 pr-4 py-2 w-64 rounded-full border border-gray-300 dark:border-gray-600 bg-white/90 dark:bg-gray-700/90 text-gray-800 dark:text-gray-100 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all focus:w-72"
          />
          <MagnifyingGlassIcon className="w-5 h-5 absolute left-3 top-2.5 text-gray-500 dark:text-gray-400" />
          
          {/* Dropdown Results */}
          {showDropdown && query.length > 0 && (
            <div className="absolute top-full mt-2 w-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl shadow-lg overflow-hidden z-50 transition-all animate-fade-in">
              {filteredOptions.length > 0 ? (
                <ul className="max-h-60 overflow-y-auto">
                  {filteredOptions.map((option, idx) => (
                    <li key={idx}>
                      <button
                        onClick={() => handleSelect(option.path)}
                        className="w-full text-left px-4 py-2.5 text-sm text-gray-700 dark:text-gray-200 hover:bg-indigo-50 dark:hover:bg-gray-700 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                      >
                        {option.name}
                      </button>
                    </li>
                  ))}
                </ul>
              ) : (
                <div className="px-4 py-3 text-sm text-gray-500 dark:text-gray-400 text-center">
                  No matches found for &quot;{query}&quot;
                </div>
              )}
            </div>
          )}
        </div>

        <button 
          onClick={toggleTheme}
          className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition"
        >
          {isDark ? (
            <SunIcon className="w-6 h-6 text-yellow-500" />
          ) : (
            <MoonIcon className="w-6 h-6 text-gray-600" />
          )}
        </button>

        <button className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition">
          <BellIcon className="w-6 h-6 text-gray-600 dark:text-gray-300" />
        </button>

        <div className="relative">
          <Link to="/profile" className="flex items-center space-x-2 p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition">
            <img
              src="https://i.pravatar.cc/150?u=a042581f4e29026024d"
              alt="avatar"
              className="w-8 h-8 rounded-full"
            />
            <div className="hidden md:flex flex-col items-start px-1">
              <span className="text-gray-800 dark:text-gray-100 font-medium leading-none mb-1">
                John Doe
              </span>
              <span className="text-[11px] font-semibold text-indigo-500 dark:text-indigo-400 leading-none uppercase tracking-wider">
                Product Manager
              </span>
            </div>
            <ChevronDownIcon className="w-4 h-4 text-gray-400 dark:text-gray-500 mt-1" />
          </Link>
        </div>
      </div>
    </header>
  );
}
