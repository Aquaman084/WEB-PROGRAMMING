import React from 'react';
import StyledButton from './StyledButton';

const App = () => {
  const handleClick = () => {
    alert('Styled Button Clicked!');
  };

  return (
    <div>
      <h2>Styled Button Example</h2>
      <StyledButton label="Click Me" onClick={handleClick} />
    </div>
  );
};

export default App;
