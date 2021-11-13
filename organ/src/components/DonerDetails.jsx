import Navbar from './navbar/Navbar'

import Footer from './footer/Footer'
import {Second_Component} from "./Second_Component"
import "./donerdetails.css"
import { useRef, useState } from "react";
import {Progressbar} from "./Progressbar"
import {Link} from "react-router-dom";

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
    eligible_blood_group:[],
    Patient_mobile_number:"",
    email:""
}

const eliBG = ["A+", "B+", "AB+", "O+", "A-", "B-", "AB-", "O-"];
const eliBol = [false, false, false, false, false, false, false, false];

function Doner_details(){
    const [select0, setSelect0] = useState("eli_p")
    const [select1, setSelect1] = useState("eli_p")
    const [select2, setSelect2] = useState("eli_p")
    const [select3, setSelect3] = useState("eli_p")
    const [select4, setSelect4] = useState("eli_p")
    const [select5, setSelect5] = useState("eli_p")
    const [select6, setSelect6] = useState("eli_p")
    const [select7, setSelect7] = useState("eli_p")
    const {user, hospital, token} = JSON.parse(localStorage.getItem("login"));
    // console.log(user, hospital, token)
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
    const handleBG = (e) => {
        eliBol[e] = ! eliBol[e]
        // console.log(eliBG[e], eliBol[e])
        init.eligible_blood_group = eliBG.filter((a, b) => {return eliBol[b]})
        // console.log(init.eligible_blood_group)
        // console.log(eliBol[e])
        setData({...data,eligible_blood_group:init.eligible_blood_group});
        // console.log(data.eligible_blood_group)
        changeClass(e)
    }
    const changeClass = (e) => {
        // console.log(e)
        switch (e) {
            case 0:
                eliBol[e] ? setSelect0("eli_select") : setSelect0("eli_p") 
                break;
            case 1:
                eliBol[e] ? setSelect1("eli_select") : setSelect1("eli_p") 
                break;
            case 2:
                eliBol[e] ? setSelect2("eli_select") : setSelect2("eli_p") 
                break;
            case 3:
                eliBol[e] ? setSelect3("eli_select") : setSelect3("eli_p") 
                break;
            case 4:
                eliBol[e] ? setSelect4("eli_select") : setSelect4("eli_p") 
                break;
            case 5:
                eliBol[e] ? setSelect5("eli_select") : setSelect5("eli_p") 
                break;
            case 6:
                eliBol[e] ? setSelect6("eli_select") : setSelect6("eli_p") 
                break;
            case 7:
                eliBol[e] ? setSelect7("eli_select") : setSelect7("eli_p") 
                break;
            default:
                break;
        }
    }
    const handleClick=()=>{
        console.log(data,file)
    }
    return (
        
        <div>
            <Navbar/>
            <Second_Component user={ user } hospital= { hospital } />
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
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                            <option value="Other">Other</option>
                        </select>
                        <label className="f2">Cause of Death*</label>
                        <br></br>
                        <input type="text" className="f1" name="cause_of_death" onChange={handleChange}/>
                        <label className="f2">Relative Mobile Number*</label>
                        <br></br>
                        <input type="number" className="f1" name="Patient_mobile_number" onChange={handleChange}/>
                        <label className="f2">Relative Mail ID*</label>
                        <br></br>
                        <input type="email" className="f1" name="email" onChange={handleChange}/>
                       

                    </div>
                    <div className="right">
                    <label className="f2">Brain Death Date*</label>
                        <br></br>
                        <input type="date" className="f1" name="brain_death_date" onChange={handleChange}/>

                        <label className="f7"> Brain Death Time*</label>
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
                        <div className= "eli">
                            <p onClick={() => {handleBG(0)}} className={select0} >A+</p>
                            <p onClick={() => {handleBG(1)}} className={select1} >B+</p>
                            <p onClick={() => {handleBG(2)}} className={select2} >AB+</p>
                            <p onClick={() => {handleBG(3)}} className={select3} >O+</p>
                            <p onClick={() => {handleBG(4)}} className={select4} >A-</p>
                            <p onClick={() => {handleBG(5)}} className={select5} >B-</p>
                            <p onClick={() => {handleBG(6)}} className={select6} >AB-</p>
                            <p onClick={() => {handleBG(7)}} className={select7} >O-</p>
                        </div>
                        <br></br>
                    </div>
                   
                </div>
                
            </div>
            <button className="nsb1" disabled={data.name.trim().length<2||data.dob.trim().length<5||
                data.blood_group.trim().length<1||data.gender.trim().length<1||data.cause_of_death.trim().length<3||
                data.brain_death_date.trim().length<5||data.brain_death_time.trim().length<3 || data.eligible_blood_group < 1 ||data.ODcard.trim().length<2||
                data.f_aprooval.trim().length<1||data.Patient_mobile_number.trim().length!=10||data.email.trim().length<8} onClick={handleClick}>
                <Link to={{pathname: '/O_W_T_D',state: {data,file}}}state={data,file} style={{textDecoration:"none" , color:" white"}}>Next Step</Link> </button>
            <div>
            <Footer/>
            </div>
            
        </div>
    )
}
export {Doner_details}
