import { APPLY_JOB_REQUEST, APPLY_JOB_SUCCESS, APPLY_JOB_FAILURE } from "./actionTypes";

const initState = {
  message: "",
  isSubmitted:false,
  isError: false,
  isLoading: false
};

export const applyJobReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case APPLY_JOB_REQUEST: {
      return {
        ...state,
        isSubmitted:false,
        isLoading: true,
        isError: false
      };
    }
    case APPLY_JOB_SUCCESS: {
      return {
        ...state,
        isSubmitted:true,
        isLoading: false
      };
    }
    case APPLY_JOB_FAILURE: {
      return {
        ...state,
        isSubmitted:false,
        isError: true,
        isLoading: false
      };
    }
    default:
      return state;
  }
};
