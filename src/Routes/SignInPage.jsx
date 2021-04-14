import React from 'react'
import { SignIn } from '../Components/SignIn/SignIn';
import styled from 'styled-components';

const Container = styled.div`
    background
`;

export const SignInPage = () => {
    return (
        <Container>
            <SignIn />
        </Container>
    )
}
