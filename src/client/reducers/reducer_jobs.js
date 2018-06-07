import _ from "lodash";
import { FETCH_JOBS } from "../actions/types";

export default (state = {}, action) => {
  const { type, payload } = action;

  switch (type) {
    case FETCH_JOBS:
      return _.mapKeys(payload.data.results, "jobId");
  }
  return state;
};
