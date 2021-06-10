import React from "react";
import styled from "styled-components";
import { CompanyList } from "./CompaniesList";
import { CompanyRating } from "./CompaniesRating";
import { CompanySearch } from "./CompanySearch";
import { Footer } from "../Add Reviews/Footer";
const Container = styled.div`
  background-color: #f5f5f5;
  padding-top: 50px;
`;
export const Company = () => {
  return (
    <Container>
      <CompanySearch />
      <CompanyList type={"hiringnow"} />
      <CompanyList type={"popular"} />
      <CompanyRating />
      <Footer />
    </Container>
  );
};
