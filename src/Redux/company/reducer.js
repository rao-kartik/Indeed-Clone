import { COMPANIES_REQUEST, COMPANIES_SUCCESS, COMPANIES_FAILURE } from "./actionTypes";

const initState = {
  companies:[],
  isError: false,
  isLoading: false
};

export const companyReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case COMPANIES_REQUEST: {
      return {
        ...state,
        isLoading: true,
        isError: false
      };
    }
    case COMPANIES_SUCCESS: {
      return {
        ...state,
        companies: payload,
        isLoading: false
      };
    }
    case COMPANIES_FAILURE: {
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