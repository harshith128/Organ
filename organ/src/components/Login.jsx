
import "./login.css"
import { ReactComponent as MySvgFile } from "../components/asset/Login_heart.svg"
import Navbar from './navbar/Navbar'
import Footer from './footer/Footer'
import { useState } from "react";
import { Link } from "react-router-dom";

const initstate={
    userid:"",
    password:"",
};


function Login(){
    const [data,setData]=useState(initstate)
    const{userid,password}=data;

    const handleChange=(e)=>{
        const {name,value}=e.target;
        setData({...data,[name]:value});
        //console.log(data)
    }
   
   
    return(

        
        <div >
            <Navbar/>
            <div id="login_main">
            <div className="left_div">
               
                <MySvgFile/>
                <br/><br/>
                <p >
                It is infinitely better to</p><p> transplant a Heart than to bury it to be </p><p>devoured by worms-Christiaan Barnard.</p>
                

            </div>
            <div className="right_div">
                <h2 className="wel">Hi Welcome</h2>
                <form >
                <label className="lab">Enter User ID</label>
                <input type="text"className="input11" name="userid" onChange={handleChange} required="true"/>
                <br></br> <br></br> 
                <label className="lab">Password</label>
                <input type="password" className="input11" name="password"  onChange={handleChange} required="true"/>
                <p className="forgot">Forgot Password?</p>
                <br></br><br></br>
                <input type="checkbox" className="check" /><label className="kmli">Keep me logged in</label>
                <br></br><br></br>
                
               
                </form>
                <Link to="/patient"><button className="login_btn" disabled={data.password.trim().length<6||data.userid.trim().length<8} onClick={()=>console.log(data)}>Login</button></Link>
               
                <div className="last">
                <p className="lp">Don't have an account?</p>
                <Link to="/hospital"><button className="reg_btn" >Register Now</button></Link>
                </div>



            </div>
            </div>
            <Footer/>
        </div>
    )
}
export{Login}