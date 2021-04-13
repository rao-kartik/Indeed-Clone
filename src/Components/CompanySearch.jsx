import React, { useEffect,useState } from 'react';
import { Link } from 'react-router-dom';
import {Button,Input,H1,P,Label} from '../CustomUI';
import style from './CompanySearch.module.css';

export const CompanySearch=()=>{
    console.log('aaa');
    useEffect(()=>{
        document.title = 'Find the Best Companies Hiring Now | Indeed.com';
    });
    return(
        <div className={style.container}>
            <P>Get access to millions of company reviews</P>
            <H1>Find great places to work</H1>
            <div style={{marginTop:'3%'}}>
                <div>
                <Label>
                    Company name or job title
                    <Input className={style.inputCompany}/>
                </Label>
                </div>
                <div>
                <Label>
                    City, state, or zip (optional)
                    <Input className={style.inputLocation}/>
                </Label>
                </div>
                <div style={{marginTop:'2%',textAlign:'center'}}>
                    <Button>Find Companies</Button><br/>
                    <Link style={{ textDecoration: 'none',color:'#085ff7',fontSize:'13px' }}>Do you want to search for salaries?</Link>
                </div>
            </div>           
        </div>
    )
}