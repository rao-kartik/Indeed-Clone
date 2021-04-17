import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { getResume } from '../../Redux/Resume/action';

const Container = styled.div`
    width: 100%;
    height: 100%;
    padding: 60px 60px 0;
`;

const Head = styled.div`
    width: 50%;
    height: 100px;
    border-radius: 5px;
    background: #fff;
    position: relative;
    padding: 20px 70px;
    margin-left: 45px;
    line-height: 30px;    
    box-shadow: 0 0 1.5rem 0.25rem rgb(0 0 0 / 13%);
    color: #6f6f6f;
`;

const ImageBox = styled.div`
    position: absolute;
    width: 80px;
    height: 80px;
    top: 10px;
    left: -40px;
    border-radius: 50px;
    border: 3px solid #085ff7
`;

const Image = styled.img`
    width: 100%;
    height: 100%;
    border-radius: 50px;
`;

const ProfileBar = styled.div`
    width: 100%;
    height: 40px;
    display: flex;
    margin-top: 20px;
    padding-left: 45px;
    font-size: 18px;
`;

const BarCont = styled.div`
    margin: 5px 20px 0 0;
    border-bottom: 2px solid #085ff7;
`;

export const ResumeTop = () => {

    const resumeData  = useSelector(state=> state.resume.resumeData)
    const token = useSelector(state=> state.authReducer.token);

    const email = token.email;
    console.log(email)
    
    const data = resumeData.filter(item=> item.email === email)

    const dispatch = useDispatch();


    const handleGetData = ()=>{
        dispatch(getResume())
    }

    useEffect(()=>{
        handleGetData()
    },[])
    
    return (
        <Container>
            <Head>
                {
                    data.length === 1 ? (
                        <ImageBox>
                            <Image src={data[0].photo} />
                        </ImageBox>
                    ) : (
                        <ImageBox style={{background:'#fff'}}></ImageBox>
                    )
                }
                {
                    data.length === 1 ? (
                        <div>
                            <h1>{`${data[0].fname} ${data[0].lname}`}</h1>
                            <p><span style={{position:'relative', top:'2px', fontSize:'16px'}} class="material-icons-outlined">room</span>   {data[0].city} </p>
                        </div>
                    ) : (
                        <div>
                            <h1>Name</h1>
                            <p><span style={{position:'relative', top:'2px', fontSize:'16px'}} class="material-icons-outlined">room</span>   Locatioon </p>
                        </div>
                    )
                }
            </Head>
            <ProfileBar>
                <BarCont>Resume</BarCont>
                <BarCont style={{border:'none'}} >About me</BarCont>
            </ProfileBar>
        </Container>
    )
}
