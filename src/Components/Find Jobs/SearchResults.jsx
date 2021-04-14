import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { SearchResult } from '../../Custom UI/KCustomUI';

const Container = styled.div`

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

export const SearchResults = ({title, location,  company_name, salary, category, publication_date}) => {

    const data = useSelector(state=> state.findReducer.data)
    console.log(data)

    const month = publication_date[5] + publication_date[6]

    const date = publication_date[8] + publication_date[9]

    let days;

    month == '02' ? days = 28 : 
    month == '01' || month == '03' || month == '05' || month == '07' || month == '08' || month == '10' || month == '12' ? days= 31 : 
    days = 30

    const totalTime = +date + days
    
    return (
            <SearchResult>
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
            </SearchResult>
    )
}
