import React, { useEffect, useState } from "react";
import styles from "../Email Preferences/Preferences.module.css";
import { loadData } from "../../Utils/localStorage";
const EmailPreferences = () => {
    let data = loadData('following')
  useEffect(() => {
      display();
  }, [data]);

    const display = () => {
        data = loadData('following')
    }
  return (
    <>
      <div className={styles.container}>
        <div>
          <h2>Email preferences</h2>
        </div>
        <div>
          <div>
            <h3>Company alert emails</h3>
            <div>
              Get company updates, reviews, and new job postings when they
              become available
            </div>
            <hr style={{ margin: "20px 0px" }} />
                      {data &&
                          data.map((item) => {
                return (
                  <>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        marginBottom: "8px",
                        padding: "20px",
                        background: "white",
                      }}
                    >
                      <h4
                        style={{
                          textDecoration: "underline",
                          padding: "10px 0px",
                        }}
                      >
                        {item}
                      </h4>

                      <img
                        style={{ height: "20px", marginTop: "10px" }}
                        src="https://cdn.icon-icons.com/icons2/936/PNG/512/trash_icon-icons.com_73364.png"
                        alt="trash-icon"
                      />
                    </div>
                  </>
                );
              })}
          </div>
          <div style={{ background: "white", width: "47%" }}>
            <h2>Additional email preferences</h2>
            <hr style={{ margin: "24px 0px" }} />
            <div>
              <input
                type="checkbox"
                checked
                style={{ margin: "0px 7px", width: "20px" }}
              />
              Receive career advice, tips, announcements and other marketing
              emails from Indeed
            </div>
            <br />
            <div style={{ color: "grey", fontSize: "14px" }}>
              Indeed may still send you emails for confirmations, application
              status, and other messages relevant to how you interact with
              Indeed
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export { EmailPreferences };
