import React, { useState } from 'react';
import './Login.css'; // Import file CSS

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isAdmin, setIsAdmin] = useState(false);

  const handleLogin = () => {
    console.log({
      username: username,
      password: password,
      isAdmin: isAdmin
    });
  };

  return (
    <div className="container">
      <h2>Login</h2>
      <div>
        <label>Enter your username:</label>
        <input 
          type="text" 
          value={username} 
          onChange={(e) => setUsername(e.target.value)} 
        />
      </div>
      
      <div>
        <label>Enter your password:</label>
        <input 
          type="password" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
        />
      </div>
      
      <div>
        <label>
          <input 
            type="checkbox" 
            checked={isAdmin} 
            onChange={(e) => setIsAdmin(e.target.checked)} 
          />
          Is Admin?
        </label>
      </div>
      
      <div>
        <button onClick={handleLogin}>Đăng nhập</button>
      </div>
    </div>
  );
}

export default Login;
