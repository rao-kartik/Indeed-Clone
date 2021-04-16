import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { getCompanyData } from "../../Redux/CompanyInfo/action";
import { Faq, Follow, Logo, SearchButton } from "../../Custom UI/RCustomUI";
import styles from "./Salaries.module.css";
import { JobByCategory } from "../../Components/Find Salaries/JobByCategory";
import { useState } from "react";
import { categories } from './data';

function CompanyInfo() {
  const data = useSelector((state) => state.companyInfo.data);
  const { name, logo, poster, reviews } = data;
  const [category, setCategory] = useState("Popular Jobs");
  const jobs_data = useSelector((state) => state.categoryJobs.jobs_data);
  const [follow, setFollow] = useState(false);
  const handleFollow = () => {
    setFollow(!follow)
  }
  const dispatch = useDispatch();
  const { id } = useParams();
  const handleChange = (e) => {
    const { value } = e.target;
    setCategory(value);
  };
  useEffect(() => {
    dispatch(getCompanyData(id));
  }, []);


  console.log("data", jobs_data);
  return (
    <div className={styles.poster}>
      <img src={poster} alt="poster" />
      <div className={styles.companyInfo}>
        <div className={styles.logo}>
          <img src={logo} alt="logo" />
        </div>
        <div>
          <h4>{name}</h4>
          <br />
          <p>{reviews}</p>
        </div>
        <div>
          {" "}
          <Follow onClick={handleFollow}>
            {follow ? "Following" : "Follow"}
          </Follow>
          <p>Get weekly updates, new jobs, and reviews</p>
        </div>
      </div>
      <div className={styles.category}>
        <div>Snapshot</div>
        <div>Why Join Us</div>
        <div>Reviews</div>
        <div>Salaries</div>
        <div>Photos</div>
        <div>Jobs</div>
        <div>Questions</div>
        <div>Interviews</div>
      </div>
      <hr style={{ height: "2px", color: "lightgray", margin: "5vh 0vh" }} />
      <div className={styles.compInfo}>
        <div>
          <div>
            <h2>{`${name} - Salaries in India`}</h2>
          </div>
          <div>
            <button>Add a Salary</button>
          </div>
        </div>

        <div>
          <div>
            <p>
              Salary estimated from 910 employees, users, and past and present
              job advertisements on Indeed in the past 36 months.Last updated: 7
              April, 2021
            </p>
          </div>
          <div></div>
        </div>

        <div>
          <div>
            <select onChange={handleChange}>
              {categories.map((opt) => {
                return <option value={opt}>{opt}</option>;
              })}
            </select>
            <select disabled={true} value="India">
              <option value="India">India</option>
            </select>
          </div>
          <div>
            <Faq className={styles.faq}>
              <h4 >Question about {name}</h4>
              <br />
              <div>What qualifications refer to get job</div>
              <p>395 People answered</p>
              <div>What should you wear to an interview at {name}</div>
              <p>192 People answered</p>
              <div>How are the working hours</div>
              <p>134 People answered</p>
            </Faq>
          </div>
        </div>
      </div>
      <JobByCategory category={category} />
    </div>
  );
}

export { CompanyInfo };
