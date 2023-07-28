import React from 'react';
import Link from 'next/link';
import stlyes from './styles.module.css'

function Header() {
  return (
    <header className={stlyes.header}>
        <Link href="/" className={stlyes.logo}>Blog Application</Link>
        <Link href="/about">About</Link>
    </header>
  )
}

export default Header