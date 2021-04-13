import { Link } from "react-router-dom";

export const CompaniesListItem=({item})=>{
    const{id,company_name,company_logo,total_reviews,rating} = item;
    console.log(id,company_name,company_logo,total_reviews,rating);
    return(
        <div>
            <img src={company_logo}/>
            <h1>{company_name}</h1>
            <Link>Salaries</Link>
            <Link>Q&A</Link>
            <Link>Open Jobs</Link>
        </div>
    )
}