import React from "react";
import { connect } from "react-redux";

import Form from "./components/Form";
import Canvas from "./components/Canvas";
import Loader from "./components/Loader";

const mapStateToProps = ({ canvas, isCanvasDimensionsLoading }) => ({
  canvas,
  isCanvasDimensionsLoading,
});

const App = ({ canvas, isCanvasDimensionsLoading }) => {
  return (
    <div className="App">
      <h3 style={{ margin: "15px 0" }}>Canvas dancefloor</h3>

      <Form style={{ marginBottom: "20px" }} />

      {isCanvasDimensionsLoading && <Loader />}

      {!isCanvasDimensionsLoading && <Canvas canvasDimensions={canvas} />}
    </div>
  );
};

export default connect(mapStateToProps)(App);
