import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { Input } from '../../Custom UI/ACustomUI';
import { Button } from '../../Custom UI/KCustomUI';
import { Popup } from '../CompanyReviews/popup';
import { ApplyFormResume } from './ApplyFormResume';

const H1 = styled.h1`
    font-size:26px;
`;
const H2 = styled.h1`
    font-size:16px;
    font-weight:bold;
    margin-top:10px;
    margin-bottom:10px;
`;
const Container = styled.div`
    width:50%;
    margin:auto;
    margin-top:3%;
    padding:2%;
`;
export const ApplyForm=()=>{
    const history = useHistory();
    const handleReturn=()=>{
        console.log('aaa');
        history.push('/')
    }
    const[isContinue,setIsContinue] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const togglePopup = () => {
        setIsOpen(!isOpen);
    }
    useEffect(() => {
        window.scrollTo(0, 0)
      }, []);
      const inputData = {
        years:"",
        education:"",
        ctc:"",
        question:""
    }
    const [inpData, setInpData] = React.useState(inputData);

    const{years,education,ctc,question}=inpData
    const handleChange=(e)=>{
        let {name,value,type} = e.target;
        setInpData((prev)=>({...prev,[name]:value}))
    }
    const handleContinue=()=>{
        console.log('aaa');
        if(years.length==0 || education.length ==0 ){
            setIsContinue(false);
        }
        {
            setIsContinue(true)
        }
    }
    return !isContinue?(
        <Container>
            <H1>Questions from CommerceIQ</H1>
            <H2>How many years of business analyst experience do you have?</H2>
            <Input type="text" value={years} name='years' onChange={handleChange}  style={{width:'100%'}}/>
            <H2>What is the highest level of education you have completed?</H2>
            <Input type="text" value={education} name='education' onChange={handleChange}  style={{width:'100%'}}/>
            <H2>What is your expected CTC?(optional)</H2>
            <Input type="text" value={ctc} name='ctc' onChange={handleChange}   style={{width:'100%'}}/>
            <H2>This question was written by the employer. You can report inappropriate questions to Indeed by exiting this application and clicking the blue "Report Job" job link below the job description. "Looking for product based industry experience from tier 1 /tier 2 colleges(NIT ,BIT, IIT,IIIT, BITS)"(optional)</H2>
            <textarea  value={question} name='question' onChange={handleChange}   style={{width:'100%', height:'200px'}}/>
            <div style={{display:'flex'}}>
            <Button style={{background:'transparent',color:'blue'}} onClick={togglePopup}>Return to Job Search</Button>
            <Button onClick={handleContinue}>Continue</Button>
            </div>
            {isOpen && <Popup content={<>
            <b>Are you sure you want to exit? Your application will not be saved.</b><br/>
            <Button style={{width:'120px',margin:'auto',marginTop:'20px'}} onClick={handleReturn} >Exit</Button>
            <Button style={{width:'120px',margin:'auto',marginTop:'10px',backgroundColor:'white',color:'blue'}} onClick={togglePopup} >Cancel</Button>
            </>} handleClose={togglePopup}/>}
        </Container>
    ):<Container>
        <ApplyFormResume/>
    </Container>
}