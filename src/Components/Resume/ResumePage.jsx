import React from 'react';
import styles from './Resume.module.css'
import { ResumeInput } from './ResumeInput';

function ResumePage() {
    return (
        <>
            <div className={styles.resumePage}>
                <div style={{width:'100%', height:'15vh', background:'white'}}></div>
                <ResumeInput/>
        </div>
        </>
    )
}

export {ResumePage}