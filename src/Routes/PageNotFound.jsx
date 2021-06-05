import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    width: 100%;
    height: 100%;
    diaplay: flex;
    padding-top: 15%;
    justify-content: center;
    `;
    
const Smily = styled.div`
    width: 200px;
    margin: auto;
    color: grey;
`;

const Head = styled.h2`
    font-size: 50px;
    text-align: center;
`;
    
const P = styled.p`
    font-size: 20px;
    text-align: center;
`;

export const PageNotFound = () => {
    return (
        <Container>
            <Smily>
                <span style={{fontSize:'200px'}} class="material-icons-sharp">sentiment_dissatisfied</span>
                <Head>404</Head>
                <P>Page Not Found</P>
            </Smily>
        </Container>
    )
}
