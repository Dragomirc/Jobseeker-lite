import { STORE_SEARCH_VALUES } from "../actions/types";
export default (
  state = { keywords : "", locationName : "", distanceFromLocation : "" },
  { type, payload }
) => {
  switch (type) {
    case STORE_SEARCH_VALUES:
      return {...state, ...payload};
  }
  return state;
};
