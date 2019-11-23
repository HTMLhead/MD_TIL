export default (state, action) => {
  switch (action.type) {
    case "CHANGE_INDEX":
      return {
        ...state,
        index: action.args
      };
    case "CHANGE_NEWS":
      return {
        ...state,
        currentNews: action.args
      };
    case "CHANGE_VIEW_STATUS":
      return {
        ...state,
        contentViewStatus: action.args
      };
    default:
      return { ...state };
  }
};
