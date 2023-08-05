const initialState = {
  searchId: "",
};

const searchIdReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SEARCH_ID":
      return { ...state, searchId: action.jsonData.searchId };
    default:
      return state;
  }
};
export default searchIdReducer;
