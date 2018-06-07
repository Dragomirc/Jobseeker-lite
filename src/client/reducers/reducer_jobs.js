import _ from "lodash";
import { FETCH_JOBS, RESET_JOBS } from "../actions/types";

export default (state = {}, { type,payload }) => {

  switch (type) {
    case RESET_JOBS:
       return {};
    case FETCH_JOBS:
      return _.mapKeys(payload.data.results, "jobId");
  }
    return state;
}

