import React, { useEffect,useState } from 'react';
import { Link } from 'react-router-dom';
import {Button,Input,H1,P,Label} from '../../Custom UI/ACustomUI';
import style from './CompanySearch.module.css';
import Select from 'react-select'
import axios from "axios";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { companiesRequest, companiesSuccess, companiesFailure } from "../../Redux/company/action";

export const CompanySearch=()=>{
    useEffect(()=>{
        document.title = 'Find the Best Companies Hiring Now | Indeed.com';
    });
    const options = [
        { value: 'Amazon', label: 'Amazon' },
        { value: 'Google', label: 'Google' },
        { value: 'Facebook', label: 'Facebook' }
      ]
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
        console.log(res.data);
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
        <div className={style.container}>
            <P>Get access to millions of company reviews</P>
            <H1>Find great places to work</H1>
            <div style={{marginTop:'3%'}}>
                <div>
                <Label>
                    Company name or job title
                    <Input className={style.inputCompany}/>
                </Label>
                </div>
                <div>
                <Label>
                    City, state, or zip (optional)
                    <Input className={style.inputLocation}/>
                    {/* <Select options={options} placeholder='Enter a company name' components={{ DropdownIndicator:() => null, IndicatorSeparator:() => null }} style={{width:'150px'}}/> */}
                </Label>
                </div>
                <div style={{marginTop:'2%',textAlign:'center'}}>
                    <Button>Find Companies</Button><br/>
                    <Link style={{ textDecoration: 'none',color:'#085ff7',fontSize:'13px' }}>Do you want to search for salaries?</Link>
                </div>
            </div>           
        </div>
    )
}