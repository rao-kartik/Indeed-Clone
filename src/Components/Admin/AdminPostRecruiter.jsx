import React, { useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { v4 as uuid } from 'uuid';
import { addRecruiters } from '../../Redux/Admin/action';
import { RoundBtn } from '../../Custom UI/KCustomUI';

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
    position: relative;
    box-shadow: 0 0 1.5rem 0.25rem rgb(0 0 0 / 13%);
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
    company_name: '',
    company_logo: '',
    about: '',
    total_reviews: 0,
    rating: 0
}

export const AdminPostRecruiter = () => {

    const [ addRecInp, setAddRecInp ] = useState(initData);

    const [ dispPopUp, setDispPopup ] = useState(false)

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
        dispatch(addRecruiters(updated));
        setDispPopup(true);
    }

    const handelExitPopUp = ()=>{
        setDispPopup(false);
    }
    
    return (
        <Container>
            <form onSubmit={(e)=>handleSubmit(e)}>
                <FormData>
                    <H1>Add New Recruiter</H1>
                    <label>
                        Company Name {<br/>}
                        <Input type="text" name="company_name" onChange={handleChange} value={addRecInp.company_name} />
                    </label><br/>
                    <label>
                        Company logo {<br/>}
                        <Input style={{paddingTop:'8px'}} ref={imageRef} type="file" name="company_logo" />
                    </label><br/>
                    <label>
                        About {<br/>}
                        <Input type="text" name="about" onChange={handleChange} value={addRecInp.about} />
                    </label><br/>
                    <RoundBtn style={{background:'#2557a7', color:'white', border:'none', marginTop:'10px'}}>Add Recruiter</RoundBtn>
                    
                    {
                        dispPopUp && <SuccessPopUp>Recruiter Added Successfully<span onClick={handelExitPopUp} style={{fontSize:'18px', position:'absolute', top:'10px', right:'10px', cursor:'pointer'}} class="material-icons-outlined">close</span></SuccessPopUp>
                    }
                </FormData>
            </form>
        </Container>
    )
}
