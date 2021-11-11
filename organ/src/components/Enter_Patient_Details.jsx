import Navbar from './navbar/Navbar'
import Footer from './footer/Footer'
import {Second_Component} from "./Second_Component"
import { useRef, useState } from "react";
import "./enter_patient_details.css"

function Patient_Details(){
    return(
        <div>
             <Navbar/>
            <Second_Component/>
            <br></br>
            <div className="pdmain">
            <p id="pdhead">Enter Patient Details</p>
             <div  className="form_div">
                    <div className="left">
                    <label className="f2">Patient Name*</label>
                        <br></br>
                    <input type="text"className="f1" name="name" />
                    <label className="f2">Patient Contact Number*</label>
                        <br></br>
                    <input type="Number"className="f1" name="contact_number" />
                    <label className="f2">Patient Email-ID*</label>
                        <br></br>
                    <input type="email"className="f1" name="email" />

                        <label className="f2">Date of Birth*</label>
                        <br></br>
                        <input type="date" className="f1" name="dob" />
                        <label className="f2">Blood Group*</label>
                        <br></br>
                        <select className="f1" name="blood_group">
                            <option > </option>
                            <option value="O+">O+</option>
                            <option value="O-">O-</option>
                            <option value="A+">A+</option>
                            <option value="AB+">AB+</option>
                            <option value="A-">A-</option>
                            <option value="AB-">AB-</option>
                            
                        </select>
                        </div>
                        <div>
                        <label className="f2">Gender*</label>
                        <br></br>
                        <select className="f1" name="gender">
                            <option > </option>
                            <option value="M">Male</option>
                            <option value="F">Female</option>
                            <option value="O">Other</option>
                        </select>
                        <label className="f2">Type of Problem*</label>
                        <br></br>
                        <input type="text" className="f1" name="problem" />
                        <label className="f2">Portable Blood Group From Doner*</label>
                        <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
                        <label className="f2">Upload Medical Certificate*</label>
                        <br></br> <br></br>
                        <input type="file" className="f3" name=" certificate" />
                        
                        </div>
                        <br/> <br/> <br/> <br/>
                       

             </div>
             <hr className="line1"/>
             <br/>
             <p className="epd">Seeking Organs</p>
             <br/><br/>
             <p className ="epd2">Selecting Organs</p>
             <br/>
             <input type="checkbox" className="c"name="heart" id="heart" value="checked"/>
             <label for="heart" className="epd1">Heart</label>
             <input type="checkbox" className="c"name="Lungs" id="lungs" value="checked"/>
             <label for="heart" className="epd1">Lungs</label>
             <input type="checkbox" className="c"name="Kidney" id="kidney" value="checked"/>
             <label for="heart" className="epd1">Kidney</label>
             <input type="checkbox" className="c"name="Liver" id="Liver" value="checked"/>
             <label for="heart" className="epd1">Liver</label>
             <input type="checkbox" className="c"name="Pancreas" id="Pancreas" value="checked"/>
             <label for="heart" className="epd1">Pancreas</label>
             <input type="checkbox" className="c"name="Intestine" id="Intestine" value="checked"/>
             <label for="heart" className="epd1">Intestine</label>

             <br/><br/><br/>
             <p className ="epd2">Selecting Tissues</p>
             <br/>
             <input type="checkbox" className="c"name="Eyeballs" id="Eyeballs" value="checked"/>
             <label for="Eyeballs" className="epd1">Eyeballs</label>
             <input type="checkbox"  className="c"name="Skin" id="Skin" value="checked"/>
             <label for="heart" className="epd1">Skin</label>
             <input type="checkbox"  className="c"name="Bones" id="Bones" value="checked"/>
             <label for="heart" className="epd1">Bones</label>
             <input type="checkbox"  className="c"name="Heartvalves" id="Heartvalves" value="checked"/>
             <label for="heart" className="epd1">Heart Valves</label>
             <input type="checkbox"  className="c"name="Bloodvesseles" id="Bloodvesseles" value="checked"/>
             <label for="heart" className="epd1">Blood Vesseles</label>
             <br/><br/><br/>
             <button className="nsb1" >Submit</button>
            
             




            </div>
            <div>
                <Footer/>
            </div>

        </div>
    )
}
export{Patient_Details}
