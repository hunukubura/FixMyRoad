import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import ReportForm from './components/ReportForm';
import AdminDashboard from './components/AdminDashboard';
import LanguageSwitcher from './components/LanguageSwitcher';
import MapView from './components/MapView';

const App = () => {
  return (
    <Router>
      <div className="app-container">
        <LanguageSwitcher />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/report" element={<ReportForm />} />
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/map" element={<MapView />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;