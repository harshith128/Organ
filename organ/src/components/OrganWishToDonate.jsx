import Navbar from './navbar/Navbar'

import Footer from './footer/Footer'
import {Second_Component} from "./Second_Component"
import { useLocation } from "react-router";
import "./organ_wish_to_donate.css"
import { useState } from 'react/cjs/react.development'
import {Link} from "react-router-dom";
const init={
    all_organs:""
}



    

function Organ_Wish_To_Donate(){

    const location = useLocation()
    console.log("location",location.state)
    const data1=location.state.data;
    const file1=location.state.file;
    //console.log(data1,file1)
    const [f_data,setf_data]=useState(init)
    const [Odata,setOdata]=useState()
    const handleChange=(e)=>{
        let {name,value,checked,type}=e.target
        value=type==="checkbox"?checked:value
        setOdata({...Odata,[name]:value})

    }
    const handleClick1=()=>{
        console.log("needed data:",data1,file1,Odata)
    }
    return (
        <div>
        <Navbar/>
        <Second_Component/>
        <br></br>
        <div id="owtdmain">
            <p className="owtdhead">Organ Wish To Donate</p>
            <div>
                <label className="owtd1">All Organs</label>
                <input type="radio" id="yes" name="all_organs" value="Yes" className="o1"  onChange={handleChange}/>
                         <label for="yes" className="f5">Yes</label>
                         <input type="radio" id="no" name="all_organs" value="No" className="o1"  onChange={handleChange}/>
                         <label for="no" className="f5">No</label>
                        
                            <p  className="owtd2">Select Organs</p>
                            <div id="grid_view">
                                <div>
                                    <img className="otwd_img" src="Heart.png"/>

                                    <br/>
                                    <input type="checkbox"name="heart" id="heart" value="checked" onChange={handleChange}/>
                                    <label for="heart" className="f5">Heart</label>
                                </div>
                                <div>
                                <img className="otwd_img" src="Lungs.png"/>
                                <br/> <input type="checkbox"name="lungs" id="lungs" value="checked"  onChange={handleChange}/>
                                <label for="lungs" className="f5">Lungs</label>
                                </div>
                                <div>
                                <img  className="otwd_img" src="Kidneys.png"/>
                                <br/> <input type="checkbox"name="kidneys" id="kidneys" value="checked"  onChange={handleChange}/>
                                <label for="kidneys" className="f5">Kidneys</label>
                                </div>
                                <div>
                                <img  className="otwd_img" src="Liver.png"/>
                                <br/><input type="checkbox"name="liver" id="liver" value="checked"  onChange={handleChange}/>
                                <label for="liver" className="f5">Liver</label>

                                </div>
                                <div>
                                <img  className="otwd_img" src="Intestine.png"/>
                                <br/><input type="checkbox"name="intestine" id="intestine" value="checked"  onChange={handleChange}/>
                                <label for="intestine" className="f5">Intestine</label>
                                </div>

                        </div>
                        <p  className="owtd2">Select Tissues</p>
                            <div id="grid_view">
                                <div>
                                    <img  className="otwd_img" src="Eye Balls.png"/>
                                    <br/> <input type="checkbox"name="eyeballs" id="eyeballs" value="checked"  onChange={handleChange}/>
                                    <label for="eyeballs" className="f5">Eye Balls</label>
                                </div>
                                <div>
                                <img  className="otwd_img" src="Skin.png"/>
                                <br/> <input type="checkbox"name="skin" id="skins" value="checked"  onChange={handleChange}/>
                                <label for="skins" className="f5">Skin</label>
                                </div>
                                <div>
                                <img  className="otwd_img" src="Bones.png"/>
                                <br/><input type="checkbox"name="Bones" id="Bones" value="checked"  onChange={handleChange}/>
                                <label for="Bones" className="f5">Bones</label>
                                </div>
                                <div>
                                <img  className="otwd_img" src="Heart Valves.png"/>
                                <br/> <input type="checkbox"name="Heart_Valves" id="Heart_Valves" value="checked"  onChange={handleChange}/>
                                <label for="Heart_Valves" className="f5">Heart Valves</label>

                                </div>
                                <div>
                                <img  className="otwd_img" src="Blood Vesseles.png"/>
                                <br/> <input type="checkbox"name="Blood_Vessels" id="Blood_Vessels" value="checked"  onChange={handleChange}/>
                                <label for="Blood_Vessels" className="f5">Blood Vessels</label>
                                </div>
                                <br/>

                        </div>
                        <button className="nsb1" disabled={Odata===undefined} onClick={handleClick1}>
                        <Link to={{pathname: '/C_BD_D',state: {data1,file1,Odata}}}state={data1,file1,Odata} style={{textDecoration:"none" , color:" white"}}>Next Step</Link></button>
                        <br/>
            </div>

        </div>
       
       
        <div>
        <Footer/>
        </div>
        
    </div>
    )
}
export{Organ_Wish_To_Donate}