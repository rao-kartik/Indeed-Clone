import { GET_JOBS_FAILURE, GET_JOBS_REQUEST, GET_JOBS_SUCCESS, GET_RECRUITERS_REQUEST, GET_RECRUITERS_SUCCESS, GET_RECRUITERS_FAILURE,
    POST_JOBS_REQUEST, POST_JOBS_SUCCESS, POST_JOBS_FAILURE, POST_RECRUITERS_REQUEST, POST_RECRUITERS_SUCCESS, POST_RECRUITERS_FAILURE, 
    SHOW_ADMIN_DETAILS, HIDE_ADMIN_DETAILS,
    DELETE_JOBS_REQUEST, DELETE_JOBS_SUCCESS, DELETE_JOBS_FAILURE, DELETE_RECRUITERS_REQUEST, DELETE_RECRUITERS_SUCCESS, DELETE_RECRUITERS_FAILURE } from "./actionType";
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

const postJobsRequest = ()=>{
    return {
        type: POST_JOBS_REQUEST
    }
};

const postJobsSuccess = (payload)=>{
    return {
        type: POST_JOBS_SUCCESS,
        payload
    }
};

const postJobsFailure = ()=>{
    return {
        type: POST_JOBS_FAILURE
    }
};

const deleteJobsRequest = ()=>{
    return {
        type: DELETE_JOBS_REQUEST
    }
};

const deleteJobsSuccess = ()=>{
    return {
        type: DELETE_JOBS_SUCCESS
    }
};

const deleteJobsFailure = ()=>{
    return {
        type: DELETE_JOBS_FAILURE
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

const postRecruitersRequest = ()=>{
    return {
        type: POST_RECRUITERS_REQUEST
    }
};

const postRecruitersSuccess = (payload)=>{
    return {
        type: POST_RECRUITERS_SUCCESS,
        payload
    }
};

const postRecruitersFailure = ()=>{
    return {
        type: POST_RECRUITERS_FAILURE
    }
};

const deleteRecruitersRequest = ()=>{
    return {
        type: DELETE_RECRUITERS_REQUEST
    }
};

const deleteRecruitersSuccess = (payload)=>{
    return {
        type: DELETE_RECRUITERS_SUCCESS,
        payload
    }
};

const deleteRecruitersFailure = ()=>{
    return {
        type: DELETE_RECRUITERS_FAILURE
    }
};

const showAdminDetails = ()=>{
    return {
        type: SHOW_ADMIN_DETAILS
    }
}

const hideAdminDetails = ()=>{
    return {
        type: HIDE_ADMIN_DETAILS
    }
}


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

const addJobs = (payload)=>dispatch=>{

    dispatch(postJobsRequest())

    const config = {
        url: '/jobs',
        method: 'post',
        data: payload
    };
    jobAxios(config)
    .then(res=>{
        dispatch(postJobsSuccess(res.data));
    })
    .catch(err=>{
        dispatch(postJobsFailure(err));
    })
};

const deleteJobs = (id)=>dispatch=>{

    dispatch(deleteJobsRequest())

    const config = {
        url: `/jobs/${id}`,
        method: 'delete'
    };
    jobAxios(config)
    .then(res=>{
        dispatch(deleteJobsSuccess(res.data));
    })
    .catch(err=>{
        dispatch(deleteJobsFailure(err));
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

const addRecruiters = (payload)=>dispatch=>{
    dispatch(postRecruitersRequest())

    const config = {
        url: '/companies',
        method: 'post',
        data: payload
    };
    recruitersAxios(config)
    .then(res=>{
        dispatch(postRecruitersSuccess(res.data))
    })
    .catch(err=>{
        dispatch(postRecruitersFailure(err))
    })
}

const deleteRecruiters = (id)=>dispatch=>{
    dispatch(deleteRecruitersRequest())

    const config = {
        url: `/companies/${id}`,
        method: 'delete',
    };
    recruitersAxios(config)
    .then(res=>{
        dispatch(deleteRecruitersSuccess(res.data))
    })
    .catch(err=>{
        dispatch(deleteRecruitersFailure(err))
    })
}

export { getJobs, getRecruiters, addJobs, addRecruiters, showAdminDetails, deleteRecruiters, deleteJobs };
