import { COMPANIES_REQUEST, COMPANIES_SUCCESS, COMPANIES_FAILURE } from "./actionTypes";

const companiesRequest = () => {
  return {
    type: COMPANIES_REQUEST
  };
};

const companiesSuccess = (payload) => {
  return {
    type: COMPANIES_SUCCESS,
    payload
  };
};

const companiesFailure = (err) => {
  return {
    type: COMPANIES_FAILURE,
    payload: err
  };
};

export { companiesRequest, companiesSuccess, companiesFailure };
