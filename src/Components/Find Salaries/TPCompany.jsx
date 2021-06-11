import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { makeStyles, Grid } from "@material-ui/core";
import { getTopPayingComp } from "../../Redux/TopPayingCompanies/action";
import StarRatings from "react-star-ratings";
import { Loading } from "../Loading/Loading";
import styles from "./Salaries.module.css";
import { CompContainer } from "../../Custom UI/stylesFindSalaries";

//Styling Material UI Elements
const useStyles = makeStyles(() => ({
  grid: {
    "@media (max-width:1280px)": {
      maxWidth: "49%",
    },
    "@media (max-width:768px)": {
      maxWidth: "100%",
    },
  },
}));

const TPCompany = () => {
  const classes = useStyles();
  const tpComp = useSelector((state) => state.topPayingComp.companies);
  const isLoading = useSelector((state) => state.topPayingComp.isLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTopPayingComp());
  }, [dispatch]);

  return isLoading ? (
    <Loading />
  ) : (

    <div className={styles.tpComp}>
      <h1>Browse top paying companies by industry</h1>
      <select>
        <option>Choose an Industry</option>
      </select>

      <div className={styles.jobsContainer}>
        {tpComp &&
          tpComp.map((item, index) => {
            return (

              <Grid
                key={index}
                item
                xs={12}
                sm={12}
                md={6}
                lg={4}
                xl={5}
                className={classes.grid}
              >
                <Link
                  className={styles.companyRoute}
                  to={`/career/salaries/${item.id}`}
                >
                  <CompContainer className={styles.compCard} key={item.id}>
                    <div>
                      <img src={item.logo} alt={`${item.name}'s Logo`} />
                    </div>

                    <div>
                      <h4>{item.name}</h4>
                      <div className={styles.starRating}>
                        <StarRatings
                          rating={item.stars}
                          starRatedColor="#6F6F6F"
                          starDimension="15px"
                          starSpacing="0px"
                          numberOfStars={5}
                        />
                        <p>{item.reviews}</p>
                      </div>
                    </div>
                  </CompContainer>

                </Link>
              </Grid>
            );
          })}
      </div>
    </div>
  );
}

export { TPCompany };
