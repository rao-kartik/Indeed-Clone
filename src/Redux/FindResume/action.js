import { FIND_RESUME_REQUEST, FIND_RESUME_SUCCESS, FIND_RESUME_FAILURE } from "./actionTypes";
import Axios from "axios";
import { loadData } from "../../Utils/localStorage";

const axios = Axios.create({
  baseURL: "https://json-server-mocker-robin.herokuapp.com/",
});
const token = loadData("token") || {};
const findResumeRequest = () => {
  return {
    type: FIND_RESUME_REQUEST,
  };
};
const findResumeSuccess = (payload) => {
  return {
    type: FIND_RESUME_SUCCESS,
    payload,
  };
};
const findResumeFailure = (err) => {
  return {
    type: FIND_RESUME_FAILURE,
    payload: err,
  };
};

export const searchResumeByEmail = () => (dispatch) => {
  dispatch(findResumeRequest());
  const config = {
    url: `/resumes/`,
    method: "get",
    params:{
      email:token.email
    }
  };
  axios(config)
    .then((res) => {
      dispatch(findResumeSuccess(res.data[0]));
    })
    .catch((err) => {
      dispatch(findResumeFailure(err));
    });
};
