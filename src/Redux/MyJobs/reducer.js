import { MY_JOB_REQUEST, MY_JOB_SUCCESS, MY_JOB_FAILURE, JOB_DELETE_REQUEST, JOB_DELETE_SUCCESS, JOB_DELETE_FAILURE } from "./actionTypes";

const initState = {
  isLoading: true,
  isError: false,
  job_data: [],
};

export const myJobReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case MY_JOB_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case MY_JOB_SUCCESS:
      return {
        ...state,
        job_data: payload,
        isLoading: false,
      };
    case MY_JOB_FAILURE:
      return {
        ...state,
        isError: true,
      };
      case JOB_DELETE_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case JOB_DELETE_SUCCESS:
      return {
        ...state,
        isLoading: false,
      };
    case JOB_DELETE_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    default:
      return state;
  }
};
