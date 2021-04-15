import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { getCompanyData } from "../../Redux/CompanyInfo/action";
import {JobByCategory} from '../Find Salaries/JobByCategory'
import { Follow, Logo, SearchButton } from "../../Custom UI/RCustomUI"
import styles from "./Salaries.module.css";
import { useState } from "react";

function CompanyInfo() {
  const [category,setCategory] = useState('Popular Jobs')
  const [follow,setFollow] = useState(false)
    const data = useSelector((state) => state.companyInfo.data)
    const dispatch = useDispatch()
    const {id} = useParams();
  const handleChange = (e) => {
    const {value} = e.target;
    setCategory(value)
  }
    console.log(id);
    useEffect(() => {
        dispatch(getCompanyData(id))
    },[])
    const {name, logo, poster, reviews} = data;
  const categories = [
    "Popular Jobs",
    "Accounting",
    "Administrative Assistance",
    "Customer Service",
    "Driving",
    "Education & Instruction",
    "Human Resources",
    "IT Operations & Helpdesk",
    "Industrial Engineering",
    "Information Design & Documentation",
    "Installation & Maintenance",
    "Loading and Stocking",
    "Management",
    "Mathematics",
    "Mechanical Engineering",
    "Medical Information",
    "Project Management",
    "Sales",
    "Scientific Research & Development",
    "Software Development",
  ];
  return (
    <div className={styles.poster}>
      <img
        src={poster}
        alt="poster"
      />
      <div className={styles.companyInfo}>
        <div className={styles.logo}>
          <img
            src={logo}
            alt="logo"
          />
        </div>
        <div>
          <h4>{name}</h4>
          <br/>
          <p>{reviews}</p>
        </div>
        <div>
          {" "}
          <Follow onClick={()=> setFollow(!follow)}>{follow? "Following" : "Follow"}</Follow>
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
          {/* <div className={styles.claimedProfile}>Claimed Profile</div> */}
        </div>

        <div>
          <div>
            <select>
              {categories.map((opt) => {
                return <option value={opt} onChange={handleChange}>{opt}</option>;
              })}
            </select>
            <select disabled={true} value='India'>
              <option value="India">India</option>
            </select>
          </div>
          <div>{/* <button>Add a Salary</button> */}</div>
        </div>
      </div>
        <JobByCategory category={category} />
    </div>
  );
}

export { CompanyInfo };
