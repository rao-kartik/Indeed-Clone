import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { Input } from '../../Custom UI/ACustomUI';
import { Button } from '../../Custom UI/KCustomUI';

const H1 = styled.h1`
    font-size:26px;
`;
const H2 = styled.h1`
    font-size:16px;
    font-weight:bold;
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
    return(
        <Container>
            <H1>Questions from CommerceIQ</H1>
            <H2>How many years of business analyst experience do you have?</H2>
            <Input style={{width:'100%'}}/>
            <H2>What is the highest level of education you have completed?</H2>
            <Input style={{width:'100%'}}/>
            <H2>What is your expected CTC?(optional)</H2>
            <Input style={{width:'100%'}}/>
            <H2>This question was written by the employer. You can report inappropriate questions to Indeed by exiting this application and clicking the blue "Report Job" job link below the job description. "Looking for product based industry experience from tier 1 /tier 2 colleges(NIT ,BIT, IIT,IIIT, BITS)"(optional)</H2>
            <textarea style={{width:'100%', height:'200px'}}/>
            <div style={{display:'flex'}}>
            <Button style={{background:'transparent',color:'blue'}} onClick={handleReturn}>Return to Job Search</Button>
            <Button>Continue</Button>
            </div>
        </Container>
    )
}