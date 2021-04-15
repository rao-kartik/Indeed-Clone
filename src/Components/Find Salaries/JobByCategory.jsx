import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { categoryJobsSearch } from '../../Redux/JobsByCategory/action';
import styles from './Salaries.module.css'

function JobByCategory({ category}) {
    const data = useSelector((state) => state.categoryJobs.jobs_data)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(categoryJobsSearch('popular_jobs_salary'))
    },[])
    console.log(category)
    return data && data.map(job => {
        return (
            <div className={styles.jobsContainer}>
                <div>
                    <h3>{job.name}</h3>
                </div>
                <h3>{job.salary}</h3>
            </div>
        )
    })
}

export { JobByCategory}