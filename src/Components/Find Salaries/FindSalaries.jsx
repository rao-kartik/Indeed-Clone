import React from "react";
import { makeStyles, Grid } from "@material-ui/core";
import {
  Image,
  Input,
  SearchButton,
  Container,
  SearchDiv,
  Flex,
} from "../../Custom UI/stylesFindSalaries";

//Styling Material UI Elements
const useStyles = makeStyles((theme) => ({
  search: {
    paddingTop: theme.spacing(8),
    "& h1": {
      marginBottom: theme.spacing(2),
      zIndex: 1,
      position: "relative",
      ["@media (max-width:660px)"]: {
        top: theme.spacing(-2),
        fontSize: "1rem",
      },
    },

    "& div": {
      zIndex: 1,
      position: "relative",
      ["@media (max-width:660px)"]: {
        top: theme.spacing(-3),
        fontSize: "0.8rem",
      },
    },

    "& h3": {
      ["@media (max-width:660px)"]: {
        display: "none",
      },
    },
  },
}));

const FindSalaries = () => {
  const classes = useStyles();
  return (
    <>
      <Container>
        <Grid>

          <Grid
            item
            xs={12}
            sm={12}
            md={6}
            lg={7}
            xl={7}
            className={classes.search}
          >
            <h1>Find a career you'll love</h1>
            <div>
              Explore which careers have the highest job satisfaction,
              bestsalaries, and more
            </div>
            
            <SearchDiv>
              <Flex>
                <h3>What</h3>
                <h3>Where</h3>
              </Flex>
              <Flex>
                <Input type="text" placeholder="job title" />
                <Input type="text" placeholder="location" />
                <SearchButton>Search</SearchButton>
              </Flex>
            </SearchDiv>
          </Grid>

          <Grid item xs={0} sm={0} md={6} lg={5} xl={5}>
            <Image
              src="https://d3hbwax96mbv6t.cloudfront.net/title-webapp/_next/static/images/salaries-8d20dc14bdeae8889387e0fb40e0d546.png"
              alt="Salaries Poster"
            />
          </Grid>

        </Grid>
      </Container>
    </>
  );
};

export { FindSalaries };
