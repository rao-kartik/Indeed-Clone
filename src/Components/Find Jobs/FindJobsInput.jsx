import React, { useContext, useEffect, useState } from 'react';
import { Button } from '../../Custom UI/stylesHome';
import styled from 'styled-components';
import { useDispatch, useSelector } from "react-redux";
import { getSearchData } from '../../Redux/FindJobs/action';
import { category, city, jobType } from './Data';
import { SortContext } from '../../Context/SortContextProvider';

const Container = styled.div`
    display:flex;
    flex-direction: column; 
    justify-content: center;
    align-items: center;
    border-bottom: 1px solid #d6d6d6;
    padding: 40px 0 30px;

    @media(max-width: 840px) {
        padding: 10px 0 10px 20px;
        background: #fff;
    }

    @media(max-width: 400px){
        padding-right: 20px;
    }
`;

const Search = styled.form`
    display: flex;
    justify-content: center;

    @media(max-width: 840px) {
        flex-direction: column;
        width: 100%;
    }
`;

const Others = styled.div`
    font-size: 14px;
    text-align: center;
`;

const InputDiv = styled.div`
    width: 20rem;
    overflow: hidden;
    height: 2.568rem;
    border: 0.0625rem solid #949494;
    border-radius: .5rem;
    background-color: #fff;
    color: #2d2d2d;
    padding: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 10px;
    margin: 10px;

    @media(max-width: 840px) {
        width: 95%;
    }
`;

const Input = styled.input`
    width: 15rem;
    height: 2rem;
    margin: 0 0.8rem;
    outline: none;
    border: none;

    @media(max-width: 840px){
        width: 100%;
    }
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

const Cont = styled.div`
    display: flex;
    margin-left: -400px;
    margin-top: 20px;
`;

const SelOpt = styled.option`
    background: #fff;
    border: none;
    font-size: 14px;
`;

const Select = styled.select`
    min-width: auto;
    border: none;
    width: auto;
    height: 2.55rem;
    background: #e4e2e0;
    color: #2d2d2d;
    margin: 0 8px 12px 0;
    border-radius: 5px;
    padding: 0 1rem 0 .75rem;
    display: flex;
    align-items: center;
    outline-color: #2557a7;

    &:hover {
        background: #d4d2d0;
        cursor: pointer
    }
`;

export const FindJobsInput = ({ page }) => {

    const data = useSelector(state=> state.findReducer.data);

    const { handleFilterChange } = useContext(SortContext);
    
    const [ catInp, setCatInp ] = useState('');
    const [ catDisp, setCatDisp ] = useState(false);

    const [ cityInp, setCityInp ] = useState('');
    const [ cityDisp, setCityDisp ] = useState(false);

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
        location: cityInp,
        page
    };

    let params;
    if(inpParams.category === ''){
        params = {
            location: cityInp,
            page
        };
    }
    else if(inpParams.location === ''){
        params = {
            category: catInp,
            page
        };
    }
    else {
        params = inpParams;
    }

    const handleSearch = (e, input)=>{
        e.preventDefault();
        dispatch(getSearchData(input));
        setCatDisp(false);
        setCityDisp(false);
        setCatInp('');
        setCityInp('');
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

    useEffect(()=>{
        if (inpParams.location !== '' || inpParams.category !== ''){
            dispatch(getSearchData(params))
        }
    },[page])
    
    return (
        <Container>
            <Search onSubmit={(e)=>handleSearch(e, params)}>
                <InputDiv>
                    <p style={{display:'inline-block', fontWeight:'600'}} >What</p>

                    <Input value={catInp} onClick={clickCat} placeholder='Job title, keywords or company' name="category" onChange={handleCatChange} />

                    {
                        catDisp && (
                            <AutoSuggestions onMouseLeave={()=>setCatDisp(false)} >
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
                            <AutoSuggestions onMouseLeave={()=>setCityDisp(false)} >
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

            {
                data.length > 0 &&
                <Cont>
                    <Select name="datePosted" onChange={handleFilterChange} >
                        <SelOpt value="null">Date Posted</SelOpt>
                        <SelOpt value="1">Last 24 hrs</SelOpt>
                        <SelOpt value="10">Last 3 days</SelOpt>
                        <SelOpt value="15">Last 7 days</SelOpt>
                        <SelOpt value="20">Last 14 days</SelOpt>
                    </Select>
                    <Select name="jobType" onChange={handleFilterChange} >
                        <SelOpt value="">Job Type</SelOpt>
                        {
                            jobType.map(type=> <SelOpt value={type.value}>{type.title}</SelOpt>)
                        }
                    </Select>
                    <Select name="location" onChange={handleFilterChange} >
                        <SelOpt value="">Location</SelOpt>
                        {
                            city.map(loc=> <SelOpt value={loc.city}>{loc.city}</SelOpt>)
                        }
                    </Select>
                </Cont>
            }

            {
                data.length < 1 && 
                <Others>
                    <p style={{margin: '20px'}} ><Span>Post Your Resume </Span> - It only takes few seconds</p>
                    
                    <p style={{margin: '20px'}} ><Span>Employers: Post a Job </Span> - Your next hire is here</p>
                </Others>
            }
        </Container>
    )
}