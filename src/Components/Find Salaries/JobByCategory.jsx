import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { categoryJobsSearch } from "../../Redux/JobsByCategory/action";
import { JobByCategoryFooter } from "./JobByCategoryFooter";
import styles from "./Salaries.module.css";

function JobByCategory({ category }) {
  let params = category.replaceAll(" ", "").toLowerCase();
  useEffect(() => {
    dispatch(categoryJobsSearch(params));
  }, [params]);

  const data = useSelector((state) => state.categoryJobs.jobs_data);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(categoryJobsSearch(category));
  }, []);
  console.log(category);
  return (
    <>
      <div className={styles.allJobs}>
        <h2 style={{ textAlign: 'left' }}>{category}</h2>
        {data &&
          data.map((job) => {
            return (
              <div className={styles.jobSalary}>
                <div>
                  <h4>{job.name}</h4>
                </div>
                <h4>{`${job.salary} per year`}</h4>
              </div>
            );
          })}
      </div>
      <JobByCategoryFooter />
    </>
  )
}

export { JobByCategory };
