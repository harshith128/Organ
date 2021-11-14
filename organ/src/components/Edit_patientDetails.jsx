import Navbar from './navbar/Navbar'
import Footer from './footer/Footer'
import {Second_Component} from "./Second_Component";
import { useLocation } from "react-router";
import { useRef, useState } from "react";
import "./enter_patient_details.css"
import "./confirm_pd.css"

function Edit_patientDetails(){

    const location = useLocation()
//   console.log("location",location.state);
//   console.log("Name",location.state.formData);
   //const { state } = this.props.location
 //console.log("state:",props);
     
  const data = location.state.data
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
                    <input type="text"className="f3" name="name1" defaultValue={data.name1} />
                    <label className="f2">Patient Contact Number*</label>
                        <br></br>
                    <input type="Number"className="f3" name="contact_number" defaultValue={data.contact_number} />
                    <label className="f2">Patient Email-ID*</label>
                        <br></br>
                    <input type="email"className="f3" name="email" defaultValue={data.email} />

                        <label className="f2">Date of Birth*</label>
                        <br></br>
                        <input type="text" className="f3" name="dob" defaultValue={data.dob} />
                        <label className="f2">Blood Group*</label>
                        <br></br>
                        <input type="text" className="f3" name="blood_group" defaultValue={data.blood_group}/>
                           
                     
                        </div>
                        <div>
                        <label className="f2">Gender*</label>
                        <br></br>
                        <input type="text" className="f3" name="gender"  defaultValue={data.gender}/>
                           
               
                        <label className="f2">Type of Problem*</label>
                        <br></br>
                        <input type="text" className="f3" name="problem" defaultValue={data.problem}  />
                        <label className="f2">Portable Blood Group From Doner*</label>
                        <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
                        <label className="f2">Uploaded Medical Certificate*</label>
                        <br></br> <br></br>
                        <input type="file" className="f3" name=" certificate" defaultValue={data.certificate}  />
                        
                        </div>
                        <br/> <br/> <br/> <br/>
                       

             </div>
             <hr className="line1"/>
             <br/>
             <p className="epd2">Seeking Organs</p>
             <br/>
            
             <div className="showTissues" >
             <div className ="organDiv"> Organs</div>
             {organs.map(el=><div className="printTissue">{el}</div>)}
             <br/>
             </div>

             <br/><br/>
             <div className="showTissues">
             <div className ="organDiv"> Tissues</div>
             {tissues.map(el=><div className="printTissue">{el}</div>)}
             <br/>
             </div>
             
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
export{Edit_patientDetails}