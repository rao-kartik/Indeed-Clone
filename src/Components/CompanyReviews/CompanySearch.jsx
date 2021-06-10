import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { Input, H1, P } from "../../Custom UI/ReviewsUI";
import style from "./CompanySearch.module.css";

export const CompanySearch = () => {
  const [searchText, setSearchText] = useState("");
  const history = useHistory();
  const handleSearch = () => {
    history.push(`/companies/search/${searchText}`);
  };
  return (
    <div className={style.container}>
      <H1>Find great places to work</H1>
      <P>Discover millions of company reviews</P>
      <div style={{ marginTop: "3%" }}>
        <div>
          <Input
            className={style.inputCompany}
            onChange={(e) => setSearchText(e.target.value.toUpperCase())}
            placeholder="Enter a company name"
          />
          <br />
          <Link
            to="/career/salaries"
            style={{
              textDecoration: "none",
              color: "#085ff7",
              fontSize: "13px",
            }}
          >
            Do you want to search for salaries?
          </Link>
        </div>
        <div></div>
        <div style={{ marginTop: "1%", textAlign: "center" }}>
          <button onClick={handleSearch} className={style.buttonContiner}>
            Find Companies
          </button>
        </div>
      </div>
    </div>
  );
};
