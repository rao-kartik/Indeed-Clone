import { FIND_RESUME_REQUEST, FIND_RESUME_SUCCESS, FIND_RESUME_FAILURE } from "./actionTypes";

const initState = {
  isLoading: true,
  isError: false,
  data: '',
};

export const findResumeReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case FIND_RESUME_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case FIND_RESUME_SUCCESS:
      return {
        ...state,
        data: payload,
        isLoading: false,
      };
    case FIND_RESUME_FAILURE:
      return {
        ...state,
        isError: true,
      };
    default:
      return state;
  }
};
