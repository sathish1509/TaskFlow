import React from "react";

export default function ProjectCard({ name, progress, members, deadline }) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-md transition p-5 border border-gray-100 dark:border-gray-700">
      <h3 className="font-semibold text-gray-800 dark:text-gray-100 text-lg">{name}</h3>

      <div className="mt-4 h-2 bg-gray-100 dark:bg-gray-700 rounded-full overflow-hidden">
        <div
          className="h-full bg-blue-600 rounded-full"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
      <div className="mt-1 text-right text-xs text-gray-500 font-medium">{progress}%</div>

      <div className="flex items-center justify-between mt-4">
        <div className="flex -space-x-2">
          {members.map((src, i) => (
            <img
              key={i}
              src={src}
              alt="member"
              className="w-8 h-8 rounded-full border-2 border-white dark:border-gray-800 shadow-sm"
            />
          ))}
        </div>
        <p className="text-xs text-gray-500 dark:text-gray-400 font-medium">
          Due: <span className="text-gray-900 dark:text-gray-200">{deadline}</span>
        </p>
      </div>
    </div>
  );
}
