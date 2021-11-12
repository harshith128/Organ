import Navbar from './navbar/Navbar'
import Footer from './footer/Footer'
import {Second_Component} from "./Second_Component"
import { useRef, useState } from "react";
import "./enter_patient_details.css"
import { Link } from 'react-router-dom';


const object={
name1:"",
contact_number:"",
email:"",
dob:"",
blood_group:"",
gender:"",
problem:"",
//  certificate:"",
heart:"",
lungs:"",
kidney:"",
pancreas:"",
intestine:"",
eyeballs:"",
skin:"",
bones:"",
heartvalves:"",
bloodvesseles:"",
}

function Patient_Details(){
    const [formData,setFormData]=useState(object)
  const handleChange=(e)=>{
      const {name,value,type,checked}=e.target
      setFormData({...formData,[name]:(type==="checkbox") ? checked:value})
  }
  const handleSubmit=(e)=>{
      e.preventDefault(formData)
      console.log("form:",formData)
  }
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
<<<<<<< HEAD
                    <input onChange={handleChange} type="text"className="f1" name="name1" />
                    
                    <label className="f2">Patient Contact Number*</label>
                        <br></br>
                    <input onChange={handleChange} type="Number"className="f1" name="contact_number" />
                    <label className="f2">Patient Email-ID*</label>
                        <br></br>
                    <input onChange={handleChange}type="email"className="f1" name="email" />

                        <label className="f2">Date of Birth*</label>
                        <br></br>
                        <input onChange={handleChange} type="date" className="f1" name="dob" />
                        <label className="f2">Blood Group*</label>
                        <br></br>
                        <select onChange={handleChange} className="f1" name="blood_group">
=======
                    <input type="text"className="f1" name="name"  />
                    <label className="f2">Patient Contact Number*</label>
                        <br></br>
                    <input type="Number"className="f1" name="contact_number"  />
                    <label className="f2">Patient Email-ID*</label>
                        <br></br>
                    <input type="email"className="f1" name="email"  />

                        <label className="f2">Date of Birth*</label>
                        <br></br>
                        <input type="date" className="f1" name="dob"  />
                        <label className="f2">Blood Group*</label>
                        <br></br>
                        <select className="f1" name="blood_group" >
>>>>>>> c6c78bcf89024fb75ce4ae67364418211d990589
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
<<<<<<< HEAD
                        <select onChange={handleChange} className="f1" name="gender">
=======
                        <select className="f1" name="gender" >
>>>>>>> c6c78bcf89024fb75ce4ae67364418211d990589
                            <option > </option>
                            <option value="M">Male</option>
                            <option value="F">Female</option>
                            <option value="O">Other</option>
                        </select>
                        <label className="f2">Type of Problem*</label>
                        <br></br>
                        <input onChange={handleChange} type="text" className="f1" name="problem" />
                        <label className="f2">Portable Blood Group From Doner*</label>
                        <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
                        <label className="f2">Upload Medical Certificate*</label>
                        <br></br> <br></br>
                        <input  type="file" className="f3" name="certificate" />
                        
                        </div>
                        <br/> <br/> <br/> <br/>
                       

             </div>
             <hr className="line1"/>
             <br/>
             <p className="epd">Seeking Organs</p>
             <br/><br/>
             <p className ="epd2">Selecting Organs</p>
             <br/>
<<<<<<< HEAD
             <input  onChange={handleChange}  type="checkbox" className="c"name="heart" id="heart" />
=======
             <input type="checkbox" className="c"name="Heart" id="heart" value="checked"/>
>>>>>>> c6c78bcf89024fb75ce4ae67364418211d990589
             <label for="heart" className="epd1">Heart</label>
             <input onChange={handleChange} type="checkbox" className="c"name="lungs" id="lungs"/>
             <label for="lungs" className="epd1">Lungs</label>
             <input onChange={handleChange} type="checkbox" className="c"name="kidney" id="kidney"/>
             <label for="kidney" className="epd1">Kidney</label>
             <input onChange={handleChange} type="checkbox" className="c"name="liver" id="Liver"/>
             <label for="Liver" className="epd1">Liver</label>
             <input  onChange={handleChange} type="checkbox" className="c"name="pancreas" id="Pancreas"/>
             <label for="Pancreas" className="epd1">Pancreas</label>
             <input onChange={handleChange} type="checkbox" className="c"name="intestine" id="Intestine"/>
             <label for="Intestine" className="epd1">Intestine</label>

             <br/><br/><br/>
             <p className ="epd2">Selecting Tissues</p>
             <br/>
             <input onChange={handleChange} type="checkbox" className="c"name="eyeballs" id="Eyeballs"/>
             <label for="Eyeballs" className="epd1">Eyeballs</label>
             <input onChange={handleChange} type="checkbox"  className="c"name="skin" id="Skin"/>
             <label for="heart" className="epd1">Skin</label>
             <input onChange={handleChange} type="checkbox"  className="c"name="bones" id="Bones"/>
             <label for="heart" className="epd1">Bones</label>
             <input onChange={handleChange} type="checkbox"  className="c"name="heartvalves" id="Heartvalves"/>
             <label for="heart" className="epd1">Heart Valves</label>
             <input onChange={handleChange} type="checkbox"  className="c"name="bloodvesseles" id="Bloodvesseles"/>
             <label for="heart" className="epd1">Blood Vesseles</label>
             <br/><br/><br/>
              <button className="nsb1" onClick={handleSubmit} ><Link to={{pathname: '/c_p_d',state: { formData}}}state={formData} style={{textDecoration:"none" , color:" white"}}>Submit</Link></button> 

             {/* <button className="nsb1" onClick={handleSubmit} >Submit</button> */}
            
             




            </div>
            <div>
                <Footer/>
            </div>

        </div>
    )
}
export{Patient_Details}
