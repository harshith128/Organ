import React from 'react'

import styles from './landingpage.module.css'
function Articles(props) {
    return (
        <div className={styles.article}>
            <img src={props.image} alt="" />
            <div className={styles.article_head}>
                <div className={styles.article_head1}>{props.head}</div>
                <div className={styles.article_head2}>{props.date}</div>
            </div>
            <div className={styles.article_content}>{props.content}</div>
        </div>
    )
}

export default Articles
