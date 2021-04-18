import { MY_REVIEW_REQUEST, MY_REVIEW_SUCCESS, MY_REVIEW_FAILURE, REVIEW_DELETE_REQUEST, REVIEW_DELETE_SUCCESS, REVIEW_DELETE_FAILURE } from "./actionTypes";

const initState = {
  isLoading: true,
  isError: false,
  reviews_data: [],
};

export const myReviewsReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case MY_REVIEW_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case MY_REVIEW_SUCCESS:
      return {
        ...state,
        reviews_data: payload,
        isLoading: false,
      };
    case MY_REVIEW_FAILURE:
      return {
        ...state,
        isError: true,
      };
      case REVIEW_DELETE_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case REVIEW_DELETE_SUCCESS:
      return {
        ...state,
        isLoading: false,
      };
    case REVIEW_DELETE_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    default:
      return state;
  }
};
