import { Link } from "react-router-dom";

export const CompaniesListItem=({item})=>{
    const{id,company_name,company_logo,total_reviews,rating} = item;
    console.log(id,company_name,company_logo,total_reviews,rating);
    return(
        <div style={{}}>
            <img src={company_logo} style={{width:'80px'}}/>
            <h4>{company_name}</h4>
            <Link to={`companies/${item.id}/salaries`}>Salaries</Link>
            <Link to={`companies/${item.id}/faq`}>Q&A</Link>
            <Link to={`companies/${item.id}/jobs`}>Open Jobs</Link>
        </div>
    )
}