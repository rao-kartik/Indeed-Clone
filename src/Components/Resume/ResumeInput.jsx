import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { sendResume } from "../../Redux/Resume/action";
import styles from "./Resume.module.css";

function ResumeInput() {
    const dispatch  = useDispatch();
  let initState = {
    fname: "",
    lname: "",
    city: "",
    email: "",
    phone: "",
    linkedin: "",
    objective: "",
    education: "",
    gender: "",
    year: "",
    dob: "",
    nation: "",
    photo: "",
  };
  const [data, setData] = useState(initState);
  const handleChange = (e) => {
      const {name,value} = e.target;
      let payload = {
          ...data,
          [name]:value,
      }
      setData(payload)
  }
    const handleSubmit = () => {
        console.log(data)
        console.log('submit')
        dispatch(sendResume(data))
    }
  return (
    <>
      <div className={styles.resumeContainer}>
        <h1>Resume Building</h1>
        <h3>Personal Details</h3>
        <div>
          <input
            type="text"
            placeholder="First Name"
            value={data.fname}
            name="fname"
            onChange={handleChange}
          />
          <input
            type="text"
            placeholder="Last Name"
            value={data.lname}
            name="lname"
            onChange={handleChange}
          />
        </div>
        <input
          type="city"
          placeholder="City"
          value={data.city}
          name="city"
          onChange={handleChange}
        />
        <input
          type="email"
          placeholder="Email"
          value={data.email}
          name="email"
          onChange={handleChange}
        />
        <input
          type="number"
          placeholder="Phone number"
          value={data.phone}
          name="phone"
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="LinkedIn Profile"
          value={data.linkedin}
          name="linkedin"
          onChange={handleChange}
        />
        <textarea
          type="text"
          placeholder="Objective"
          value={data.objective}
          name="objective"
          onChange={handleChange}
        />
        <br />
        <h3>Qualification Details</h3>
        <label>
          What is your highest level of education?
          <select
            name="education"
            value={data.education}
            onChange={handleChange}
          >
            <option value="none">Select an option</option>
            <option value="none">None</option>
            <option value="secondary">Secondary (10th Pass)</option>
            <option value="highersecondary">
              Higher Secondary (12th Pass)
            </option>
            <option value="diploma">Diploma</option>
            <option value="bachelor">Bachelor's</option>
            <option value="master">Master's</option>
            <option value="doctorate">Doctorate</option>
          </select>
        </label>
        <br />
        <label>
          Year
          <input
            type="date"
            value={data.year}
            name="year"
            onChange={handleChange}
          />
        </label>
        <h3>Other Details</h3>
        <label>
          Gender
          <select
            name="gender"
            value={data.gender}
            onChange={handleChange}
          >
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="hidden">Prefer not to say</option>
          </select>
        </label>
        <br />
        <label>
          DOB
          <input
            type="date"
            value={data.dob}
            name="dob"
            onChange={handleChange}
          />
        </label>
        <input
          type="text"
          placeholder="Nationality"
          value={data.nation}
          name="fname"
          onChange={handleChange}
          name="nation"
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Photogrpah URL"
          value={data.photo}
          name="photo"
          onChange={handleChange}
        />
        <div onClick={handleSubmit} className={styles.proceedMain}>
          <div className={styles.proceedBtn}>
            <p>Proceed</p>
            <div className={styles.d1}></div>
            <div className={styles.d2}></div>
            <div className={styles.d3}></div>
            <div className={styles.d4}></div>
          </div>
        </div>
      </div>
    </>
  );
}

export { ResumeInput };
