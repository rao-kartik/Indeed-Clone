import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`

`;

const initData = {
    company_name: '',
    company_logo: '',
    total_reviews: 0,
    rating: 0
}

export const AdminPostRecruiter = () => {

    const [ addRecInp, setAddRecInp ] = useState(initData);

    const handleChange = (e)=>{
        const { name, value } = e.target;
        const updated = {
            ...addRecInp,
            [ name ]: value
        };
        setAddRecInp(updated);
    }
    
    return (
        <Container>
            <form>
                <label>
                    Company Name
                    <input type="text" name="company_name" onChange={handleChange} value={addRecInp.company_name} />
                </label>
                <label>
                    Company logo
                    <input type="text" name="company_logo" onChange={handleChange} value={addRecInp.company_logo} />
                </label>
                <button>Add</button>
            </form>
        </Container>
    )
}
