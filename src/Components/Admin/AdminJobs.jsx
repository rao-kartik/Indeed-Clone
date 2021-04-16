import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { getJobs } from '../../Redux/Admin/action';
import { Container } from './Admin';
import { AdminNavbar } from './AdminNavbar';

export const AdminJobs = () => {

    const jobsData = useSelector(state=>state.adminReducer.jobsData);

    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getJobs())
    },[])
    
    return (
        <Container>
            Jobs
        </Container>
    )
}
