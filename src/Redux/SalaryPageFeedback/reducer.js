import { POST_FEEDBACK_FAILURE, POST_FEEDBACK_REQUEST, POST_FEEDBACK_SUCCESS } from "./actionTypes";

const initState = {
    isLoading:false,
    isError:false,
};

export const salaryFeedbackReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case POST_FEEDBACK_REQUEST: {
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    }
    case POST_FEEDBACK_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        isError: false,
      };
    }
    case POST_FEEDBACK_FAILURE: {
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    }
    default:
        return state;
  }
}


