import React from 'react'

import Navbar from '../navbar/Navbar'

import Footer from '../footer/Footer'

import styles from './landingpage.module.css'
import Heros from './Heros'

import Slider from './slider/Slider'
import Articles from './Articles'

import Activities from './Activities'
function Landingpage() {
    return (
        <div>
            <Navbar />
            <div className={styles.land_video}>
               <Slider val="3"/>
            </div>
            <div className={styles.land_activity}>
                <div>Recent Activities</div>
                <div>View All<img src="land_mid_arrow.svg" alt="" /></div>
            </div>
            <div className={styles.activities_grid}>
                <Activities image="landing_activity1.png" content="Social Work Students of Thiruthangal Nadar Arts College on a Field Visit..." />
                <Activities image="landing_activity2.png" content="MOHAN Foundation Conducts Awareness Talk on Organ Donation..." />
                <Activities image="landing_activity3.png" content="A group of 10 first year students pursuing their Bachelors in Social Work..." /> 
            </div>
            <div>
                <Slider val="1"/>
            </div>
            <div className={styles.land_activity}>
                <div>Salute Our Heros</div>
                <div>View All<img src="land_mid_arrow.svg" alt="" /></div>
            </div>
            <div className={styles.activities_grid}>
                <Heros image="landing_veerara.png" head="Mr. Veeraragavan" cat="Liver Donor - 45 Years" content="Massa morbi amet quis turpis mattis urna adipiscing nibh donec...." />
                <Heros image="landing_bhagya.png" head="Mrs. Bhagya Laxmi" cat="Heart Donor - 67  Years" content="Massa morbi amet quis turpis mattis urna adipiscing nibh donec...." />
                <Heros image="landing_veerara.png"head="Mr. Veeraragavan" cat="Liver Donor - 45 Years" content="Massa morbi amet quis turpis mattis urna adipiscing nibh donec...."  /> 
            </div>
            <div>
                <Slider val="2" />
            </div>
            <div className={styles.land_activity}>
                <div>Latest Articles</div>
                <div>View All<img src="land_mid_arrow.svg" alt="" /></div>
            </div>
            <div className={styles.articles_grid}>
                <Articles image="landing_article1.png" head="Success Story" date="19 Aug 2021" content="The Greatest Gift You Can Receive, Is Another Day Of Life." />
                <Articles image="landing_article4.png" head="Kidney Transplant" date="" content="Travelling is an integral partof our profession and I have ..." />
                <Articles image="landing_article3.png" head="Father Give me life " date="01 Sep 2021" content="My Life, My Design – Chapter 2 – “A New Beginning After Transplant”" />
                <Articles image="landing_article4.png" head="Heart Transplant" date="25 Oct 2021" content="Seven years ago my father gifted me his kidney. After the surgery when I first opened ..." />
            </div>
            <Footer />
        </div>
    )
}

export default Landingpage
