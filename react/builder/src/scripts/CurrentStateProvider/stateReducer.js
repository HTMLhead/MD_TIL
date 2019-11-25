export default (state, action) => {
  switch (action.type) {
    case "INIT_DATA":
      return {
        ...state,
        ALL_DATA: action.args
      };
    case "CURRENT_NEWS":
      const newsData = state.ALL_DATA.find(
        news => news.company === action.args
      );
      return {
        ...state,
        ...newsData
      };
    default:
      return { ...state };
  }
};
