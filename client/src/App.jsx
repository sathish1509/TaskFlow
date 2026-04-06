import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import './index.css';
import Layout from './components/Layout';
import Dashboard from './components/Dashboard';
import Login from './pages/Login';
import Profile from './pages/Profile';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    return localStorage.getItem('isAuthenticated') === 'true';
  });

  return (
    <BrowserRouter>
      <Routes>
        {/* Public Login Route - Redirects logic if already logged in */}
        <Route 
          path="/login" 
          element={!isAuthenticated ? <Login onLogin={() => {
            localStorage.setItem('isAuthenticated', 'true');
            setIsAuthenticated(true);
          }} /> : <Navigate to="/" replace />} 
        />
        
        {/* Protected Layout Layer */}
        <Route 
          path="/" 
          element={isAuthenticated ? <Layout /> : <Navigate to="/login" replace />}
        >
          <Route index element={<Dashboard />} />
          <Route path="profile" element={<Profile />} />
          <Route path="projects" element={<div className="p-8">Projects Page (Coming Soon)</div>} />
          <Route path="tasks" element={<div className="p-8">Tasks Page (Coming Soon)</div>} />
          <Route path="calendar" element={<div className="p-8">Calendar Page (Coming Soon)</div>} />
          <Route path="analytics" element={<div className="p-8">Analytics Page (Coming Soon)</div>} />
          <Route path="notifications" element={<div className="p-8">Notifications Page (Coming Soon)</div>} />
          <Route path="team" element={<div className="p-8">Team Page (Coming Soon)</div>} />
        </Route>

        {/* Catch-all Route for 404s/Unknown Routes - redirects to protection logic */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
