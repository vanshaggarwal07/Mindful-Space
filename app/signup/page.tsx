
"use client"



import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useState, FormEvent } from 'react';

const SignUp: React.FC = () => {
  const [formData, setFormData] = useState({
    fullname: '',
    age: '',
    location: '',
    email: '',
    password: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [id]: value
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
    // You can add API calls or redirection here
  };

  return (
    <>
      <Head>
        <title>Sign Up - MindfulSpace</title>
        <meta name="description" content="Join MindfulSpace and begin your mental wellness journey" />
      </Head>

      <div className="signup-container">
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
          <div className="signup-content">
            <h1>Join Our Community</h1>
            <h2>Begin Your Wellness Journey</h2>
            
            <div className="signup-form">
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="fullname">Full Name</label>
                  <input 
                    type="text" 
                    id="fullname" 
                    placeholder="Enter your full name" 
                    required
                    value={formData.fullname}
                    onChange={handleChange}
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="age">Age</label>
                  <input 
                    type="number" 
                    id="age" 
                    placeholder="Enter your age" 
                    min="1" 
                    max="120" 
                    required
                    value={formData.age}
                    onChange={handleChange}
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="location">Location</label>
                  <input 
                    type="text" 
                    id="location" 
                    placeholder="Enter your city or country" 
                    required
                    value={formData.location}
                    onChange={handleChange}
                  />
                </div>
                
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
                    placeholder="Create a strong password" 
                    required
                    value={formData.password}
                    onChange={handleChange}
                  />
                </div>
                
                <button type="submit" className="submit-btn">Create Account</button>
              </form>
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
          
          <div className="signup-image">
            <div className="circle circle-outer">
              <div className="circle circle-middle">
                <div className="circle circle-inner">
                  <div className="circle circle-center"></div>
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
        
        .signup-container {
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
        
        .signup-content {
          flex: 1;
          padding-top: 40px;
        }
        
        .signup-image {
          flex: 1;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        
        .signup-form {
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
        
        input {
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
          margin-top: 20px;
        }
        
        .submit-btn:hover {
          background-color: #2fa893;
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
        }
        
        /* Animation for form elements */
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .form-group {
          animation: fadeIn 0.5s ease forwards;
          opacity: 0;
        }
        
        .form-group:nth-child(1) { animation-delay: 0.1s; }
        .form-group:nth-child(2) { animation-delay: 0.2s; }
        .form-group:nth-child(3) { animation-delay: 0.3s; }
        .form-group:nth-child(4) { animation-delay: 0.4s; }
        .form-group:nth-child(5) { animation-delay: 0.5s; }
        
        .submit-btn {
          animation: fadeIn 0.5s ease forwards;
          animation-delay: 0.6s;
          opacity: 0;
        }
        
        /* Responsive design */
        @media (max-width: 768px) {
          .container {
            flex-direction: column;
          }
          
          .signup-image {
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

export default SignUp;