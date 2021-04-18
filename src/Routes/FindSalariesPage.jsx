import React from 'react'
import { FindSalaries } from '../Components/Find Salaries/FindSalaries'

export const FindSalariesPage = () => {

    document.title = 'Salaries | Indeed.com';
    
    return (
        <div>
            <FindSalaries />
        </div>
    )
}
