import React from 'react';
import { CompanyList } from './CompaniesList';
import { CompanySearch } from './CompanySearch';

export const Company=()=>{
    return(
        <div style={{backgroundColor:'#f5f5f5'}}>
            <CompanySearch/>
            <CompanyList type={'hiringnow'}/>
            <CompanyList type={'popular'}/>
        </div>
    )
}