import React, { useState } from 'react';
import LifecycleDemo from './LifecycleDemo';
const App = () => {
  const [showComponent, setShowComponent] = useState(true);
  const toggleComponent = () => {
    setShowComponent(prev => !prev);
  };
  return (
    <div>
      <h2>React Lifecycle Methods</h2>
      <button onClick={toggleComponent}>
        {showComponent ? 'Unmount LifecycleDemo' : 'Mount LifecycleDemo'}
      </button>

      {showComponent && <LifecycleDemo />}
    </div>
  );
};
export default App
