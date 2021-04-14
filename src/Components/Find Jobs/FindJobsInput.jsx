import React from 'react';
import { InputDiv, Input, Button } from '../../Custom UI/KCustomUI';
import styled from 'styled-components';

const Container = styled.div`
    display:flex;
    flex-direction: column; 
    justify-content: center;
    align-items: cneter;
    border-bottom: 1px solid #d6d6d6;
    padding: 40px 0 30px;
    margin
`;

const Search = styled.div`
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

export const FindJobsInput = () => {
    return (
        <Container>
            <Search>
                <InputDiv>
                    <p style={{display:'inline-block', fontWeight:'600'}} >What</p>

                    <Input placeholder='Job title, keywords or company' />

                    <div><span style={{fontSize:'18px', color:'#909090'}} class="material-icons-round">search</span></div>
                </InputDiv>

                <InputDiv>
                    <p style={{display:'inline-block', fontWeight:'600'}} >Where</p>

                    <Input placeholder='City, state or pin Code' />

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
