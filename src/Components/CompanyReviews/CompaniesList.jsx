import React from "react";
import { useEffect } from "react";
import { Redirect } from "react-router";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { getCompanies } from "../../Redux/company/action";
import { Loading } from "../Loading/Loading";
import { CompaniesListItem } from "./CompaniesListItem";

const GridDiv = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  @media (max-width: 840px) {
    grid-template-columns: auto auto;
  }
  @media (max-width: 500px) {
    grid-template-columns: auto;
  }
`;
const H3 = styled.h3`
  font-size: 23px;
  padding: 9px;
`;
const LoadingContainer = styled.div`
  height: 20vh;
  margin-top: 15%;
`;
const MainContainer = styled.div`
  width: 70%;
  margin: auto;
  margin-top: 20px;
  background-color: #fff;
`;
const FlexContainer = styled.div`
  display: flex;
`;
const LogoImg = styled.img`
  width: 20px;
`;
export const CompanyList = ({ type }) => {
  const dispatch = useDispatch();
  const { isLoading, companies } = useSelector((state) => state.company);
  useEffect(() => {
    dispatch(getCompanies());
  }, []);

  return isLoading ? (
    <LoadingContainer>
      <Loading />
    </LoadingContainer>
  ) : (
    <MainContainer>
      <FlexContainer>
        <LogoImg
          src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgNTEyIDUxMiIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMjsiIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPHBhdGggc3R5bGU9ImZpbGw6I0ZEMDAzQTsiIGQ9Ik0yNTYsMEMxNTYuNjk4LDAsNzYsODAuNyw3NiwxODBjMCwzMy42LDkuMzAyLDY2LjMwMSwyNy4wMDEsOTQuNTAxbDE0MC43OTcsMjMwLjQxNA0KCWMyLjQwMiwzLjksNi4wMDIsNi4zMDEsMTAuMjAzLDYuOTAxYzUuNjk4LDAuODk5LDEyLjAwMS0xLjUsMTUuMy03LjJsMTQxLjItMjMyLjUxNkM0MjcuMjk5LDI0NC41MDEsNDM2LDIxMi40MDEsNDM2LDE4MA0KCUM0MzYsODAuNywzNTUuMzAyLDAsMjU2LDB6IE0yNTYsMjcwYy01MC4zOTgsMC05MC00MC44LTkwLTkwYzAtNDkuNTAxLDQwLjQ5OS05MCw5MC05MHM5MCw0MC40OTksOTAsOTANCglDMzQ2LDIyOC45LDMwNi45OTksMjcwLDI1NiwyNzB6Ii8+DQo8cGF0aCBzdHlsZT0iZmlsbDojRTUwMDI3OyIgZD0iTTI1NiwwdjkwYzQ5LjUwMSwwLDkwLDQwLjQ5OSw5MCw5MGMwLDQ4LjktMzkuMDAxLDkwLTkwLDkwdjI0MS45OTENCgljNS4xMTksMC4xMTksMTAuMzgzLTIuMzM1LDEzLjMtNy4zNzVMNDEwLjUsMjcyLjFjMTYuNzk5LTI3LjU5OSwyNS41LTU5LjY5OSwyNS41LTkyLjFDNDM2LDgwLjcsMzU1LjMwMiwwLDI1NiwweiIvPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPC9zdmc+DQo="
          alt="hiring_logo"
        />
        {type === "hiringnow" && <H3>Companies Hiring Now</H3>}
        {type === "popular" && <H3>Popular Companies</H3>}
      </FlexContainer>
      <GridDiv>
        {Array.isArray(companies) ? (
          companies.map((item) => (
            <CompaniesListItem key={item.id} item={item} />
          ))
        ) : (
          <Redirect to="/companies" />
        )}
      </GridDiv>
    </MainContainer>
  );
};
