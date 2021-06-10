import React from "react";
import { useState } from "react";
import styled from "styled-components";
import { useHistory } from "react-router";
import { Input, Button } from "../../Custom UI/ReviewsUI";
import { Popup } from "./popup";

const H1 = styled.h1`
  font-size: 20px;
  float: left;
`;
const Div = styled.div`
  float: right;
  border-radius: 25.5px;
  background-color: #f3f2f1;
  padding: 5px;
`;
const StarButton = styled.button`
  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;
`;
const MainContainer = styled.div`
  width: 70%;
  margin: auto;
  border-top: 6px solid #ff5a1f;
  background-color: white;
`;
const ContainerTop = styled.div`
  margin-top: 20px;
`;
const ClearDiv = styled.div`
  clear: both;
  margin-bottom: 20px;
`;
const Span = styled.span`
  font-size: 30px;
`;

export const CompanyRating = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [companyName, setCompanyName] = useState("");
  const history = useHistory();
  const togglePopup = () => {
    setIsOpen(!isOpen);
  };
  const handleNext = () => {
    history.push(`/companies/review/${companyName}`);
  };
  return (
    <MainContainer>
      <ContainerTop>
        <H1>Rate your recent company:</H1>
        <Div>
          {[...Array(5)].map((star, index) => {
            index += 1;
            return (
              <StarButton
                type="button"
                key={index}
                className={index <= (hover || rating) ? "on" : "off"}
                onClick={(() => setRating(index), togglePopup)}
                onMouseEnter={() => setHover(index)}
                onMouseLeave={() => setHover(rating)}
              >
                <Span>&#9733;</Span>
              </StarButton>
            );
          })}
        </Div>
      </ContainerTop>
      <ClearDiv></ClearDiv>
      {isOpen && (
        <Popup
          content={
            <>
              <b>Rate a company you've worked for in the past 3 years</b>
              <br />
              <Input
                width="comapany_rating"
                placeholder="Enter a Company Name"
                onChange={(e) => setCompanyName(e.target.value)}
              />
              <br />
              <Button
                style={{ width: "172px", marginTop: "10px" }}
                onClick={handleNext}
              >
                Next
              </Button>
            </>
          }
          handleClose={togglePopup}
        />
      )}
    </MainContainer>
  );
};
