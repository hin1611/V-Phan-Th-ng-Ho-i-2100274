import React from 'react';
import { Hello, HelloPersion } from './Hello'; // Import cả hai component
import Header from './Header';
import Hello1 from './Hello1';
import Login from './Login';
import Car from './Car';  

function App() {
  return (
    <div>
      <HelloPersion name="Hoai" /> 
      <Header /> {/* Component HelloPersion với props name */}
      <Hello1 />
      <Login />
      <Car /> 
    </div>
     
  );
}

export default App;
