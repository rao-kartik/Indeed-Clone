import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getResume } from '../../Redux/Resume/action';
import { ResumeOutput } from '../Resume/ResumeOutput';
import { ResumePage } from '../Resume/ResumePage';
import { ResumeTop } from '../Resume/ResumeTop';

export const Profile = () => {

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

    useEffect(()=>{
        handleGetData()
    },[])
    
    return (
        <div>
            <ResumeTop />
            {
                data.length === 1 ? <ResumeOutput /> : <ResumePage />
            }
        </div>
    )
}
