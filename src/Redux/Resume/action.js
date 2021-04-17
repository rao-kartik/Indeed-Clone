import Axios from "axios";
import { SEND_RESUME_REQUEST, SEND_RESUME_SUCCESS , SEND_RESUME_FAILURE, GET_RESUME_REQUEST, GET_RESUME_SUCCESS, GET_RESUME_FAILURE, DELETE_RESUME_REQUEST, DELETE_RESUME_SUCCESS, DELETE_RESUME_FAILURE } from "./actionTypes";

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

const getResumeRequest = () => {
  return {
    type: GET_RESUME_REQUEST
  };
};
const getResumeSuccess = (payload) => {
  return {
    type: GET_RESUME_SUCCESS,
    payload,
  };
};
const getResumeFailure = (err) => {
  return {
    type: GET_RESUME_FAILURE,
    payload: err,
  };
};

const deleteResumeRequest = () => {
  return {
    type: DELETE_RESUME_REQUEST
  };
};
const deleteResumeSuccess = (payload) => {
  return {
    type: DELETE_RESUME_SUCCESS,
    payload,
  };
};
const deleteResumeFailure = (err) => {
  return {
    type: DELETE_RESUME_FAILURE,
    payload: err,
  };
};

export const sendResume = (payload) => (dispatch) => {
    console.log('payload',payload)
  dispatch(sendResumeRequest(payload));

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

export const getResume = () => (dispatch) => {
  dispatch(getResumeRequest());

  const config = {
    url: "/resumes",
    method: "get"
  };

  axios(config)
    .then((res) => {
      dispatch(getResumeSuccess(res.data));
    })
    .catch((err) => {
                console.log(err);
      dispatch(getResumeFailure(err));
    });
};

export const deleteResume = (id) => (dispatch) => {
  dispatch(deleteResumeRequest());

  const config = {
    url: `/resumes/${id}`,
    method: "delete"
  };

  axios(config)
    .then((res) => {
      dispatch(deleteResumeSuccess(res.data));
    })
    .catch((err) => {
                console.log(err);
      dispatch(deleteResumeFailure(err));
    });
};
