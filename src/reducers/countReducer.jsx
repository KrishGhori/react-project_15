export const initialState = { count: 0 };

export const countReducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1 };
    case "RESET":
      return { count: 0 };
    default:
      return state;
  }
};