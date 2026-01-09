import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import TshirtStudio from './TshirtStudio';
import PhoneTracker from './PhoneTracker';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <nav style={{ padding: '1rem', background: '#f0f0f0' }}>
          <Link to="/" style={{ marginRight: '1rem' }}>T-Shirt Studio</Link>
          <Link to="/phone-tracker">Phone Tracker</Link>
        </nav>
        <main style={{ padding: '1rem' }}>
          <Routes>
            <Route path="/" element={<TshirtStudio />} />
            <Route path="/phone-tracker" element={<PhoneTracker />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;