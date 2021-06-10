import { APPLY_JOB_REQUEST, APPLY_JOB_SUCCESS, APPLY_JOB_FAILURE } from "./actionTypes";
import Axios from "axios";

const axios = Axios.create({
  baseURL: "https://json-server-mocker-ajmal.herokuapp.com/",
});
const applyJobRequest = ()=>{
    return {
        type: APPLY_JOB_REQUEST
    }
}
const applyJobSuccess = (payload)=>{
    return {
        type: APPLY_JOB_SUCCESS,
        payload
    }
}
const applyJobFailure = (err)=>{
    return {
        type: APPLY_JOB_FAILURE,
        payload: err
    }
}


export const applyJob = (params) => (dispatch) => {
    dispatch(applyJobRequest());
    const config = {
      url: `/applyjobs`,
      method: "post",
      data:params
    };
    axios(config)
      .then((res) => {
        dispatch(applyJobSuccess(res.message));
        alert("Successfully Applied Job!")
      })
      .catch((err) => {
        dispatch(applyJobFailure(err));
      });
  };

export { applyJobRequest,applyJobSuccess,applyJobFailure };