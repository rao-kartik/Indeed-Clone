import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { addJobs } from '../../Redux/Admin/action';
import { category, city, jobType } from '../Find Jobs/Data';

const container = styled.div`

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
    }
    
    return (
        <div>
            <form onSubmit={(e)=>handleSubmit(e)}>
                <label>
                    Title:
                    <input type="text" onChange={handleChange} name="title" value={jobInp.title} />
                </label>
                <label>
                    Company Name:
                    <input type="text" onChange={handleChange} name="company_name" value={jobInp.company_name} />
                </label>
                <label>
                    Category:
                    <select onChange={handleChange} name="category">
                        {
                            category.map(cat=> <option value={cat.category} >{cat.category}</option>)
                        }
                    </select>
                </label>
                <label>
                    Job Type:
                    <select onChange={handleChange} name="job_type">
                        {
                            jobType.map(type=> <option value={type.value} >{type.title}</option>)
                        }
                    </select>
                </label>
                <label>
                    Location:
                    <select onChange={handleChange} name="location" value={jobInp.location} >
                        {
                            city.map(loc=> <option value={loc.city} >{loc.city}</option>)
                        }
                    </select>
                </label>
                <label>
                    Salary:
                    <input type="text" onChange={handleChange} name="salary" value={jobInp.salary} />
                </label>
                <label>
                    Description:
                    <input type="text" onChange={handleChange} name="description" value={jobInp.description} />
                </label>
                <button>Add job</button>
            </form>
        </div>
    )
}
