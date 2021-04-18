import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router';

export const AppliedJobs=()=>{
    const isAuth = useSelector(state=> state.authReducer.isAuth);
    return isAuth?(
        <div>
            Applied Jobs
        </div>
    ):(<Redirect to='/account/login'/>)
}