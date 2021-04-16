import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import styles from "./Salaries.module.css";
import { active, inactive } from "./data";

function EmojisRating() {
  const [emoji, setEmoji] = useState(false);
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
  };
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
            <textarea
              className={styles.feedback}
              placeholder="Please tell us more what you'd like to see on career pages..."
            />
            <br />
            <button className={styles.feedbackSubmit}>Submit Feedback</button>
          </>
        ) : null}
      </div>
    </>
  )
}

export { EmojisRating };
