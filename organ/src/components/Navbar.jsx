import React from 'react'

import styles from "./navbar.module.css"
//import organlogo from "../../public/organlogo.svg"
export default function Navbar() {
    
    return (
        <div className={styles.navbar}>
            <div className={styles.logo}>Organ</div>
            <img src="organlogo.svg" alt="" />
            <div className={styles.navflex}>
                <div>Approved Hospitals</div>
                <div>Common Waitlist</div>
                <div>Organs Availability</div>
                <div  className={styles.reg}> Registrations <img className={styles.vector} src="vector.svg" alt="" />
                    <div className={styles.detailreg}>
                        <div className={styles.detailreg1}>Brain Death Register</div>
                        <div className={styles.detailreg2}>Patient Register</div>
                  </div>
                
                </div>
              
            </div>
            <button className={styles.btnpledge}>Pledge Organ</button>
            <div className={styles.lang}>EN</div>
            <div className= {styles.line}></div>
        </div>
        
    )
}


