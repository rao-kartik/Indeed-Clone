import React, { useContext, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { SortContext } from '../../Context/SortContextProvider';
import { SearchResultById } from '../../Custom UI/KCustomUI';
import { getSearchData } from '../../Redux/FindJobs/action';
import { ApplyJobs } from './ApplyJobs';
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
    const { filterCondition } = useContext(SortContext);

    const [ page, setPage ] = useState(1);
    console.log(page);

    const [jobId,setJobId] = useState('');
    const [isJobView,setIsJobView] = useState(false);
    const handleChangeById=(id)=>{
        setIsJobView(true);
        setJobId(id);
    }
    return (
        <Container>
            <FindJobsInput page={page} />

            <Results>
                <div style={{float:'left'}}>
                    {
                        data.filter(item=>filterCondition(item)).map(item=> <SearchResults key={item.id} {...item} handleChangeById={handleChangeById}/>)
                    }
                </div>
                {
                    isJobView&&<div style={{float:'right'}}>
                    <ApplyJobs jobId={jobId} />
                    </div>
                }
                
            </Results>
            <div style={{clear:'both'}}></div>
            {data.length > 1 && <div>
                <button disabled={page===1} onClick={()=>setPage(prev=> prev-1)} >Prev</button>
                <button disabled={page===Math.ceil(data/10)} onClick={()=>setPage(prev=> prev+1)} >Next</button>
            </div>}

            <PopularSearches />
            
            <BottomPart />
        </Container>
    )
}
