import { JOB_BY_ID_REQUEST, JOB_BY_ID_SUCCESS, JOB_BY_ID_FAILURE } from "./actionTypes";

const initState = {
  isLoading: true,
  isError: false,
  jobs_data: '',
};

export const jobsByIdReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case JOB_BY_ID_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case JOB_BY_ID_SUCCESS:
      return {
        ...state,
        jobs_data: payload,
        isLoading: false,
      };
    case JOB_BY_ID_FAILURE:
      return {
        ...state,
        isError: true,
      };
    default:
      return state;
  }
};
