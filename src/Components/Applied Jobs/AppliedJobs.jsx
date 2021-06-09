import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router";
import styled from "styled-components";
import { H1, P } from "../../Custom UI/ACustomUI";
import { myJobSearch } from "../../Redux/MyJobs/action";
import { AppliedJobList } from "./AppliedJobList";

const Container = styled.div`
  background-color: #f5f5f5;
  padding: 20px;
`;
const HeadContainer = styled.div`
  height: 10vh;
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
        <H1
          style={{ fontSize: "32px", marginTop: "20px", textAlign: "center" }}
        >
          My Applied Jobs
        </H1>
      </HeadContainer>
      <Container>
        <div style={{ width: "50%", margin: "auto" }}>
          {!jobdata.length > 0 ? (
            <P>Not Applied Any Jobs</P>
          ) : (
            <AppliedJobList reviewsData={jobdata} />
          )}
        </div>
      </Container>
    </div>
  ) : (
    <Redirect to="/account/login" />
  );
};
