import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { getJobs } from '../../Redux/Admin/action';
import { SearchResult } from '../../Custom UI/KCustomUI';
import { AdminJobsResult } from './AdminJobsResult';
import { Loading } from '../Loading/Loading';

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

export const AdminJobs = () => {

    const jobsData = useSelector(state=>state.adminReducer.jobsData);
    const isLoading = useSelector(state=>state.adminReducer.isLoading);

    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getJobs())
    },[])
    
    return (
        <Container>
            {
                isLoading ? <Load><Loading /></Load> : jobsData.map(jobs=> <AdminJobsResult {...jobs} /> )
            }
        </Container>
    )
}
