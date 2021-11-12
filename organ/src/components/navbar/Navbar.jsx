import React from 'react'

import styles from "./navbar.module.css"
import {Link} from "react-router-dom"

//import organlogo from "../../public/organlogo.svg"
export default function Navbar() {
    
    return (
        <div className={styles.navbar}>
            <div><Link to={ "/"}>
                <div className={styles.navbar_logo}>Organ</div>
            <img className={styles.navbar_plus} src="organlogo.svg" alt="" />
            </Link></div>
            
            <div className={styles.navflex}>
                <div className={styles.apro}><Link to={"/registration"}>
                    Approved Hospitals</Link></div>
                <div className={styles.wait}>Common Waitlist</div>
                <div className={styles.org}><Link to={"/organ_availability"}>Organs Availability</Link></div>
                {/* <select name="reg" >
                        <option value="">Brain Death Register</option>
                        <option value="">Patient Register</option>
                     </select> */}
                <div  className={styles.reg}> Registrations <img className={styles.vector} src="navbar_vector.svg" alt="" />
                    
                   
                    <div className={styles.detailreg}>
                        <div className={styles.detailreg1}><Link to={"/login_brain_death"}>Brain Death Register</Link></div>
                        <div className={styles.detailreg2}><Link to={"/login"}>Patient Register</Link></div>
                  </div>
                
                </div>
                 <button className={styles.btnpledge}>Pledge Organ</button>
            <div className={styles.lang}>EN</div>
            </div>
            
            <div className= {styles.line}></div>
        </div>
        
    )
}


