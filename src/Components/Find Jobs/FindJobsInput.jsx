import React, { useState } from 'react';
import { InputDiv, Input, Button } from '../../Custom UI/KCustomUI';
import styled from 'styled-components';
import { useDispatch, useSelector } from "react-redux";
import { getSearchData } from '../../Redux/FindJobs/action';

const Container = styled.div`
    display:flex;
    flex-direction: column; 
    justify-content: center;
    align-items: center;
    border-bottom: 1px solid #d6d6d6;
    padding: 40px 0 30px;
`;

const Search = styled.form`
    display: flex;
    justify-content: center;
`;

const Others = styled.div`
    font-size: 14px;
    text-align: center;
`;

const Span = styled.span`
    color: #2557a7;
    font-weight: 600;

    &:hover {
        text-decoration: underline;
        cursor: pointer;
    }
`;

const AutoSuggestions = styled.div`
    position: absolute;
    width: 20rem;
    padding: 1rem;
    line-height: 30px;
    top: 150px;
    border: 0.0625rem solid #949494;
    border-radius: .5rem;
    background: #fff;
    z-index: 5;
    font-size: 14px;
    box-shadow: 0 0 0 1px #949494;
`;

const Opt = styled.div`
    witdh: 100%;
    border-radius: 5px;
    padding: 0 10px;

    &:hover {
        background: #949494;
        cursor: pointer;
    }
`;

const category = [
    { category:'DevOps / Sysadmin' },
    { category:'Finance / Legal' },
    { category:'Software Development' },
    { category:'Writing' },
    { category:'QA' },
    { category:'Human Resources' },
    { category:'Data' },
    { category:'Business' },
    { category:'Product' },
    { category:'Sales' },
    { category:'Marketing' },
    { category:'Design' },
    { category:'Customer Service' },
    { category:'All others' }
]

const city = [
    { city:'Delhi' },
    { city:'Mumbai' },
    { city:'Bengaluru' },
    { city:'Pune' },
    { city:'Gurugram' },
    { city:'Noida' },
    { city:'Chennai' },
    { city:'Hydrabad' },
    { city:'Chandigarh' },
    { city:'Kolkata' },
    { city:'Bhopal' },
    { city:'Jaipur' }
]

export const FindJobsInput = () => {

    const data = useSelector(state=> state.findReducer.data)
    
    const [ catInp, setCatInp ] = useState('');
    const [ catDisp, setCatDisp ] = useState(false);

    const [ cityInp, setCityInp ] = useState('');
    const [ cityDisp, setCityDisp ] = useState(false)

    const dispatch = useDispatch();

    const handleCatChange = (e)=>{
        const { value } = e.target;
        setCatInp(value);
    }

    const handleCityChange = (e)=>{
        const { value } = e.target;
        setCityInp(value);
    }

    const inpParams = {
        category: catInp,
        location: cityInp
    };

    let params;
    if(inpParams.category === ''){
        params = {
            location: cityInp
        };
    }
    else if(inpParams.location === ''){
        params = {
            category: catInp
        };
    }
    else {
        params = inpParams;
    }

    const handleSearch = (e, input)=>{
        e.preventDefault();
        dispatch(getSearchData(input));
    }

    const setCategory = value => {
        setCatInp(value);
        setCatDisp(false);
    }

    const setCity = value => {
        setCityInp(value);
        setCityDisp(false);
    }

    const clickCat = ()=>{
        setCatDisp(true);
        setCityDisp(false);
    }

    const clickCity = ()=>{
        setCatDisp(false);
        setCityDisp(true);
    }
    
    return (
        <Container>
                <Search onSubmit={(e)=>handleSearch(e, params)}>
                    <InputDiv>
                        <p style={{display:'inline-block', fontWeight:'600'}} >What</p>

                        <Input value={catInp} onClick={clickCat} placeholder='Job title, keywords or company' name="category" onChange={handleCatChange} />

                        {
                            catDisp && (
                                <AutoSuggestions onClick={()=>setCatDisp(false)} >
                                    {
                                        category.filter(( {category} )=>category.indexOf(catInp) > -1 ).map(cat => <Opt onClick={()=> setCategory(cat.category)} >{cat.category}</Opt>)
                                    }
                                </AutoSuggestions>
                            )
                        }

                        <div><span style={{fontSize:'18px', color:'#909090'}} class="material-icons-round">search</span></div>
                    </InputDiv>

                    <InputDiv>
                        <p style={{display:'inline-block', fontWeight:'600'}} >Where</p>

                        <Input value={cityInp} onClick={clickCity} placeholder='City, state or pin Code' name="location" onChange={handleCityChange} />

                        {
                            cityDisp && (
                                <AutoSuggestions onClick={()=>setCityDisp(false)} >
                                    {
                                        city.filter(( {city} )=>city.indexOf(cityInp) > -1 ).map(loc => <Opt onClick={()=> setCity(loc.city)} >{loc.city}</Opt>)
                                    }
                                </AutoSuggestions>
                            )
                        }

                        <div><span style={{fontSize:'18px', color:'#909090'}} class="material-icons">place</span></div>
                    </InputDiv>

                    <Button>Find Jobs</Button>
                </Search>
            <Others>
                <p style={{margin: '20px'}} ><Span>Post Your Resume </Span> - It only takes few seconds</p>
                
                <p style={{margin: '20px'}} ><Span>Employers: Post a Job </Span> - Your next hire is here</p>
            </Others>
        </Container>
    )
}
