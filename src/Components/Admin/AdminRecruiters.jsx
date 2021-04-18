import React, { useEffect } from 'react';
import { getRecruiters } from '../../Redux/Admin/action';
import { useDispatch, useSelector } from 'react-redux';
import { AdminRecruiterResults } from './AdminRecruiterResults';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`;

const Load = styled.div`
    position: absolute;
    right: 50%;
    top: 40%;
`;

export const AdminRecruiters = () => {
    const recruiterData = useSelector(state=>state.adminReducer.recruiterData);
    const isLoading = useSelector(state=>state.adminReducer.isLoading);

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
