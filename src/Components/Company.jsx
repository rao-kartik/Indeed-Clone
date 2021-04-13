import React from 'react';
import { CompanyList } from './CompaniesList';
import { CompanySearch } from './CompanySearch';

export const Company=()=>{
    return(
        <div>
            <CompanySearch/>
            <CompanyList/>
        </div>
    )
}