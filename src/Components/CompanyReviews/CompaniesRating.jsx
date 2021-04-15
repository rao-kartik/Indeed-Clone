import React from 'react';
import { useState } from 'react';
import { Input,Button } from '../../Custom UI/ACustomUI';
import {Popup} from './popup';
import styled from 'styled-components';
import styles from './popup.module.css';
import { Redirect, useHistory } from 'react-router';

const H1 = styled.h1`
    font-size:20px;
    float:left;
`;
const Div = styled.div`
    float:right;
    border-radius:25.5px;
    background-color:#f3f2f1;
    padding:5px;
`;
const StarButton = styled.button`
background-color: transparent;
    border: none;
    outline: none;
    cursor: pointer;
`;
export const CompanyRating=()=>{
    const [isOpen, setIsOpen] = useState(false);
    const togglePopup = () => {
        setIsOpen(!isOpen);
    }
    const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [companyName,setCompanyName] = useState("");
  const history = useHistory();
  const handleNext=()=>{
    console.log(companyName);
    history.push(`/companies/review/${companyName}`)
  }
    return(
        <div style={{width:'70%',margin:'auto',borderTop:'6px solid #ff5a1f',backgroundColor:'white'}}>
            <div style={{marginTop:'20px'}}>
            <H1>Rate your recent company:</H1>
            {/* <InputStar type="button" value="Rate" onClick={togglePopup}/> */}
            <Div>
      {[...Array(5)].map((star, index) => {
        index += 1;
        return (
          <StarButton
            type="button"
            key={index}
            className={index <= (hover || rating) ? "on" : "off"}
            onClick={() => setRating(index),togglePopup}
            onMouseEnter={() => setHover(index)}
            onMouseLeave={() => setHover(rating)}
          >
            <span style={{fontSize:'30px'}}>&#9733;</span>
          </StarButton>
        );
      })}
    </Div>
            </div>
            <div style={{clear:'both',marginBottom:'20px'}}></div>
            {isOpen && <Popup content={<>
            <b>Rate a company you've worked for in the past 3 years</b><br/>
            <Input placeholder='Enter a Company Name' style={{width:'400px'}} onChange={(e)=>setCompanyName(e.target.value)}/><br/>
            <Button style={{width:'172px',marginTop:'10px'}} onClick={handleNext}>Next</Button>
            </>} handleClose={togglePopup}/>}
        </div>
    )
}