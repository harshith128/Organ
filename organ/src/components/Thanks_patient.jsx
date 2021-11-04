
import "./thanks_hospital.css"
import Navbar from '../components/Navbar';

function Thanks_Patient_page(){


    return(

        <div >
            <Navbar/>
            <div className="thanks_main">
                <p className="p1">Thanks for Register with Us!</p>
                <button className="b1"> Click to Login</button>
                <p className="p5">Back to Login</p>
            </div>

        </div>
    )
}
export{Thanks_Patient_page}