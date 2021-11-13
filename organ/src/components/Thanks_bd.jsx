
import "./thanks_bd.css"
import Navbar from './navbar/Navbar'

import Footer from './footer/Footer'


function Thanks_bd(){


    return(

        <div >
            <Navbar/>
            <div className="thanks_main10">
                <p className="p110">Thanks for Register!</p>
                <div className="tbd11">
                <p className="tbd12">Your Registration Number is-</p><p className="tbd10">TNORDGRF45</p>
                </div>
                <p  className="tbd10">You Wiil Get a Notification in your Registered Mail & Mobile Number When the Doner is Registered</p>
               
                <button className="b110"> Back to Login</button>
                <br/>
                <br/>
                
            </div>
            <Footer/>

        </div>
    )
}
export{Thanks_bd}