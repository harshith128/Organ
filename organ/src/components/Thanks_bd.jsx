
import "./thanks_bd.css"
import Navbar from './navbar/Navbar'

import Footer from './footer/Footer'
import { Second_Component } from "./Second_Component";


function Thanks_bd(){
    const {user, hospital, token} = JSON.parse(localStorage.getItem("login"));
    const { patientID } = JSON.parse(localStorage.getItem("patientID"));

    const handleLoginClick = () => {
        window.location.pathname = "/login_brain_death";
    }


    return(

        <div >
            <Navbar/>
            <Second_Component  user={ user } hospital= { hospital } />
            <div className="thanks_main10">
                <p className="p110">Thanks for Register!</p>
                <div className="tbd11">
                <p className="tbd12">Your Registration Number is-</p><p className="tbd10">{ patientID }</p>
                </div>
                <p  className="tbd10">You Will Get a Notification in your Registered Mail & Mobile Number When the Doner is Registered</p>
               
                <button className="b110" onClick={handleLoginClick}> Back to Login</button>
                <br/>
                <br/>
                
            </div>
            <Footer/>

        </div>
    )
}
export{Thanks_bd}