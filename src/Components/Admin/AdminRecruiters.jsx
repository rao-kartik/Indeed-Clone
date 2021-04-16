import React, { useEffect } from 'react';
import { AdminNavbar } from './AdminNavbar';
import { getRecruiters } from '../../Redux/Admin/action';
import { useDispatch, useSelector } from 'react-redux';
import { Container } from './Admin';

export const AdminRecruiters = () => {

    const recruiterData = useSelector(state=>state.adminReducer.recruiterData);

    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getRecruiters())
    },[])
    
    return (
        <Container>
            recruiter
        </Container>
    )
}
