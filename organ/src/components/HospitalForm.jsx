import "./HospitalForm.css";
import { useState } from "react";
import {Link} from "react-router-dom";
import Navbar from "./navbar/Navbar";
import Footer from "./footer/Footer";
import { useHistory } from 'react-router-dom';



const init={
  name:"",
  city:"",
  number:"",
  state:"",
  notto:"",
  telephone:"",
  date:"",
  website:"",
  director:"",
  mail:"",
  coordinator:"",
  pass:"",
  coordinatorNumber:"",
  password:"",
  add:"",
  government:"",
  private:""
}



export  function HospitalForm(){

  const history = useHistory();
  const [formData,setFormData]=useState(init)
  const handleChange=(e)=>{
      const {name,value,type,checked}=e.target
      setFormData({...formData,[name]:(type==="checkbox") ? checked:value})
  }
  const handleSubmit=(e)=>{
      e.preventDefault(formData)
      history.push({
        pathname: '/register',
        state: { formData }
      })
      console.log("form:",formData)
  }

    
    
    
      return (
        <div>
           <Navbar/> 
          <div className="heading">
         <div >Register Hospital</div>
         {/* <hr></hr> */}
         </div>
        <div className = "container">
           
        <div className = "upper">
            Add Hospital Details
        </div>

        <div className="hospitalBox">
        <div className="typeBox">
          <div className='box1' >
            <div >Hospital Type</div>
            </div>
            <div className='box2'> <input  onChange={handleChange} type="checkbox" id="hospital1" name="government" value="government"/>
              <label for="hospital1"className="gov">Government</label>
              
              <input onChange={handleChange}  type="checkbox" id="hospital2" name="private" value="private"/>
              <label for="hospital2">Private</label>
            </div>
        </div>
          <div className = "form"> 
            <form onSubmit={handleSubmit}>
                <div className="group">
             <div className='formGroup'>
               <input onChange={handleChange} type="text" className="formControl" placeholder = "hospital" id="name" name="name" required  />
                    <label for="name"  className="formLabel">Name of the Hospital*</label>
             </div>
              <div className="formGroup">
               <input onChange={handleChange} type="text"  className="formControl" placeholder="change" id="city" name="city"/>
               <label  for ="city"className="formLabel">City</label>
               </div> 
             </div>

             <div className="group">
             <div className='formGroup'>
               <input  onChange={handleChange} type="text" className="formControl" placeholder = "Register Number" id="number" name="number" required  />
                    <label for="number"  className="formLabel">Hospital Registration Number*</label>
             </div>
              <div className="formGroup">
               <input onChange={handleChange} type="text"  className="formControl" placeholder="Stata" id="state" name="state" required/>
               <label  for ="state"className="formLabel">State*</label>
               </div> 
             </div>

             <div className="group">
             <div className='formGroup'>
               <input onChange={handleChange} type="text" className="formControl" placeholder = "Register ID" id="notto" name="notto" required  />
                    <label for="notto"  className="formLabel">NOTTO Registration ID*</label>
             </div>
              <div className="formGroup">
               <input onChange={handleChange} type="number"  className="formControl" placeholder="Telephone" id="telephone" name="telephone"/>
               <label  for ="telephone"className="formLabel">Hospital Telephone Number*</label>
               </div> 
             </div>

             <div className="group">
             <div className='formGroup'>
               <input onChange={handleChange} type="date" className="formControl" placeholder = "Expiry Date" id="date" name="date" required  />
                    <label for="date"  className="formLabel">Licence Expiry Date*</label>
             </div>
              <div className="formGroup">
               <input onChange={handleChange} type="text"  className="formControl" placeholder="Hospital website" id="website" name="website"/>
               <label  for ="website"className="formLabel">Hospital Website*</label>
               </div> 
             </div>

             <div className="group">
             <div className='formGroup'>
               <input onChange={handleChange} type="text" className="formControl" placeholder = "Director name" id="director" name="director"  />
                    <label for="director"  className="formLabel">Name of the Hospital Director </label>
             </div>
              <div className="formGroup">
               <input onChange={handleChange} type="email"  className="formControl" placeholder="Mail" id="mail" name="mail"/>
               <label  for ="mail"className="formLabel">Active Mail-ID*</label>
               </div> 
             </div>

             <div className="group">
             <div className='formGroup'>
               <input onChange={handleChange} type="text" className="formControl" placeholder = "Coordinator name" id="coordinator" name="coordinator"  />
                    <label for="coordinator"  className="formLabel">Co-Ordinator Name* </label>
             </div>
              <div className="formGroup">
               <input onChange={handleChange} type="password"  className="formControl" placeholder="Password" id="pass" name="pass"/>
               <label  for ="pass"className="formLabel">Create Password*</label>
               </div> 
             </div>

             <div className="group">
             <div className='formGroup'>
               <input onChange={handleChange} type="text" className="formControl" placeholder = "Coordinator number" id="coordinatorNumber" name="coordinatorNumber"  />
                    <label for="coordinatorNumber"  className="formLabel">Co-Ordinator contact Number* </label>
             </div>
              <div className="formGroup">
               <input onChange={handleChange} type="password"  className="formControl" placeholder="Password" id="password" name="password"/>
               <label  for ="password"className="formLabel">Confirm Password*</label>
               </div> 
             </div>

             <div className="group">
             <div className='formGroup'>
               <input onChange={handleChange} type="text" className="formControl" placeholder = "Address" id="add" name="add"  />
                    <label for="add"  className="formLabel">Address* </label>
             </div>
             <div className='formGroup'></div>
              
             </div>

             {/* <div className="buttonDiv">< div onClick={handleSubmit} className="button" type="submit"><Link to={{pathname: '/register',state: { formData}}}state={formData} style={{textDecoration:"none" , color:" white"}}>Submit</Link></div></div> */}
             <div className="buttonDiv">< div onClick={handleSubmit} className="button" type="submit">Submit</div></div>
             {/* <Link to={{pathname: '/register',state: { formData}}}state={formData} style={{textDecoration:"none" , color:" white"}}><input type="submit"></input></Link> */}

             
            </form>

         
           </div> 
          </div>
        </div>
        <Footer/>
        </div>
      );
    };
