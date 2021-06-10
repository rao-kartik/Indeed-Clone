import { POST_REVIEW_REQUEST, POST_REVIEW_SUCCESS, POST_REVIEW_FAILURE  } from "./actionTypes";

const initState = {
  message: "",
  isSubmitted:false,
  isError: false,
  isLoading: false
};

export const reviewsReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case POST_REVIEW_REQUEST: {
      return {
        ...state,
        isSubmitted:false,
        isLoading: true,
        isError: false
      };
    }
    case POST_REVIEW_SUCCESS: {
      return {
        ...state,
        isSubmitted:true,
        isLoading: false
      };
    }
    case POST_REVIEW_FAILURE: {
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
