"use client"

import React from 'react';
import Link from 'next/link';
import { useState, FormEvent } from 'react';

const Login: React.FC = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const [rememberMe, setRememberMe] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [id]: value
    }));
  };

  const toggleRememberMe = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRememberMe(e.target.checked);
  };
  

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Login submitted:', formData);
    // You can add API calls or redirection here
  };

  return (
    <>
      <div className="login-container">
        {/* Navigation Bar */}
        <nav className="navbar">
          <div className="logo">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
            </svg>
            MindfulSpace
          </div>
          
          <div className="nav-links">
            <Link href="/">Home</Link>
            <Link href="/games">Interactive Games</Link>
            <Link href="/wellness-score">Wellness Score</Link>
            <Link href="/about">About Us</Link>
            <Link href="/services">Services</Link>
            <Link href="/contact">Contact</Link>
          </div>
          
          <div className="auth-buttons">
            <Link href="/login">
              <button className="login-btn">Log In</button>
            </Link>
            <Link href="/signup">
              <button className="signup-btn">Get Started</button>
            </Link>
          </div>
        </nav>
        
        {/* Main Content */}
        <div className="container">
          <div className="login-content">
            <h1>Welcome Back</h1>
            <h2>Continue Your Journey</h2>
            
            <div className="login-form">
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="email">Email Address</label>
                  <input 
                    type="email" 
                    id="email" 
                    placeholder="Enter your email address" 
                    required
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="password">Password</label>
                  <input 
                    type="password" 
                    id="password" 
                    placeholder="Enter your password" 
                    required
                    value={formData.password}
                    onChange={handleChange}
                  />
                </div>
                
                <div className="form-options">
                  <div className="remember-me">
                    <input 
                      type="checkbox" 
                      id="remember" 
                      checked={rememberMe}
                      onChange={toggleRememberMe}
                    />
                    <label htmlFor="remember">Remember me</label>
                  </div>
                  <Link href="/forgot-password" className="forgot-password">Forgot password?</Link>

                </div>
                
                <button type="submit" className="submit-btn">Log In</button>
              </form>
              
              <div className="divider">
                <span>or</span>
              </div>
              
              <div className="social-login">
                <button className="social-btn google">
                  <svg viewBox="0 0 24 24" width="24" height="24" xmlns="http://www.w3.org/2000/svg">
                    <g transform="matrix(1, 0, 0, 1, 27.009001, -39.238998)">
                      <path fill="#4285F4" d="M -3.264 51.509 C -3.264 50.719 -3.334 49.969 -3.454 49.239 L -14.754 49.239 L -14.754 53.749 L -8.284 53.749 C -8.574 55.229 -9.424 56.479 -10.684 57.329 L -10.684 60.329 L -6.824 60.329 C -4.564 58.239 -3.264 55.159 -3.264 51.509 Z"/>
                      <path fill="#34A853" d="M -14.754 63.239 C -11.514 63.239 -8.804 62.159 -6.824 60.329 L -10.684 57.329 C -11.764 58.049 -13.134 58.489 -14.754 58.489 C -17.884 58.489 -20.534 56.379 -21.484 53.529 L -25.464 53.529 L -25.464 56.619 C -23.494 60.539 -19.444 63.239 -14.754 63.239 Z"/>
                      <path fill="#FBBC05" d="M -21.484 53.529 C -21.734 52.809 -21.864 52.039 -21.864 51.239 C -21.864 50.439 -21.724 49.669 -21.484 48.949 L -21.484 45.859 L -25.464 45.859 C -26.284 47.479 -26.754 49.299 -26.754 51.239 C -26.754 53.179 -26.284 54.999 -25.464 56.619 L -21.484 53.529 Z"/>
                      <path fill="#EA4335" d="M -14.754 43.989 C -12.984 43.989 -11.404 44.599 -10.154 45.789 L -6.734 42.369 C -8.804 40.429 -11.514 39.239 -14.754 39.239 C -19.444 39.239 -23.494 41.939 -25.464 45.859 L -21.484 48.949 C -20.534 46.099 -17.884 43.989 -14.754 43.989 Z"/>
                    </g>
                  </svg>
                  Continue with Google
                </button>
                
                <button className="social-btn facebook">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="24px" height="24px">
                    <path fill="#3F51B5" d="M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5V37z"/>
                    <path fill="#FFF" d="M34.368,25H31v13h-5V25h-3v-4h3v-2.41c0.002-3.508,1.459-5.59,5.592-5.59H35v4h-2.287C31.104,17,31,17.6,31,18.723V21h4L34.368,25z"/>
                  </svg>
                  Continue with Facebook
                </button>
              </div>
              
              <div className="signup-link">
                Don't have an account? <Link href="/signup">Sign up</Link>
              </div>
            </div>
            
            <div className="stats">
              <div className="avatar-group">
                <div className="avatar"></div>
                <div className="avatar"></div>
                <div className="avatar"></div>
                <div className="avatar"></div>
              </div>
              <div>500+ people joined this month</div>
            </div>
          </div>
          
          <div className="login-image">
            <div className="meditation-illustration">
              <div className="circle circle-outer">
                <div className="circle circle-middle">
                  <div className="circle circle-inner">
                    <div className="circle circle-center">
                      <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#3DB9A6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        }
        
        .login-container {
          background-color: #e6f5f5;
          min-height: 100vh;
        }
        
        .navbar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 20px 40px;
          background-color: white;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
        }
        
        .logo {
          display: flex;
          align-items: center;
          font-size: 24px;
          font-weight: bold;
          color: #222;
        }
        
        .logo svg {
          margin-right: 10px;
          color: #3DB9A6;
        }
        
        .nav-links {
          display: flex;
          gap: 30px;
        }
        
        .nav-links a {
          text-decoration: none;
          color: #333;
        }
        
        .auth-buttons {
          display: flex;
          gap: 15px;
        }
        
        .auth-buttons button {
          padding: 8px 20px;
          border-radius: 5px;
          cursor: pointer;
          font-weight: 500;
        }
        
        .login-btn {
          background: none;
          border: 1px solid #ddd;
        }
        
        .signup-btn {
          background-color: #3DB9A6;
          color: white;
          border: none;
        }
        
        .container {
          max-width: 1200px;
          margin: 50px auto;
          display: flex;
          gap: 40px;
          padding: 0 20px;
        }
        
        .login-content {
          flex: 1;
          padding-top: 40px;
        }
        
        .login-image {
          flex: 1;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        
        .login-form {
          max-width: 500px;
          background-color: white;
          padding: 40px;
          border-radius: 10px;
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
        }
        
        h1 {
          font-size: 32px;
          margin-bottom: 10px;
          color: #222;
        }
        
        h2 {
          font-size: 42px;
          margin-bottom: 30px;
          color: #3DB9A6;
        }
        
        .form-group {
          margin-bottom: 20px;
        }
        
        label {
          display: block;
          margin-bottom: 8px;
          color: #555;
        }
        
        input[type="email"],
        input[type="password"] {
          width: 100%;
          padding: 12px 15px;
          border: 1px solid #ddd;
          border-radius: 5px;
          font-size: 16px;
          transition: border 0.3s;
        }
        
        input:focus {
          border-color: #3DB9A6;
          outline: none;
          box-shadow: 0 0 0 2px rgba(61, 185, 166, 0.2);
        }
        
        .form-options {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 20px;
        }
        
        .remember-me {
          display: flex;
          align-items: center;
        }
        
        .remember-me input {
          margin-right: 8px;
        }
        
        .remember-me label {
          margin-bottom: 0;
          cursor: pointer;
        }
        
        .forgot-password {
          color: #3DB9A6;
          text-decoration: none;
          font-size: 14px;
        }
        
        .forgot-password:hover {
          text-decoration: underline;
        }
        
        .submit-btn {
          background-color: #3DB9A6;
          color: white;
          border: none;
          width: 100%;
          padding: 15px;
          border-radius: 5px;
          font-size: 16px;
          font-weight: 500;
          cursor: pointer;
          transition: background-color 0.3s;
          margin-bottom: 20px;
        }
        
        .submit-btn:hover {
          background-color: #2fa893;
        }
        
        .divider {
          display: flex;
          align-items: center;
          text-align: center;
          margin: 20px 0;
        }
        
        .divider::before,
        .divider::after {
          content: '';
          flex: 1;
          border-bottom: 1px solid #ddd;
        }
        
        .divider span {
          padding: 0 10px;
          color: #777;
          font-size: 14px;
        }
        
        .social-login {
          display: flex;
          flex-direction: column;
          gap: 10px;
          margin-bottom: 20px;
        }
        
        .social-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 12px;
          border-radius: 5px;
          border: 1px solid #ddd;
          background: white;
          cursor: pointer;
          font-size: 14px;
          font-weight: 500;
          transition: background-color 0.3s;
        }
        
        .social-btn svg {
          margin-right: 10px;
        }
        
        .social-btn:hover {
          background-color: #f5f5f5;
        }
        
        .signup-link {
          text-align: center;
          font-size: 14px;
          color: #555;
        }
        
        .signup-link a {
          color: #3DB9A6;
          text-decoration: none;
          font-weight: 500;
        }
        
        .signup-link a:hover {
          text-decoration: underline;
        }
        
        .stats {
          display: flex;
          align-items: center;
          margin-top: 50px;
        }
        
        .avatar-group {
          display: flex;
          margin-right: 15px;
        }
        
        .avatar {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background-color: #ddd;
          border: 2px solid white;
          margin-right: -15px;
        }
        
        /* Circles for decorative element */
        .circle {
          border-radius: 50%;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        
        .circle-outer {
          width: 400px;
          height: 400px;
          background-color: rgba(61, 185, 166, 0.1);
        }
        
        .circle-middle {
          width: 300px;
          height: 300px;
          background-color: rgba(61, 185, 166, 0.2);
        }
        
        .circle-inner {
          width: 200px;
          height: 200px;
          background-color: rgba(61, 185, 166, 0.3);
        }
        
        .circle-center {
          width: 100px;
          height: 100px;
          background-color: rgba(61, 185, 166, 0.4);
          display: flex;
          justify-content: center;
          align-items: center;
        }
        
        /* Animation for form elements */
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .form-group, .form-options, .submit-btn, .divider, .social-login, .signup-link {
          animation: fadeIn 0.5s ease forwards;
          opacity: 0;
        }
        
        .form-group:nth-child(1) { animation-delay: 0.1s; }
        .form-group:nth-child(2) { animation-delay: 0.2s; }
        .form-options { animation-delay: 0.3s; }
        .submit-btn { animation-delay: 0.4s; }
        .divider { animation-delay: 0.5s; }
        .social-login { animation-delay: 0.6s; }
        .signup-link { animation-delay: 0.7s; }
        
        /* Responsive design */
        @media (max-width: 768px) {
          .container {
            flex-direction: column;
          }
          
          .login-image {
            display: none;
          }
          
          .nav-links {
            display: none;
          }
        }
      `}</style>
    </>
  );
};

export default Login;