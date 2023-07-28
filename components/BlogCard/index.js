import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './styles.module.css';

function BlogCard({ id, title, body}) {
  return (
    <Link href={`/blog-detay/${id}`} className={styles.blogCard}>
        <div className={styles.blogImage}>
            <Image src={`https://picsum.photos/200/200?random=${id}`} alt={title} fill className={styles.blogCardImage}/>
        </div>
        <div className={styles.blogInfo}>
            <h3 className={styles.title}>{title}</h3>
            <p className={styles.description}>{body}</p>
        </div>
    </Link>
  )
}

export default BlogCard