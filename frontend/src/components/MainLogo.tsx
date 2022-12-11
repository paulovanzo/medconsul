import React from 'react'
import styles from "../styles/logo.module.css"

export function Logo(){
    return (
        <div className={styles.main}>
            <div className={styles.containerLogo}>
                <label className={styles.firstName}>Med</label>
                <label className={styles.lastName}>consul</label>
            </div>
        </div>
    )
}