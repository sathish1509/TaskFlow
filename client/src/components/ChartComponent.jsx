import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

export default function ChartComponent({ type, data, options }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const ctx = canvasRef.current.getContext("2d");
    const chart = new Chart(ctx, {
      type,
      data,
      options,
    });
    return () => chart.destroy();
  }, [type, data, options]);

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 border border-gray-100 dark:border-gray-700 h-full flex flex-col">
      <h3 className="font-semibold text-lg text-gray-800 dark:text-gray-100 mb-4">
        Task Completion Rate
      </h3>
      <div className="flex-1 relative w-full h-full min-h-[250px]">
        <canvas ref={canvasRef} />
      </div>
    </div>
  );
}
