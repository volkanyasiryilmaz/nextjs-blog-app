import React from 'react';
import styles from './styles.module.css'

export default function Loading() {
    return (
        <div style={{display:'grid', placeItems:'center'}}>
            <div className={styles.ldsRoller} >
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    )
}