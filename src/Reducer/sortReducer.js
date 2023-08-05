const initialState = {
  activeTab: "cheap",
};

const sortReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SORT_TICKETS": {
      return {
        ...state,
        activeTab: action.payload,
      };
    }
    default:
      return state;
  }
};

export default sortReducer;
