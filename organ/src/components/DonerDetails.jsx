import Navbar from './navbar/Navbar'

import Footer from './footer/Footer'
import {Second_Component} from "./Second_Component"
import "./donerdetails.css"
import { useRef, useState } from "react";

const init={
    name:"",
    dob:"",
    blood_group:"",
    gender:"",
    cause_of_death:"",
    brain_death_date:"",
    brain_death_time:"",
    ODcard:"",
    f_aprooval:"",
   

}

function Doner_details(){
    const [data,setData]=useState(init)
    let ref=useRef(null)
    const [file,setfile]=useState(null)
    const{name,dob,blood_group,gender,cause_of_death,brain_death_date,brain_death_time,ODcard,f_aprooval}=data;

    const handleChange=(e)=>{
        let {name,value,type}=e.target;
        
        setData({...data,[name]:value});
       // console.log(data)
    }
    const handlefileChange=(e)=>{
        //console.log(e.target.files[0])
        const file1=e.target.files[0]
       // console.log( "file1:",file1)
        ref=(file1)
        setfile(ref)
        //console.log("ref:",ref)
       // console.log("setfile:",file)

    }
    return (
        
        <div>
            <Navbar/>
            <Second_Component/>
            <br></br>
            <div className="ddmain">
                <p id="head">Enter Donor Details</p>
                <div  className="form_div">
                    <div className="left">
                        <label className="f2">Patient Name*</label>
                        <br></br>
                        <input type="text"className="f1" name="name" onChange={handleChange}/>
                        <label className="f2">Date of Birth*</label>
                        <br></br>
                        <input type="date" className="f1" name="dob" onChange={handleChange}/>
                        <label className="f2">Blood Group*</label>
                        <br></br>
                        <select className="f1" name="blood_group"onChange={handleChange}>
                            <option > </option>
                            <option value="O+">O+</option>
                            <option value="O-">O-</option>
                            <option value="A+">A+</option>
                            <option value="AB+">AB+</option>
                            <option value="A-">A-</option>
                            <option value="AB-">AB-</option>
                            
                        </select>
                        <label className="f2">Gender*</label>
                        <br></br>
                        <select className="f1" name="gender"onChange={handleChange}>
                            <option > </option>
                            <option value="M">Male</option>
                            <option value="F">Female</option>
                            <option value="O">Other</option>
                        </select>
                        <label className="f2">Cause of Death*</label>
                        <br></br>
                        <input type="text" className="f1" name="cause_of_death" onChange={handleChange}/>
                        <label className="f2">Brain Death Date*</label>
                        <br></br>
                        <input type="date" className="f1" name="brain_death_date" onChange={handleChange}/>


                    </div>
                    <div className="right">
                        <label className="f2"> Brain Death Time*</label>
                        <input type="time" className="f1" name="brain_death_time" onChange={handleChange}/>
                        <label className="f2">Patient have OD card*</label>
                        <br></br>
                        <input type="radio" id="yes" name="ODcard" value="Yes" className="f4"onChange={handleChange}/>
                         <label for="yes" className="f5">Yes</label>
                         <input type="radio" id="no" name="ODcard" value="No" className="f4" onChange={handleChange}/>
                         <label for="no" className="f5">No</label>
                        <br></br>
                         <label className="f2">Family Approval For Organ Donate*</label>
                         <br></br>
                        <input type="radio" id="yes" name="f_aprooval" value="Yes" className="f4"onChange={handleChange}/>
                         <label for="yes" className="f5">Yes</label>
                         <input type="radio" id="no" name="f_aprooval" value="No" className="f4"onChange={handleChange}/>
                         <label for="no" className="f5">No</label>
                        <br></br>
                        <label className="f2">Update Brain Death Certificate</label>
                        <br></br> <br></br>
                        <input type="file" className="f3" name=" certificate" ref={ref} onChange={handlefileChange}/>
                        <label className="f2">Eligible Blood Group for Transplant</label>
                        <br></br>
                    </div>
                   
                </div>
                
            </div>
            <button className="nsb1" disabled={data.name.trim().length<2||data.dob.trim().length<5||
                data.blood_group.trim().length<1||data.gender.trim().length<1||data.cause_of_death.trim().length<3||
                data.brain_death_date.trim().length<5||data.brain_death_time.trim().length<3||data.ODcard.trim().length<2||
                data.f_aprooval.trim().length<1} onClick={()=>console.log(data,file)}>Next Step</button>
            <div>
            <Footer/>
            </div>
            
        </div>
    )
}
export {Doner_details}
