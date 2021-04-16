import { SEARCH_REQUEST, SEARCH_SUCCESS, SEARCH_FAILURE } from "./actionTypes";
import Axios from 'axios';

const axios = Axios.create({
    baseURL: 'http://localhost:3004/'
})

const searchRequest = ()=>{
    return {
        type: SEARCH_REQUEST
    }
}
const searchSuccess = (payload)=>{
    return {
        type: SEARCH_SUCCESS,
        payload
    }
}
const searchFailure = (err)=>{
    return {
        type: SEARCH_FAILURE,
        payload: err
    }
}

export const getData=(payload)=>dispatch=>{
    dispatch(searchRequest());

    const { company_name } = payload;

    const config = {
        url: '/companies',
        method: 'get',
        params: {
            company_name
        }
    }
    axios(config)
    .then(res=>{
        dispatch(searchSuccess(res.data))
    })
    .catch(err=>{
        dispatch(searchFailure(err))
    })
}