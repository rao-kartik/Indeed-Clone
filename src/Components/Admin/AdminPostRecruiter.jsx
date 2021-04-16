import React, { useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { v4 as uuid } from 'uuid';
import { addRecruiters } from '../../Redux/Admin/action';

const Container = styled.div`

`;

const initData = {
    company_name: '',
    company_logo: '',
    about: '',
    total_reviews: 0,
    rating: 0
}

export const AdminPostRecruiter = () => {

    const [ addRecInp, setAddRecInp ] = useState(initData);

    const dispatch = useDispatch();

    const imageRef = useRef();

    const handleChange = (e)=>{
        const { name, value } = e.target;
        const updated = {
            ...addRecInp,
            [ name ]: value
        };
        setAddRecInp(updated);
    }
    
    const handleSubmit = (e)=>{
        const img = URL.createObjectURL(imageRef.current.files[0]);
        e.preventDefault();
        const updated = {
            ...addRecInp,
            id: uuid(),
            company_logo: img
        }
        dispatch(addRecruiters(updated))
    }
    
    return (
        <Container>
            <form onSubmit={(e)=>handleSubmit(e)}>
                <label>
                    Company Name
                    <input type="text" name="company_name" onChange={handleChange} value={addRecInp.company_name} />
                </label>
                <label>
                    Company logo
                    <input ref={imageRef} type="file" name="company_logo" />
                </label>
                <label>
                    About
                    <input type="text" name="about" onChange={handleChange} value={addRecInp.about} />
                </label>
                <button>Add</button>
            </form>
        </Container>
    )
}
