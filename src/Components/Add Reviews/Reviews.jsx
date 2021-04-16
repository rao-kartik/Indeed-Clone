import React, { useState,useEffect } from 'react';
import { useHistory, useParams } from 'react-router';
import { Popup } from '../CompanyReviews/popup';
import style from './Reviews.module.css'
import styled from 'styled-components';
import axios from "axios";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { companiesRequest, companiesSuccess, companiesFailure } from "../../Redux/company/action";
import { OptionButtonLeft,OptionButtonRight, SelectButton,RatingButton, Input, Button } from '../../Custom UI/ACustomUI';
import { ReviewsRateTop } from './ReviewsRateTop';
import { ReviewsRateBottom } from './ReviewsRateBottom';
import { Footer } from './Footer';

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
  const history = useHistory();
  const handleContinue=()=>{
    history.push(`/companies/review/survey/${compname.id}`)
  }

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
    const [recoColor,setRecoColor] = React.useState();
    const onChangeReco = (e) => {
        const{value}=e.target;
        setRecoColor(value);
     }
     const [fair,setFair] = React.useState();
    const onChangeFair = (e) => {
        const{value}=e.target;
        setFair(value);
     }
     const [salary,setSalary] = React.useState();
    const onChangeSalary = (e) => {
        const{value}=e.target;
        setSalary(value);
     }
     const [cult,setCult] = React.useState([]);
    const onChangeCult = (e) => {
        const{value}=e.target;
        // cult = cult.filter(item => item !== value)
        if(cult.includes(Number(value))){
            setCult(cult.filter(item => item !== Number(value)))
        }
        else{
            setCult([...cult,Number(value)]);
        }
        console.log(cult);
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
                <OptionButtonLeft value={1} style={recoColor==1?{background:'#085ff7',color:'white'}:{background:'transparent',color:'#085ff7'}} onClick={onChangeReco}>Yes</OptionButtonLeft>
                <OptionButtonRight value={2} style={recoColor==2?{background:'#085ff7',color:'white'}:{background:'transparent',color:'#085ff7'}} onClick={onChangeReco}>No</OptionButtonRight>
            </div>
            <div>
                <H1>Do you think you are paid fairly at {compname.id}?</H1>
                <OptionButtonLeft value={1} style={fair==1?{background:'#085ff7',color:'white'}:{background:'transparent',color:'#085ff7'}} onClick={onChangeFair}>Yes</OptionButtonLeft>
                <OptionButtonRight value={2} style={fair==2?{background:'#085ff7',color:'white'}:{background:'transparent',color:'#085ff7'}} onClick={onChangeFair}>No</OptionButtonRight>
            </div>
            <div>
                <H1>Do you feel like your salary at {compname.id} is enough for the cost of living in your area?</H1>
                <OptionButtonLeft value={1} style={salary==1?{background:'#085ff7',color:'white'}:{background:'transparent',color:'#085ff7'}} onClick={onChangeSalary}>Yes</OptionButtonLeft>
                <OptionButtonRight value={2} style={salary==2?{background:'#085ff7',color:'white'}:{background:'transparent',color:'#085ff7'}} onClick={onChangeSalary}>No</OptionButtonRight>
            </div>
            <div style={{height:'200px'}}>
                <H1>How would you describe the work culture at {compname.id}?</H1>
                <p>Choose all that are applicable:</p>
                <SelectButton value={1} style={cult.includes(1)?{background:'#085ff7',color:'white'}:{background:'transparent',color:'#085ff7'}} onClick={onChangeCult}>Relaxed</SelectButton>
                <SelectButton value={2} style={cult.includes(2)?{background:'#085ff7',color:'white'}:{background:'transparent',color:'#085ff7'}} onClick={onChangeCult}>Fast-paced</SelectButton>
                <SelectButton value={3} style={cult.includes(3)?{background:'#085ff7',color:'white'}:{background:'transparent',color:'#085ff7'}} onClick={onChangeCult}>Stressful</SelectButton>
                <SelectButton value={4} style={cult.includes(4)?{background:'#085ff7',color:'white'}:{background:'transparent',color:'#085ff7'}} onClick={onChangeCult}>Collaborative</SelectButton>
                <SelectButton value={5} style={cult.includes(5)?{background:'#085ff7',color:'white'}:{background:'transparent',color:'#085ff7'}} onClick={onChangeCult}>Competitive</SelectButton>
                <SelectButton value={6} style={cult.includes(6)?{background:'#085ff7',color:'white'}:{background:'transparent',color:'#085ff7'}} onClick={onChangeCult}>Slow-paced</SelectButton>
                <SelectButton value={7} style={cult.includes(7)?{background:'#085ff7',color:'white'}:{background:'transparent',color:'#085ff7'}} onClick={onChangeCult}>Not sure</SelectButton>
            </div>
            <ReviewsRateTop compname={compname.id}/>
            <ReviewsRateBottom compname={compname.id}/>           
            <div style={{textAlign:'center',height:'100px'}}>
            <Button style={{width:'300px',marginTop:'20px'}} onClick={handleContinue}>Continue</Button>
            </div>
            </div>
            <Footer/>
        </div>
    )
}