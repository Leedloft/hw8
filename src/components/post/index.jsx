import React, { Component } from 'react'
import styles from './styles.module.css'


const PostItem = (props) => {
    
    const {
        title
    } = props

    return (
        <section className={styles.post_wrap}>
            <h2 className={styles.title}>
                {title}
            </h2>
        </section>
    )
  }
export default PostItem