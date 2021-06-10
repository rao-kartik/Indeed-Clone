import { GET_SEARCH_FAILURE, GET_SEARCH_REQUEST, GET_SEARCH_SUCCESS } from './actiontype';

const initState = {
    isLoading: false,
    isError: false,
    data: []
}

export const findJobsReducer = (state=initState, action) => {
    const { payload } = action;
    switch (action?.type) {
        case GET_SEARCH_REQUEST: {
            return {
                ...state,
                isLoading: true,
                isError: false
            }
        }
        case GET_SEARCH_SUCCESS: {
            return {
                ...state,
                isLoading: false,
                isError: false,
                data: payload
            }
        }
        case GET_SEARCH_FAILURE: {
            return {
                ...state,
                isLoading: false,
                isError: true
            }
        }
        default:
            return state;
    }
}
