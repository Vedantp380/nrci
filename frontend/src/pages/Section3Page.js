import React from 'react';

function Section3Page() {
  const handleButtonClick = (buttonName) => {
    alert(`Button "${buttonName}" clicked on BenchSmart page!`);
  };

  return (
    <div>
      <h2>BenchSmart Page</h2>
      <p>Content for the BenchSmart page.</p>
      <button onClick={() => handleButtonClick('Button 1')}>Button 1</button>
      <button onClick={() => handleButtonClick('Button 2')}>Button 2</button>
      <button onClick={() => handleButtonClick('Button 3')}>Button 3</button>
      <button onClick={() => handleButtonClick('Button 4')}>Button 4</button>
    </div>
  );
}

export default Section3Page;