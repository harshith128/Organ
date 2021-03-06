import Navbar from './navbar/Navbar'
import Footer from './footer/Footer'
import {Second_Component} from "./Second_Component";
import { useLocation } from "react-router";
import { useRef, useState } from "react";
import { Link } from 'react-router-dom';
import "./enter_patient_details.css"
import "./confirm_pd.css"
import { useEffect } from 'react/cjs/react.development';

function Confirm_Patient_Details(){
    const {user, hospital, token} = JSON.parse(localStorage.getItem("login"));
    const [pat, setPat] = useState(null);
    const [org, setOrg] = useState([]);

    const location = useLocation()
//   console.log("location",location.state);
//   console.log("Name",location.state.formData);
   //const { state } = this.props.location
 //console.log("state:",props);
     
  const data = location.state.formData
  const filedata=location.state.file
//console.log("data",data.name1);
const organs=[]
if(data.heart)organs.push("Heart")
if(data.lungs)organs.push("Lungs")
if(data.kidney)organs.push("Kidney")
if(data.pancreas)organs.push("Pancreas")
if(data.intestine)organs.push("Intestine")
// console.log(organs)

const tissues=[]
if(data.eyeballs)tissues.push("Eyeballs")
if(data.skin)tissues.push("Skin")
if(data.bones)tissues.push("Bones")
if(data.heartvalves)tissues.push("Heartvalves")
if(data.bloodvesseles)tissues.push("Bloodvesseles")
// console.log(tissues)
const handleclick1=(e)=>{
    selectOrgan()
    // console.log(data)
    setPat(true)
}

const selectOrgan = () => {
    if(data.bloodvesseles === true) {
        setOrg([...org, "bloodvesseles"]);
    }
    if(data.bones === true) {
        setOrg([...org, "bones"]);
    }
    if(data.heart === true) {
        setOrg([...org, "heart"]);
    }
    if(data.heartvalves === true) {
        setOrg([...org, "heartvalves"]);
    }
    if(data.intestine === true) {
        setOrg([...org, "intestine"]);
    }
    if(data.kidney === true) {
        setOrg([...org, "kidney"]);
    }
    if(data.liver === true) {
        setOrg([...org, "liver"]);
    }
    if(data.lungs === true) {
        setOrg([...org, "lungs"]);
    }
    if(data.pancreas === true) {
        setOrg([...org, "pancreas"]);
    }
    if(data.skin === true) {
        setOrg([...org, "skin"]);
    }
    return
}

const handlePatient = async() => {
    if(pat === null || ! pat) return;
    else {
        // console.log(org)
        const res = await  fetch("http://localhost:2737/patients", {
            method: "POST",
            body: JSON.stringify({
                    patientName: data.name,
                    problemType: data.problem,
                    dob: data.dob,
                    bloodGroup: data.blood_group,
                    preferable: data.donor_group,
                    gender: data.gender,
                    email: data.email,
                    phone: data.contact_number,
                    organs: org,
                    hospital: user,
            }),
            headers: {
                "Content-Type": "application/json",
            }
        })
        const dt = await res.json();
        if(res.status === 201) {
            localStorage.setItem("patientID", JSON.stringify({patientID: dt.patientID}));
            alert("Registered");
            setPat(false);
            window.location.pathname = "/thanks_lastflow";
        } else {
            alert(`something went wrong`)
            // console.log(dt)
            setPat(false);
        }
    }
}

useEffect(() => {
    handlePatient()
}, [pat])

    return(
        <div>
             <Navbar/>
            <Second_Component  user={ user } hospital= { hospital }  />
            <br></br>
            <div className="pdmain">
            <p id="pdhead">Confirm Patient Details</p>
             <div  className="form_div">
                    <div className="left">
                    <label className="f2">Patient Name*</label>
                        <br></br>
                    <input type="text"className="cpd001" name="name1" value={data.name} />
                    <label className="f2">Patient Contact Number*</label>
                        <br></br>
                    <input type="Number"className="cpd001" name="contact_number"  value={data.contact_number} />
                    <label className="f2">Patient Email-ID*</label>
                        <br></br>
                    <input type="email"className="cpd001" name="email" value={data.email} />

                        <label className="f2">Date of Birth*</label>
                        <br></br>
                        <input type="text" className="cpd001" name="dob" value={data.dob} />
                        <label className="f2">Blood Group*</label>
                        <br></br>
                        <input type="text" className="cpd001" name="blood_group" value={data.blood_group}/>
                           
                     
                        </div>
                        <div>
                        <label className="f2">Gender*</label>
                        <br></br>
                        <input type="text" className="cpd001" name="gender" value={data.gender}/>
                           
               
                        <label className="f2">Type of Problem*</label>
                        <br></br>
                        <input type="text" className="cpd001" name="problem" value={data.problem} />
                        <label className="f2">Portable Blood Group From Doner*</label>
                        <br></br>
                        {
                            data.donor_group.map((e)=>(<p className="cbdd9">{e}</p>))
                        }
                          <br></br>  <br></br>  <br></br>  <br></br>  <br></br>  <br></br>  <br></br>  <br></br>  <br></br>

                        <label className="f2">Uploaded Medical Certificate*</label>
                        <br></br> 
                        <input type="text" className="cpd001" name=" certificate" value={filedata.name}  />
                        
                        </div>
                        <br/> <br/> <br/> <br/>
                       

             </div>
             <hr className="line1"/>
             <br/>
             <p className="epd2">Seeking Organs</p>
            
             <br/>
            <div className="showTissues" >
             <div className ="organDiv"> Organs</div>
             {[...organs, ...tissues].map(el=><div className="printTissue">{el}</div>)}
             <br/>
             </div>

             <br/><br/>
             {/* <div className="showTissues">
             <div className ="organDiv"> Tissues</div>
             {tissues.map(el=><div className="printTissue">{el}</div>)}
             <br/>
             </div> */}
             <br/><br/>
             <button className="cbddbt1" onClick={handleclick1}>Register</button>
             
                {/* <button className="cbddbt2"><Link to={{pathname: '/editDetails',state: { data}}}state={data} style={{textDecoration:"none" , color:"#17295E"}}>Edit</Link></button> */}
                <button className="cbddbt2" >Edit</button>
            </div>
            <div>
                <Footer/>
            </div>

        </div>
    )
}
export{Confirm_Patient_Details}
