import React from 'react'
import styles from './landingpage.module.css'

function Heros(props) {
    return (
        <div className={styles.heros}>
            <div><img src={props.image} alt="" /></div>
            <div className={styles.hero_cont}>
                <div>{props.head}</div>
                <div>{props.cat}</div>
                <div className={styles.hero_contents}>{props.content}</div>
                <button>Read more</button>
            </div>
        </div>
    )
}

export default Heros
