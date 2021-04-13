import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import {Button,Input,H1,P} from '../CustomUI'
export const CompanySearch=()=>{
    useEffect(()=>{
        document.title = 'Find the Best Companies Hiring Now | Indeed.com'
    },[]);

    return(
        <div>
            <P>Get access to millions of company reviews</P>
            <H1>Find great places to work</H1>
            <label>
                Company name or job title
                <Input/>
            </label>
            <label>
                City, state, or zip (optional)
                <Input/>
            </label>
            <Button>Find Companies</Button>
        </div>
    )
}