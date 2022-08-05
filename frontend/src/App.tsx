import React from "react";
import Landing from "./components/Landing/Landing";
import Navbar from "./components/Navbar/Navbar";

const App: React.FC = () => {
  return (
    <div className="App">
      <Navbar />
      <Landing />
    </div>
  );
};

export default App;
