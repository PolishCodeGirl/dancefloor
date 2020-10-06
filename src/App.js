import React from "react";
import "./App.css";

import drawCanvas from "./utils/drawCanvas";

const App = () => {
  const handleLoadCanvas = () => {
    drawCanvas();
    console.log("LOADED!");
  };

  return (
    <div className="App">
      <p>Canvas here</p>
      <button onClick={handleLoadCanvas}>LOAD</button>
      <canvas id="dancefloor" width="300" height="300"></canvas>
    </div>
  );
};

export default App;
