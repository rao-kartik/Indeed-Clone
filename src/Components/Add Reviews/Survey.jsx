import React, { useState,useEffect } from 'react';
import { useHistory, useParams } from 'react-router';
import { Popup } from '../CompanyReviews/popup';
import style from './Reviews.module.css'
import styled from 'styled-components';
import axios from "axios";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { companiesRequest, companiesSuccess, companiesFailure } from "../../Redux/company/action";
import { OptionButtonLeft,OptionButtonRight, SelectButton,RatingButton, Input, Button } from '../../Custom UI/ACustomUI';
import ReactStars from "react-rating-stars-component";
import { SurveyTopPart } from './SurveyTopPart';

const H1 = styled.h1`
    font-size:19.95px;
    margin:0px 0px 15px;
    padding:24px 0px 0px;
`;

export const Survey =()=>{
    const compname = useParams();
    const dispatch = useDispatch();
    const { isLoading, isError,companies } = useSelector(
        (state) => state.company,
        shallowEqual
    );
    const ratingChanged = (newRating) => {
        console.log(newRating);
    };
    const history = useHistory();
    const handleFinish=()=>{
    
    }
    return(
        <div style={{backgroundColor:'#f5f5f5'}}>
            <div className={style.container}>
            
            <SurveyTopPart/>
            <div style={{height:'250px'}}>
                <H1 style={{float:'left'}}>Rate this company</H1>
                <p style={{color:'red',float:'right',margin:'3%'}}>*required</p>
                <div style={{clear:'both'}}></div>
                <table>
                    <tr>
                        <td>Overall rating</td>
                        <td><ReactStars count={5} onChange={ratingChanged} size={24} activeColor="#ffd700"/></td>
                    </tr>
                    <tr>
                        <td>Job Work/Life Balance</td>
                        <td><ReactStars count={5} onChange={ratingChanged} size={24} activeColor="#ffd700"/></td>
                    </tr>
                    <tr>
                        <td>Salary/Benefits</td>
                        <td><ReactStars count={5} onChange={ratingChanged} size={24} activeColor="#ffd700"/></td>
                    </tr>
                    <tr>
                        <td>Job Security/Advancement</td>
                        <td><ReactStars count={5} onChange={ratingChanged} size={24} activeColor="#ffd700"/></td>
                    </tr>
                    <tr>
                        <td>Management</td>
                        <td><ReactStars count={5} onChange={ratingChanged} size={24} activeColor="#ffd700"/></td>
                    </tr>
                </table>
            </div>
            <div style={{height:'500px'}}>
                <H1>Write your review</H1>
                <p>Review Summary</p>
                <Input type="text" placeholder='Example: Productive and fun workplace'/>
                <p>Your Review</p>
                <textarea placeholder='Example: Productive and fun workplace'/>
                <div>
                    <p>Give us your opinion about</p>
                    <li>a typical day at work</li>
                    <li>what you learned</li>
                    <li>management</li>
                    <li>workplace culture</li>
                    <li>the hardest part of the job</li>
                    <li>the most enjoyable part of the job</li>
                    <p>DO NOT include confidential company information or personally identifiable information, such as names.<br/>
                    Your company review and job title will be shown publicly on Indeed.</p>
                </div>
                <p>Pros</p>
                <Input type="text" placeholder='Example: Free lunches'/>
                <p>Cons</p>
                <Input type="text" placeholder='Example: Long hours'/>
            </div>
            <div>
                <H1>Tell us about you</H1>
                <p>Job Title at {compname.id}</p>
                <Input type="text"/>
                <p>Job Location at {compname.id}</p>
                <Input type="text"/>
                
            </div>
            <div style={{textAlign:'center'}}>
            <Button style={{width:'300px'}} onClick={handleFinish}>Finish</Button>
            </div>
            </div>
        </div>
    )
}