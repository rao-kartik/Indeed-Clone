import React, { useEffect } from "react";
import { useParams, Redirect } from "react-router";
import styled from "styled-components";
import ReactStars from "react-rating-stars-component";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { postReview } from "../../Redux/Reviews/action";
import { loadData } from "../../Utils/localStorage";
import { Button } from "../../Custom UI/ReviewsUI";
import { SurveyTopPart } from "./SurveyTopPart";
import { Footer } from "./Footer";
import { Loading } from "../Loading/Loading";

const H1 = styled.h1`
  font-size: 19.95px;
  margin: 0px 0px 15px;
  padding: 24px 0px 0px;
`;
const MainContainer = styled.div`
  background-color: #f5f5f5;
  margin-top: 50px;
`;
const LoadingContainer = styled.div`
  height: 20vh;
  margin-top: 15%;
`;
const Container = styled.div`
  width: 70%;
  margin: auto;
`;
const RateCompanyDiv = styled.div`
  height: 250px;
  background-color: white;
  padding: 0px 24px 24px;
  margin: 5px;
`;
const ReviewContainer = styled.div`
  background-color: white;
  padding: 0px 24px 24px;
  margin: 5px;
  height: "700px";
`;
const AboutContainer = styled.div`
  background-color: white;
  height: 300px;
  padding: 0px 24px 24px;
  margin: 5px;
`;
const Input = styled.input`
  background-color: #ffffff;
  width: 500px;
  height: 54px;
  padding: 2px 18px 0px 27px;
  border: 2px solid #949494;
  border-radius: 4px;
  font-size: 1rem;
  font-weight: normal;
  margin: 0;
  line-height: 44px;
  outline: none;
  margin-top: 2%;
  &:focus {
    border-color: #085ff7;
  }
  @media (max-width: 840px) {
    width: 90%;
  }
`;
const TextArea = styled.textarea`
  width: 500px;
  height: 300px;
  padding: 2px 18px 0px 27px;
  border: 2px solid #949494;
  border-radius: 4px;
  font-size: 1rem;
  font-weight: normal;
  @media (max-width: 840px) {
    width: 90%;
  }
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
  const [reviewData, setReviewData] = React.useState(reviewsData);
  const { title, text, reviewer, location } = reviewData;
  const ratingChanged = (newRating) => {
    setReviewData((prev) => ({ ...prev, rating: newRating }));
  };
  const handleChange = (e) => {
    let { name, value } = e.target;
    setReviewData((prev) => ({ ...prev, [name]: value }));
  };
  const { isLoading, isSubmitted } = useSelector(
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
      dispatch(postReview(reviewData));
    }
  };
  const isAuth = useSelector((state) => state.authReducer.isAuth);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return isAuth ? (
    !isLoading ? (
      !isSubmitted ? (
        <MainContainer>
          <Container>
            <SurveyTopPart />
            <RateCompanyDiv>
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
            </RateCompanyDiv>
            <ReviewContainer>
              <H1>Write your review</H1>
              <p>Review Summary</p>
              <Input
                from="survey"
                type="text"
                value={title}
                name="title"
                onChange={handleChange}
                placeholder="Example: Productive and fun workplace"
              />
              <div>
                <div style={{ float: "left" }}>
                  <p>Your Review</p>
                  <TextArea
                    value={text}
                    name="text"
                    onChange={handleChange}
                    placeholder="Example: Productive and fun workplace"
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
            </ReviewContainer>
            <AboutContainer>
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
            </AboutContainer>
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
          </Container>
          <Footer />
        </MainContainer>
      ) : (
        <Redirect to="/companies" />
      )
    ) : (
      <LoadingContainer>
        <Loading />
      </LoadingContainer>
    )
  ) : (
    <Redirect to="/account/login" />
  );
};
