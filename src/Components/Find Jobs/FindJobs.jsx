import { useContext, useState } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { SortContext } from '../../Context/SortContextProvider';
import { Loading } from '../Loading/Loading';
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

const BtnDiv = styled.div`
    display: flex;
    justify-content: center;
`;

const Btn = styled.button`
    width: 60px;
    height: 25px;
    margin: 10px;
    border-radius: 5px;
    border: none;
    cursor: pointer;
`;
export const FindJobs = () => {

    var data = useSelector(state=> state.findReducer.data)
    // console.log(data)
    const { filterConditionLoc} = useContext(SortContext);

    const isLoading = useSelector(state=> state.findReducer.isLoading);

    const [ page, setPage ] = useState(1);
    // console.log(page);

    const [jobId,setJobId] = useState('');
    const [isJobView,setIsJobView] = useState(false);
    const handleChangeById=(id)=>{
        setIsJobView(true);
        setJobId(id);
    }
    return (
        <Container>
            <FindJobsInput page={page} />

            {
                isLoading ? <Loading /> : 
                <Results>
                    <div style={{float:'left'}}>
                        {
                            data.filter(item=>filterConditionLoc(item)).map(item=> <SearchResults key={item.id} {...item} handleChangeById={handleChangeById}/>)
                        }
                        {data.length > 1 && <BtnDiv>
                            <Btn disabled={page===1} onClick={()=>setPage(prev=> prev-1)} >Prev</Btn>
                            <Btn disabled={page===Math.ceil(data.length/10)} onClick={()=>setPage(prev=> prev+1)} >Next</Btn>
                        </BtnDiv>}
                    </div>
                    {
                        isJobView&&<div style={{float:'right'}}>
                        <ApplyJobs jobId={jobId} />
                        </div>
                    }
                    
                </Results>
            }
            <div style={{clear:'both'}}></div>

            <PopularSearches />
            
            <BottomPart />
        </Container>
    )
}
