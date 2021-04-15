import { SIGN_IN_FAILURE, SIGN_IN_REQUEST, SIGN_IN_SUCCESS } from "./actionType";

const initState = {
    isAuth: false,
    isLoading: false,
    isError: false,
    token: ''
}

export const SignInReducer = (state=initState, action)=>{
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
        default:
            return state;
    }
}