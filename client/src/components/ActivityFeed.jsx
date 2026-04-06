import React from "react";

export default function ActivityFeed({ activities }) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 border border-gray-100 dark:border-gray-700 h-full">
      <h3 className="font-semibold text-lg text-gray-800 dark:text-gray-100 mb-6">
        Recent Activity
      </h3>
      <div className="relative">
        <div className="absolute top-0 left-3 h-full w-px bg-gray-200 dark:bg-gray-700"></div>
        <ul className="space-y-6">
          {activities.map((act, i) => (
            <li key={i} className="relative flex items-start">
              <span className="absolute left-3 top-1.5 -ml-[5px] h-[10px] w-[10px] rounded-full bg-blue-500 border-2 border-white dark:border-gray-800"></span>
              <div className="ml-8 flex flex-col sm:flex-row sm:items-baseline sm:justify-between w-full">
                <span className="text-sm font-medium text-gray-800 dark:text-gray-200">{act.message}</span>
                <span className="text-xs font-medium text-gray-500 dark:text-gray-400 mt-1 sm:mt-0 whitespace-nowrap sm:pl-4">{act.time}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
