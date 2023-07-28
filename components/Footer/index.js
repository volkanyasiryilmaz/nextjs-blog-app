import React from 'react';
import Link from 'next/link';
import styles from './styles.module.css';

function Footer() {
  return (
    <footer className={styles.footer}>
        Made with Next.js and 💕 | Developed by&nbsp;<Link href="https://github.com/volkanyasiryilmaz">volkanyasiryilmaz</Link>     
    </footer>
  )
}

export default Footer