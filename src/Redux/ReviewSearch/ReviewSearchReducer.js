import { SEARCH_REQUEST, SEARCH_SUCCESS, SEARCH_FAILURE } from './actionTypes';

const initState = {
    isLoading: false,
    isError: false,
    data: []
}

export const ReviewSearchReducer = (state=initState, action) => {
    const { payload } = action;
    switch (action?.type) {
        case SEARCH_REQUEST: {
            return {
                ...state,
                isLoading: true,
                isError: false
            }
        }
        case SEARCH_SUCCESS: {
            return {
                ...state,
                isLoading: false,
                isError: false,
                data: payload
            }
        }
        case SEARCH_FAILURE: {
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
