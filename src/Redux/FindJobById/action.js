import { JOB_BY_ID_REQUEST, JOB_BY_ID_SUCCESS, JOB_BY_ID_FAILURE } from "./actionTypes";
import Axios from "axios";

const axios = Axios.create({
  baseURL: "https://json-job-search.herokuapp.com/",
});

const jobsByIdRequest = () => {
  return {
    type: JOB_BY_ID_REQUEST,
  };
};
const jobsByIdSuccess = (payload) => {
  return {
    type: JOB_BY_ID_SUCCESS,
    payload,
  };
};
const jobsByIdFailure = (err) => {
  return {
    type: JOB_BY_ID_FAILURE,
    payload: err,
  };
};

export const jobsByIdSearch = (params) => (dispatch) => {
  dispatch(jobsByIdRequest());
  const config = {
    url: `/newJobs/${params}`,
    method: "get",
  };
  axios(config)
    .then((res) => {
      dispatch(jobsByIdSuccess(res.data));
    })
    .catch((err) => {
      dispatch(jobsByIdFailure(err));
    });
};

