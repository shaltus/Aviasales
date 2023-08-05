const initialState = {
  tickets: [],
  searchId: "",
  stop: false,
  error: false,
  ticketCount: 5,
  showPagination: true,
  loading: true,
};

const ticketReducer = (state = initialState, action) => {
  switch (action.type) {
  case "FETCH_TICKETS":
    return {
      ...state,
      tickets: [...state.tickets, ...action.jsonData.tickets],
      stop: action.jsonData.stop,
      error: action.jsonData.error,
    };
  case "SHOW_MORE":
    return { ...state, ticketCount: state.ticketCount + 5 };
  case "TOGGLE_PAGINATION":
    return { ...state, showPagination: action.payload };
  case "LOADING":
    return { ...state, loading: action.payload };
  default:
    return state;
  }
};

export default ticketReducer;
