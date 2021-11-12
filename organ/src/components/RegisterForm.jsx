import "./RegisterForm.css";
import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router";
import Navbar from "./navbar/Navbar";
import Footer from "./footer/Footer";
import { Link } from "react-router-dom";
import axios from "axios";


export function RegisterForm({props}) {
    const pathname = window.location.pathname;
    // const [loc, setLoc] = useState(pathname); 
    const [change, setChange] = useState(null);
  const [disp,setDisp]=useState(false)
    const location = useLocation()
//   console.log("location",location.state);
//   console.log("Name",location.state.formData);
   //const { state } = this.props.location
 //console.log("state:",props);
     
  const data = location.state.formData
// console.log("data",data.name);
// const mail = data.mail;
  const handleEdit=(e)=>{
    e.preventDefault()
    setDisp(true)
}

const handleRegister = (e) => {
    e.preventDefault(data);
    if(change === null) setChange(true);
    else setChange(!change);
}

const loadData = () => {
    if(change === null) return;
    registerHospital();
}


    useEffect(() => {
        loadData()
    }, [change]);

const registerHospital = async()=>{
    // const res = axios.post('/register', {
    //     data
    //   })
    //   .then((response) => {
    //     console.log(response);
    //   }, (error) => {
    //     console.log(error);
    //   });


    const res = await  fetch("http://localhost:2737/hospital/register", {
        method: "POST",
        body: JSON.stringify({
            name: data.name,
            city: data.city,
            state: data.state,
            regNumber: data.number,
            nottoID: data.notto,
            teleNumber: data.telephone,
            coordinatorNumber: data.coordinatorNumber,
            type: data.private === true ? "private" : "government",
            director: data.director,
            licenceExpDate: data.date,
            website: data.website,
            email: data.mail,
            password: data.password,
            coordinator: data.coordinator,
            address: data.add
        }),
        headers: {
            "Content-Type": "application/json",
        }
    })
    // console.log(loc)
    const dt = await res.json()
    const hospToken = dt.token;
    console.log(dt)
    if(res.status === 201) {
        localStorage.setItem("hospToken", JSON.stringify({hospToken:hospToken}));
        // localStorage.setItem("hospToken", JSON.stringify({hospToken}))
        window.location.pathname = "/otp";
    } else {
        alert(`Something went wrong ${res.status}`)
    }
    
}


 return(
  <>
  <Navbar/>
  <div className="head">
         <div >Register Hospital</div>
         {/* <hr></hr> */}
         </div>
  <div className="contain">
      
    <div className="up">Confirm Entered Details</div>
    



   <div className="outerBox">
    <form >
    {/* 1st div */}
    <div className="namebox">
    <div >
    { !disp?<div className="nameitem">
            <label className="label">Hospital Type</label>

            <div className="text">{data.government? "Government":"Private"}</div>
        </div>:
        < div className="nameitem">
            <label className="label">Hospital Type</label>
            <br/>
            <input className="input" type="text" defaultValue={data.government? "Government":"Private"}/>
        </div>
    }
    </div>
    <div >
    { !disp?<div className="nameitem">
            <label className="label">Address*</label>

            <div className="text">{data.add}</div>
        </div>:
        < div className="nameitem">
            <label className="label">Address*</label>
             <br/> 
            <input className="input" type="text" defaultValue={data.add}/>
        </div>
    }
    </div>
    </div>

    {/*2nd div*/}
    <div className="namebox">
    <div >
    { !disp?<div className="nameitem">
            <label className="label">Name of the Hospital*</label>

            <div className="text">{data.name}</div>
        </div>:
        < div className="nameitem">
            <label className="label">Name of the Hospital*</label>
            <br/>
            <input className="input" type="text" defaultValue={data.name}/>
        </div>
    }
    </div>
    <div >
    { !disp?<div className="nameitem">
            <label className="label">City*</label>

            <div className="text">{data.city}</div>
        </div>:
        < div className="nameitem">
            <label className="label">City*</label>
             <br/> 
            <input className="input" type="text" defaultValue={data.city}/>
        </div>
    }
    </div>
    </div>

    
    <div className="namebox">
    <div >
    { !disp?<div className="nameitem">
            <label className="label">Hospital Registration Number*</label>

            <div className="text">{data.number}</div>
        </div>:
        < div className="nameitem">
            <label className="label">Hospital Registration Number*</label>
            <br/>
            <input  className="input" type="text" defaultValue={data.number}/>
        </div>
    }
    </div>
    <div >
    { !disp?<div className="nameitem">
            <label className="label">State*</label>

            <div className="text">{data.state}</div>
        </div>:
        < div className="nameitem">
            <label className="label">State*</label>
             <br/> 
            <input className="input" type="text" defaultValue={data.state}/>
        </div>
    }
    </div>
    </div>

    <div className="namebox">
    <div >
    { !disp?<div className="nameitem">
            <label className="label">NOTTO Registration ID*</label>

            <div className="text">{data.notto}</div>
        </div>:
        < div className="nameitem">
            <label className="label">NOTTO Registration ID*</label>
            <br/>
            <input className="input" type="text" defaultValue={data.notto}/>
        </div>
    }
    </div>
    <div >
    { !disp?<div className="nameitem">
            <label className="label">Active Mail-ID*</label>

            <div className="text">{data.mail}</div>
        </div>:
        < div className="nameitem">
            <label className="label">Active Mail-ID*</label>
             <br/> 
            <input className="input" type="mail" defaultValue={data.mail}/>
        </div>
    }
    </div>
    </div>

    <div className="namebox">
    <div >
    { !disp?<div className="nameitem">
            <label className="label">Licence Expiry Date*</label>

            <div className="text">{data.date}</div>
        </div>:
        < div className="nameitem">
            <label className="label">Licence Expiry Date*</label>
            <br/>
            <input className="input" type="date" defaultValue={data.date}/>
        </div>
    }
    </div>
    <div >
    { !disp?<div className="nameitem">
            <label className="label">Hospital Telephone Numer*</label>

            <div className="text">{data.telephone}</div>
        </div>:
        < div className="nameitem">
            <label className="label">Hospital Telephone Numer*</label>
             <br/> 
            <input className="input" type="text" defaultValue={data.telephone}/>
        </div>
    }
    </div>
    </div>

    <div className="namebox">
    <div >
    { !disp?<div className="nameitem">
            <label className="label">Name of the Hospital Director*</label>

            <div className="text">{data.director}</div>
        </div>:
        < div className="nameitem">
            <label className="label">Name of the Hospital Director*</label>
             <br/> 
            <input className="input" type="text" defaultValue={data.director}/>
        </div>
    }
    </div>
    <div >
    { !disp?<div className="nameitem">
            <label className="label">Hospital Website*</label>

            <div className="text">{data.website}</div>
        </div>:
        < div className="nameitem">
            <label className="label">Hospital Website*</label>
             <br/> 
            <input className="input" type="email" defaultValue={data.website}/>
        </div>
    }
    </div>
    </div>

    <div className="namebox">
    <div >
    { !disp?<div className="nameitem">
            <label className="label">Co-Ordinator Name*</label>

            <div className="text">{data.coordinator}</div>
        </div>:
        < div className="nameitem">
            <label className="label">Co-Ordinator Name*</label>
             <br/> 
            <input className="input" type="text" defaultValue={data.coordinator}/>
        </div>
    }
    </div>
    <div >
    { !disp?<div className="nameitem">
            <label className="label">Create Password*</label>

            <div className="text">{data.pass}</div>
        </div>:
        < div className="nameitem">
            <label className="label">Create Password*</label>
             <br/> 
            <input className="input" type="email" defaultValue={data.pass}/>
        </div>
    }
    </div>
    </div>

    <div className="namebox">
    <div >
    { !disp?<div className="nameitem">
            <label className="label">Co-Ordinator Contact Number*</label>

            <div className="text">{data.coordinatorNumber}</div>
        </div>:
        < div className="nameitem">
            <label className="label">Co-Ordinator Contact Number*</label>
             <br/> 
            <input className="input" type="text" defaultValue={data.coordinatorNumber}/>
        </div>
    }
    </div>
    <div >
    { !disp?<div className="nameitem">
            <label className="label">Confirm Password*</label>

            <div className="text">{data.password}</div>
        </div>:
        < div className="nameitem">
            <label className="label">Confirm Password*</label>
             <br/> 
            <input className="input" type="email" defaultValue={data.password}/>
        </div>
    }
    </div>
    </div>

    {/* <Link to={{pathname: '/register'}}>Register</Link> */}
    <div className="buttons">
      <button className="register" onClick={ handleRegister }>Register</button>
      <button onClick={handleEdit}className="edit">Edit</button>
    </div>
    {/* <input className="submit" type="submit"/> */}
    </form>
    </div>

  

  </div>
 <Footer/>
  </>
  );
}
