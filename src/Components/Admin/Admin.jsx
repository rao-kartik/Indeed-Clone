import React from 'react';
import { Link } from 'react-router-dom';
import { AdminLogin } from './AdminLogin';
import styled from 'styled-components';
import { AdminNavbar } from './AdminNavbar';

export const Container = styled.div`
    width: 100%;
    height: 100%;
    postion: absolute;
    top: 0;
    z-index: 2;
`;


export const Admin = () => {
    return (
        <Container>
            Admin
        </Container>
    )
}
