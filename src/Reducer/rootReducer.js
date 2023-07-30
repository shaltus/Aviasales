import { combineReducers } from "redux";

import filterReducer from "./filterReducer";
import ticketReducer from "./ticketReducer";
import searchIdReducer from "./searchIdReducer";
import sortReducer from "./sortReducer";

const rootReducer = combineReducers({
  filter: filterReducer,
  tickets: ticketReducer,
  searchId: searchIdReducer,
  sort: sortReducer,
});

export default rootReducer;
