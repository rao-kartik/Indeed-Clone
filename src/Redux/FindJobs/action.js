import { GET_SEARCH_FAILURE, GET_SEARCH_REQUEST, GET_SEARCH_SUCCESS } from "./actiontype";
import Axios from 'axios';

const axios = Axios.create({
    baseURL: 'https://json-job-search.herokuapp.com/'
})

const getSearchRequest = ()=>{
    return {
        type: GET_SEARCH_REQUEST
    }
}
const getSearchSuccess = (payload)=>{
    return {
        type: GET_SEARCH_SUCCESS,
        payload
    }
}
const getSearchFailure = (err)=>{
    return {
        type: GET_SEARCH_FAILURE,
        payload: err
    }
}

const getSearchData = (payload)=>dispatch=>{
    dispatch(getSearchRequest());

    const { category, location, page } = payload;

    const config = {
        url: '/jobs',
        method: 'get',
        params: {
            category,
            location,
            _page: page,
            _limit: 10
        }
    }
    axios(config)
    .then(res=>{
        dispatch(getSearchSuccess(res.data))
    })
    .catch(err=>{
        dispatch(getSearchFailure(err))
    })
}

export { getSearchData };