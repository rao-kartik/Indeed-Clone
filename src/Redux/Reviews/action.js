import { POST_REVIEW_REQUEST, POST_REVIEW_SUCCESS, POST_REVIEW_FAILURE } from "./actionTypes";

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

export { postReviewRequest,postReviewSuccess,postReviewFailure };