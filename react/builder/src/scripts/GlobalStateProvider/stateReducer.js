export default (state, action) => {
  switch (action.type) {
    case "INIT_DATA":
      return {
        ...state,
        news: [...action.args]
      };
    default:
      return { ...state };
  }
};
