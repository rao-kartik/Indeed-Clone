import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { RoundBtn } from '../../Custom UI/KCustomUI';
import { addJobs } from '../../Redux/Admin/action';
import { category, city, jobType } from '../Find Jobs/Data';

const Container = styled.div`
    width: 100%;
    height: 100%;
    padding-bottom: 50px;
`;

const FormData = styled.div`
    width: 600px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 50px;
    margin: 70px auto;
    border-radius: 10px;
    box-shadow: 0 0 1.5rem 0.25rem rgb(0 0 0 / 13%);
    position: relative;
`;

const Input = styled.input`
    width: 100%;
    height: 40px;
    border-radius: 8px;
    padding: 0 10px;
    outline: none;
    border: 1px solid #949494;
    margin-top: 10px;

    &:hover {
        border: 1px solid #1497ff;
        border-bottom: 4px solid #1497ff;
    }
`;

const Select = styled.select`
    width: 100%;
    height: 40px;
    border-radius: 8px;
    padding: 0 10px;
    outline: none;
    border: 1px solid #949494;
    margin-top: 10px;

    &:hover {
        border: 1px solid #1497ff;
        border-bottom: 4px solid #1497ff;
    }
`;

const H1 = styled.h1`
    margin-bottom: 20px;
`;

const SuccessPopUp = styled.div`
    width: 400px;
    padding: 50px;
    text-align: center;
    font-size: 20px;
    background: #fff;
    border-radius: 10px;
    box-shadow: 0 0 1.5rem 0.25rem rgb(0 0 0 / 13%);
    position: absolute;
    z-index: 5;
    left: 16%;
`;

const initData = {
    title: '',
    company_name: '',
    category: 'Marketing',
    job_type: 'full_time',
    publication_date: '',
    location: 'Delhi',
    salary: '',
    description: ''
}

export const AdminPostJob = () => {

    const [ jobInp, setjobInp ] = useState(initData);
    const dispatch = useDispatch();

    const [ dispPopUp, setDispPopup ] = useState(false);

    const handleChange = (e)=>{
        const { name, value } = e.target;
        const updated = {
            ...jobInp,
            [ name ] : value
        }
        setjobInp(updated)
    }

    const today = new Date();
    console.log(today)

    let month;
    if(today.getMonth()+1 === 10 || today.getMonth()+1 === 11 || today.getMonth()+1 === 12){
        month = today.getMonth()+1
    }
    else {
        month = `0${today.getMonth()+1}`
    }

    let day;
            if(today.getDate()===1 || today.getDate()===2 || today.getDate()===3 || today.getDate()=== 4 || today.getDate()===5 || today.getDate()===6 || today.getDate()===7 || today.getDate()===8 || today.getDate()===9){
                date = `0${day}`
            }
            else {
                day = today.getDate()
            }

    let date = `${today.getFullYear()}-${month}-${day}`

    const handleSubmit = (e)=>{
        e.preventDefault();
        const updated = {
            ...jobInp,
            publication_date: date
        }
        dispatch(addJobs(updated))
        setDispPopup(true);
        setjobInp(initData);
    }

    const handelExitPopUp = ()=>{
        setDispPopup(false);
    }
    
    return (
        <Container>
            <form onSubmit={(e)=>handleSubmit(e)}>
                <FormData>
                    <H1>Post a New Job</H1>
                    <label>
                        Title: {<br/>}
                        <Input type="text" onChange={handleChange} name="title" value={jobInp.title} />
                    </label><br/>
                    <label>
                        Company Name: {<br/>}
                        <Input type="text" onChange={handleChange} name="company_name" value={jobInp.company_name} />
                    </label><br/>
                    <label>
                        Category: {<br/>}
                        <Select onChange={handleChange} name="category">
                            {
                                category.map(cat=> <option value={cat.category} >{cat.category}</option>)
                            }
                        </Select>
                    </label><br/>
                    <label>
                        Job Type: {<br/>}
                        <Select onChange={handleChange} name="job_type">
                            {
                                jobType.map(type=> <option value={type.value} >{type.title}</option>)
                            }
                        </Select>
                    </label><br/>
                    <label>
                        Location: {<br/>}
                        <Select onChange={handleChange} name="location" value={jobInp.location} >
                            {
                                city.map(loc=> <option value={loc.city} >{loc.city}</option>)
                            }
                        </Select>
                    </label><br/>
                    <label>
                        Salary: {<br/>}
                        <Input type="text" onChange={handleChange} name="salary" value={jobInp.salary} />
                    </label><br/>
                    <label>
                        Description: {<br/>}
                        <Input type="text" onChange={handleChange} name="description" value={jobInp.description} />
                    </label><br/>
                    <RoundBtn style={{background:'#2557a7', color:'white', border:'none', marginTop:'10px'}}>Add job</RoundBtn>
                    {
                        dispPopUp && <SuccessPopUp>Job Added Successfully<span onClick={handelExitPopUp} style={{fontSize:'18px', position:'absolute', top:'10px', right:'10px', cursor:'pointer'}} class="material-icons-outlined">close</span></SuccessPopUp>
                    }
                </FormData>
            </form>
        </Container>
    )
}
