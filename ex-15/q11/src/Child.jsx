import React from 'react';
import PropTypes from 'prop-types';
const Child = ({ message }) => {
  return (
    <div>
      <h3>Child Component</h3>
      <p>Message from Parent: <strong>{message}</strong></p>
    </div>
  );
};
Child.propTypes = {
  message: PropTypes.string.isRequired,
};

export default Child;
