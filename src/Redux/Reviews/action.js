import { POST_REVIEW_REQUEST, POST_REVIEW_SUCCESS, POST_REVIEW_FAILURE } from "./actionTypes";
import Axios from "axios";

const axios = Axios.create({
  baseURL: "https://json-server-mocker-ajmal.herokuapp.com",
});

const postReviewRequest = ()=>{
    return {
        type: POST_REVIEW_REQUEST
    }
}
const postReviewSuccess = (payload)=>{
    return {
        type: POST_REVIEW_SUCCESS,
        payload
    }
}
const postReviewFailure = (err)=>{
    return {
        type: POST_REVIEW_FAILURE,
        payload: err
    }
}

export const postReview = (params) => (dispatch) => {
    dispatch(postReviewRequest());
    const config = {
      url: `/reviews`,
      method: "post",
      data:params
    };
    axios(config)
      .then((res) => {
        dispatch(postReviewSuccess(res.data));
        alert("Successfully Added Review!")
      })
      .catch((err) => {
        dispatch(postReviewFailure(err));
      });
  };

export { postReviewRequest,postReviewSuccess,postReviewFailure };