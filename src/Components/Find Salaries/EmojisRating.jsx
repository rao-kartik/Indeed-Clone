import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Grid } from "@material-ui/core";
import { postFeedback } from "../../Redux/SalaryPageFeedback/action";
import { active, inactive } from "./data";
import { Loading } from "../Loading/Loading";
import styles from "./Salaries.module.css";

const EmojisRating = () => {
  const [emoji, setEmoji] = useState(false);
  const [activeEmoji, setActiveEmoji] = useState();
  const [rate, setRate] = useState();
  const [review, setReview] = useState();
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.feedbackReducer.isLoading);

  const handleDisplay = (e) => {
    if (!emoji) {
      const { id } = e.target;
      e.target.src = active[id - 1];
    }
  };
  const handleHide = (e) => {
    if (!emoji) {
      const { id } = e.target;
      e.target.src = inactive[id - 1];
    }
  };

  var handleRating = (e) => {
    if (activeEmoji) {
      const { id } = activeEmoji;
      activeEmoji.src = inactive[id - 1];
    }
    setEmoji(true);
    const { id } = e.target;
    setActiveEmoji(e.target);
    e.target.src = active[id - 1];
    setRate(id);
  };

  const handleSubmit = () => {
    let payload = {
      page: "Salary Page",
      rating: rate,
      review: review,
    };
    dispatch(postFeedback(payload));
    setReview("");
  };

  return (
    <div className={styles.emojiContainer}>
      <div className={styles.findEarning}>
        <Grid container>
          <Grid item xs={12} sm={12} md={8} lg={8} xl={5}>
            <div>
              <h2>Was this page helpful?</h2>
            </div>
          </Grid>
          <Grid item xs={12} sm={12} md={4} lg={4} xl={5}>
            <div>
              {inactive.map((item, index) => {
                return (
                  <img
                    key={index}
                    onMouseOver={handleDisplay}
                    onMouseOut={handleHide}
                    onClick={handleRating}
                    id={index + 1}
                    src={inactive[index]}
                    alt="rating emoji"
                  />
                );
              })}
            </div>
          </Grid>
        </Grid>

        {emoji ? (
          <>
            <textarea
              value={review}
              onChange={(e) => setReview(e.target.value)}
              className={styles.feedback}
              placeholder="Please tell us more what you'd like to see on career pages..."
            />
            <br />

            {isLoading ? (
              <Loading />
            ) : (
              <button
                isLoading
                onClick={handleSubmit}
                className={styles.feedbackSubmit}
              >
                Submit Feedback
              </button>
            )}
          </>
        ) : null}
      </div>
    </div>
  );
};

export { EmojisRating };
