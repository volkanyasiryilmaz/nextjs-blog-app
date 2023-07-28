import React from 'react';
import {notFound}  from 'next/navigation'
import styles from './styles.module.css';
import Image from 'next/image';

async function getDetail(id){
  const response = await fetch(`https://dummyjson.com/posts/${id}`);
  return response.json();
}

async function Page({params}) {
  const { id, title, body} = await getDetail(params.id);                         

  if(!title){
    return notFound();
  }

  return (
    
    <div>
      <div className={styles.blogDetailImage}>
            <Image src={`https://picsum.photos/400/250?random=${id}`} alt={title} fill />
        </div>
        <div className={styles.blogDetailInfo}>
            <h3 className={styles.blogTitle}>{title}</h3>
            <p className={styles.blogDescription}>{body}</p>
        </div>
    </div>
  )
}

export default Page;