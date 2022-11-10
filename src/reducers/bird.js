const initialState = {
  y: 250,
  r: 0,
};

export default (state = initialState, { type } = {}) => {
  switch (type) {
    case "FLY":
      return { ...state, y: state.y - 10, r: -20 };
    case "FALL":
      return { ...state, y: state.y + 20, r: 0 };
    case "GAME_OVER":
      return initialState;

    default:
      return state;
  }
};
