import { loadData, saveData } from "../../Utils/localStorage";
import { SEND_RESUME_FAILURE, SEND_RESUME_REQUEST, SEND_RESUME_SUCCESS, GET_RESUME_REQUEST, GET_RESUME_SUCCESS, GET_RESUME_FAILURE, DELETE_RESUME_REQUEST, DELETE_RESUME_SUCCESS, DELETE_RESUME_FAILURE } from "./actionTypes";

const resumeData = loadData("resumeData") || [];

const initState = {
  isLoading: false,
  isError: false,
  data:'',
  resumeData: resumeData
};

export const resumeReducer = (state = initState, {type,payload}) => {
  switch (type) {
    case SEND_RESUME_REQUEST: {
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    }
    case SEND_RESUME_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        isError: false,
        data: payload,
      };
    }
    case SEND_RESUME_FAILURE: {
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    }
    case GET_RESUME_REQUEST: {
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    }
    case GET_RESUME_SUCCESS: {
      saveData("resumeData", payload)
      return {
        ...state,
        isLoading: false,
        isError: false,
        resumeData: payload,
      };
    }
    case GET_RESUME_FAILURE: {
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    }
    case DELETE_RESUME_REQUEST: {
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    }
    case DELETE_RESUME_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        isError: false
      };
    }
    case DELETE_RESUME_FAILURE: {
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    }
    default:
      return state;
  }
};
