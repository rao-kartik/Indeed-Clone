import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { deleteRecruiters, getRecruiters } from '../../Redux/Admin/action';

const Result = styled.div`
    width: 430px;
    border: 1px solid #d4d2d0;
    border-radius: 5px;
    margin: 10px;
    padding: 20px;
    display: flex;
    position: relative;

    &:hover {
        cursor: pointer;
    }
`;

const ImageBox = styled.div`
    width: 100px;
    height: 100px;
    margin-right: 20px;
`;

const Image = styled.img`
    width: 100%;
    height: 100%;
`;

const ContentBox = styled.div`
    font-size: 14px;
    line-height: 30px;
`;

const H3 = styled.h3`
    font-size: 20px;
`;

const Delete = styled.div`
    position: absolute;
    right: 20px;
    bottom: 10px;
`;

export const AdminRecruiterResults = ({ id, company_name, company_logo, rating, total_reviews}) => {

    document.title = 'Admin | Recruiters | Indeed Accounts'

    const dispatch = useDispatch();
    
    const handleDelete = (id)=>{
        dispatch(deleteRecruiters(id));
        dispatch(getRecruiters());
    }

    useEffect(()=>{
        dispatch(getRecruiters());
    },[])
    
    return (
        <Result>
            <ImageBox>
                <Image src={company_logo} />
            </ImageBox>
            <ContentBox>
                <H3>{company_name}</H3>
                <p>Rating: {rating}</p>
                <p>Total Reviews: {total_reviews}</p>
                <Delete onClick={()=>handleDelete(id)}><span class="material-icons-outlined">delete</span></Delete>
            </ContentBox>
        </Result>
    )
}
