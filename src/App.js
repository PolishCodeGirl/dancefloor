import React, { useEffect } from "react";
import { connect } from "react-redux";

import "./App.css";

import drawCanvas from "./utils/drawCanvas";
import clearCanvas from "./utils/clearCanvas";
import Form from "./Form";

const mapStateToProps = ({ canvas }) => ({ canvas });

const App = ({ canvas }) => {
  console.log("canvas", canvas);

  useEffect(() => {
    clearCanvas();
    drawCanvas(canvas.rows, canvas.columns);
  }, [canvas]);

  return (
    <div className="App">
      <p>Canvas here</p>
      <Form style={{ marginBottom: "20px" }} />
      <div>
        <canvas id="dancefloor" width="1000" height="1000"></canvas>
      </div>
    </div>
  );
};

export default connect(mapStateToProps)(App);
