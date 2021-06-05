import React from 'react';
import styles from './Resume.module.css'
import { ResumeFeatures } from './ResumeFeatures';
import { ResumeInput } from './ResumeInput';

function ResumePage() {
    return (
        <>
            <div className={styles.resumePage}>
                <div>
                    <ResumeInput />
                </div>
                <div>
                    <ResumeFeatures />
                </div>
            </div>
        </>
    )
}

export { ResumePage }