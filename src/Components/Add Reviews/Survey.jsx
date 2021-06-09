import React, { useEffect } from "react";
import { useParams, Redirect } from "react-router";
import style from "./Reviews.module.css";
import styled from "styled-components";
import axios from "axios";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import {
  postReviewRequest,
  postReviewSuccess,
  postReviewFailure,
} from "../../Redux/Reviews/action";
import { Input, Button } from "../../Custom UI/ACustomUI";
import ReactStars from "react-rating-stars-component";
import { SurveyTopPart } from "./SurveyTopPart";
import { Footer } from "./Footer";
import { loadData } from "../../Utils/localStorage";
import { Loading } from "../Loading/Loading";

const H1 = styled.h1`
  font-size: 19.95px;
  margin: 0px 0px 15px;
  padding: 24px 0px 0px;
`;

export const Survey = () => {
  const token = loadData("token") || {};
  const compname = useParams();
  const dispatch = useDispatch();

  document.title = `Write your review for ${compname.id}`;

  const reviewsData = {
    title: "",
    text: "",
    rating: "",
    language: token.email,
    reviewer: "",
    location: "",
    datetime: new Date(),
    reviewer_employee_type: "",
    job_work_and_life_balance_rating: "",
    compensation_and_benefits_rating: "",
    job_security_and_advancement_rating: "",
    management_rating: "",
    job_culture_rating: "",
    company: compname.id,
    email: token.email,
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [reviewData, setReviewData] = React.useState(reviewsData);
  const { title, text, reviewer, location } = reviewData;
  const [isSubmited, setIsSubmited] = React.useState(false);
  const ratingChanged = (newRating) => {
    setReviewData((prev) => ({ ...prev, rating: newRating }));
  };
  const handleChange = (e) => {
    let { name, value } = e.target;
    setReviewData((prev) => ({ ...prev, [name]: value }));
  };
  const { isLoading } = useSelector(
    (state) => state.reviewsReducer,
    shallowEqual
  );
  const [isFalse, setIsFalse] = React.useState(true);
  const handleFinish = () => {
    if (
      title.length === 0 ||
      text.length === 0 ||
      reviewer.length === 0 ||
      location.length === 0
    ) {
      setIsFalse(false);
    } else {
      setIsFalse(true);
      const requestAction = postReviewRequest();
      dispatch(requestAction);
      axios
        .post(
          "https://json-server-mocker-ajmal.herokuapp.com/reviews",
          reviewData
        )
        .then((res) => {
          const successAction = postReviewSuccess(res.message);
          dispatch(successAction);
          alert("Added Review Successfully");
          setIsSubmited(true);
        })
        .catch((err) => {
          const failureAction = postReviewFailure(err.message);
          dispatch(failureAction);
        });
    }
  };
  const isAuth = useSelector((state) => state.authReducer.isAuth);
  return isAuth ? (
    !isLoading ? (
      !isSubmited ? (
        <div style={{ backgroundColor: "#f5f5f5" }}>
          <div className={style.container}>
            <SurveyTopPart />
            <div style={{ height: "250px" }}>
              <H1 style={{ float: "left" }}>Rate this company</H1>
              <p style={{ color: "red", float: "right", margin: "3%" }}>
                *required
              </p>
              <div style={{ clear: "both" }}></div>
              <table>
                <tr>
                  <td>Overall rating</td>
                  <td>
                    <ReactStars
                      count={5}
                      name="rating"
                      onChange={ratingChanged}
                      size={24}
                      activeColor="#ffd700"
                    />
                  </td>
                </tr>
                <tr>
                  <td>Job Work/Life Balance</td>
                  <td>
                    <ReactStars
                      count={5}
                      name="jobwork"
                      size={24}
                      activeColor="#ffd700"
                    />
                  </td>
                </tr>
                <tr>
                  <td>Salary/Benefits</td>
                  <td>
                    <ReactStars
                      count={5}
                      name="salary"
                      size={24}
                      activeColor="#ffd700"
                    />
                  </td>
                </tr>
                <tr>
                  <td>Job Security/Advancement</td>
                  <td>
                    <ReactStars
                      count={5}
                      name="jobsecurity"
                      size={24}
                      activeColor="#ffd700"
                    />
                  </td>
                </tr>
                <tr>
                  <td>Management</td>
                  <td>
                    <ReactStars
                      count={5}
                      name="management"
                      size={24}
                      activeColor="#ffd700"
                    />
                  </td>
                </tr>
              </table>
            </div>
            <div style={{ height: "700px" }}>
              <H1>Write your review</H1>
              <p>Review Summary</p>
              <Input
                type="text"
                value={title}
                name="title"
                onChange={handleChange}
                placeholder="Example: Productive and fun workplace"
              />
              <div>
                <div style={{ float: "left" }}>
                  <p>Your Review</p>
                  <textarea
                    value={text}
                    name="text"
                    onChange={handleChange}
                    placeholder="Example: Productive and fun workplace"
                    style={{ width: "500px", height: "300px" }}
                  />
                </div>
                <div style={{ widht: "300px", padding: "10px" }}>
                  <p>Give us your opinion about</p>
                  <li>a typical day at work</li>
                  <li>what you learned</li>
                  <li>management</li>
                  <li>workplace culture</li>
                  <li>the hardest part of the job</li>
                  <li>the most enjoyable part of the job</li>
                  <p>
                    DO NOT include confidential company information or
                    personally identifiable information, such as names.
                    <br />
                    Your company review and job title will be shown publicly on
                    Indeed.
                  </p>
                </div>
                <div style={{ clear: "both" }}></div>
              </div>
              <p>Pros</p>
              <Input type="text" placeholder="Example: Free lunches" />
              <p>Cons</p>
              <Input type="text" placeholder="Example: Long hours" />
            </div>
            <div style={{ height: "300px" }}>
              <H1>Tell us about you</H1>
              <p>Job Title at {compname.id}</p>
              <Input
                type="text"
                value={reviewer}
                name="reviewer"
                onChange={handleChange}
              />
              <p>Job Location at {compname.id} </p>
              <Input
                type="text"
                value={location}
                name="location"
                onChange={handleChange}
              />
            </div>
            <div style={{ textAlign: "center", height: "100px" }}>
              <Button
                style={{ width: "300px", marginTop: "20px" }}
                onClick={handleFinish}
              >
                Finish
              </Button>
              {isFalse && (
                <p style={{ color: "red" }}>Please Fill Required Fields</p>
              )}
            </div>
          </div>
          <Footer />
        </div>
      ) : (
        <Redirect to="/companies" />
      )
    ) : (
      <div style={{ height: "20vh", marginTop: "15%" }}>
        <Loading />
      </div>
    )
  ) : (
    <Redirect to="/account/login" />
  );
};
