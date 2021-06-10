import React from 'react';
import styled from 'styled-components';

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
