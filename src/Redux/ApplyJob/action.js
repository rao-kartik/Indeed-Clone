import { APPLY_JOB_REQUEST, APPLY_JOB_SUCCESS, APPLY_JOB_FAILURE } from "./actionTypes";

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

export { applyJobRequest,applyJobSuccess,applyJobFailure };