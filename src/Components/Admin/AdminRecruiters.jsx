import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { getRecruiters } from '../../Redux/Admin/action';
import { AdminRecruiterResults } from './AdminRecruiterResults';

const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`;

export const AdminRecruiters = () => {
    const recruiterData = useSelector(state=>state.adminReducer.recruiterData);

    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getRecruiters())
    },[])
    
    return (
        <Container>
            {
                recruiterData.map(data=> <AdminRecruiterResults key={data.id} {...data} />)
            }
        </Container>
    )
}
