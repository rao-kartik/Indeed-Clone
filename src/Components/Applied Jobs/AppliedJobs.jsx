import React, { useEffect } from "react";
import { Redirect } from "react-router";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { myJobSearch } from "../../Redux/MyJobs/action";
import { P } from "../../Custom UI/ReviewsUI";
import { AppliedJobList } from "./AppliedJobList";

const Container = styled.div`
  background-color: #f5f5f5;
  padding: 20px;
`;
const HeadContainer = styled.div`
  height: 10vh;
`;
const H1 = styled.h1`
  color: black;
  font-size: 32px;
  margin: 0px 0px 16px;
  margin-top: 20px;
  text-align: center;
`;
const CenterContainer = styled.div`
  width: 50%;
  margin: auto;
`;

export const AppliedJobs = () => {
  const isAuth = useSelector((state) => state.authReducer.isAuth);
  const jobdata = useSelector((state) => state.myJobReducer.job_data);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(myJobSearch());
  }, []);
  return isAuth ? (
    <div>
      <HeadContainer>
        <H1>My Applied Jobs</H1>
      </HeadContainer>
      <Container>
        <CenterContainer>
          {!jobdata.length > 0 ? (
            <P>Not Applied Any Jobs</P>
          ) : (
            <AppliedJobList reviewsData={jobdata} />
          )}
        </CenterContainer>
      </Container>
    </div>
  ) : (
    <Redirect to="/account/login" />
  );
};
