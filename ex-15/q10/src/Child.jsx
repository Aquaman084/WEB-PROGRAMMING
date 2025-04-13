import React from 'react';
const Child = ({ message }) => {
  return (
    <div>
      <h3>Child Component</h3>
      <p>Message from Parent: <strong>{message}</strong></p>
    </div>
  );
};
export default Child;
