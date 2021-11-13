import React from 'react'
import styles from './footer.module.css'
function Footer() {
    return (
        <div className={styles.foot}>
            <div className={styles.footer_grid}>
                <div className={styles.footer_head}>Organ<img className={styles.footer_plus_logo} src="organplusfooter.svg" alt="" /></div>
                <div className={styles.footer_head}>Contact Info</div>
                <div className={styles.footer_head}>Quick Links</div>
                <div className={styles.footer_head}>Follow us</div>
                <div className={styles.footer_sub_deta}>Organ Plus is a Indian Goverment<br></br>
                 Launched Website to Reduce the Organ<br></br>
                  Demands in india and also Connecting<br></br>
                   Donors and Patients to Transplantation.</div>
                <div className={styles.footer_sub_grid1}>
                   <div>Helpline-1800 1234 1234</div>  
                   <div>Phone-91 1234567890</div>
                   <div>Email-info@organplus.com</div>
                </div>
                <div className={styles.footer_sub_grid1}>
                   <div>Pledge Organs</div>  
                   <div>Approved Hospitals</div>
                    <div>Common Waitlist</div>
                    <div>Organ Availability</div>
                </div>
                <div className={styles.footer_sub_grid2}>
                    <div >Official social Media Handles of India.</div>
                    <br></br>
                    <div className={styles.footer_sub_log}>
                        <img  className="fz1" src="instalogo.png" alt="" />
                        <img className="fz1" src="facebooklogo.png" alt="" />
                        <img className="fz1" src="youtubelogo.png" alt=""/>
                    </div>
                </div>
             </div>
        </div>
    )
}

export default Footer
