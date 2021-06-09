import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { Redirect } from 'react-router';
import { Button, SearchResultById } from '../../Custom UI/stylesHome';
import { jobsByIdSearch } from '../../Redux/FindJobById/action';

const FavouriteButton = styled.button`
    width:44px;
    height:42px;
    background-color:#ececec;
    padding:8px;
    border-radius:10px;
    border:1px solid #ececec;
    background-repeat: no-repeat;
    background-size: 40px;
    margin-top:7px;
    outline:none;
    background-image:url(${props=>props.theme===true?'https://cdn2.iconfinder.com/data/icons/4web-3/139/favourite-512.png':'https://cdn3.iconfinder.com/data/icons/google-material-design-icons/48/ic_favorite_48px-512.png'});
    &:hover{
        background-color:#ececcc;
    }
`;
const Div = styled.div`
    display:flex;
    `;
export const ApplyJobs=({jobId})=>{
    console.log('apply jobs' + jobId);
    var data = useSelector(state=> state.jobsByIdReducer.jobs_data)
    const dispatch = useDispatch();
    useEffect(()=>{
        if (jobId !== ''){
            dispatch(jobsByIdSearch(jobId))
        }
    },[jobId]);
    const [redirect,setRedirect] = useState(false);
    const handleRedirect=()=>{
        setRedirect(true);
    }
    const [isFavourite,setIsFavourite] = React.useState(true);
    return !redirect?(
        <SearchResultById>
            <h3>{data.title}</h3>
            <p>{data.company_name} - {data.location}</p>
            <p>₹{data.salary} a month - {data.job_type}</p>
            <Div>
            <Button style={{marginTop:'10px'}} onClick={handleRedirect}>Apply Now</Button>
            <FavouriteButton theme={isFavourite} onClick={()=>setIsFavourite(!isFavourite)}/>
            </Div>
            <p>{data.category}</p>
            
        </SearchResultById>
    ):<Redirect to={`/form/questions/${jobId}`}/>
}

/* style={isFavourite?{backgroundImage:"url(" + "https://cdn2.iconfinder.com/data/icons/4web-3/139/favourite-512.png" + ")"}:{backgroundImage:"url(" + "https://cdn3.iconfinder.com/data/icons/google-material-design-icons/48/ic_favorite_48px-512.png" + ")"}} */