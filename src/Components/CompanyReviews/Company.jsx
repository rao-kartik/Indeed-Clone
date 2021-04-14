import React from 'react';
import { CompanyList } from './CompaniesList';
import { CompanyRating } from './CompaniesRating';
import { CompanySearch } from './CompanySearch';

export const Company=()=>{
    return(
        <div style={{backgroundColor:'#f5f5f5'}}>
            <CompanySearch/>
            <CompanyList type={'hiringnow'}/>
            <CompanyList type={'popular'}/>
            <CompanyRating/>
        </div>
    )
}