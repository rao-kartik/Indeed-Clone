import React, { useEffect } from "react";
import { useHistory, useParams } from "react-router";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { getCompanySearch } from "../../Redux/company/action";
import style from "../Add Reviews/Reviews.module.css";
import { CompanyRating } from "./CompaniesRating";

const Div = styled.div`
  display: flex;
  &:hover {
    border: 2px solid #949494;
  }
`;
const MainContainer = styled.div`
  margin-top: 20px;
  background-color: #f5f5f5;
  height: 100vh;
`;
const SpanSmall = styled.span`
  font-size: 14px;
`;
const SpanLarge = styled.span`
  font-size: 22px;
`;
const Img = styled.img`
  width: 100px;
  height: 100px;
  border: 1px solid #f5f5f5;
`;

export const CompanySearchPage = () => {
  const compname = useParams();
  const dispatch = useDispatch();
  const company_info = useSelector((state) => state.company.company_info);
  const history = useHistory();
  const handleClick = () => {
    history.push(`/companies/review/${company_info.company_name}`);
  };
  useEffect(() => {
    dispatch(getCompanySearch(compname.id));
  }, []);

  return (
    <MainContainer>
      <CompanyRating />
      <div className={style.container}>
        <Div onClick={handleClick}>
          <div>
            <Img src={company_info.company_logo} alt="company logo" />
          </div>
          <div style={{ marginTop: "24px", marginLeft: "15px" }}>
            <SpanLarge>{compname.id}</SpanLarge>
            <br />
            <SpanSmall>
              <b>{company_info.rating} </b>based on {company_info.total_reviews}{" "}
              Reviews
            </SpanSmall>
          </div>
        </Div>
      </div>
    </MainContainer>
  );
};
