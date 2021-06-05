import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import styled from 'styled-components';
import { adminlogoutSuccess } from '../../Redux/Auth/action';
import { showAdminDetails } from '../../Redux/Admin/action';

const Container = styled.div`
    width: 300px;
    height: 200px;
    position: absolute;
    top: 50px;
    right: 30px;
    color: #000;
    font-size: 1rem;
    line-height: 50px;
    border-radius: 5px;
    background: white;
    box-shadow: 0 0 1.5rem 0.25rem rgb(0 0 0 / 13%);
    z-index: 100;
`;

const Content = styled.div`
    cursor: pointer;
    padding: 0 20px;
    display: flex;
    justify-content: space-between;

    &:hover {
        background: #ececec;
    }
`;

const H5 = styled.h5`
    padding: 0 20px;
`;

const Logout = styled.div`
    cursor: pointer;
    padding: 0 20px;
    width: 100%;
    height: 40px;
    border-top: 1px solid #ececec;
    color: #085ff7;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    bottom: 0;
`;

export const AuthNavDropdown = () => {

    const dispatch = useDispatch();

    const isAdminAuth = useSelector(state=> state.authReducer.isAdminAuth);
    const token = useSelector(state=> state.authReducer.token);

    const history = useHistory();

    const handleLogout = ()=>{
        dispatch(adminlogoutSuccess())
        history.push('/account/login')
    }

    const handleAdmDisp = ()=>{
        dispatch(showAdminDetails())
    }
    
    return (
        <Container onMouseLeave={handleAdmDisp}>
            <div>
                <H5>{token.email}</H5>
                <Content>Profile <span style={{marginTop:'12px'}} class="material-icons-outlined">description</span></Content>
                <Content>Account <span style={{marginTop:'10px'}} class="material-icons-outlined"><span class="material-icons-outlined">settings_input_component</span></span></Content>
            </div>
            <Logout onClick={handleLogout}>Logout</Logout>
        </Container>
    )
}
