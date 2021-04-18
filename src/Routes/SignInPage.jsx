import React from 'react'
import { SignIn } from '../Components/SignIn/SignIn';
import styled from 'styled-components';

const Container = styled.div``;

    document.title = 'Sign In | Indeed Accounts';

export const SignInPage = () => {
    return (
        <Container>
            <SignIn />
        </Container>
    )
}
