import styled from 'styled-components';
import React from 'react';

export const Button=styled.button`
    background-color:#085FF7;
    color:#FFFFFF;
    width:200px;
    height:54px;
    border-radius:6.25rem;
    border:.125rem solid #085ff7;
    text-align:center;
    padding:0px 24px;
    font-size:14px;
    font-weight: bold;
    margin: 0px 0px 0px 20px;
    `;
    export const Input=styled.input`
    background-color:#FFFFFF;
    width:500px;
    height:54px;
    padding:2px 18px 0px 27px;
    border:2px solid #949494;
    border-radius:4px;
    font-size:1rem;
    font-weight:normal;
    margin:0;
    line-height:44px;
    outline:none;
    margin-top:2%;
    &:focus {
        border-color:#085FF7;
    }
`;
export const H1=styled.h1`
    color:black;
    font-size:42px;
    margin:0px 0px 16px;
    `;
export const P=styled.p`
    color:#6f6f6f;
    font-size:22px;
    margin:0px 0px 8px;
`;

export const Label=styled.label`
    font-size: 14px;
    font-weight: bold;
    color: #000;
`;

export const Container=styled.div`

`;