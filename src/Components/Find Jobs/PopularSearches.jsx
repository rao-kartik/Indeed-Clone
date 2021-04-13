import React from 'react';
import { PopSearchBtn } from '../../Custom UI/KCustomUI';
import styled from 'styled-components';

const Container = styled.div`
    text-align: center;
    margin: 50px 0 0;
`;

const Pops = styled.div`
    width: 50rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin: 20px auto;
`;

const Span = styled.div`
position: relative;
top: 2px;
`;

export const PopularSearches = () => {
    return (
        <Container>
            <h3>Popular Searches</h3>

            <Pops>
                <PopSearchBtn>

                    <Span><span style={{fontSize:'18px', color:'#767676'}} class="material-icons-round">search</span></Span>

                    <span style={{marginLeft:'8px'}}>Government</span>

                </PopSearchBtn>
                <PopSearchBtn>

                    <Span><span style={{fontSize:'18px', color:'#767676'}} class="material-icons-round">search</span></Span>

                    <span style={{marginLeft:'8px'}}>Online Typing</span>

                </PopSearchBtn>
                <PopSearchBtn>

                    <Span><span style={{fontSize:'18px', color:'#767676'}} class="material-icons-round">search</span></Span>

                    <span style={{marginLeft:'8px'}}>Work from Home</span>

                </PopSearchBtn>
                <PopSearchBtn>

                    <Span><span style={{fontSize:'18px', color:'#767676'}} class="material-icons-round">search</span></Span>

                    <span style={{marginLeft:'8px'}}>Bank</span>

                </PopSearchBtn>
                <PopSearchBtn>

                    <Span><span style={{fontSize:'18px', color:'#767676'}} class="material-icons-round">search</span></Span>

                    <span style={{marginLeft:'8px'}}>Delivery Executive</span>

                </PopSearchBtn>
                <PopSearchBtn>

                    <Span><span style={{fontSize:'18px', color:'#767676'}} class="material-icons-round">search</span></Span>

                    <span style={{marginLeft:'8px'}}>Halthcare</span>

                </PopSearchBtn>
                <PopSearchBtn>

                    <Span><span style={{fontSize:'18px', color:'#767676'}} class="material-icons-round">search</span></Span>

                    <span style={{marginLeft:'8px'}}>Online Tutoring</span>

                </PopSearchBtn>
                <PopSearchBtn>

                    <Span><span style={{fontSize:'18px', color:'#767676'}} class="material-icons-round">search</span></Span>

                    <span style={{marginLeft:'8px'}}>Police</span>

                </PopSearchBtn>
                <PopSearchBtn>

                    <Span><span style={{fontSize:'18px', color:'#767676'}} class="material-icons-round">search</span></Span>

                    <span style={{marginLeft:'8px'}}>Nursing</span>

                </PopSearchBtn>
                <PopSearchBtn>

                    <Span><span style={{fontSize:'18px', color:'#767676'}} class="material-icons-round">search</span></Span>

                    <span style={{marginLeft:'8px'}}>NGO</span>
                </PopSearchBtn>
            </Pops>

        </Container>
    )
}
