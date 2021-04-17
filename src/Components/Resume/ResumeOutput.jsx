import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { deleteResume, getResume } from '../../Redux/Resume/action';

const Container = styled.div`
    width: 100%;
    height: 100%;
    padding: 30px 60px;
    background: #ececec;
    min-height 520px;
`;

const Content = styled.div`
    padding: 20px;
    width: 50%;
    line-height: 30px;
    border-radius: 5px;
    background: #fff;
    margin-left: 45px;
    line-height: 30px;
    color: #6f6f6f; 
    position: relative;
`;

const Delete = styled.div`
    position: absolute;
    top: 20px;
    right: 20px;
    cursor: pointer;
`;

export const ResumeOutput = () => {

    const dispatch = useDispatch();

    const resumeData  = useSelector(state=> state.resume.resumeData)
    const token = useSelector(state=> state.authReducer.token);

    const email = token.email;
    console.log(email)

    const data = resumeData.filter(item=> item.email === email)
    console.log(data)

    const handleGetData = ()=>{
        dispatch(getResume())
    }

    const handleDelete = (id)=>{
        dispatch(deleteResume(id));
        dispatch(getResume());
    }

    useEffect(()=>{
        handleGetData()
    },[])
    
    return (data.length === 1 &&
        <Container>
            <Content>
                <h4>Objective</h4>
                <p>{data[0].objective}</p>
                <h4>Education</h4>
                <p>{data[0].education}</p>
                <h4>Personal Details</h4>
                <p>DOB: {data[0].dob}</p>
                <p>Gender: {data[0].gender}</p>
                <p>Mobile: {data[0].phone}</p>
                <p>Nationality: {data[0].nation}</p>
                <Delete><span onClick={()=>{handleDelete(data[0].id)}} class="material-icons-outlined">delete</span></Delete>
            </Content>
        </Container>
    )
}
