import React from "react";
import { getTopPayingJobs } from "../../Redux/TopPayingJobs/action";
import { Container, Image, SearchBar, Input, SearchButton } from "../../Custom UI/RCustomUI";
import { TPCompany } from "./TPCompany";
import { TPJobs } from "./TPJobs";
import styles from "./Salaries.module.css";
function FindSalaries() {
  return (
    <>
      <Container style={{ display: "flex" }}>
        <div className={styles.searchBox}>
          <h2>Find a career you'll love</h2>
          <p>
            Explore which careers have the highest job satisfaction, best
            salaries, and more
          </p>
          <SearchBar>
            <div style={{ display: "flex", justifyContent: "space-between", width:'48%', marginLeft:'1rem'}}>
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
          <Image src="https://d3hbwax96mbv6t.cloudfront.net/title-webapp/_next/static/images/salaries-8d20dc14bdeae8889387e0fb40e0d546.png" alt="Salaries Poster" />
          <Image />
        </div>
      </Container>
      <TPJobs />
      <TPCompany />
    </>
  );
}

export { FindSalaries };
