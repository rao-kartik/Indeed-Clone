import { SIGN_IN_FAILURE, SIGN_IN_REQUEST, SIGN_IN_SUCCESS, ADMIN_SIGN_IN_REQUEST, ADMIN_SIGN_IN_SUCCESS, ADMIN_SIGN_IN_FAILURE, REGISTER_REQUEST, REGISTER_SUCCESS, REGISTER_FAILURE } from "./actionType";

const initState = {
    isAuth: false,
    isLoading: false,
    isError: false,
    token: '',
    isAdminAuth: false
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
        case ADMIN_SIGN_IN_REQUEST: {
            return {
                ...state,
                isLoading: true,
                isError: false
            }
        };
        case ADMIN_SIGN_IN_SUCCESS: {
            return {
                ...state,
                isLoading: false,
                isError: false,
                isAdminAuth: true,
                token: payload
            }
        };
        case ADMIN_SIGN_IN_FAILURE: {
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