import "./thanks_hospital.css"
import Navbar from '../components/Navbar';

function Thanks_page(){


    return(

        <div >
            <Navbar/>
            <div className="thanks_main">
                <p className="p1">Thank You!</p>
                <p className="p2">You are Registered Succesfully!</p>
                <p className="p3">Your User ID Send to your Registered Mail ID</p>
                <p className="p4"> ap**o@gmail.com</p>
                <button className="b1"> Click to Login</button>
            </div>

        </div>
    )
}
export{Thanks_page}