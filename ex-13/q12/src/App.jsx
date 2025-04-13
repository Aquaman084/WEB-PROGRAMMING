import React from "react";
import UserGreeting from "./UserGreeting"; 
function App() {
  return (
    <div>
      <UserGreeting firstName="Karthik " lastName="S" /> {/* Pass first and last names as props */}
    </div>
  );
}
export default App;
