import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import './index.css';
import OTPForm from './components/OTPForm';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/otp-form" />} />
        <Route path="/otp-form" element={<OTPForm />} />
        <Route path="course-list" element={<h1>Course List</h1>} />
        <Route path="batches" element={<h1>Batches</h1>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);