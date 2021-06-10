import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import styled from "styled-components";
import { Input, H1, P } from "../../Custom UI/ReviewsUI";
import styles from "./CompanySearch.module.css";

const LinkStyled = styled(Link)`
  text-decoration: none;
  color: #085ff7;
  font-size: 13px;
`;
export const CompanySearch = () => {
  const [searchText, setSearchText] = useState("");
  const history = useHistory();
  const handleSearch = () => {
    history.push(`/companies/search/${searchText}`);
  };
  return (
    <div className={styles.container}>
      <H1>Find great places to work</H1>
      <P>Discover millions of company reviews</P>
      <div className={styles.marginTopContainer}>
        <div>
          <input
            className={styles.inputCompany}
            onChange={(e) => setSearchText(e.target.value.toUpperCase())}
            placeholder="Enter a company name"
          />
          <br />
          <LinkStyled to="/career/salaries">
            Do you want to search for salaries?
          </LinkStyled>
        </div>
        <div></div>
        <div className={styles.centerContainer}>
          <button onClick={handleSearch} className={styles.buttonContiner}>
            Find Companies
          </button>
        </div>
      </div>
    </div>
  );
};
