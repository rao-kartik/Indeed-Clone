import { POST_REVIEW_REQUEST, POST_REVIEW_SUCCESS, POST_REVIEW_FAILURE  } from "./actionTypes";

const initState = {
  message: "",
  isError: false,
  isLoading: false
};

export const reviewsReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case POST_REVIEW_REQUEST: {
      return {
        ...state,
        isLoading: true,
        isError: false
      };
    }
    case POST_REVIEW_SUCCESS: {
      return {
        ...state,
        isLoading: false
      };
    }
    case POST_REVIEW_FAILURE: {
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
