import React from "react";
import "../styles/App.css";
import Tooltip from "./ToolTip.js"; // Import the Tooltip component

const App = () => {
  return (
    <div className="App">
      <Tooltip text="This is a tooltip">Hover over me</Tooltip>
      <Tooltip text="This is another tooltip">Hover over me to see another tooltip</Tooltip>
    </div>
  );
};

export default App;
