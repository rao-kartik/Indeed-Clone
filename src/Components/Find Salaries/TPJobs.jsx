import React, { useEffect } from "react";
import styles from "./Salaries.module.css";
import { getTopPayingJobs } from "../../Redux/TopPayingJobs/action";
import { useDispatch, useSelector } from "react-redux";
import { makeStyles, Grid, Divider } from "@material-ui/core";

//Styling Material UI Elements
const useStyles = makeStyles(() => ({
  grid: {
    border: "1px solid #dddddd",
    padding: "20px",
    height: "150px",
    maxWidth: "24%",
    position: "relative",
    margin: "6px",
    borderRadius: "10px",
    "@media (max-width:1280px)": {
      maxWidth: "48%",
    },
    "@media (max-width:768px)": {
      maxWidth: "100%",
    },
    "& h4": {
      textDecoration: "underline",
      marginBottom: "15px",
    },
    "& div": {
      textDecoration: "underline",
      marginTop: "15px",
    },
    "& hr": {
      marginTop: "25px",
    },
  },
}));

const TPJobs = () => {
  const tpJobs = useSelector((state) => state.topPayingJobs.jobs);

  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTopPayingJobs());
  }, [dispatch]);

  return (
    <>
      <div className={styles.tpJobs}>
        <h1>Browse top paying jobs by industry</h1>
        <select>
          <option>Choose an Industry</option>
        </select>

        <div className={styles.compContainer}>
          {tpJobs &&
            tpJobs.map((item, index) => {
              return (

                <Grid
                  key={index}
                  item
                  xs={12}
                  sm={12}
                  md={10}
                  lg={3}
                  xl={6}
                  className={classes.grid}
                >
                  <h4>{item.title}</h4>
                  <div>
                    Average Salary
                    <span>{item.Avg_salary}</span>
                  </div>
                  <Divider component="hr" />
                  <div>Job Openings</div>
                </Grid>
              );
            })}

        </div>
      </div>
    </>
  );
};

export { TPJobs };
