import styled from 'styled-components';

/* buttons */

export const Button = styled.button`
    min-width: 8rem;
    height: 2.5rem;
    border-radius: 10px;
    background: #064bbc;
    color: #fff;
    font: 600 1.1rem Arial;
    outline: none;
    border: none;
    text-align: center;
    background-repeat: repeat-x;
    cursor: pointer;
    padding: 0.75rem 1.5rem;
    opacity: 0.9;
    margin: 10px;
    display: flex;
    align-items: center;

    &:hover {
        background: #164081;
    }
`;

export const PopSearchBtn = styled.button`
    min-width: auto;
    border: none;
    width: auto;
    height: 2.55rem;
    background: #e4e2e0;
    color: #2d2d2d;
    margin: 0 8px 12px 0;
    border-radius: 5px;
    padding: 0 1rem 0 .75rem;
    display: flex;
    align-items: center;
    outline-color: #2557a7;

    &:hover {
        background: #d4d2d0;
        cursor: pointer
    }
`;

export const RoundBtn = styled.button`
    width: 100%;
    min-height: 2.76rem;
    border-radius: 1.38rem;
    border: 2px solid #909090;
    outline: none;
    background: none;
    margin: -4px 0;
    cursor: pointer;
    font-weight: 600;
    font-size: 15px;
`;

/* divs */

export const InputDiv = styled.div`
    width: 20rem;
    overflow: hidden;
    height: 2.568rem;
    border: 0.0625rem solid #949494;
    border-radius: .5rem;
    background-color: #fff;
    color: #2d2d2d;
    padding: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 10px;
    margin: 10px;
`;

export const SearchResult = styled.div`
    width: 430px;
    border: 1px solid #d4d2d0;
    border-radius: 5px;
    margin: 10px;
    padding: 20px;

    &:hover {
        cursor: pointer;
    }
`;

/* inputs */

export const Input = styled.input`
    width: 15rem;
    height: 2rem;
    margin: 0 0.8rem;
    outline: none;
    border: none;
`;