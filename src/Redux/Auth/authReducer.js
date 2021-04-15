import { SIGN_IN_FAILURE, SIGN_IN_REQUEST, SIGN_IN_SUCCESS, REGISTER_REQUEST, REGISTER_SUCCESS, REGISTER_FAILURE } from "./actionType";

const initState = {
    isAuth: false,
    isLoading: false,
    isError: false,
    token: ''
}

export const AuthReducer = (state=initState, action)=>{
    const { payload } = action;
    switch (action?.type) {
        case SIGN_IN_REQUEST: {
            return {
                ...state,
                isLoading: true,
                isError: false
            }
        };
        case SIGN_IN_SUCCESS: {
            return {
                ...state,
                isLoading: false,
                isError: false,
                isAuth: true,
                token: payload
            }
        };
        case SIGN_IN_FAILURE: {
            return {
                ...state,
                isLoading: false,
                isError: true
            }
        };
        case REGISTER_REQUEST: {
            return {
                ...state,
                isLoading: true,
                isError: false
            }
        }
        case REGISTER_SUCCESS: {
            return {
                ...state,
                isLoading: false,
                isError: false,
                isAuth: true,
                data: payload
            }
        }
        case REGISTER_FAILURE: {
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