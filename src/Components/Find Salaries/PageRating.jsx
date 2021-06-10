import React from "react";
import { useSelector } from "react-redux";
import { Grid } from "@material-ui/core";
import { EmojisRating } from "./EmojisRating";
import styles from "./Salaries.module.css";
import {SalariesFooter} from "./SalariesFooter";

const PageRating = () => {
  const isLoading = useSelector((state) => state.topPayingComp.isLoading);

  return (
    !isLoading && (
      <>
        <div className={styles.ratingContainer}>
          <Grid container>

            <Grid item xs={12} sm={7} md={7} lg={7} xl={6}>
              <h1>How much should you be earning?</h1>
              <div style={{ color: "grey", marginTop: "2vh" }}>
                Get an estimated calculation of how much you should be earning
                and insight into your career options.
              </div>
              <div className={styles.flexBox}>
                <button>Get estimated pay range</button>
                <p> See more details</p>
              </div>
            </Grid>

            <Grid item xs={12} sm={5} md={5} lg={5} xl={6}>
              <img
                src="https://d3fw5vlhllyvee.cloudfront.net/mosaic-provider-salary-calculator-entries/dist/images/src/components/ResponsiveDefaultEntry/chart_desktop_janish-36baaa.svg"
                alt=""
                width="100%"
              />
            </Grid>

          </Grid>
        </div>
        <EmojisRating />
        <SalariesFooter/>
      </>
    )
  );
}

export { PageRating };
