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
  width:58vw;
  height: 22vh;
  z-index:100;
  margin-top:10px;
  border-radius: 15px;
  border-top: 15px solid #7eacfb;
  background: white;
  padding: 20px;
  position: absolute;
`;

export const Input = styled.input`
  width:20vw;
  margin:10px;
  padding:15px;
  outline:none;
  font-size:1.2rem;
  border-radius: 10px;
`;

export const SearchButton = styled.button`
  height: 55px;
  margin: 10px;
  width: 200px;
  border-radius: 10px;
`;

export const JobContainer = styled.div`
  height: 20vh;
  border-radius: 10px;
  padding:1.3vw;
  flex-basis: 390px;
  margin:0.4vw;
  border: 1px solid #ECECEC;
`;


export const CompContainer = styled.div`
  height: 16vh;
  border-radius: 10px;
  padding: 1vw;
  flex-basis: 520px;
  margin: 0.4vw;
  border: 1px solid #ececec;
`;