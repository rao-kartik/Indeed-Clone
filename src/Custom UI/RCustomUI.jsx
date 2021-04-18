import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 50vh;
  display:flex;
  background-color: #e8f3fc;
  gap:10vw;
  
`;

export const Image = styled.img`
    height:50vh;
    position:relative;
`

export const SearchBar = styled.div`
  width:55vw;
  height: 18.5vh;
  margin-top:3vh;
  z-index:100;
  border-radius: 10px;
  border-top: 10px solid #7eacfb;
  background: white;
  padding: 1rem;
  position: absolute;
`;

export const Input = styled.input`
  width:21vw;
  height:5.5vh;
  margin:0.5rem;
  outline:none;
  padding:1.2rem;
  font-size:1.2rem;
  border-radius: 10px;
  border:1px solid #afafaf;
  margin:none;
`;

export const SearchButton = styled.button`
  height:6vh;
  margin:0.5rem;
  width: 10vw;
  border-radius: 10px;
`;

export const JobContainer = styled.div`
  height: 20vh;
  border-radius: 10px;
  padding:1.3vw;
  flex-basis: 23.5vw;
  margin:0.5vw;
  border: 1px solid #ECECEC;
`;


export const CompContainer = styled.div`
  height: 16vh;
  border-radius: 10px;
  padding: 1vw;
  /* flex-basis: 31.5vw; */
  margin: 0.4vw;
  border: 1px solid #ececec;
`;

export const Follow = styled.button`
  width:12vw;
  height:5vh;
  outline:none;
  border:none;
  margin:2vh;
  background:#085ff7;
  transition:0.3s ease-in-out;
  color:white;
  border-radius:30px;
  &:hover {
    cursor:pointer;
    background:#4488ff;
    transition:0.3s ease-in-out
  }
`;

export const Faq = styled.div`
  width:230px;
  height:auto;
  padding:20px;
  font-size:0.8rem;
  color:#6f6f6f;
  margin-left:-50px;
  border:1px solid #afafaf;
`;