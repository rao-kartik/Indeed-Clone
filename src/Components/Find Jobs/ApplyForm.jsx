import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Redirect, useHistory } from "react-router-dom";
import styled from "styled-components";
import { Input } from "../../Custom UI/ReviewsUI";
import { Button } from '../../Custom UI/stylesHome';
import { Popup } from "../CompanyReviews/popup";
import { ApplyFormResume } from "./ApplyFormResume";

const H1 = styled.h1`
  font-size: 26px;
`;
const H2 = styled.h1`
  font-size: 16px;
  font-weight: bold;
  margin-top: 10px;
  margin-bottom: 10px;
`;
const Container = styled.div`
  width: 50%;
  margin: auto;
  margin-top: 3%;
  padding: 2%;
`;
const TextArea = styled.textarea`
  width: 100%;
  height: 200px;
  padding: 2px 18px 0px 27px;
  border: 2px solid #949494;
  border-radius: 4px;
  font-size: 1rem;
  font-weight: normal;
  @media (max-width: 840px) {
    width: 90%;
  }
`;
const FlexContainer = styled.div`
  display: flex;
`;
export const ApplyForm = () => {
  const history = useHistory();
  const [isContinue, setIsContinue] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const togglePopup = () => {
    setIsOpen(!isOpen);
  };
  const inputData = {
    years: "",
    education: "",
    ctc: "",
    question: "",
  };
  const handleReturn = () => {
    history.push("/");
  };
  const [inpData, setInpData] = React.useState(inputData);
  const { years, education, ctc, question } = inpData;
  const handleChange = (e) => {
    let { name, value } = e.target;
    setInpData((prev) => ({ ...prev, [name]: value }));
  };
  const handleContinue = () => {
    if (years.length === 0 || education.length === 0) {
      setIsContinue(false);
    } else {
      setIsContinue(true);
    }
  };
  const isAuth = useSelector((state) => state.authReducer.isAuth);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return isAuth ? (
    !isContinue ? (
      <Container>
        <H1>Questions from CommerceIQ</H1>
        <H2>How many years of business analyst experience do you have?</H2>
        <Input
          type="text"
          value={years}
          name="years"
          onChange={handleChange}
          style={{ width: "100%" }}
        />
        <H2>What is the highest level of education you have completed?</H2>
        <Input
          type="text"
          value={education}
          name="education"
          onChange={handleChange}
          style={{ width: "100%" }}
        />
        <H2>What is your expected CTC?(optional)</H2>
        <Input
          type="text"
          value={ctc}
          name="ctc"
          onChange={handleChange}
          style={{ width: "100%" }}
        />
        <H2>
          This question was written by the employer. You can report
          inappropriate questions to Indeed by exiting this application and
          clicking the blue "Report Job" job link below the job description.
          "Looking for product based industry experience from tier 1 /tier 2
          colleges(NIT ,BIT, IIT,IIIT, BITS)"(optional)
        </H2>
        <TextArea value={question} name="question" onChange={handleChange} />
        <FlexContainer>
          <Button
            style={{ background: "transparent", color: "blue" }}
            onClick={togglePopup}
          >
            Return to Job Search
          </Button>
          <Button onClick={handleContinue}>Continue</Button>
        </FlexContainer>
        {isOpen && (
          <Popup
            content={
              <>
                <b>
                  Are you sure you want to exit? Your application will not be
                  saved.
                </b>
                <br />
                <Button
                  style={{ width: "120px", margin: "auto", marginTop: "20px" }}
                  onClick={handleReturn}
                >
                  Exit
                </Button>
                <Button
                  style={{
                    width: "120px",
                    margin: "auto",
                    marginTop: "10px",
                    backgroundColor: "white",
                    color: "blue",
                  }}
                  onClick={togglePopup}
                >
                  Cancel
                </Button>
              </>
            }
            handleClose={togglePopup}
          />
        )}
      </Container>
    ) : (
      <Container>
        <ApplyFormResume />
      </Container>
    )
  ) : (
    <Redirect to="/account/login" />
  );
};
