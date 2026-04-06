import React from 'react';

/**
 * Reusable button component with rounded corners and a smooth hover animation.
 * Uses Tailwind CSS utility classes for styling.
 *
 * Props:
 *  - children: button label or content
 *  - onClick: click handler
 *  - className: optional additional Tailwind classes
 *  - type: button type (default "button")
 */
export default function Button({ children, onClick, className = '', type = 'button' }) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`
        bg-blue-600 text-white font-medium py-2 px-4
        rounded-full shadow-md
        transition transform duration-200 ease-in-out
        hover:bg-blue-500 hover:scale-105 hover:shadow-lg
        focus:outline-none focus:ring-2 focus:ring-blue-300
        ${className}`.trim()}
    >
      {children}
    </button>
  );
}
