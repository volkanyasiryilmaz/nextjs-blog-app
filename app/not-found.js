import React from 'react';
import Link from 'next/link';
import styles from './styles.module.css'

export default function NotFound() {
    return(
        <div className={styles.notFound}>
            <h1 style={{fontWeight:'bold', fontSize: '24px'}}>Sayfa Bulunamadı!</h1>
            <Link href="/">Anasayfaya dön.</Link>
        </div>
    )
}