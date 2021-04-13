import React from 'react';
import styled from 'styled-components';
import { BottomPart } from './BottomPart';
import { FindJobsInput } from './FindJobsInput';
import { PopularSearches } from './PopularSearches';

const Container = styled.div`

`;

export const FindJobs = () => {
    return (
        <Container>
            <FindJobsInput />

            <PopularSearches />
            
            <BottomPart />
        </Container>
    )
}
