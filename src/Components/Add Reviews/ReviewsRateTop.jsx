import React from 'react';
import { RatingButton } from '../../Custom UI/ACustomUI';
import styled from 'styled-components'

const H1 = styled.h1`
    font-size:19.95px;
    margin:0px 0px 15px;
    padding:24px 0px 0px;
`;
export const ReviewsRateTop=({compname})=>{
    return(
        <div>
                <H1>Please rate your overall interview experience at {compname}.</H1>
                <RatingButton>1</RatingButton>
                <RatingButton>2</RatingButton>
                <RatingButton>3</RatingButton>
                <RatingButton>4</RatingButton>
                <RatingButton>5</RatingButton>
            </div>
    )
}