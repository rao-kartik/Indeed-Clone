import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router';
import styled from 'styled-components';
import { H1, P } from '../../Custom UI/ACustomUI';
import { myReviewsSearch } from '../../Redux/MyReviews/action';
import { MyReviewsList } from './MyReviewsList';

const Container = styled.div`
    background-color: #f5f5f5;
    /* height:70vh; */
    padding:20px;
`;
const HeadContainer = styled.div`
    height:10vh;
`;

export const MyReviews=()=>{
    const isAuth = useSelector(state=> state.authReducer.isAuth);
    const reviewsData = useSelector(state=> state.myReviewsReducer.reviews_data);
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(myReviewsSearch())
        // console.log(reviewsData);
    },[])
    return isAuth?(
        <div>
            <HeadContainer>
                <H1 style={{fontSize:'32px',marginTop:'20px',textAlign:'center'}}>My reviews and contributions</H1>
            </HeadContainer>
            <Container>
                <div style={{width:'50%',margin:'auto'}}>
                {
                !reviewsData.length>0?(<P>No company reviews</P>):
                <MyReviewsList reviewsData={reviewsData}/>
                }
                </div>
                
            </Container>
        </div>
    ):(<Redirect to='/account/login'/>)
}