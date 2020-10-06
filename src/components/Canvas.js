import React, { useEffect } from "react";
import styled from "styled-components";

import drawCanvas from "../utils/drawCanvas";
import clearCanvas from "../utils/clearCanvas";

const Canvas = ({ canvasDimensions }) => {
  useEffect(() => {
    clearCanvas();
    drawCanvas(canvasDimensions.rows, canvasDimensions.columns);
  }, [canvasDimensions]);

  return (
    <Wrapper>
      <canvas id="dancefloor" width="800" height="800"></canvas>
    </Wrapper>
  );
};

export default Canvas;

const Wrapper = styled.div`
  margin-top: 15px;
  animation: fadeIn ease 1s;

  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;
