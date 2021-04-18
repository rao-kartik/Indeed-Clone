import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./Salaries.module.css";
import { active, inactive } from "./data";
import { postFeedback } from "../../Redux/SalaryPageFeedback/action";

function EmojisRating() {
  const dispatch = useDispatch();
  const [emoji, setEmoji] = useState(false);
  const [rate, setRate] = useState()
  const [review, setReview] = useState()
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
    setEmoji(true);
    const { id } = e.target;
    e.target.src = active[id - 1];
    setRate(id)
  };

  const handleSubmit = () => {
    let payload = {
      page: "Salary Page",
      rating: rate,
      review: review,
    }
    dispatch(postFeedback(payload))
  }
  return (
    <>
      <div className={styles.findEarning}>
        <div>
          <h2>Was this page helpful?</h2>
        </div>
        <div>
          <img
            onMouseOver={handleDisplay}
            onMouseOut={handleHide}
            onClick={handleRating}
            id="1"
            value="false"
            src={inactive[0]}
            alt=""
          />
          <img
            onMouseOver={handleDisplay}
            onMouseOut={handleHide}
            onClick={handleRating}
            id="2"
            value="false"
            src={inactive[1]}
            alt=""
          />
          <img
            onMouseOver={handleDisplay}
            onMouseOut={handleHide}
            onClick={handleRating}
            id="3"
            value="false"
            src={inactive[2]}
            alt=""
          />
          <img
            onMouseOver={handleDisplay}
            onMouseOut={handleHide}
            onClick={handleRating}
            id="4"
            value="false"
            src={inactive[3]}
            alt=""
          />
          <img
            onMouseOver={handleDisplay}
            onMouseOut={handleHide}
            onClick={handleRating}
            id="5"
            value="false"
            src={inactive[4]}
            alt=""
          />
        </div>
        {emoji ? (
          <>
            <textarea onChange={(e) => setReview(e.target.value)}
              className={styles.feedback}
              placeholder="Please tell us more what you'd like to see on career pages..."
            />
            <br />
            <button onClick={handleSubmit} className={styles.feedbackSubmit}>Submit Feedback</button>
          </>
        ) : null}
      </div>
    </>
  )
}

export { EmojisRating };