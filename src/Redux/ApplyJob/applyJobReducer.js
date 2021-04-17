import { APPLY_JOB_REQUEST, APPLY_JOB_SUCCESS, APPLY_JOB_FAILURE } from "./actionTypes";

const initState = {
  message: "",
  isError: false,
  isLoading: false
};

export const applyJobReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case APPLY_JOB_REQUEST: {
      return {
        ...state,
        isLoading: true,
        isError: false
      };
    }
    case APPLY_JOB_SUCCESS: {
      return {
        ...state,
        isLoading: false
      };
    }
    case APPLY_JOB_FAILURE: {
      return {
        ...state,
        isError: true,
        isLoading: false
      };
    }
    default:
      return state;
  }
};
