import React, { useEffect } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { jobsByIdSearch } from "../../Redux/FindJobById/action";

const Div = styled.div`
  border: 1px solid #085ff7;
  width: 100%;
  height: 100%;
  margin: auto;
  margin-top: 10px;
  padding: 20px;
  border-radius: 15px;
  -webkit-box-shadow: 0 0 5px #085ff7;
  box-shadow: 0 0 5px #085ff7;
  position: relative;
`;
const Container = styled.div`
  padding-left: 30px;
  color: #085ff7;
`;
const Delete = styled.div`
  position: absolute;
  right: 20px;
  bottom: 10px;
`;
const H1 = styled.h1`
  font-style: italic;
`;
export const AppliedJobListItem = ({ email, jobid, id, handleDelete }) => {
  const jobsdata = useSelector((state) => state.jobsByIdReducer.jobs_data);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(jobsByIdSearch(jobid));
  }, []);
  return (
    <Div>
      <h1>{jobsdata.title}</h1>
      <H1>{jobsdata.company_name}</H1>
      <Container>
        <p>Category : {jobsdata.category}</p>
        <p>{jobsdata.description}</p>
        <p>
          Review by {jobsdata.location} - {jobsdata.salary}
        </p>
      </Container>
      <p>{jobsdata.publication_date}</p>
      <Delete onClick={() => handleDelete(id)}>
        <span class="material-icons-outlined">delete</span>
      </Delete>
    </Div>
  );
};
