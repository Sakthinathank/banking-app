import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/LoginPage.css'; // Import the CSS file
import dummyLogo from '../assets/logo.png'; // Replace with your logo path

const LoginPage = ({ setName }) => {
    const [customerId, setCustomerId] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        if (customerId && password) {
            setName(customerId); // Set the customer name
            navigate('/summary'); // Redirect to the account summary page
        } else {
            alert('Please enter valid credentials');
        }
    };

    return (
        <div className="login-page">
            {/* Left Section */}
            <div className="left-section">
                <h1 className="welcome-text">
                    Welcome to <br />
                    <span className="highlight">Crystal Delta</span> <br />
                    Banking
                </h1>
            </div>

            {/* Right Section */}
            <div className="right-section">
                <form onSubmit={handleLogin} className="login-form">
                    <h2>Login to your account</h2>
                    <div className="form-group">
                        <label htmlFor="customerId">Customer ID</label>
                        <input
                            type="text"
                            id="customerId"
                            value={customerId}
                            onChange={(e) => setCustomerId(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <button type="submit" className="login-button">Login</button>
                </form>
                <div className="white-background"></div>
                <img src={dummyLogo} alt="Logo" className="logo" />
            </div>
        </div>
    );
};

export default LoginPage;