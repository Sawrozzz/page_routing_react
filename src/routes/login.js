import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';

function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    if (name === 'username') {
      setUsername(value);
    } else if (name === 'password') {
      setPassword(value);
    }
    setErrorMessage('');
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Perform basic validation here (e.g., checking for empty fields).
    if (!username || !password) {
      setErrorMessage('Please fill in all fields.');
      return;
    }

    // You can add authentication logic here (e.g., sending data to a server).

    // If authentication fails, show an error message.
    if (!authenticateUser(username, password)) {
      setErrorMessage('Invalid username or password.');
      return;
    }

    // If authentication is successful, you can redirect the user to another page.
    // Example: history.push('/dashboard');
  };

  // Simulated authentication function (replace with your actual logic).
  const authenticateUser = (username, password) => {
    // Add your authentication logic here.
    // For this example, we're using hardcoded credentials.
    return username === 'user' && password === 'password';
  };

  return (
    <div className="login-page">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Username:</label>
          <input
            type="text"
            name="username"
            value={username}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={handleInputChange}
          />
        </div>
        {errorMessage && <p className="error-message">{errorMessage}</p>}
        <button type="submit">Login</button>
      </form>
      <Outlet />
    </div>
  );
}

export default LoginPage;
