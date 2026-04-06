import React from "react";

export default function TaskCard({ title, priority, due, status }) {
  const statusColors = {
    Completed: "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400 border border-green-200 dark:border-green-800",
    "In Progress": "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400 border border-amber-200 dark:border-amber-800",
    Pending: "bg-rose-100 text-rose-700 dark:bg-rose-900/30 dark:text-rose-400 border border-rose-200 dark:border-rose-800",
  };

  const priorityColors = {
    High: "text-rose-600 dark:text-rose-400",
    Medium: "text-amber-600 dark:text-amber-400",
    Low: "text-blue-600 dark:text-blue-400"
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-md transition p-5 border border-gray-100 dark:border-gray-700 flex flex-col justify-between">
      <div>
        <div className="flex items-start justify-between mb-2">
          <h4 className="font-semibold text-gray-800 dark:text-gray-100 line-clamp-2">{title}</h4>
          <span
            className={`px-2.5 py-1 text-xs font-semibold rounded-full whitespace-nowrap ml-3 ${statusColors[status]}`}
          >
            {status}
          </span>
        </div>
        <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
          Priority: <span className={`${priorityColors[priority]}`}>{priority}</span>
        </p>
      </div>
      <div className="mt-4 pt-4 border-t border-gray-100 dark:border-gray-700 flex justify-between items-center text-sm text-gray-500 dark:text-gray-400">
        <span className="font-medium">Due Date</span>
        <span className="font-semibold text-gray-700 dark:text-gray-300">{due}</span>
      </div>
    </div>
  );
}
