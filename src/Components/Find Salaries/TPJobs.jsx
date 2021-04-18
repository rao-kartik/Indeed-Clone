import React, { useEffect } from "react";
import styles from "./Salaries.module.css";
import { getTopPayingJobs } from "../../Redux/TopPayingJobs/action";
import { useDispatch, useSelector } from "react-redux";
import { JobContainer } from "../../Custom UI/RCustomUI"

function TPJobs() {
  const tpJobs = useSelector((state) => state.topPayingJobs.jobs);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTopPayingJobs());
  }, []);

  return (
    <div className={styles.tpJobs}>
      <h1>Browse top paying jobs by industry</h1>
      <select name="" id="">
          <option value="">Choose an Industry</option>
      </select>
      <div className={styles.jobsContainer}>
        {tpJobs &&
          tpJobs.map((item) => {
            return (
              <JobContainer className={styles.jobCard}>
                <h4>{item.title}</h4>
                <div>
                  Average Salary
                  <span style={{ fontWeight: "bold" , marginLeft:'1.4vw' }}>{item.Avg_salary}</span>
                </div>
                    <p style={{ width: '100%', background:'#ECECEC',height:'1px', marginTop:'3vh'}}></p>
                <div>Job Openings</div>
              </JobContainer>
            );
          })}
      </div>
    </div>
  );
}

export { TPJobs };
