import "./second_page.css"
import {Second_Component} from "./Second_Component"
import Navbar from './navbar/Navbar';
// import First from "./asset/Rectangle_226.svg"
import { ReactComponent as MySvgFile1 } from "../components/asset/Rectangle_226.svg"
import { ReactComponent as MySvgFile2 } from "../components/asset/Report.svg"
function Second_Page(){
    return (
        <div>
            <Navbar/>
        <Second_Component/>
        <br></br>
        <div>
        <div id="second_page_secondbox">
            <div className="one">
                <div className="inside_box">
                   <div className="img"><MySvgFile1/></div>
                    {/* <img src={} className="img" alt =""></img> */}
                    <p className="inside_box1">New Patient Registration</p>
                </div>

            </div>
            <div  className="two">
                        <div className="inside_box2">
                             <div className="img"><MySvgFile2/></div>
                    {/* <img src="Rectangle 228.svg" alt =""></img> */}
                    <p className="inside_box1">Check Status</p>
                </div>


            </div>
            <div className="three">
                        <div className="inside_box">
                             <div className="img"><MySvgFile1/></div>
                    {/* <img src="Rectangle_226.svg" alt =""></img> */}
                    <p className="inside_box1">Update Patient Info</p>
                </div>

            </div>
            <div  className="four">
                        <div className="inside_box">
                             <div className="img"><MySvgFile2/></div>
                    {/* <img src="Rectangle_226.svg" alt =""></img> */}
                    <p className="inside_box1">Update Hospital Info</p>
                </div>

            </div>
           
            </div>
        </div>
       

        </div>

    )
}
export {Second_Page}