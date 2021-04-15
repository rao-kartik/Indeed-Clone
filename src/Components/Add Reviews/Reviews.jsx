import React, { useState } from 'react';
import { useParams } from 'react-router';
import { Popup } from '../CompanyReviews/popup';
import style from './Reviews.module.css'
import styled from 'styled-components';

const H1 = styled.h1`
    font-size:19.95px;
    margin:0px 0px 15px;
    padding:24px 0px 0px;
`;
export const Reviews=()=>{
    const [isOpen, setIsOpen] = useState(false);
    const togglePopup = () => {
        setIsOpen(!isOpen);
    }
    const compname = useParams();
    return(
        <div style={{backgroundColor:'#f5f5f5'}}>
            <div className={style.container}>
            <div>
                <div>
                    <img src="" alt="company logo"/>
                </div>
                <div>
                    <span style={{fontSize:'22px'}}>Please help answer these questions about {compname.id}</span>
                    <span style={{fontSize:'14px'}}>Your honest responses help other job seekers and it’s anonymous </span>
                </div>
                
                <button onClick={togglePopup} className={style.icon}></button>
                {isOpen && <Popup content={<>
                <span>Your name and email address will NOT appear next to your review. Please note, however, that Indeed may disclose your information in response to legal process or requests. See our Terms of Service for more information.</span>
            </>} handleClose={togglePopup}/>}
            </div>

            <div>
                <H1>Would you recommend working at {compname.id} to a friend?</H1>
                <button type="button" id="btn1" check>Choice 1</button>
<button type="button" id="btn2">Choice 2</button>
<button type="button" id="btn3">Choice 3</button>
            </div>
            <div>
                <h1>Do you think you are paid fairly at {compname.id}?</h1>
            </div>
            <div>
                <h1>Do you feel like your salary at {compname.id} is enough for the cost of living in your area?</h1>
            </div>
            <div>
                <h1>How would you describe the work culture at {compname.id}?</h1>
                <p>Choose all that are applicable:</p>
            </div>
            <div>
                <h1>Please rate your overall interview experience at {compname.id}.</h1>
            </div>
            <div>
                <h1>Please rate the level of difficulty of your interview at {compname.id}.</h1>
            </div>
            <div>
                <h1>How long did it take from the beginning of the interview process at {compname.id} until you received your job offer?</h1>
            </div>
            <div>
                <h1>How would you recommend dressing for an interview at {compname.id}?</h1>
                <p>Choose all that are applicable:</p>
            </div>
            <div>
                <h1>What kinds of interview activities did you have at {compname.id} ?</h1>
                <p>Choose all that are applicable:</p>
            </div>
            </div>
        </div>
    )
}