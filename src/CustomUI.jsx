import styled from 'styled-components';

export const Button=styled.button`
    background-color:#085FF7;
    color:#FFFFFF;
    width:288px;
    height:38px;
    border-radius:6.25rem;
    border:.125rem solid #085ff7;
    text-align:center;
    padding:8px 24px;
    font-size:14px;
    font-weight: bold;
    `;
    export const Input=styled.input`
    background-color:#FFFFFF;
    width:328px;
    height:44px;
    padding:0px 18px;
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
    font-size:52px;
`;
export const P=styled.p`
    color:black;
    font-size:20px;
`;

export const Label=styled.label`
    font-size: 14px;
    font-weight: bold;
    color: #000;
`;