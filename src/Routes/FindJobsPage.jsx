import React from 'react'
import { FindJobs } from '../Components/Find Jobs/FindJobs'

export const FindJobsPage = () => {

    document.title = 'Job Search India | Indeed';
    
    return (
        <div>
            <FindJobs />
        </div>
    )
}
