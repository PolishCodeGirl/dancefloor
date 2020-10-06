const LOAD_CANVAS_DIMENSION = "LOAD_CANVAS_DIMENSION";

const initialState = {
  canvas: {
    rows: 0,
    columns: 0,
  },
};

export const getCanvasDimension = (rows, columns) => {
  return {
    type: LOAD_CANVAS_DIMENSION,
    payload: { rows, columns },
  };
};

const canvasReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_CANVAS_DIMENSION:
      return { ...state, canvas: action.payload };
    default:
      return state;
  }
};

export default canvasReducer;
