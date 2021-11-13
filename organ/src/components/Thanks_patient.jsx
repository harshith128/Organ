
import "./thanks_hospital.css"
import Navbar from './navbar/Navbar'

import Footer from './footer/Footer'
import { Second_Component } from "./Second_Component"


function Thanks_Patient_page(){
    const {user, hospital, token} = JSON.parse(localStorage.getItem("login"));

    const handleLoginClick = () => {
        window.location.pathname = "/login";
    }

    const handleReport = () => {
        window.location.pathname = "/report";
    }

    return(

        <div >
            <Navbar/>
            <Second_Component  user={ user } hospital= { hospital } />
            <div className="thanks_main">
                <p className="p1">Thanks for Register with Us!</p>
                <button className="b1" onClick={handleReport}> View Report</button>
                <p className="p5" onClick={handleLoginClick}>Back to Login</p>
            </div>
            <Footer/>

        </div>
    )
}
export{Thanks_Patient_page}