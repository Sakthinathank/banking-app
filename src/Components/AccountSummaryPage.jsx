import '../css/AccountSummaryPage.css';

import React from 'react';
import { useNavigate } from 'react-router-dom';  // Import useNavigate for navigating
import '../css/AccountSummaryPage.css';
import logo from '../assets/logo.png'; // Replace with your logo path

const AccountSummaryPage = ({ name , setName }) => {
  const navigate = useNavigate(); // Initialize useNavigate

  // Handle Logout
  const handleLogout = () => {
    setName('')

    navigate('/');
  };

  return (
    <div className="account-summary-page">
      {/* Header Section */}
      <header className="header">
        <div className="header-left">
          <img src={logo} alt="Logo" className="logo" />
        </div>
        <div className="header-right">
          <button className="logout-button" onClick={handleLogout}>Logout</button> {/* Logout button */}
        </div>
      </header>

      {/* Main Content Section */}
      <div className="main-content">
        {/* Sidebar */}
        <aside className="sidebar">
          <ul className="menu">
            <li className="menu-item active">Account Summary</li>
            <li className="menu-item">Transfer fund</li>
          </ul>
        </aside>

        {/* Account Summary Section */}
        <section className="account-summary">
          <h2>Greetings {name}!</h2>  {/* Display the user's name */}
          <div className="summary-card">
            <h3>Account Summary</h3>
            <div className="account-list">
              <div className="account-item">
                <span>Savings Account</span>
                <span>Closing balance: <strong>20,000.50</strong></span>
              </div>
              <div className="account-item">
                <span>Current Account</span>
                <span>Closing balance: <strong>24,583.00</strong></span>
              </div>
              <div className="account-item">
                <span>Credit Account</span>
                <span>Closing balance: <strong>16,792.10</strong></span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AccountSummaryPage;