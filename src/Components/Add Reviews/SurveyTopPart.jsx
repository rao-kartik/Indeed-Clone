import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { getCompanyLogo } from "../../Redux/company/action";
import style from "./Reviews.module.css";
import { Popup } from "../CompanyReviews/popup";

const MainContainer = styled.div`
  display: flex;
  background-color: white;
  height: 138px;
  padding: 0px 24px 24px;
  margin: 5px;
  @media (max-width: 865px) {
    height: 158px;
  }
  @media (max-width: 780px) {
    height: 198px;
  }
  @media (max-width: 675px) {
    height: 228px;
  }
  @media (max-width: 600px) {
    height: 288px;
  }
`;
const SpanLarge = styled.span`
  font-size: 22px;
`;
const SpanSmall = styled.span`
  font-size: 14px;
`;
const Li = styled.li`
  font-size: 14px;
`;
const Img = styled.img`
  width: 100px;
  height: 100px;
  border: 1px solid #f5f5f5;
`;
export const SurveyTopPart = () => {
  const compname = useParams();
  const dispatch = useDispatch();
  const company_logo = useSelector((state) => state.company.company_logo);
  const [isOpen, setIsOpen] = useState(false);
  const togglePopup = () => {
    setIsOpen(!isOpen);
  };
  useEffect(() => {
    dispatch(getCompanyLogo(compname.id));
  }, []);

  return (
    <MainContainer>
      <div>
        <Img src={company_logo} alt="company logo" />
      </div>
      <div style={{ marginTop: "24px", marginLeft: "15px" }}>
        <SpanLarge>Take a minute to review {compname.id}.</SpanLarge>
        <br />
        <SpanSmall>
          Your anonymous feedback will help fellow jobseekers{" "}
        </SpanSmall>
        <button onClick={togglePopup} className={style.icon}></button>
        <Li>
          <span>
            Company reviews are <b>NEVER</b> attached to your job applications
          </span>
        </Li>
        <Li>
          <span>
            The reviews <b>ONLY</b> include star ratings, review text, job
            title, location and review date
          </span>
        </Li>
      </div>
      {isOpen && (
        <Popup
          content={
            <>
              <span>
                Your name and email address will NOT appear next to your review.
                Please note, however, that Indeed may disclose your information
                in response to legal process or requests. See our Terms of
                Service for more information.
              </span>
            </>
          }
          handleClose={togglePopup}
        />
      )}
    </MainContainer>
  );
};
