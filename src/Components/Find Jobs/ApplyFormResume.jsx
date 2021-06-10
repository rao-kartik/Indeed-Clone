import React, { useEffect } from "react";
import { Redirect, useParams } from "react-router";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { searchResumeByEmail } from "../../Redux/FindResume/action";
import { applyJob } from "../../Redux/ApplyJob/action";
import { Button } from "../../Custom UI/stylesHome";
import { Loading } from "../Loading/Loading";

const Div = styled.div`
  border: 1px solid #085ff7;
  border-radius: 10px;
  padding: 20px;
  margin: auto;
  display: flex;
  margin-top: 10px;
`;

const Load = styled.div`
  position: absolute;
  top: 40%;
  right: 50%;
`;
const Img = styled.img`
  width: 20%;
`;
const Container = styled.div`
  margin: 20px;
`;
const LinkStyled = styled(Link)`
  text-decoration: none;
  color: #fff;
`;

export const ApplyFormResume = () => {
  var data = useSelector((state) => state.findResumeReducer.data);
  const { isLoading } = useSelector(
    (state) => state.applyJobReducer,
    shallowEqual
  );
  const dispatch = useDispatch();
  const token = useSelector((state) => state.authReducer.token);
  useEffect(() => {
    dispatch(searchResumeByEmail());
  }, []);

  const jobID = useParams();
  const isSubmitted = useSelector((state) => state.applyJobReducer.isSubmitted);
  const handleApply = () => {
    dispatch(applyJob({ email: token.email, jobid: jobID.id }));
  };

  return !isLoading ? (
    !isSubmitted ? (
      data === undefined ? (
        <div>
          <h1>You're not uploaded the Resume yet, Please Upload to Continue</h1>
          <LinkStyled to="/p/hh78545">
            <Button>Build Resume</Button>
          </LinkStyled>
        </div>
      ) : (
        <>
          <h1>Apply using these Resume</h1>
          <Div>
            <Img src={data.photo} alt="user" />
            <Container>
              <p>Name: {data.fname}</p>
              <p>Gender: {data.gender}</p>
              <p>LinkedIn: {data.linkedin}</p>
              <p>Email: {data.email}</p>
              <Button onClick={handleApply}>Apply</Button>
            </Container>
          </Div>
        </>
      )
    ) : (
      <Redirect to="/" />
    )
  ) : (
    <Load>
      <Loading />
    </Load>
  );
};
