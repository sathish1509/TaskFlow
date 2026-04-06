import React from "react";
import {
  FolderIcon,
  ClipboardDocumentListIcon,
  CheckCircleIcon,
  ClockIcon,
} from "@heroicons/react/24/outline";


import SummaryCard from "./SummaryCard";
import ProjectCard from "./ProjectCard";
import TaskCard from "./TaskCard";
import ActivityFeed from "./ActivityFeed";
import ChartComponent from "./ChartComponent";

/* ---------- Dummy data ---------- */
const summaryData = [
  { label: "Total Projects", count: 12, icon: FolderIcon, colorClass: "bg-blue-500" },
  { label: "Total Tasks", count: 87, icon: ClipboardDocumentListIcon, colorClass: "bg-indigo-500" },
  { label: "Completed Tasks", count: 63, icon: CheckCircleIcon, colorClass: "bg-green-500" },
  { label: "Pending Tasks", count: 24, icon: ClockIcon, colorClass: "bg-rose-500" },
];

const recentProjects = [
  {
    name: "Redesign Landing Page",
    progress: 70,
    members: [
      "https://i.pravatar.cc/150?u=a042581f4e29026024d",
      "https://i.pravatar.cc/150?u=b042581f4e29026024e",
      "https://i.pravatar.cc/150?u=c042581f4e29026024f",
    ],
    deadline: "Oct 15, 2026",
  },
  {
    name: "Mobile App MVP",
    progress: 45,
    members: [
      "https://i.pravatar.cc/150?u=d042581f4e29026025g",
      "https://i.pravatar.cc/150?u=e042581f4e29026025h",
    ],
    deadline: "Nov 02, 2026",
  },
];

const tasks = [
  { title: "Create wireframes for new dashboard layout", priority: "High", due: "Sep 10", status: "Pending" },
  { title: "Setup CI/CD pipeline", priority: "Medium", due: "Sep 15", status: "In Progress" },
  { title: "Release v1.0 to production", priority: "Low", due: "Oct 01", status: "Completed" },
];

const activities = [
  { message: 'John completed "Create wireframes"', time: "2h ago" },
  { message: 'Anna moved "Setup CI/CD" to In Progress', time: "5h ago" },
  { message: 'Mike added a new comment on "Release v1.0"', time: "1d ago" },
];

/* ---------- Chart data (dummy) ---------- */
const chartData = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
  datasets: [
    {
      label: "Task Completion",
      data: [30, 45, 55, 70, 80, 95],
      backgroundColor: "rgba(59,130,246,0.2)",
      borderColor: "rgba(59,130,246,1)",
      borderWidth: 2,
      fill: true,
      tension: 0.4, // Add smooth curves
      pointBackgroundColor: "#fff",
      pointBorderColor: "rgba(59,130,246,1)",
      pointBorderWidth: 2,
      pointRadius: 4,
    },
  ],
};

const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      }
    },
    scales: {
      y: {
        beginAtZero: true,
        grid: {
          color: "rgba(156, 163, 175, 0.1)",
        },
        border: {
            display: false,
        }
      },
      x: {
        grid: {
          display: false,
        },
        border: {
            display: false,
        }
      }
    }
  }

export default function Dashboard() {
  return (
    <>
      {/* ---- Summary cards ---- */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {summaryData.map((item, i) => (
          <SummaryCard
            key={i}
            icon={item.icon}
            label={item.label}
            count={item.count}
            colorClass={item.colorClass}
          />
        ))}
      </section>

      {/* ---- Recent Projects ---- */}
      <section className="mb-8">
        <div className="flex items-center justify-between mb-4 mt-2">
            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100">
            Recent Projects
            </h3>
            <button className="text-sm font-medium text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300">View All</button>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {recentProjects.map((proj, i) => (
            <ProjectCard key={i} {...proj} />
          ))}
        </div>
      </section>

      {/* ---- Tasks & Activity Feed Row ---- */}
      <section className="grid gap-6 lg:grid-cols-3 mb-8">
          {/* ---- Task Overview ---- */}
        <div className="lg:col-span-2">
          <div className="flex items-center justify-between mb-4 mt-2">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100">
              Tasks Overview
              </h3>
              <button className="text-sm font-medium text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300">View All</button>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
            {tasks.map((t, i) => (
              <TaskCard key={i} {...t} />
            ))}
          </div>
        </div>

          {/* ---- Activity Feed ---- */}
        <div className="lg:col-span-1 flex flex-col h-full">
            <ActivityFeed activities={activities} />
        </div>
      </section>

      {/* ---- Chart ---- */}
      <section className="mb-8">
          <ChartComponent type="line" data={chartData} options={chartOptions} />
      </section>
    </>
  );
}
