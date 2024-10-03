
import React from 'react';
import ReactDOM from 'react-dom/client';
import RouteConfig from './Route'; // Nhập RouteConfig

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouteConfig /> {/* Gọi RouteConfig để sử dụng Router */}
  </React.StrictMode>
);
