import React from 'react';
import styled from 'styled-components';
import { Button } from '../../Custom UI/KCustomUI';

const Container = styled.div`
    margin-top:6rem;
`;

const Content = styled.div`
    display: flex;
    color: #2d2d2d;
    margin: 15px;
    font-size: .85rem;
    flex-wrap: wrap;

    @media
`;

const P = styled.p`
    margin: 0 2px;
    &:hover {
        cursor: pointer;
        text-decoration: underline;
    }
`;

const Resume = styled.div`
    text-align: center;
    width: 100%;
    background: #f3f2f1;
    padding: 30px 0;
`;

export const BottomPart = () => {
    return (
        <Container>
            <Content>
                <P>Career Advice</P>
                <P>-</P>

                <P>Browse Jobs</P>
                <P>-</P>

                <P>Browse Companies</P>
                <P>-</P>

                <P>Salaries</P>
                <P>-</P>

                <P>Indeed Events</P>
                <P>-</P>

                <P>Work At Indeed</P>
                <P>-</P>

                <P>About</P>
                <P>-</P>

                <P>Help Center</P>
            </Content>
            <Content>
                <p>© 2021 Indeed</p>
                <P>-</P>

                <P>Accessibility at Indeed</P>
                <P>-</P>

                <P>Privacy Center</P>
                <P>-</P>

                <P>Cookies</P>
                <P>-</P>

                <P>Privacy</P>
                <P>-</P>

                <P>Terms</P>
            </Content>
            <Resume>
                <h3>Let employers find you</h3>

                <Button style={{font:'400 .875rem Arial', margin:'10px auto'}}>Upload Your Resume</Button>
            </Resume>
        </Container>
    )
}
