import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'; // Ensure Link is imported

// Placeholder components for the new pages
import Section3Page from './pages/Section3Page'; // Import the actual Section3Page component
// Import other section pages as you create them
// import Section1Page from './pages/Section1Page';
// import Section2Page from './pages/Section2Page';
// import Section4Page from './pages/Section4Page';

// Placeholder components for other sections for now
const Section1Page = () => <h2>Section 1 Page</h2>; // Remove this line when you create Section1Page.js
const Section2Page = () => <h2>Section 2 Page</h2>; // Remove this line when you create Section2Page.js
const Section4Page = () => <h2>Section 4 Page</h2>; // Remove this line when you create Section4Page.js

function WelcomePageContent() {
  return (
    <div style={{ display: 'flex' }}>
      {/* Left section for description */}
      <div className="welcome-left-section">
        <h2>Welcome!</h2>
        <p>This is the description section. You can add any introductory text or information here.</p>
      </div>
      {/* Right section with four clickable areas */}
      <div className="right-section">
        {/* Use Link for navigation */}
        <Link
          to="/section1"
          className="clickable-section"
          style={{
            border: '1px solid black',
            margin: '5px',
            padding: '10px',
            cursor: 'pointer',
            textDecoration: 'none',
            color: 'inherit',
          }}
        >
          <div>Section 1</div>
        </Link>
        <Link
          to="/section2"
          className="clickable-section"
          style={{
            border: '1px solid black',
            margin: '5px',
            padding: '10px',
            cursor: 'pointer',
            textDecoration: 'none',
            color: 'inherit',
          }}
        >
          <div>Section 2</div>
        </Link>
        {/* Section 3 linked to the /section3 route */}
        <Link
          to="/section3" // Corrected to match the route definition
          className="clickable-section"
          style={{
            border: '1px solid black',
            margin: '5px',
            padding: '10px',
            cursor: 'pointer',
            textDecoration: 'none',
            color: 'inherit',
          }}
        >
          <div>BenchSmart</div>
        </Link>
        <Link
          to="/section4"
          className="clickable-section"
          style={{
            border: '1px solid black',
            margin: '5px',
            padding: '10px',
            cursor: 'pointer',
            textDecoration: 'none',
            color: 'inherit',
          }}
        >
          <div>Section 4</div>
        </Link>
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      {/* Routes section */}
      <Routes>
        <Route path="/section1" element={<Section1Page />} />
        <Route path="/section2" element={<Section2Page />} />
        <Route path="/section3" element={<Section3Page />} />
        <Route path="/section4" element={<Section4Page />} />
        {/* Add a route for the root path to show the welcome layout initially */}
        <Route path="/" element={<WelcomePageContent />} /> {/* Render WelcomePageContent for the root path */}
      </Routes>
    </Router>
  );
}

export default App;