import './App.css';

function App() {
 return (
    <div style={{ display: 'flex' }}>
      {/* Left section for description */}
      <div className="welcome-left-section">
        <h2>Welcome!</h2>
        <p>This is the description section. You can add any introductory text or information here.</p>
      </div>
      {/* Right section with four clickable areas */}
      <div className="right-section">
        {/* Replaced Link with a div as routing is removed */}
        <div className="clickable-section" style={{ border: '1px solid black', margin: '5px', padding: '10px', cursor: 'pointer', textDecoration: 'none', color: 'inherit' }}>
          <div>
            Section 1
          </div>
        </div>
        {/* Replaced Link with a div as routing is removed */}
        <div className="clickable-section" style={{ border: '1px solid black', margin: '5px', padding: '10px', cursor: 'pointer', textDecoration: 'none', color: 'inherit' }}>
          <div>
            Section 2
          </div>
        </div>
        {/* Replaced Link with a div as routing is removed */}
        <div className="clickable-section" style={{ border: '1px solid black', margin: '5px', padding: '10px', cursor: 'pointer', textDecoration: 'none', color: 'inherit' }}>
          <div>
            Section 3
          </div>
        </div>
        {/* Replaced Link with a div as routing is removed */}
        <div className="clickable-section" style={{ border: '1px solid black', margin: '5px', padding: '10px', cursor: 'pointer', textDecoration: 'none', color: 'inherit' }}>
          <div>
            Section 4
          </div>
        </div>
      </div>
    </div>
  );
}
export default App;
