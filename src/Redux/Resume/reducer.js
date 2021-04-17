import { SEND_RESUME_FAILURE, SEND_RESUME_REQUEST, SEND_RESUME_SUCCESS } from "./actionTypes";


const initState = {
  isLoading: false,
  isError: false,
  data:'',
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
    default:
      return state;
  }
};
