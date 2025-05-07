import React from 'react';

function Section3Page() {
  const handleButtonClick = (buttonName) => {
    alert(`Button "${buttonName}" clicked on BenchSmart page!`);
  };

  return (
    <div>
      <h2>BenchSmart Page</h2>
      <p>Content for the BenchSmart page.</p>
      <button className="my-button" onClick={() => handleButtonClick('Button 1')}>Southern</button>
      <button className="my-button" onClick={() => handleButtonClick('Button 2')}>Eastern</button>
      <button className="my-button" onClick={() => handleButtonClick('Button 3')}>Wales & Western</button>
      <button className="my-button" onClick={() => handleButtonClick('Button 4')}>North Western & Central</button>
    </div>
  );
}

export default Section3Page;