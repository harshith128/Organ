
import "./login.css"
import { ReactComponent as MySvgFile } from "../components/asset/Login_heart.svg"
import Navbar from './navbar/Navbar'
import Footer from './footer/Footer'
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const initstate={
    userid:"",
    password:"",
};


function Login_bd(){
    const [data,setData]=useState(initstate);
    const [login, setLogin] = useState(null);
    // const{userid,password}=data;

    const handleChange=(e)=>{
        const {name,value}=e.target;
        setData({...data,[name]:value});
        //console.log(data)
    }

    const handleClick = () => {
        setLogin(true);
    }

    const handleLogin = async() => {
        if(login === null || ! login) return;
        else {
            const res = await  fetch("http://localhost:2737/hospital/login", {
                method: "POST",
                body: JSON.stringify({
                    userID: data.userid,
                    password: data.password
                }),
                headers: {
                    "Content-Type": "application/json",
                }
            })
            const dt = await res.json()
            console.log(dt)
            console.log(login)
            if(res.status === 201) {
                console.log(dt)
                setLogin(false);
            } else {
                alert(`something went wrong ${res.status}`)
                console.log(dt)
                setLogin(false);
            }
        }
    }

    useEffect(() => {
        handleLogin()
    }, [login])
   
   
    return(

        
        <div >
            <Navbar/>
            <div id="login_main">
            <div className="left_div">
                <p>Velit tristique duis id nibh nec.</p>
                <MySvgFile/>
                <p>
                Velit tristique duis id nibh nec.
                Velit tristique duis id nibh nec.
                Velit tristique duis id nibh nec.
                </p>

            </div>
            <div className="right_div">
                <h2 className="wel">Hi Welcome</h2>
                <form >
                <label className="lab">Enter User ID</label>
                <input type="text"className="input" name="userid" onChange={handleChange} required="true"/>
                <br></br> <br></br> 
                <label className="lab">Password</label>
                <input type="password" className="input" name="password"  onChange={handleChange} required="true"/>
                <p className="forgot">Forgot Password?</p>
                <br></br><br></br>
                <input type="checkbox" className="check" />Keep me logged in
                <br></br><br></br>
                
               
                </form>
                <button className="login_btn" disabled={data.password.trim().length<8||data.userid.trim().length<6} onClick={handleClick}>Login</button>
                <div className="last">
                <p>Don't have an account?</p>
                <Link to={"/hospital"}><button className="reg_btn" >Register Now</button>
                 </Link>
                 </div>



            </div>
            </div>
            <Footer/>
        </div>
    )
}
export{Login_bd}