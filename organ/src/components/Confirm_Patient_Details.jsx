import Navbar from './navbar/Navbar'
import Footer from './footer/Footer'
import {Second_Component} from "./Second_Component"
import { useRef, useState } from "react";
import "./enter_patient_details.css"
import "./confirm_pd.css"

function Confirm_Patient_Details(){
    return(
        <div>
             <Navbar/>
            <Second_Component/>
            <br></br>
            <div className="pdmain">
            <p id="pdhead">Confirm Patient Details</p>
             <div  className="form_div">
                    <div className="left">
                    <label className="f2">Patient Name*</label>
                        <br></br>
                    <input type="text"className="f3" name="name" />
                    <label className="f2">Patient Contact Number*</label>
                        <br></br>
                    <input type="Number"className="f3" name="contact_number" />
                    <label className="f2">Patient Email-ID*</label>
                        <br></br>
                    <input type="email"className="f3" name="email" />

                        <label className="f2">Date of Birth*</label>
                        <br></br>
                        <input type="text" className="f3" name="dob" />
                        <label className="f2">Blood Group*</label>
                        <br></br>
                        <input type="text" className="f3" name="blood_group"/>
                           
                     
                        </div>
                        <div>
                        <label className="f2">Gender*</label>
                        <br></br>
                        <input type="text" className="f3" name="gender"/>
                           
               
                        <label className="f2">Type of Problem*</label>
                        <br></br>
                        <input type="text" className="f3" name="problem" />
                        <label className="f2">Portable Blood Group From Doner*</label>
                        <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
                        <label className="f2">Uploaded Medical Certificate*</label>
                        <br></br> <br></br>
                        <input type="file" className="f3" name=" certificate" />
                        
                        </div>
                        <br/> <br/> <br/> <br/>
                       

             </div>
             <hr className="line1"/>
             <br/>
             <p className="epd2">Seeking Organs</p>
             <br/>
            
             <p className ="cpd2">Selected Organs</p>
             <br/>
             

             <br/><br/>
             <p className ="cpd2">Selected Tissues</p>
             <br/>
             
             <br/><br/>
             <button className="cbddbt1">Register</button>
                <button className="cbddbt2">Edit</button>
            
             




            </div>
            <div>
                <Footer/>
            </div>

        </div>
    )
}
export{Confirm_Patient_Details}
