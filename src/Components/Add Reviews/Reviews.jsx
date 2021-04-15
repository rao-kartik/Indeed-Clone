import React, { useState,useEffect } from 'react';
import { useParams } from 'react-router';
import { Popup } from '../CompanyReviews/popup';
import style from './Reviews.module.css'
import styled from 'styled-components';
import axios from "axios";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { companiesRequest, companiesSuccess, companiesFailure } from "../../Redux/company/action";
import { OptionButtonLeft,OptionButtonRight, SelectButton,RatingButton } from '../../Custom UI/ACustomUI';
import Rating from 'react-rating'

const H1 = styled.h1`
    font-size:19.95px;
    margin:0px 0px 15px;
    padding:24px 0px 0px;
`;
export const Reviews=()=>{
    
    const compname = useParams();
    const dispatch = useDispatch();
  const { isLoading, isError,companies } = useSelector(
    (state) => state.company,
    shallowEqual
  );

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
    const [isOpen, setIsOpen] = useState(false);
    const togglePopup = () => {
        setIsOpen(!isOpen);
    }
    return(
        <div style={{backgroundColor:'#f5f5f5'}}>
            <div className={style.container}>
            <div style={{display:'flex'}}>
                <div>
                    <img src={companies} alt="company logo" style={{width:'100px',height:'100px', border:'1px solid #f5f5f5'}}/>
                </div>
                <div style={{marginTop:'24px',marginLeft:'15px'}}>
                    <span style={{fontSize:'22px'}}>Please help answer these questions about {compname.id}</span><br/>
                    <span style={{fontSize:'14px'}}>Your honest responses help other job seekers and it’s anonymous </span>
                    <button onClick={togglePopup} className={style.icon}></button>
                </div>
                {isOpen && <Popup content={<>
                <span>Your name and email address will NOT appear next to your review. Please note, however, that Indeed may disclose your information in response to legal process or requests. See our Terms of Service for more information.</span>
            </>} handleClose={togglePopup}/>}
            </div>
            <div>
                <H1>Would you recommend working at {compname.id} to a friend?</H1>
                <OptionButtonLeft>Yes</OptionButtonLeft>
                <OptionButtonRight>No</OptionButtonRight>
            </div>
            <div>
                <H1>Do you think you are paid fairly at {compname.id}?</H1>
                <OptionButtonLeft>Yes</OptionButtonLeft>
                <OptionButtonRight>No</OptionButtonRight>
            </div>
            <div>
                <H1>Do you feel like your salary at {compname.id} is enough for the cost of living in your area?</H1>
                <OptionButtonLeft>Yes</OptionButtonLeft>
                <OptionButtonRight>No</OptionButtonRight>
            </div>
            <div style={{height:'200px'}}>
                <H1>How would you describe the work culture at {compname.id}?</H1>
                <p>Choose all that are applicable:</p>
                <SelectButton>Relaxed</SelectButton>
                <SelectButton>Fast-paced</SelectButton>
                <SelectButton>Stressful</SelectButton>
                <SelectButton>Collaborative</SelectButton>
                <SelectButton>Competitive</SelectButton>
                <SelectButton>Slow-paced</SelectButton>
                <SelectButton>Not sure</SelectButton>
            </div>
            <div>
                <H1>Please rate your overall interview experience at {compname.id}.</H1>
                <RatingButton>1</RatingButton>
                <RatingButton>2</RatingButton>
                <RatingButton>3</RatingButton>
                <RatingButton>4</RatingButton>
                <RatingButton>5</RatingButton>
            </div>
            <div>
                <H1>Please rate the level of difficulty of your interview at {compname.id}.</H1>
                <RatingButton>1</RatingButton>
                <RatingButton>2</RatingButton>
                <RatingButton>3</RatingButton>
                <RatingButton>4</RatingButton>
                <RatingButton>5</RatingButton>
            </div>
            <div>
                <H1>How long did it take from the beginning of the interview process at {compname.id} until you received your job offer?</H1>
            </div>
            <div>
                <H1>How would you recommend dressing for an interview at {compname.id}?</H1>
                <p>Choose all that are applicable:</p>
            </div>
            <div>
                <H1>What kinds of interview activities did you have at {compname.id} ?</H1>
                <p>Choose all that are applicable:</p>
            </div>
            </div>
        </div>
    )
}