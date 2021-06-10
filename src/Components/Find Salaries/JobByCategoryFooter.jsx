import React from "react";
import styled from "styled-components";
import { Follow } from "../../Custom UI/stylesFindSalaries";

const JobByCategoryFooter = () => {
  return (
    <>
      <Footer>
        <Wrapper>
          <h3>How much should you be earning?</h3>
          <p>
            Tell us about you and get an estimated calculation of how much you
            should be earning and insight into your career options.
          </p>

          <Follow
            style={{ width: "220px", height: "40px", fontWeight: "bold" }}
          >
            Get Started
          </Follow>
        </Wrapper>
        <div>
          <img src="https://i.ibb.co/8zbpSYq/image.png" alt="" />
        </div>
      </Footer>
    </>
  );
};

export { JobByCategoryFooter };

export const Footer = styled.div`
  width: 70%;
  border-radius: 10px;
  height: auto;
  margin: 5vh 0vh;
  text-align: left;
  display: flex;
  justify-content: space-between;
  border: 1px solid #534242;
  padding: 20px 0px 0px 20px;
`;

export const Wrapper = styled.div`
  margin-top: 15px;
  h3,
  p {
    margin-top: 15px;
  }
`;
