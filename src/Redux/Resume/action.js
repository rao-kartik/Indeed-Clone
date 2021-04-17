import Axios from "axios";
import { SEND_RESUME_REQUEST, SEND_RESUME_SUCCESS , SEND_RESUME_FAILURE} from "./actionTypes";

const axios = Axios.create({
  baseURL: "https://json-server-mocker-robin.herokuapp.com"
});

export const sendResumeRequest = (payload) => {
  return {
    type: SEND_RESUME_REQUEST,
    payload
  };
};
export const sendResumeSuccess = (payload) => {
  return {
    type: SEND_RESUME_SUCCESS,
    payload,
  };
};
export const sendResumeFailure = (err) => {
  return {
    type: SEND_RESUME_FAILURE,
    payload: err,
  };
};

export const sendResume = (payload) => (dispatch) => {
    console.log('payload',payload)
  dispatch(sendResumeFailure(payload));

  const config = {
    url: "/resumes",
    method: "post",
    data:payload,
  };

  axios(config)
    .then((res) => {
      dispatch(sendResumeSuccess());
    })
    .catch((err) => {
                console.log(err);
      dispatch(sendResumeFailure(err));
    });
};

