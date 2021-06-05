import React, { useState } from "react";
import styles from "./Resume.module.css";

function ResumeFeatures() {
    return (
        <div className={styles.resumeFeatures}>
            <button>Upload to replace resume</button>
            <p style={{ color: "grey", margin: "10px 0px" }}>
                You can upload a new resume to completely replace your existing Indeed
                Resume
      </p>
            <div>
                <p>Remove your resume</p>
                <p>Download Resume</p>
                <p>Share link to resume</p>
            </div>
            <p>Last Updated {Date().substr(3, 13)}</p>
            <h3 style={{ margin: '20px 0px' }}>Resume Privacy Settings</h3>
            <label style={{ fontSize: '15px' }} ><input type="radio" name='privacy' value="public" checked />Public </label>
            <div>Your resume will be visible to anyone and may be made available to Employers in accordance with our terms. <br /> Your phone number and email address are only provided to employers you apply or respond to.</div>
            <br />
            <label ><input type="radio" name='privacy' value="private" />Private </label>
            <div>Your resume is not visible. Employers cannot find your <br /> resume, but you can attach it when you apply to a job.</div>
        </div>
    );
}

export { ResumeFeatures };
