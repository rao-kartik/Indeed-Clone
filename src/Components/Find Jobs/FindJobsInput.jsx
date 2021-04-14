import React, { useState } from 'react';
import { InputDiv, Input, Button } from '../../Custom UI/KCustomUI';
import styled from 'styled-components';
import { useDispatch, useSelector } from "react-redux";
import { getSearchData } from '../../Redux/FindJobs/action';

const Container = styled.div`
    display:flex;
    flex-direction: column; 
    justify-content: center;
    align-items: center;
    border-bottom: 1px solid #d6d6d6;
    padding: 40px 0 30px;
`;

const Search = styled.form`
    display: flex;
    justify-content: center;
`;

const Others = styled.div`
    font-size: 14px;
    text-align: center;
`;

const Span = styled.span`
    color: #2557a7;
    font-weight: 600;

    &:hover {
        text-decoration: underline;
        cursor: pointer;
    }
`;

const initInp = {
    category: '',
    location: ''
}

export const FindJobsInput = () => {

    const data = useSelector(state=> state.findReducer.data)
    console.log(data)
    const [ findInp, setFindInp ] = useState(initInp);
    const dispatch = useDispatch();

    const handleChange = (e)=>{
        const { name, value } = e.target;
        const updated = {
            ...findInp,
            [name] : value
        }
        setFindInp(updated);
    }

    const handleSearch = (e, input)=>{
        e.preventDefault();
        dispatch(getSearchData(input));
    }
    
    return (
        <Container>
                <Search onSubmit={(e)=>handleSearch(e, findInp)}>
                    <InputDiv>
                        <p style={{display:'inline-block', fontWeight:'600'}} >What</p>

                        <Input placeholder='Job title, keywords or company' name="category" onChange={handleChange} required />

                        <div><span style={{fontSize:'18px', color:'#909090'}} class="material-icons-round">search</span></div>
                    </InputDiv>

                    <InputDiv>
                        <p style={{display:'inline-block', fontWeight:'600'}} >Where</p>

                        <Input placeholder='City, state or pin Code' name="location" onChange={handleChange} required />

                        <div><span style={{fontSize:'18px', color:'#909090'}} class="material-icons">place</span></div>
                    </InputDiv>

                    <Button>Find Jobs</Button>
                </Search>
            <Others>
                <p style={{margin: '20px'}} ><Span>Post Your Resume </Span> - It only takes few seconds</p>
                
                <p style={{margin: '20px'}} ><Span>Employers: Post a Job </Span> - Your next hire is here</p>
            </Others>
        </Container>
    )
}
