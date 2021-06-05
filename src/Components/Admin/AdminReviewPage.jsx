import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { getPageReviews } from '../../Redux/Admin/action';

const Container = styled.div`
    width: 100%;
    height: 100%;
`;

const Content = styled.div`
    max-width: 800px;
    min-height: 100px;
    border-radius: 5px;
    margin: 30px auto;
    padding: 20px;
    line-height: 30px;
    background: white;
    box-shadow: 0 0 1.5rem 0.25rem rgb(0 0 0 / 13%);
`;

export const AdminReviewPage = () => {

    document.title = 'Admin | Page Reviews | Indeed Accounts';

    const pageReviews = useSelector(state=> state.adminReducer.pageReviews);
    console.log(pageReviews)

    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getPageReviews())
    },[])
    
    return (
        <Container>
            {
                pageReviews.map(item=>
                    <Content>
                        <p>Review about: <span>{item.page}</span></p>
                        <p>Description: {item.review}</p>
                    </Content>
                )
            }
        </Container>
    )
}
