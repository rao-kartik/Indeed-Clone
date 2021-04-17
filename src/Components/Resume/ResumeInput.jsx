import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { showPopUp, exitPopUp, getResume, sendResume } from "../../Redux/Resume/action";
import styles from "./Resume.module.css";

const PopUp = styled.div`
    width: 400px;
    padding: 50px;
    text-align: center;
    font-size: 20px;
    background: #fff;
    border-radius: 10px;
    box-shadow: 0 0 1.5rem 0.25rem rgb(0 0 0 / 13%);
    position: fixed;
    z-index: 5;
    left: 16%;
`;

function ResumeInput() {
    const dispatch  = useDispatch();

    const token = useSelector(state=> state.authReducer.token);

    const showPop = useSelector(state=> state.resume.showPop);

    const email = token.email;
    console.log(email)

  let initState = {
    fname: "",
    lname: "",
    city: "",
    email: email,
    phone: "",
    linkedin: "",
    objective: "",
    education: "",
    gender: "male",
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
        console.log('submit');
        dispatch(sendResume(data));
        dispatch(getResume());
        dispatch(showPopUp())
    }

    const handleExitPopUp = ()=>{
      dispatch(exitPopUp())
      dispatch(getResume());
    }
    
  return (
    <>
      <div className={styles.resumeContainer}>
        {
            showPop && <PopUp>Congratulaions, You have successfully created resume <span onClick={handleExitPopUp} style={{fontSize:'18px', position:'absolute', top:'10px', right:'10px', cursor:'pointer'}} class="material-icons-outlined">close</span></PopUp>
        }
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
