import React, { useEffect } from "react";
import { Redirect } from "react-router";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { myReviewsSearch } from "../../Redux/MyReviews/action";
import { H1, P } from "../../Custom UI/ReviewsUI";
import styles from "./MyReviews.module.css";
import { MyReviewsList } from "./MyReviewsList";

const Container = styled.div`
  background-color: #f5f5f5;
  padding: 20px;
`;
const HeadContainer = styled.div`
  height: 10vh;
`;
const Div = styled.div`
  width: 50%;
  margin: auto;
`;

export const MyReviews = () => {
  const isAuth = useSelector((state) => state.authReducer.isAuth);
  const reviewsData = useSelector(
    (state) => state.myReviewsReducer.reviews_data
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(myReviewsSearch());
  }, []);
  return isAuth ? (
    <div>
      <HeadContainer>
        <H1 className={styles.textCenter}>My reviews and contributions</H1>
      </HeadContainer>
      <Container>
        <Div>
          {!reviewsData.length > 0 ? (
            <P>No company reviews</P>
          ) : (
            <MyReviewsList reviewsData={reviewsData} />
          )}
        </Div>
      </Container>
    </div>
  ) : (
    <Redirect to="/account/login" />
  );
};
