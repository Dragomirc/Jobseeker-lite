import axios from "axios";
import {
  FETCH_JOBS,
  STORE_SEARCH_VALUES,
  FETCH_SINGLE_JOB,
  RESET_JOBS
} from "./types";

import { API_KEY } from "../../../config.env";
const BASE_URL =
  "https://cors-anywhere.herokuapp.com/https://www.reed.co.uk/api/1.0/";

export const fetchJobs = ({
  keywords = "",
  locationName = "",
  employerId = "",
  distanceFromLocation = ""
}) => async dispatch => {
  try {
    const results = await axios.request({
      url: `${BASE_URL}search?keywords=${keywords}&locationName=${locationName}&employerId=${employerId}&distanceFromLocation=${distanceFromLocation}`,
      method: "get",
      auth: {
        username: API_KEY,
        password: ""
      }
    });
    dispatch({
      type: FETCH_JOBS,
      payload: results
    });
  } catch (e) {
    console.log(e);
  }
};

export const resetJobs = () => dispatch => {
  dispatch({
    type: RESET_JOBS
  });
};
export const storeSearchValues = searchValues => dispatch => {
  dispatch({
    type: STORE_SEARCH_VALUES,
    payload: searchValues
  });
};

export const fetchSingleJob = id => async dispatch => {
  const result = await axios.request(`${BASE_URL}jobs/${id}`, {
    method: "get",
    auth: {
      username: API_KEY,
      password: ""
    }
  });
  dispatch({
    type: FETCH_SINGLE_JOB,
    payload: result
  });
};
