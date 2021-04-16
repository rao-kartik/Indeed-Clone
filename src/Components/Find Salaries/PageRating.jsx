import React from "react";
import { useSelector } from "react-redux";
import { EmojisRating } from "./EmojisRating";
import styles from "./Salaries.module.css";

function PageRating() {
  return (
    <>
      <div className={styles.estimatedPay}>
        <div>
          <h1>How much should you be earning?</h1>
          <div style={{ color: "grey", marginTop: "2vh" }}>
            Get an estimated calculation of how much you should be earning and
            insight into your career options.
          </div>
          <div
            style={{
              marginTop: "4vh",
              display: "flex",
              justifyContent: "space-around",
              width: "80%",
            }}
          >
            <button>Get estimated pay range</button>
            <p
              style={{
                color: "blue",
                textDecoration: "underline",
                marginTop: "2vh",
              }}
            >
              See more details{" "}
            </p>
          </div>
        </div>
        <div>
          <img
            src="https://d3fw5vlhllyvee.cloudfront.net/mosaic-provider-salary-calculator-entries/dist/images/src/components/ResponsiveDefaultEntry/chart_desktop_janish-36baaa.svg"
            alt=""
          />
        </div>
      </div>
      <EmojisRating />
    </>
  );
}

export { PageRating };