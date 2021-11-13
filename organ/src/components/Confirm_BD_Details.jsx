import Navbar from './navbar/Navbar'

import Footer from './footer/Footer'
import {Second_Component} from "./Second_Component"
import "./confirm_bd_d.css"
import { useLocation } from "react-router";
import { useState } from 'react/cjs/react.development'
import {Link} from "react-router-dom";
import { useEffect } from 'react';

function Confirm_BD_Details(){
    const {user, hospital, token} = JSON.parse(localStorage.getItem("login"));
    const [brain, setBrain] = useState(null)

    const location = useLocation()
    // console.log("location",location.state)
    const data2=location.state.data1
    const file2=location.state.file1
    const organs=location.state.Odata

    const handleClick3=()=>{
        // console.log("data:",data2,file2,organs)
        setBrain(true);
    }

    const handleBrainDead = async() => {
        if(brain === null || ! brain) return;
        else {
            const res = await  fetch("http://localhost:2737/death", {
                method: "POST",
                body: JSON.stringify({
                    donorName: data2.name,
                    deathTime: data2.brain_death_time,
                    deathDate: data2.brain_death_date,
                    dob: data2.dob,
                    approval: data2.f_aprooval==="Yes" ? true : false,
                    odCard: data2.ODcard==="Yes" ? true : false,
                    gender: data2.gender,
                    cause: data2.cause_of_death,
                    bloodGroup: data2.blood_group,
                    eligible: data2.eligible_blood_group,
                    hospital: user,
                    organsAvailable: ["eye", "heart"]
                }),
                headers: {
                    "Content-Type": "application/json",
                }
            })
            const dt = await res.json();
            // console.log(dt)
            if(res.status === 201) {
                alert("Registered");
                setBrain(false);
                window.location.pathname = "/thanks_P";
            } else {
                alert(`something went wrong`)
                // console.log(dt)
                setBrain(false);
            }
        }
    }

    useEffect(() => {
        handleBrainDead()
    }, [brain])
   


    return (
        <div>
            <Navbar/>
        <Second_Component user={ user } hospital= { hospital } />
        <br/> 
        <div id="owtdmain">
            <p className="owtdhead">Confirm Entered Details</p>
          
               
                <div  className="form_div">
                    <div className="left">
                        <label className="f2">Patient Name</label>
                        <br></br>
                        <input type="text"className="cbdd11" name="Patient_name"value={data2.name}  />
                        <label className="f2">Patient Mobile Number</label>
                        <br></br>
                        <input type="text" className="cbdd11" name="Patient_mobile_number" value={data2.Patient_mobile_number}/>
                        <label className="f2">Patient Mail-ID</label>
                        <br></br>
                        <input type="text" className="cbdd11" name="email" value={data2.email}/>
                       
                        <label className="f2">Date of Birth</label>
                        <br></br>
                        <input type="text" className="cbdd11"value={data2.dob} name="dob"/>
                        <label className="f2">Blood Group</label>
                        <br></br>
                        <input type="text" className="cbdd11" name="blood_group"value={data2.blood_group}/>
                        <label className="f2">Gender</label>
                        <br></br>
                        <input type="text" className="cbdd11" name="gender"value={data2.gender}/>
                        <label className="f2">Cause of Death</label>
                        <br></br>
                        <input type="text" className="cbdd11" name="cause_of_death"value={data2.cause_of_death}/>



                    </div>
                    <div className="right">
                        <label className="f2"> Brain Death Date</label>
                        <input type="text" className="cbdd11" name="brain_death_date"value={data2.brain_death_date}/>
                        <label className="f2">Brain Death Time</label>
                        <br></br>
                        <input type="text" className="cbdd11" name="brain_death_time"value={data2.brain_death_time}/>
                        <br></br>
                         <label className="f2">Patient having OD Card</label>
                         <br></br>
                        <input type="text" className="cbdd11" name="ODcard"value={data2.ODcard}/>
                        <br></br>
                        <label className="f2">Family Approval For Donate</label>
                        <br></br> 
                        <input type="text" className="cbdd11" name="f_aprooval"value={data2.f_aprooval}  />
                        <br/>
                        <label className="f2">Upload Brain Death Certificate</label>
                        <br></br> <br></br>
                        <input type="text" className="cbdd11" name=" certificate"  ref={file2} value={file2.name} />
                        <label className="f2">Eligible Blood Group for Transplant</label>
                        <br></br>
                        {
                            data2.eligible_blood_group.map((e)=>(<p className="cbdd9">{e}</p>))
                        }


                    </div>
                   
                </div>
                <div >
                    
                    <p className="cbdd1">Organs To Donate</p>
                    <div className="form_div">
                        <div>
                    <p className="cbdd2">Organs</p>
                    </div>
                   
                    
                    <div>
                        {
                            Object.keys(organs).map( (e)=>(<p className="cbdd10">{e}</p>))

                        }
                    </div>
                    </div>
                    <br/> <br/>
                </div>
                <br/> <br/>
                <button className="cbddbt1" onClick={handleClick3}>Register</button>
                <button className="cbddbt2">Edit</button>
                
            
            </div>
            <div>
        <Footer/>
        </div>

        </div>

    )
}
export{Confirm_BD_Details}