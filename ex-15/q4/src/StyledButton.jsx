import React from 'react';
import './styles.css'; 

const StyledButton = ({ label, onClick }) => {
  return (
    <button className="styled-btn" onClick={onClick}>
      {label}
    </button>
  );
};

export default StyledButton;
