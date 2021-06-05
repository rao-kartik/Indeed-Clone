import React from 'react';
import { Company } from '../Components/CompanyReviews/Company'

export const CompanyReviewsPage = () => {

    document.title = 'Find the Best Companies Hiring Now | Indeed.com';
    
    return (
        <div>
            <Company />
        </div>
    )
}
