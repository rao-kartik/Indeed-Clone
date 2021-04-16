import React, { useEffect } from 'react';
import { useHistory, useParams } from 'react-router';
import styled from 'styled-components';
import axios from "axios";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { companiesRequest, companiesSuccess, companiesFailure } from "../../Redux/company/action";
import {searchRequest, searchSuccess, searchFailure } from '../../Redux/FindCompanyId/action'
import { CompanyRating } from './CompaniesRating';
import style from '../Add Reviews/Reviews.module.css'
const Div = styled.div`
    &:hover{
        border:2px solid #949494;
    }
`;
export const CompanySearchPage=()=>{
    const compname = useParams();
    const { isLoading, isError,companies } = useSelector(
        (state) => state.company,
        shallowEqual
      );
      const dispatch=useDispatch();
    const getData = () => {
        const requestAction = companiesRequest();
        dispatch(requestAction);
        axios
          .get("https://json-server-mocker-ajmal.herokuapp.com/companies",{
              params:{
                company_name:compname.id
              }
          })
          .then((res) => {
            const successAction = companiesSuccess(res.data[0]);
            console.log(res.data[0].company_logo);
            dispatch(successAction);
          })
          .catch((err) => {
            const failureAction = companiesFailure(err);
            dispatch(failureAction);
          });
      };
      useEffect(()=>{
          getData();
          getId();
      },[])
      const history = useHistory();
      const handleClick=()=>{
          history.push(`/career/salaries/${data}`)
      }

      const { data } = useSelector(
        (state) => state.findCompanyReducer,
        shallowEqual
      );
    const getId = () => {
        const requestAction = searchRequest();
        dispatch(requestAction);
        axios
          .get("https://json-server-mocker-robin.herokuapp.com/tpcompanies",{
              params:{
                name:compname.id
              }
          })
          .then((res) => {
            const successAction = searchSuccess(res.data[0].id);
            console.log(res.data[0].id);
            dispatch(successAction);
          })
          .catch((err) => {
            const failureAction = searchFailure(err);
            dispatch(failureAction);
          });
      };
    return(
        <div style={{marginTop:'20px',backgroundColor:'#f5f5f5',height:'100vh'}}>
            <CompanyRating/>
            <div className={style.container}>
            <Div style={{display:'flex'}} onClick={handleClick}>
                <div>
                    <img src={companies.company_logo} alt="company logo" style={{width:'100px',height:'100px', border:'1px solid #f5f5f5'}}/>
                </div>
                <div style={{marginTop:'24px',marginLeft:'15px'}}>
                    <span style={{fontSize:'22px'}}>{compname.id}</span><br/>
                    <span style={{fontSize:'14px'}}><b>{companies.rating} </b>based on {companies.total_reviews} Reviews</span>
                </div>
            </Div>
            </div>
        </div>
    )
}