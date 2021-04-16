import React, { useState,useEffect } from 'react';
import { useHistory, useParams } from 'react-router';
import { Popup } from '../CompanyReviews/popup';
import style from './Reviews.module.css'
import styled from 'styled-components';
import axios from "axios";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { companiesRequest, companiesSuccess, companiesFailure } from "../../Redux/company/action";
import { OptionButtonLeft,OptionButtonRight, SelectButton,RatingButton, Input, Button } from '../../Custom UI/ACustomUI';

export const SurveyTopPart =()=>{
    const compname = useParams();
    const dispatch = useDispatch();
  const { isLoading, isError,companies } = useSelector(
    (state) => state.company,
    shallowEqual
  );
    const [isOpen, setIsOpen] = useState(false);
    const togglePopup = () => {
        setIsOpen(!isOpen);
    }
    const getData = () => {
        const requestAction = companiesRequest();
        dispatch(requestAction);
        axios
          .get("http://localhost:3004/companies",{
              params:{
                company_name:compname.id
              }
          })
          .then((res) => {
            const successAction = companiesSuccess(res.data[0].company_logo);
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
      },[])
    return(
        <div style={{display:'flex'}}>
                <div>
                    <img src={companies} alt="company logo" style={{width:'100px',height:'100px', border:'1px solid #f5f5f5'}}/>
                </div>
                <div style={{marginTop:'24px',marginLeft:'15px'}}>
                    <span style={{fontSize:'22px'}}>Take a minute to review {compname.id}.</span><br/>
                    <span style={{fontSize:'14px'}}>Your anonymous feedback will help fellow jobseekers </span>
                    <button onClick={togglePopup} className={style.icon}></button>
                    <li style={{fontSize:'14px'}}><span>Company reviews are <b>NEVER</b> attached to your job applications</span></li>
                    <li style={{fontSize:'14px'}}><span>The reviews <b>ONLY</b> include star ratings, review text, job title, location and review date</span></li>
                </div>
                {isOpen && <Popup content={<>
                <span>Your name and email address will NOT appear next to your review. Please note, however, that Indeed may disclose your information in response to legal process or requests. See our Terms of Service for more information.</span>
            </>} handleClose={togglePopup}/>}
            </div>
    )
}