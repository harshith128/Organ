import React from 'react'
import styles from './landingpage.module.css'
function Activities(props) {
    return (
        <div className={styles.activities}>
            <img src={props.image} alt="" />
            <div>{props.content}</div>
            <button>Read More</button>
        </div>
    )
}

export default Activities
