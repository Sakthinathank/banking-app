import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import LoginPage from './Components/LoginPage';
import AccountSummaryPage from './Components/AccountSummaryPage';

const App = () => {
  const [name, setName] = useState('');

  return (
    <Router>
      <Routes>
        {/* Login Page Route */}
        <Route path="/" element={<LoginPage setName={setName} />} />

        {/* Account Summary Page Route */}
        <Route path="/summary" element={<AccountSummaryPage name={name} setName={setName} />} />
      </Routes>
    </Router>
  );
}
  export default App;
