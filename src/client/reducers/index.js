import { combineReducers } from "redux";
import jobsReducer from "./reducer_jobs";
import storeSearchValues from "./reducer_store_search_values";
import fetchSingleJobReducer from "./reducer_fetch_single_job";

const rootReducer = combineReducers({
  jobs: jobsReducer,
  searchValues: storeSearchValues,
  fetchedSingleJob: fetchSingleJobReducer
});

export default rootReducer;
