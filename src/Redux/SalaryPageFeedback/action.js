import { POST_FEEDBACK_FAILURE, POST_FEEDBACK_REQUEST, POST_FEEDBACK_SUCCESS } from "./actionTypes";
import Axios from 'axios'
export const postFeedbackRequest = () => {
  return {
    type: POST_FEEDBACK_REQUEST,
  };
};

export const postFeedbackSuccess = (payload) => {
  return {
    type: POST_FEEDBACK_SUCCESS,
    payload,
  };
};

export const postFeedbackFailure = (err) => {
  return {
    type: POST_FEEDBACK_FAILURE,
    payload: err,
  };
};

const axios = Axios.create({
  baseURL: "https://json-server-mocker-robin.herokuapp.com",
});

export const postFeedback = (payload) => (dispatch) => {
  dispatch(postFeedbackRequest(payload));
  const config = {
    url: "/pageFeedback",
    method: "post",
    data: payload,
  };

  axios(config)
    .then((res) => {
      dispatch(postFeedbackSuccess());
      alert('Feedback Submitted')
    })
    .catch((err) => {
      dispatch(postFeedbackFailure(err));
    });
};