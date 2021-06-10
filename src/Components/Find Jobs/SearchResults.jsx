import React from 'react';
import styled from 'styled-components';
import { SearchResult } from '../../Custom UI/stylesHome';

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

export const SearchResults = ({title, location, job_type,  company_name, salary, category, publication_date, id, handleChangeById}) => {

    let pubMonth = `${publication_date[5]}${publication_date[6]}`;

    let pubDay = `${publication_date[8]}${publication_date[9]}`;

    let pDays = 0;
    let pDay;
    for(let i = 1; i < +pubMonth; i++){
        if(i < 10){
            let pubMon = `0${i}`;
            if (pubMon === '02'){pDay = 28}
            else if (pubMon === '04' || pubMon === '06' || pubMon === '09' || pubMon === '11'){pDay = 30}
            else {pDay = 31}
        }
        else if(i >= 10){
            let pubMon = i;
            if (pubMon === '11'){pDay = 30}
            else {pDay = 31}
        }
        pDays += pDay;
    }

    const pTotDays = pDays + +pubDay;

    const currentDate = new Date();

    let day = currentDate.getDate();
    let month = currentDate.getMonth()+1;

    let curDays = 0;
    for(let i = 1; i < month; i++){
        if(i < 10){
            let curMon = i;
            if (curMon === 2){pDay = 28}
            else if (curMon === 4 || curMon === 6 || curMon === 9 || curMon === 11){pDay = 30}
            else {pDay = 31}
        }
        curDays += pDay;
    }

    let curTotDays = day + curDays;

    const diff = curTotDays - pTotDays;

    const handleClick=()=>{
        handleChangeById(id);
    }
    return (
            <SearchResult onClick={handleClick}>
                <H2>{title}</H2>
                <P>{company_name}</P>
                <P>{location}</P>
                <h5>₹{salary} a month</h5>
                <P>Type of Job: {job_type === "full_time" ? "Full Time" : 
                                job_type === "part_time" ? "Part Time" : 
                                job_type === "contract" ? "Contract" : "Fresher"}</P>
                <P><span style={{color:'#1c56ac', fontSize:'16px', position:'Relative', top:'3px'}} class="material-icons">send</span> Apply Securely with Indeed Resume</P>
                <Hiring>
                    <P><span style={{color:'#1c56ac', fontSize:'18px', position:'Relative', top:'3px'}} class="material-icons">bolt</span> Responsive employer</P>
                    <P style={{position: 'relative', top:'5px', left:'80px'}} >Urgently hiring</P>
                </Hiring>
                <P>{category}</P>
                <TimeCont>
                    <Time>{diff < 1 ? "Today" : diff === 1 ? "1 day ago" : `${diff} days ago`}</Time>
                    <Time style={{color:'blue', cursor:'pointer'}}>Save Job</Time>
                </TimeCont>
            </SearchResult>
    )
}
