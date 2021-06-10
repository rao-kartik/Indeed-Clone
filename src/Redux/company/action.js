import {
  COMPANIES_REQUEST,
  COMPANIES_SUCCESS,
  COMPANIES_FAILURE,
} from "./actionTypes";
import Axios from "axios";

const axios = Axios.create({
  baseURL: "https://json-server-mocker-ajmal.herokuapp.com/",
});
const companiesRequest = () => {
  return {
    type: COMPANIES_REQUEST,
  };
};

const companiesSuccess = (payload, payload_logo, payload_info) => {
  return {
    type: COMPANIES_SUCCESS,
    payload,
    payload_logo,
    payload_info,
  };
};

const companiesFailure = (err) => {
  return {
    type: COMPANIES_FAILURE,
    payload: err,
  };
};
export const getCompanies = () => (dispatch) => {
  dispatch(companiesRequest());
  const config = {
    url: `/companies`,
    method: "get",
  };
  axios(config)
    .then((res) => {
      dispatch(companiesSuccess(res.data, "", ""));
    })
    .catch((err) => {
      dispatch(companiesFailure(err));
    });
};

export const getCompanyLogo = (params) => (dispatch) => {
  dispatch(companiesRequest());
  const config = {
    url: `/companies`,
    method: "get",
    params: {
      company_name: params,
    },
  };
  axios(config)
    .then((res) => {
      dispatch(companiesSuccess([], res.data[0].company_logo, ""));
    })
    .catch((err) => {
      dispatch(companiesFailure(err));
    });
};
export const getCompanySearch = (params) => (dispatch) => {
  dispatch(companiesRequest());
  const config = {
    url: `/companies`,
    method: "get",
    params: {
      company_name: params,
    },
  };
  axios(config)
    .then((res) => {
      if (res.data.length !== 0) {
        dispatch(companiesSuccess([], "", res.data[0]));
      }
    })
    .catch((err) => {
      dispatch(companiesFailure(err));
    });
};
