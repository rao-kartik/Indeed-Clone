import { MY_REVIEW_REQUEST, MY_REVIEW_SUCCESS, MY_REVIEW_FAILURE, REVIEW_DELETE_REQUEST, REVIEW_DELETE_SUCCESS, REVIEW_DELETE_FAILURE } from "./actionTypes";
import Axios from "axios";
import { loadData } from "../../Utils/localStorage";
const token = loadData("token") || {};

const axios = Axios.create({
  baseURL: "https://json-server-mocker-ajmal.herokuapp.com/",
});

const myReviewsRequest = () => {
  return {
    type: MY_REVIEW_REQUEST,
  };
};
const myReviewsSuccess = (payload) => {
  return {
    type: MY_REVIEW_SUCCESS,
    payload,
  };
};
const myReviewsFailure = (err) => {
  return {
    type: MY_REVIEW_FAILURE,
    payload: err,
  };
};

const reviewsDeleteRequest = () => {
  return {
    type: REVIEW_DELETE_REQUEST,
  };
};
const reviewsDeleteSuccess = (payload) => {
  return {
    type: REVIEW_DELETE_SUCCESS,
    payload,
  };
};
const reviewsDeleteFailure = (err) => {
  return {
    type: REVIEW_DELETE_FAILURE,
    payload: err,
  };
};

export const myReviewsSearch = () => (dispatch) => {
  dispatch(myReviewsRequest());
  const config = {
    url: `/reviews`,
    method: "get",
    params: {
      language:token.email
    }
  };
  axios(config)
    .then((res) => {
      dispatch(myReviewsSuccess(res.data));
    })
    .catch((err) => {
      dispatch(myReviewsFailure(err));
    });
};

export const deleteReview = (id) => (dispatch) => {
  dispatch(reviewsDeleteRequest());

  const config = {
    url: `/reviews/${id}`,
    method: "delete"
  };

  axios(config)
    .then((res) => {
      dispatch(reviewsDeleteSuccess(res.data));
    })
    .catch((err) => {
      dispatch(reviewsDeleteFailure(err));
    });
};

