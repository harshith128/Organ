import Navbar from './navbar/Navbar'

import Footer from './footer/Footer'
import {Second_Component} from "./Second_Component"
import "./confirm_bd_d.css"

function Confirm_BD_Details(){

    return (
        <div>
            <Navbar/>
        <Second_Component/>
        <br/> 
        <div id="owtdmain">
            <p className="owtdhead">Confirm Entered Details</p>
          
               
                <div  className="form_div">
                    <div className="left">
                        <label className="f2">Co-Ordinator Name</label>
                        <br></br>
                        <input type="text"className="f3" name="name" value="hai" />
                        <label className="f2">Co-ordinator-Contact Number</label>
                        <br></br>
                        <input type="text" className="f3" name="dob"/>
                        <label className="f2">Patient Name</label>
                        <br></br>
                        <input type="text" className="f3"/>
                        <label className="f2">Date of Birth</label>
                        <br></br>
                        <input type="text" className="f3"/>
                        <label className="f2">Blood Group</label>
                        <br></br>
                        <input type="text" className="f3" name="cause_of_death"/>
                        <label className="f2">Gender</label>
                        <br></br>
                        <input type="text" className="f3" name="brain_death_date"/>
                        <label className="f2">Cause of Death</label>
                        <br></br>
                        <input type="text" className="f3" name="brain_death_date"/>



                    </div>
                    <div className="right">
                        <label className="f2"> Brain Death Date</label>
                        <input type="text" className="f3" name="brain_death_time"/>
                        <label className="f2">Brain Death Time</label>
                        <br></br>
                        <input type="text" className="f3"/>
                        <br></br>
                         <label className="f2">Patient having OD Card</label>
                         <br></br>
                        <input type="text" className="f3"/>
                        <br></br>
                        <label className="f2">Family Approval For Donate</label>
                        <br></br> 
                        <input type="text" className="f3" name=" certificate"  />
                        <br/>
                        <label className="f2">Upload Brain Death Certificate</label>
                        <br></br> <br></br>
                        <input type="file" className="f3" name=" certificate"  />
                        <label className="f2">Eligible Blood Group for Transplant</label>
                        <br></br>


                    </div>
                   
                </div>
                <div>
                    <p className="cbdd1">Organs To Donate</p>
                    <p className="cbdd2">Organs</p>
                    <p className="cbdd2">Tissues</p>
                    <br/> <br/>
                </div>
                <button className="cbddbt1">Register</button>
                <button className="cbddbt2">Edit</button>
                
            
            </div>
            <div>
        <Footer/>
        </div>

        </div>

    )
}
export{Confirm_BD_Details}