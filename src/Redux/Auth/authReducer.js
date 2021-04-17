import { loadData, saveData } from "../../Utils/localStorage";
import { SIGN_IN_FAILURE, SIGN_IN_REQUEST, SIGN_IN_SUCCESS, 
    ADMIN_SIGN_IN_REQUEST, ADMIN_SIGN_IN_SUCCESS, ADMIN_SIGN_IN_FAILURE, 
    REGISTER_REQUEST, REGISTER_SUCCESS, REGISTER_FAILURE,
    ADMIN_LOGOUT_SUCCESS, LOGOUT_SUCCESS } from "./actionType";

    const isAdminAuth = loadData("adminAuth") || false;

    const isAuth = loadData("auth") || false;

    const token = loadData("token") || {};

const initState = {
    isAuth: isAuth,
    isLoading: false,
    isError: false,
    token: token,
    isAdminAuth: isAdminAuth
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
            saveData("auth", true)
            saveData("token", payload)
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
            saveData("adminAuth", true)
            saveData("token", payload)
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
            saveData("auth", true)
            saveData("token", payload)
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
        case LOGOUT_SUCCESS: {
            saveData("auth", false);
            saveData("token",{});
            saveData("resumeData",[]);
            saveData("recruiterData", []);
            return {
                ...state,
                isAuth: false
            }
        }
        case ADMIN_LOGOUT_SUCCESS: {
            saveData("adminAuth", false);
            saveData("token",{});
            saveData("resumeData",[]);
            saveData("recruiterData", []);
            return {
                ...state,
                isAdminAuth: false
            }
        }
        default:
            return state;
    }
}