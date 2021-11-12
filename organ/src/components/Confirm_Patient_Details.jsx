import Navbar from './navbar/Navbar'
import Footer from './footer/Footer'
import {Second_Component} from "./Second_Component";
import { useLocation } from "react-router";
import { useRef, useState } from "react";
import { Link } from 'react-router-dom';
import "./enter_patient_details.css"
import "./confirm_pd.css"

function Confirm_Patient_Details(){

    const location = useLocation()
  console.log("location",location.state);
  console.log("Name",location.state.formData);
   //const { state } = this.props.location
 //console.log("state:",props);
     
  const data = location.state.formData
//console.log("data",data.name1);
const organs=[]
if(data.heart)organs.push("Heart")
if(data.lungs)organs.push("Lungs")
if(data.kidney)organs.push("Kidney")
if(data.pancreas)organs.push("Pancreas")
if(data.intestine)organs.push("Intestine")
console.log(organs)

const tissues=[]
if(data.eyeballs)tissues.push("Eyeballs")
if(data.skin)tissues.push("Skin")
if(data.bones)tissues.push("Bones")
if(data.heartvalves)tissues.push("Heartvalves")
if(data.bloodvesseles)tissues.push("Bloodvesseles")
console.log(tissues)

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
                    <input type="text"className="f3" name="name1" value={data.name1} />
                    <label className="f2">Patient Contact Number*</label>
                        <br></br>
                    <input type="Number"className="f3" name="contact_number"  value={data.contact_number} />
                    <label className="f2">Patient Email-ID*</label>
                        <br></br>
                    <input type="email"className="f3" name="email" value={data.email} />

                        <label className="f2">Date of Birth*</label>
                        <br></br>
                        <input type="text" className="f3" name="dob" value={data.dob} />
                        <label className="f2">Blood Group*</label>
                        <br></br>
                        <input type="text" className="f3" name="blood_group" value={data.blood_group}/>
                           
                     
                        </div>
                        <div>
                        <label className="f2">Gender*</label>
                        <br></br>
                        <input type="text" className="f3" name="gender" value={data.gender}/>
                           
               
                        <label className="f2">Type of Problem*</label>
                        <br></br>
                        <input type="text" className="f3" name="problem" value={data.problem} />
                        <label className="f2">Portable Blood Group From Doner*</label>
                        <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
                        <label className="f2">Uploaded Medical Certificate*</label>
                        <br></br> <br></br>
                        <input type="file" className="f3" name=" certificate"  />
                        
                        </div>
                        <br/> <br/> <br/> <br/>
                       

             </div>
             <hr className="line1"/>
             <br/>
             <p className="epd2">Seeking Organs</p>
            
             <br/>
            <div className="showTissues" >
             <p className ="cpd2"> Organs</p>
             {organs.map(el=><div className="printTissue">{el}</div>)}
             <br/>
             </div>

             <br/><br/>
             <div className="showTissues">
             <p className ="cpd2"> Tissues</p>
             {tissues.map(el=><div className="printTissue">{el}</div>)}
             <br/>
             </div>
             <br/><br/>
             <button className="cbddbt1">Register</button>
                <button className="cbddbt2"><Link to={{pathname: '/editDetails',state: { data}}}state={data} style={{textDecoration:"none" , color:"#17295E"}}>Edit</Link></button>
            
             




            </div>
            <div>
                <Footer/>
            </div>

        </div>
    )
}
export{Confirm_Patient_Details}
