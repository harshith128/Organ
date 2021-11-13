import "./second_page.css"
import {Second_Component} from "./Second_Component"
import Navbar from './navbar/Navbar';
import Footer from "./footer/Footer";
// import First from "./asset/Rectangle_226.svg"
import { ReactComponent as MySvgFile1 } from "../components/asset/Rectangle_226.svg"
import { ReactComponent as MySvgFile2 } from "../components/asset/Report.svg"
import { Link } from "react-router-dom";
function Second_Page(){
    const {user, hospital, token} = JSON.parse(localStorage.getItem("login"));
    console.log(user, hospital, token)
    // localStorage.setItem("login", JSON.stringify({user:user, hospital:hospital, token:token}));
    return (
        <div>
            <Navbar/>
        <Second_Component user={ user } hospital= { hospital } />
        <br></br>
        <div>
        <div id="second_page_secondbox">
            <div className="one_bd">
                <div className="inside_box_bd">
                   <div className="img_bd"><MySvgFile1/></div>
                    {/* <img src={} className="img" alt =""></img> */}
                    <Link to="/add_doner"><p className="inside_box1_bd">Brain Death Registration</p></Link>
                </div>

            </div>
            <div  className="two_bd">
                        <div className="inside_box2_bd">
                             <div className="img_bd"><MySvgFile2/></div>
                    {/* <img src="Rectangle 228.svg" alt =""></img> */}
                    <p className="inside_box1_bd">Check Status</p>
                </div>


            </div>
            <div className="three_bd">
                        <div className="inside_box_bd">
                             <div className="img_bd"><MySvgFile1/></div>
                    {/* <img src="Rectangle_226.svg" alt =""></img> */}
                    <p className="inside_box1_bd">Update Patient Info</p>
                </div>

            </div>
            <div  className="four_bd">
                        <div className="inside_box_bd">
                             <div className="img_bd"><MySvgFile2/></div>
                    {/* <img src="Rectangle_226.svg" alt =""></img> */}
                    <p className="inside_box1_bd">Update Hospital Info</p>
                </div>

            </div>
           
            </div>
        </div>
         <Footer />

        </div>

    )
}
export {Second_Page}