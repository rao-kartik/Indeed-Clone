import React from "react";
import { getTopPayingJobs } from "../../Redux/TopPayingJobs/action";
import { Container, Image, SearchBar, Input, SearchButton } from "../Custom UI/RCustomUI.jsx";
import { TPCompany } from "./TPCompany";
import { TPJobs } from "./TPJobs";
import styles from "./Salaries.module.css";
function FindSalaries() {
  return (
    <>
      <Container style={{ display: "flex" }}>
        <div className={styles.searchBox}>
          <h1>Find a career you'll love</h1>
          <p>
            Explore which careers have the highest job satisfaction, best
            salaries, and more
          </p>
          <SearchBar>
            <div style={{ display: "flex", justifyContent: "space-around" }}>
              <h3>What</h3>
              <h3>Where</h3>
            </div>
            <div style={{ display: "flex", justifyContent: "space-around" }}>
              <Input type="text" placeholder="job title"  />  
              <Input type="text" placeholder="location" />
              <SearchButton>Search</SearchButton>
            </div>
          </SearchBar>
        </div>
        <div>
          <Image src="Salaries.png" alt="Salaries Poster" />
          <Image />
        </div>
      </Container>
      <TPJobs />
      <TPCompany />
    </>
  );
}

export { FindSalaries };
