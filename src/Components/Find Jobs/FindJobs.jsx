import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { getSearchData } from '../../Redux/FindJobs/action';
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

const initCond = {
    datePosted: '',
    jobType: '',
    location: ''
}

export const FindJobs = () => {

    var data = useSelector(state=> state.findReducer.data)
    // console.log(data)

    const [ filterCond, setFilterCond ] = useState(initCond)

    const [ page, setPage ] = useState(1);
    console.log(page);

    const handleFilterChange = (e)=>{
        const { name, value } = e.target;
        const updated = {
            ...filterCond,
            [ name ]: value
        };
        setFilterCond(updated);
    }

    const filterCondtion = ({location, job_type, publication_date})=>{
        if(filterCond.datePosted){
            data = data.filter(item=> {
                const month = publication_date[5] + publication_date[6]

                const date = publication_date[8] + publication_date[9]

                let days;

                month == '02' ? days = 28 : 
                month == '01' || month == '03' || month == '05' || month == '07' || month == '08' || month == '10' || month == '12' ? days= 31 : 
                days = 30;

                const totalTime = +date + days;

                if(totalTime < filterCondtion.datePosted){
                    return item;
                }
            })
        }
        return location === filterCond.location && job_type === filterCond.jobType
    }
    
    return (
        <Container>
            <FindJobsInput page={page} handleFilterChange={handleFilterChange} />

            <Results>
                {
                    data.map(item=> <SearchResults key={item.id} {...item} />)
                }
            </Results>

            {data.length > 1 && <div>
                <button disabled={page===1} onClick={()=>setPage(prev=> prev-1)} >Prev</button>
                <button disabled={page===Math.ceil(data/10)} onClick={()=>setPage(prev=> prev+1)} >Next</button>
            </div>}

            <PopularSearches />
            
            <BottomPart />
        </Container>
    )
}
