import { GET_JOBS_FAILURE, GET_JOBS_REQUEST, GET_JOBS_SUCCESS, GET_RECRUITERS_REQUEST, GET_RECRUITERS_SUCCESS, GET_RECRUITERS_FAILURE } from "./actionType";
import Axios from 'axios';

const jobAxios = Axios.create({
    baseURL: 'https://json-job-search.herokuapp.com/'
});

const recruitersAxios = Axios.create ({
    baseURL: 'https://json-server-mocker-ajmal.herokuapp.com'
})

const getJobsRequest = ()=>{
    return {
        type: GET_JOBS_REQUEST
    }
};

const getJobsSuccess = (payload)=>{
    return {
        type: GET_JOBS_SUCCESS,
        payload
    }
};

const getJobsFailure = ()=>{
    return {
        type: GET_JOBS_FAILURE
    }
};

const getRecruitersRequest = ()=>{
    return {
        type: GET_RECRUITERS_REQUEST
    }
};

const getRecruitersSuccess = (payload)=>{
    return {
        type: GET_RECRUITERS_SUCCESS,
        payload
    }
};

const getRecruitersFailure = ()=>{
    return {
        type: GET_RECRUITERS_FAILURE
    }
};

const getJobs = ()=>dispatch=>{

    dispatch(getJobsRequest())

    const config = {
        url: '/jobs',
        method: 'get'
    };
    jobAxios(config)
    .then(res=>{
        dispatch(getJobsSuccess(res.data));
    })
    .catch(err=>{
        dispatch(getJobsFailure(err));
    })
};

const getRecruiters = ()=>dispatch=>{

    dispatch(getRecruitersRequest())

    const config = {
        url: '/companies',
        method: 'get'
    };
    recruitersAxios(config)
    .then(res=>{
        dispatch(getRecruitersSuccess(res.data));
    })
    .catch(err=>{
        dispatch(getRecruitersFailure(err));
    })
};

export { getJobs, getRecruiters };
