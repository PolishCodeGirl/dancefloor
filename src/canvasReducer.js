const LOAD_CANVAS_DIMENSION = "LOAD_CANVAS_DIMENSION";
const LOAD_CANVAS_SIZE = "LOAD_CANVAS_SIZE";
const LOADING_CANVAS_DIMENSTIONS = "LOADING_CANVAS_DIMENSTIONS";

const initialState = {
  canvas: {
    rows: 0,
    columns: 0,
  },
  canvasSize: {
    width: 0,
    height: 0,
  },
  isCanvasDimensionsLoading: false,
};

export const getCanvasDimension = (rows, columns) => {
  return {
    type: LOAD_CANVAS_DIMENSION,
    payload: { rows, columns },
  };
};

export const getCanvasSize = (width, height) => {
  return {
    type: LOAD_CANVAS_SIZE,
    payload: { width, height },
  };
};

export const loadingDimensions = () => ({ type: LOADING_CANVAS_DIMENSTIONS });

const canvasReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_CANVAS_DIMENSION:
      return {
        ...state,
        canvas: action.payload,
        isCanvasDimensionsLoading: false,
      };
    case LOADING_CANVAS_DIMENSTIONS:
      return { ...state, isCanvasDimensionsLoading: true };
    case LOAD_CANVAS_SIZE:
      return {
        ...state,
        canvasSize: action.payload,
      };
    default:
      return state;
  }
};

export default canvasReducer;
