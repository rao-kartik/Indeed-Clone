import React, { useEffect } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { Button } from '../../Custom UI/KCustomUI';
import { searchResumeByEmail } from '../../Redux/FindResume/action';
import styled from 'styled-components';
import { applyJobRequest,applyJobSuccess,applyJobFailure  } from '../../Redux/ApplyJob/action'
import axios from 'axios';
import { Redirect, useParams } from 'react-router';
import { Loading } from '../Loading/Loading';

const Div = styled.div`
    border:1px solid #085ff7;
    border-radius:10px;
    padding:20px;
    margin:auto;
    display:flex;
    margin-top:10px;
`;
export const ApplyFormResume=()=>{
    var data = useSelector(state=> state.findResumeReducer.data)
    const { isLoading, isError } = useSelector(
        (state) => state.applyJobReducer,
        shallowEqual
      );
    const dispatch = useDispatch();
    const token = useSelector(state=>state.authReducer.token);
    useEffect(()=>{
            dispatch(searchResumeByEmail())
    },[]);
    console.log(token.email);
    const jobID = useParams();
    const[isSubmited,setIsSubmited] = React.useState(false);
    const handleApply=()=>{
            const requestAction = applyJobRequest();
            dispatch(requestAction);
            axios
              .post("https://json-server-mocker-ajmal.herokuapp.com/applyjobs", {
                  email:token.email,
                  jobid:jobID.id
              })
              .then((res) => {
                const successAction = applyJobSuccess(res.message);
                dispatch(successAction);
                alert('Applied Job Successfully');
                setIsSubmited(true)
              })
              .catch((err) => {
                const failureAction = applyJobFailure(err.message);
                dispatch(failureAction);
                console.log(err);
              });
        
    }
    
    return !isLoading?(!isSubmited?(data===undefined?(
      <div>
          <h1>You're not uploaded the Resume yet, Please Upload to Continue</h1>
          <Button>Build Resume</Button>
      </div>
  ):(<>
  <h1>Apply using these Resume</h1>
  <Div>
      
          <img src={data.photo} alt="user photo" style={{width:'20%'}}/>
          <div style={{margin:'20px'}}>
          <p>Name: {data.fname}</p>
          <p>Gender: {data.gender}</p>
          <p>LinkedIn: {data.linkedin}</p>
          <p>Email: {data.email}</p>
          <Button onClick={handleApply}>Apply</Button>
      </div>
  </Div>
  </>)):(<Redirect to='/'/>)):
  (<Loading/>)
}