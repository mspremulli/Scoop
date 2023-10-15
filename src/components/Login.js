import React, { useState } from 'react';
import './Login.css'; // Add your styling
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faLock, faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';



function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const navigate = useNavigate(); // Use usenavigate hook

  const handleShowPasswordToggle = () => {
    setShowPassword(!showPassword);
  };

  const handleLogin = () => {
    // Add your login logic here, e.g., validate username and password
    if (username === 'abc' && password === '123') {
      // Navigate to the dashboard route on successful login
      navigate('/dashboard');
    }
  };

  return (
    <div className="login-container">
      <div className="form-image-container">
        <form className="login-form">
          <h1>Login</h1>
          <div className="input-container">
            <FontAwesomeIcon icon={faUser} className="icon" />
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="input-container">
            <FontAwesomeIcon icon={faLock} className="icon" />
            <input
              type={showPassword ? 'text' : 'password'}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {showPassword ? (
              <span className="password-toggle" onClick={handleShowPasswordToggle}>
                <FontAwesomeIcon icon={faEyeSlash} />
              </span>
            ) : (
              <span className="password-toggle" onClick={handleShowPasswordToggle}>
                <FontAwesomeIcon icon={faEye} />
              </span>
            )}
          </div>
          <div className="remember-me">
            <input
              type="checkbox"
              id="rememberMe"
              checked={rememberMe}
              onChange={() => setRememberMe(!rememberMe)}
            />
            <label htmlFor="rememberMe">Remember Me</label>
          </div>
          <div className="login-controls">
            <button className="login-button" onClick={handleLogin}>
              Log In
            </button>
          </div>
        </form>
        <div className="image-container">
          <div className="welcome">
            <h2>Welcome to Our App</h2>
            <p>Explore our features and start carpooling today!</p>
          </div>
        </div>
      </div>

      <p className="register-link">
        Don't have an account? <a href="/register">Register</a>
      </p>
      <div className="or">
        <span className="or-text">- or -</span>
      </div>
      <div className="social-login">
        <button className="social-button facebook">Sign in with Facebook</button>
        <button className="social-button google">Sign in with Google</button>
        <button className="social-button x">Sign in with X</button>
      </div>
    </div>
  );
}

export default Login;
