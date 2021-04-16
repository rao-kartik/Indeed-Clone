import React from "react";
import { Follow } from "../../Custom UI/RCustomUI";

function JobByCategoryFooter() {
  return (
    <>
      <div
        style={{
          width: "70%",
          borderRadius: "10px",
          height: "auto",
          margin: "5vh 0vh",
          textAlign: "left",
          display: "flex",
          justifyContent: "space-between",
          border: "1px solid #afafaf",
          padding: "20px 0px 0px 20px",
        }}
      >
        <div style={{ marginTop: "15px" }}>
          <h3 style={{ marginTop: "15px" }}>How much should you be earning?</h3>
          <p style={{ marginTop: "15px" }}>
            Tell us about you and get an estimated calculation of how much you
            should be earning and insight into your career options.
          </p>
          <Follow
            style={{ width: "220px", height: "40px", fontWeight: "bold" }}
          >
            Get Started
          </Follow>
        </div>
        <div>
          <img src="https://i.ibb.co/8zbpSYq/image.png" alt="" />
        </div>
      </div>
    </>
  );
}

export { JobByCategoryFooter };
