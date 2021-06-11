import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { categoryJobsSearch } from "../../Redux/JobsByCategory/action";
import { JobByCategoryFooter } from "./JobByCategoryFooter";
import styles from "./Salaries.module.css";

function JobByCategory({ category }) {
  const dispatch = useDispatch();
  let params = category.replaceAll(" ", "").toLowerCase();
  const data = useSelector((state) => state.categoryJobs.jobs_data);

  useEffect(() => {
    dispatch(categoryJobsSearch(params));
  }, [params, dispatch]);

  return (
    <>
      <div className={styles.categoryJobs}>
        <h2 style={{ textAlign: "left" }}>{category}</h2>
        {data &&
          data.map((job, index) => {
            return (
              <div key={index} className={styles.jobSalary}>
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
  );
}

export { JobByCategory };
