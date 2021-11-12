import "./thanks_hospital.css"
import Navbar from './navbar/Navbar'

import Footer from './footer/Footer'


function Thanks_page(){
    const {userID, email} = JSON.parse(localStorage.getItem("user"));


    return(
        

        <div >
            <Navbar/>
            <div>
            <div className="thanks_main">
                <p className="p1">Thank You!</p>
                <p className="p2">You are Registered Succesfully!</p>
                <p className="p3">Your User ID Send to your Registered Mail ID</p>
                <p className="p4">{ email }</p>
                <button className="b1"> Click to Login</button>
            </div>
            </div>
            <Footer/>

        </div>
    )
}
export{Thanks_page}