import React from 'react';
import Counter from './Counter'; // useState version
import CounterReducer from './CounterReducer'; // useReducer version

const App = () => {
  return (
    <div>
      <Counter />
      <hr />
      <CounterReducer />
    </div>
  );
};

export default App;
