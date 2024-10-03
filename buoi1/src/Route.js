// Route.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from './App'; // Nhập component App
import Login from './Login'; // Nhập component Login
import Hello1 from './Hello1'; // Nhập component Hello
import Car from './Car'; // Nhập component Car

function RouteConfig() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Hello1" element={<Hello1 />} />
        <Route path="/Car" element={<Car />} />
        <Route path="*" element={<h1>Không tìm thấy trang web theo yêu cầu</h1>} />
      </Routes>
    </Router>
  );
}

export default RouteConfig;
