import { SEARCH_REQUEST, SEARCH_SUCCESS, SEARCH_FAILURE } from "./actionTypes";

export const searchRequest = ()=>{
    return {
        type: SEARCH_REQUEST
    }
}
export const searchSuccess = (payload)=>{
    return {
        type: SEARCH_SUCCESS,
        payload
    }
}
export const searchFailure = (err)=>{
    return {
        type: SEARCH_FAILURE,
        payload: err
    }
}