import React from "react";

export default function SummaryCard({ icon: Icon, label, count, colorClass }) {
  return (
    <div
      className="flex flex-col p-6 rounded-2xl shadow-sm hover:shadow-md transition-all bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 h-full"
    >
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide">
            {label}
          </p>
          <p className="text-3xl font-bold text-gray-900 dark:text-gray-100 mt-2">
            {count}
          </p>
        </div>
        <div className={`flex items-center justify-center w-14 h-14 rounded-full ${colorClass} shadow-lg shadow-${colorClass.split('-')[1]}-500/30 transform transition-transform group-hover:scale-110`}>
          <Icon className="w-7 h-7 text-white" strokeWidth={2} />
        </div>
      </div>
    </div>
  );
}
