import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { BottomPart } from './BottomPart';
import { FindJobsInput } from './FindJobsInput';
import { PopularSearches } from './PopularSearches';
import { SearchResults } from './SearchResults';

const Container = styled.div`

`;

const Results = styled.div`
    width: 840px;
    margin: auto;
`;

export const FindJobs = () => {

    const data = useSelector(state=> state.findReducer.data)
    console.log(data)
    
    return (
        <Container>
            <FindJobsInput />

            <Results>
                {
                    data.map(item=> <SearchResults {...item} />)
                }
            </Results>

            <PopularSearches />
            
            <BottomPart />
        </Container>
    )
}
