import { COMPANIES_REQUEST, COMPANIES_SUCCESS, COMPANIES_FAILURE } from "./actionTypes";

const initState = {
  companies:[],
  company_logo:'',
  company_info:'',
  isError: false,
  isLoading: false
};

export const companyReducer = (state = initState, { type, payload, payload_logo, payload_info }) => {
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
        company_logo:payload_logo,
        company_info:payload_info,
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