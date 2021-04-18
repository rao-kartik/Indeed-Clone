import React, { useEffect,useState } from 'react';
import { Link, Redirect, useHistory } from 'react-router-dom';
import {Button,Input,H1,P,Label} from '../../Custom UI/ACustomUI';
import style from './CompanySearch.module.css';
import Select from 'react-select'
import styled from 'styled-components'
import axios from "axios";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { companiesRequest, companiesSuccess, companiesFailure } from "../../Redux/company/action";

export const CompanySearch=()=>{
  useEffect(()=>{
    document.title = 'Find the Best Companies Hiring Now | Indeed.com';
  });
  const dispatch = useDispatch();
  const { isLoading, isError,companies } = useSelector((state) => state.company,shallowEqual);

  const getData = () => {
    const requestAction = companiesRequest();
    dispatch(requestAction);
    axios
      .get("https://json-server-mocker-ajmal.herokuapp.com/companies")
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
  const [searchText,setSearchText] = useState('');
  const history = useHistory();
  const handleSearch=()=>{
      history.push(`/companies/search/${searchText}`);
  }
  return(
        <div className={style.container}>
            <H1>Find great places to work</H1>
            <P>Discover millions of company reviews</P>
            <div style={{marginTop:'3%'}}>
                <div>
                    <Input className={style.inputCompany} onChange={(e)=>setSearchText(e.target.value)} placeholder='Enter a company name'/><br/>
                    <Link to='/career/salaries' style={{ textDecoration: 'none',color:'#085ff7',fontSize:'13px' }}>Do you want to search for salaries?</Link>
                </div>
                <div>
                </div>
                <div style={{marginTop:'1%',textAlign:'center'}}>
                    <Button onClick={handleSearch}>Find Companies</Button>                    
                </div>
            </div>           
        </div>
    )
}