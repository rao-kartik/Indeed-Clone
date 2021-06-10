import React from 'react'
import { FindSalaries } from './FindSalaries'
import { TPCompany } from './TPCompany'
import { TPJobs } from './TPJobs'
import { PageRating } from './PageRating'

const Salaries = () => {
    return (
        <>
            <FindSalaries />
            <TPJobs />
            <TPCompany />
            <PageRating />
        </>
    )
}
export default Salaries
