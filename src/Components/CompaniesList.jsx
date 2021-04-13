import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { companiesRequest, companiesSuccess, companiesFailure } from "../Redux/company/action";
import { CompaniesListItem } from "./CompaniesListItem";

export const CompanyList=()=>{
    const dispatch = useDispatch();
  const { isLoading, isError,companies } = useSelector(
    (state) => state.company,
    shallowEqual
  );

  const getData = () => {
    const requestAction = companiesRequest();
    dispatch(requestAction);
    axios
      .get("http://localhost:3004/companies")
      .then((res) => {
        const successAction = companiesSuccess(res.data);
        dispatch(successAction);
      })
      .catch((err) => {
        const failureAction = companiesFailure(err);
        dispatch(failureAction);
      });
  };
  useEffect(()=>{
      getData();
  },[])
    return(
        <div>
            <h1>Companies Hiring Now</h1>
            {companies.map(item=>
              <CompaniesListItem item={item}/>)}
        </div>
    )
}