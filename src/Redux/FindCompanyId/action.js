import { SEARCH_REQUEST, SEARCH_SUCCESS, SEARCH_FAILURE } from "./actionTypes";
import Axios from 'axios';

const axios = Axios.create({
    baseURL: 'https://json-server-mocker-robin.herokuapp.com/'
})

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