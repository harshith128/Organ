import {useEffect, useState} from "react";

import "./report_bd.css"
import Navbar from "./navbar/Navbar";
import Footer from "./footer/Footer";
import { Second_Component } from "./Second_Component"

export const Report_bd = () => {
    const [data, setData] = useState([1,2,3,4,5]);
  
    const [flag, setFlag] = useState(null);
    const patientHead = ["S.NO", "Patient Name", "Data of Birth", "Death Date", "Death Time", "Preferable Bloods", "Wish to Donate","Donated Organs"];
    

  

    return (
        <div className="report">
            <Navbar />
            <Second_Component user={ "gdfgdr" } hospital= { "Appolo" } />
        <br></br>
        <br></br>
            <div className="data">
                
                
                {
                    <div className="patient_report">
                     <div className="thead_donor">
                            {
                                //console.log("Pat",patientHead)
                            patientHead.map((ele) => {
                                return <h4>{ele}</h4>
                            })
                        }
                        </div>
                        <div className="trow_donor">
                                 <p>ele</p>
                                <p>1</p>
                                 <p>donor</p>
                                 <p>dob</p>
                                <p>dd</p>
                               <p>dt</p>
                                <p>blood Group</p>
                                <p>Already donated</p>
                            </div>
                    {
                        // data.map((ele) => {
                        //     return (<div className="trow_donor">
                        //         <p>ele</p>
                        //         <p>1</p>
                        //         <p>donor</p>
                        //         <p>dob</p>
                        //         <p>dd</p>
                        //         <p>dt</p>
                        //         <p>blood Group</p>
                        //         <p>Already donated</p>
                        //     </div>)
                        // })
                    }
                </div>
                }
            </div>
            <Footer />
        </div>
    )
}