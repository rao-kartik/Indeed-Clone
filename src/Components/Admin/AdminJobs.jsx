import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { getJobs } from '../../Redux/Admin/action';
import { SearchResult } from '../../Custom UI/KCustomUI';
import { AdminJobsResult } from './AdminJobsResult';

const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`;

export const AdminJobs = () => {

    const jobsData = useSelector(state=>state.adminReducer.jobsData);

    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getJobs())
    },[])
    
    return (
        <Container>
            {
                jobsData.map(jobs=> <AdminJobsResult key={jobs.id} {...jobs} /> )
            }
        </Container>
    )
}
