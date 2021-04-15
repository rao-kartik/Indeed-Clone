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

export const OptionButtonLeft=styled.button`
    width:144px;
    height:44px;
    padding:2px 10px 0px;
    background-color: #fff;
    border: 2px solid #f2f2f2;
    color: #085ff7;
    font-size: 15px;
    font-weight: bold;
    border-top-left-radius: 25px;
    border-bottom-left-radius: 25px;
    z-index: 1;
    outline:none;
    &:focus {
        border-color:#085FF7;
        background-color:#085FF7;
        color:white;
    }
    &:hover {
        border-color:#085FF7;
    }
`;
export const OptionButtonRight=styled.button`
    width:144px;
    height:44px;
    padding:2px 10px 0px;
    background-color: #fff;
    border: 2px solid #f2f2f2;
    color: #085ff7;
    font-size: 15px;
    font-weight: bold;
    border-top-right-radius: 25px;
    border-bottom-right-radius: 25px;
    z-index: 1;
    outline:none;
    &:focus {
        border-color:#085FF7;
        background-color:#085FF7;
        color:white;
    }
    &:hover {
        border-color:#085FF7;
    }
`;

export const SelectButton = styled.button`
    width:150px;
    height:44px;
    border-radius:25px;
    color:#085ff7;
    border: 2px solid #f2f2f2;
    background-color:white;
    outline:none;
    margin:3px;
    font-size: 15px;
    font-weight: bold;
    &:focus{
        outline:#085ff7;
        border-color:#fff;
        background-color:#085ff7;
        color:white;
    }
`;