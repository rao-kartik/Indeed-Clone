import { MY_JOB_REQUEST, MY_JOB_SUCCESS, MY_JOB_FAILURE, JOB_DELETE_REQUEST, JOB_DELETE_SUCCESS, JOB_DELETE_FAILURE } from "./actionTypes";
import Axios from "axios";
import { loadData } from "../../Utils/localStorage";
const token = loadData("token") || {};

const axios = Axios.create({
  baseURL: "https://json-server-mocker-ajmal.herokuapp.com/",
});

const myJobRequest = () => {
  return {
    type: MY_JOB_REQUEST,
  };
};
const myJobSuccess = (payload) => {
  return {
    type: MY_JOB_SUCCESS,
    payload,
  };
};
const myJobFailure = (err) => {
  return {
    type: MY_JOB_FAILURE,
    payload: err,
  };
};

const jobDeleteRequest = () => {
  return {
    type: JOB_DELETE_REQUEST,
  };
};
const jobDeleteSuccess = (payload) => {
  return {
    type: JOB_DELETE_SUCCESS,
    payload,
  };
};
const jobDeleteFailure = (err) => {
  return {
    type: JOB_DELETE_FAILURE,
    payload: err,
  };
};

export const myJobSearch = () => (dispatch) => {
  dispatch(myJobRequest());
  const config = {
    url: `/applyjobs`,
    method: "get",
    params: {
      email:token.email
    }
  };
  axios(config)
    .then((res) => {
      dispatch(myJobSuccess(res.data));
    })
    .catch((err) => {
      dispatch(myJobFailure(err));
    });
};

export const deleteJob = (id) => (dispatch) => {
  dispatch(jobDeleteRequest());

  const config = {
    url: `/applyjobs/${id}`,
    method: "delete"
  };

  axios(config)
    .then((res) => {
      dispatch(jobDeleteSuccess(res.data));
    })
    .catch((err) => {
      dispatch(jobDeleteFailure(err));
    });
};

