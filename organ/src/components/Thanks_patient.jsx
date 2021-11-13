
import "./thanks_hospital.css"
import Navbar from './navbar/Navbar'

import Footer from './footer/Footer'


function Thanks_Patient_page(){


    return(

        <div >
            <Navbar/>
            <div className="thanks_main">
                <p className="p1">Thanks for Register with Us!</p>
                <button className="b1"> View Report</button>
                <p className="p5">Back to Login</p>
            </div>
            <Footer/>

        </div>
    )
}
export{Thanks_Patient_page}