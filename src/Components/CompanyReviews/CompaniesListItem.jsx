import { Link } from "react-router-dom";
import styled from 'styled-components';

const LinkStyled = styled(Link)`
    text-decoration:none;
    color:#4b4b4b;
    font-size:14px;
    margin: 0px 36px 0px 0px;
    &:hover{
        color:#000;
    }`;
const CompHeader = styled.h1`
    font-size:15px;
    margin:3px 2px 6px;
`;

export const CompaniesListItem=({item})=>{
    const{id,company_name,company_logo,total_reviews,rating} = item;
    return(
        <div style={{border:'1px solid#f5f5f5',padding:'24px'}}>
            <div style={{display:"flex"}}>
                <img src={company_logo} style={{width:'50px',height:'50px'}}/>
                <CompHeader>{company_name}</CompHeader>
            </div>
            
            <LinkStyled to={`companies/${item.id}/salaries`}>Salaries</LinkStyled>
            <LinkStyled to={`companies/${item.id}/faq`}>Q&A</LinkStyled>
            <LinkStyled to={`companies/${item.id}/jobs`}>Open Jobs</LinkStyled>
        </div>
    )
}