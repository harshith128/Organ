
import "./login.css"
import { ReactComponent as MySvgFile } from "../components/asset/Login_heart.svg"
function Login(){
    return(
        <div >
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
                <input type="text"className="input"/>
                <br></br> <br></br> 
                <label className="lab">Password</label>
                <input type="password" className="input"/>
                <p className="forgot">Forgot Password?</p>
                <br></br><br></br>
                <input type="checkbox" className="check" />Keep me logged in
                <br></br><br></br>
                <button className="login_btn">Login</button>
                </form>
                <div className="last">
                <p>Don't have an account?</p>
                <button className="reg_btn">Register Now</button>
                </div>



            </div>
            </div>
        </div>
    )
}
export{Login}