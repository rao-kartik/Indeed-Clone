import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import styled from 'styled-components';
import { deleteJobs, getJobs } from '../../Redux/Admin/action';

const Container = styled.div`
    width: 430px;
    border: 1px solid #d4d2d0;
    border-radius: 5px;
    margin: 10px;
    padding: 20px;
    position: relative;

    &:hover {
        cursor: pointer;
    }
`;

const P = styled.p`
    margin: 4px 0;
    font-size: 14px;
`;

const H2 = styled.h3`

`;

const Hiring = styled.div`
    display: flex;
`;

const TimeCont = styled.div`
    display: flex;
`;

const Time=styled.p`
    font-size: 10px;
    color: #767676;
    margin: 0 20px 0 0;
`;

const Delete = styled.div`
    position: absolute;
    right: 20px;
    bottom: 10px;
`;

export const AdminJobsResult = ({id, title, location,  company_name, salary, category, publication_date}) => {

    const dispatch = useDispatch();
    const history = useHistory();

    const month = publication_date[5] + publication_date[6]

    const date = publication_date[8] + publication_date[9]

    let days;

    month == '02' ? days = 28 : 
    month == '01' || month == '03' || month == '05' || month == '07' || month == '08' || month == '10' || month == '12' ? days= 31 : 
    days = 30

    const totalTime = +date + days

    const handleDelete = (id)=>{
        dispatch(deleteJobs(id));
        history.push('/account/admin/jobs')
    }
    
    return (
            <Container>
                <H2>{title}</H2>
                <P>{company_name}</P>
                <P>{location}</P>
                <h5>₹{salary} a month</h5>
                <P><span style={{color:'#1c56ac', fontSize:'16px', position:'Relative', top:'3px'}} class="material-icons">send</span> Apply Securely with Indeed Resume</P>
                <Hiring>
                    <P><span style={{color:'#1c56ac', fontSize:'18px', position:'Relative', top:'3px'}} class="material-icons">bolt</span> Responsive employer</P>
                    <P style={{position: 'relative', top:'5px', left:'80px'}} >Urgently hiring</P>
                </Hiring>
                <P>{category}</P>
                <TimeCont>
                    <Time>{totalTime} days ago</Time>
                    <Time style={{color:'blue', cursor:'pointer'}}>Save Job</Time>
                </TimeCont>
                <Delete onClick={()=>handleDelete(id)}><span class="material-icons-outlined">delete</span></Delete>
            </Container>
    )
}
