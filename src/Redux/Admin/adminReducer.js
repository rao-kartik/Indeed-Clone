import { loadData, saveData } from "../../Utils/localStorage";
import { GET_JOBS_FAILURE, GET_JOBS_REQUEST, GET_JOBS_SUCCESS, GET_RECRUITERS_REQUEST, GET_RECRUITERS_SUCCESS, GET_RECRUITERS_FAILURE,
    POST_JOBS_REQUEST, POST_JOBS_SUCCESS, POST_JOBS_FAILURE, POST_RECRUITERS_REQUEST, POST_RECRUITERS_SUCCESS, POST_RECRUITERS_FAILURE,
    SHOW_ADMIN_DETAILS, HIDE_ADMIN_DETAILS,
    DELETE_JOBS_REQUEST, DELETE_JOBS_SUCCESS, DELETE_JOBS_FAILURE, DELETE_RECRUITERS_REQUEST, DELETE_RECRUITERS_SUCCESS, DELETE_RECRUITERS_FAILURE } from "./actionType";

    const jobsData = loadData("jobsData") || [];

    const recruiterData = loadData("recruiterData") || [];

const initState = {
    jobsData: jobsData,
    recruiterData: recruiterData,
    isLoading: false,
    isError: false,
    dispAdmDetails: false
}

export const AdminReducer = (state=initState, action)=>{
    const { payload } = action;
    switch (action?.type) {
        case GET_JOBS_REQUEST: {
            return {
                ...state,
                isLoading: true,
                isError: false
            }
        }
        case GET_JOBS_SUCCESS: {
            // saveData("jobsData", payload)
            return {
                ...state,
                isLoading: false,
                isError: false,
                jobsData: payload
            }
        }
        case GET_JOBS_FAILURE: {
            return {
                ...state,
                isLoading: false,
                isError: true
            }
        }
        case POST_JOBS_REQUEST: {
            return {
                ...state,
                isLoading: true,
                isError: false
            }
        }
        case POST_JOBS_SUCCESS: {
            return {
                ...state,
                isLoading: false,
                isError: false,
                jobsData: payload
            }
        }
        case POST_JOBS_FAILURE: {
            return {
                ...state,
                isLoading: false,
                isError: true
            }
        }
        case DELETE_JOBS_REQUEST: {
            return {
                ...state,
                isLoading: true,
                isError: false
            }
        }
        case DELETE_JOBS_SUCCESS: {
            return {
                ...state,
                isLoading: false,
                isError: false,
            }
        }
        case DELETE_JOBS_FAILURE: {
            return {
                ...state,
                isLoading: false,
                isError: true
            }
        }
        case GET_RECRUITERS_REQUEST: {
            return {
                ...state,
                isLoading: true,
                isError: false
            }
        }
        case GET_RECRUITERS_SUCCESS: {
            saveData("recruiterData", payload)
            return {
                ...state,
                isLoading: false,
                isError: false,
                recruiterData: payload
            }
        }
        case GET_RECRUITERS_FAILURE: {
            return {
                ...state,
                isLoading: false,
                isError: true
            }
        }
        case POST_RECRUITERS_REQUEST: {
            return {
                ...state,
                isLoading: true,
                isError: false
            }
        }
        case POST_RECRUITERS_SUCCESS: {
            return {
                ...state,
                isLoading: false,
                isError: false,
                recruiterData: payload
            }
        }
        case POST_RECRUITERS_FAILURE: {
            return {
                ...state,
                isLoading: false,
                isError: true
            }
        }
        case DELETE_RECRUITERS_REQUEST: {
            return {
                ...state,
                isLoading: true,
                isError: false
            }
        }
        case DELETE_RECRUITERS_SUCCESS: {
            return {
                ...state,
                isLoading: false,
                isError: false
            }
        }
        case DELETE_RECRUITERS_FAILURE: {
            return {
                ...state,
                isLoading: false,
                isError: true
            }
        }
        case SHOW_ADMIN_DETAILS: {
            return {
                ...state,
                dispAdmDetails: !state.dispAdmDetails
            }
        }
        case HIDE_ADMIN_DETAILS: {
            return {
                ...state,
                showAdmDetails: false
            }
        }
        default:
            return state;
    }
}