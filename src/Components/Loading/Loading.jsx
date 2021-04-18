import React from 'react';
import styles from './Loading.module.css'
function Loading() {
    return (
        <>
            <div className={styles.ring}><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>        </>
    )
}

export {Loading}