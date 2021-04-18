import { GET_JOBS_FAILURE, GET_JOBS_REQUEST, GET_JOBS_SUCCESS, GET_RECRUITERS_REQUEST, GET_RECRUITERS_SUCCESS, GET_RECRUITERS_FAILURE,
    POST_JOBS_REQUEST, POST_JOBS_SUCCESS, POST_JOBS_FAILURE, POST_RECRUITERS_REQUEST, POST_RECRUITERS_SUCCESS, POST_RECRUITERS_FAILURE, 
    SHOW_ADMIN_DETAILS,
    DELETE_JOBS_REQUEST, DELETE_JOBS_SUCCESS, DELETE_JOBS_FAILURE, DELETE_RECRUITERS_REQUEST, DELETE_RECRUITERS_SUCCESS, DELETE_RECRUITERS_FAILURE,
    PAGE_REVIEWS_REQUEST, PAGE_REVIEWS_SUCCESS, PAGE_REVIEWS_FAILURE } from "./actionType";
import Axios from 'axios';

const jobAxios = Axios.create({
    baseURL: 'https://json-job-search.herokuapp.com/'
});

const recruitersAxios = Axios.create ({
    baseURL: 'https://json-server-mocker-ajmal.herokuapp.com/'
})

const pageReviewAxios = Axios.create({
    baseURL: 'https://json-server-mocker-robin.herokuapp.com/'
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

const pageReviewsRequest = ()=>{
    return {
        type: PAGE_REVIEWS_REQUEST
    }
}

const pageReviewsSuccess = (payload)=>{
    return {
        type: PAGE_REVIEWS_SUCCESS,
        payload
    }
}

const pageReviewsFailure = (payload)=>{
    return {
        type: PAGE_REVIEWS_FAILURE,
        payload
    }
}

const getJobs = ()=>dispatch=>{

    dispatch(getJobsRequest())

    const config = {
        url: '/newJobs',
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
        url: '/newJobs',
        method: 'post',
        data: payload
    };
    jobAxios(config)
    .then(res=>{
        dispatch(postJobsSuccess(res.data));
        dispatch(getJobs());
    })
    .catch(err=>{
        dispatch(postJobsFailure(err));
    })
};

const deleteJobs = (id)=>dispatch=>{

    dispatch(deleteJobsRequest())

    const config = {
        url: `/newJobs/${id}`,
        method: 'delete'
    };
    jobAxios(config)
    .then(res=>{
        dispatch(deleteJobsSuccess(res.data));
        dispatch(getJobs());
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

const getPageReviews = ()=>dispatch=>{
    dispatch(pageReviewsRequest());

    const config = {
        method: 'get',
        url: '/pageFeedback'
    }
    pageReviewAxios(config)
    .then(res=>{
        dispatch(pageReviewsSuccess(res.data));
    })
    .catch(err=>{
        dispatch(pageReviewsFailure(err))
    })
}

export { getJobs, getRecruiters, addJobs, addRecruiters, showAdminDetails, deleteRecruiters, deleteJobs, getPageReviews };
