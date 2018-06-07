import { FETCH_SINGLE_JOB } from "../actions/types";

export default (state = {}, { type, payload }) => {
  switch (type) {
    case FETCH_SINGLE_JOB:
      return payload.data;
  }
  return state;
};
