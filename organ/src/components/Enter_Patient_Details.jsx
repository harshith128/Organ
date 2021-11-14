import Navbar from './navbar/Navbar'
import Footer from './footer/Footer'
import {Second_Component} from "./Second_Component"
import { useRef, useState } from "react";
import "./enter_patient_details.css"
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';

const object={
name:"",
contact_number:"",
email:"",
dob:"",
blood_group:"",
gender:"",
problem:"",
donor_group:[],
//  certificate:"",
heart:"",
lungs:"",
kidney:"",
liver:"",
pancreas:"",
intestine:"",
eyeballs:"",
skin:"",
bones:"",
heartvalves:"",
bloodvesseles:"",
}

const eliBG = ["A+", "B+", "AB+", "O+", "A-", "B-", "AB-", "O-"];
const eliBol = [false, false, false, false, false, false, false, false];

function Patient_Details(){
    let ref=useRef(null)
    const [file,setfile]=useState(null)
    const history = useHistory();
    const handlefileChange=(e)=>{
        const file1=e.target.files[0]
        // console.log( "file1:",file1)
         ref=(file1)
         setfile(ref)


    }
    const [select0, setSelect0] = useState("eli_p")
    const [select1, setSelect1] = useState("eli_p")
    const [select2, setSelect2] = useState("eli_p")
    const [select3, setSelect3] = useState("eli_p")
    const [select4, setSelect4] = useState("eli_p")
    const [select5, setSelect5] = useState("eli_p")
    const [select6, setSelect6] = useState("eli_p")
    const [select7, setSelect7] = useState("eli_p")
    const {user, hospital, token} = JSON.parse(localStorage.getItem("login"));
    const [formData,setFormData]=useState(object)
  const handleChange=(e)=>{
      const {name,value,type,checked}=e.target
      setFormData({...formData,[name]:(type==="checkbox") ? checked:value})
  }
  const handleSubmit=(e)=>{
      e.preventDefault(formData)
      history.push({
        pathname: '/c_p_d',
        state: { formData,file }
      })
      console.log("form:",formData)
      console.log("file:",file)
  }

  const handleBG = (e) => {
    //   console.log(e)
    eliBol[e] = ! eliBol[e]
    // // console.log(eliBG[e], eliBol[e])
    // console.log(object.donor_group)
    object.donor_group = eliBG.filter((a, b) => {return eliBol[b]})
    setFormData({...formData,donor_group:object.donor_group});
    // // console.log(data.donor_group)
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
    return(
      
        <div>
             <Navbar/>
            <Second_Component  user={ user } hospital= { hospital }  />
            <br></br>
            <div className="pdmain">
            <p id="pdhead">Enter Patient Details</p>
             <div  className="form_div">
                    <div className="left">
                    <label className="f2">Patient Name*</label>
                        <br></br>
                    <input type="text"className="f1" name="name" onChange={handleChange} />
                    <label className="f2">Patient Contact Number*</label>
                        <br></br>
                    <input type="Number"className="f1" name="contact_number"   onChange={handleChange}/>
                    <label className="f2">Patient Email-ID*</label>
                        <br></br>
                    <input type="email"className="f1" name="email"  onChange={handleChange} />

                        <label className="f2">Date of Birth*</label>
                        <br></br>
                        <input type="date" className="f1" name="dob"  onChange={handleChange} />
                        <label className="f2">Blood Group*</label>
                        <br></br>
                        <select className="f1" name="blood_group" onChange={handleChange}>
                            <option > </option>
                            <option value="O+">O+</option>
                            <option value="O-">O-</option>
                            <option value="A+">A+</option>
                            <option value="A-">A-</option>
                            <option value="AB+">AB+</option>
                            <option value="AB-">AB-</option>
                            <option value="B+">B+</option>
                            <option value="B-">B-</option>
                        </select>
                        </div>
                        <div>
                        <label className="f2">Gender*</label>
                        <br></br>
                        <select className="f1" name="gender"  onChange={handleChange}>
                            <option > </option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                            <option value="Other">Other</option>
                        </select>
                        <label className="f2">Type of Problem*</label>
                        <br></br>
                        <input onChange={handleChange} type="text" className="f1" name="problem" />
                        <label className="f2">Portable Blood Group From Doner*</label>
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
                        <br></br><br></br>
                        <label className="f2">Upload Medical Certificate*</label>
                        <br></br> <br></br>
                        <input  type="file" className="f3" name="certificate"  ref={ref}onChange={handlefileChange} />
                        
                        </div>
                        <br/> <br/> <br/> <br/>
                       

             </div>
             <hr className="line1"/>
             <br/>
             <p className="epd">Seeking Organs</p>
             <br/><br/>
             <p className ="epd2">Selecting Organs</p>
             <br/>
             <input  onChange={handleChange}  type="checkbox" className="c"name="heart" id="heart" />
             {/* <input type="checkbox" className="c"name="Heart" id="heart" value="checked"/> */}
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

               {/* <button className="nsb1" onClick={handleSubmit} ><Link to={{pathname: '/c_p_d',state: { formData,file}}}state={formData,file} style={{textDecoration:"none" , color:" white"}}>Submit</Link></button>   */}
             {/* <button className="nsb1" onClick={handleSubmit} >Submit</button> */}
               <button className="nsb1" disabled={formData.blood_group.trim().length<1||formData.name.trim().length<2||
               formData.contact_number.trim().length<10||formData.email.trim().length<4||formData.dob.trim().length<3||
               formData.gender.trim().length<3||formData.problem.trim().length<3||formData.donor_group.length<1
                ||file===null} onClick={handleSubmit} >Submit</button>  
                

            </div>
            <div>
                <Footer/>
            </div>

        </div>
    )
}
export{Patient_Details}
