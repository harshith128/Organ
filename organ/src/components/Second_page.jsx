import "./second_page.css"
import {Second_Component} from "./Second_Component"

function Second_Page(){
    return (
        <div>
        <Second_Component/>
        <br></br>
        <div>
        <div id="second_page_secondbox">
            <div className="one">
                <div className="inside_box">
                   
                    <img src="Rectangle 226.svg" className="img"></img>
                    <p className="inside_box1">New Patient Registration</p>
                </div>

            </div>
            <div  className="two">
            <div className="inside_box2">
                    <img src="Rectangle 228.svg"></img>
                    <p className="inside_box1">Check Status</p>
                </div>


            </div>
            <div className="three">
            <div className="inside_box">
                    <img src="Rectangle 226.svg"></img>
                    <p className="inside_box1">Update Patient Info</p>
                </div>

            </div>
            <div  className="four">
            <div className="inside_box">
                    <img src="Rectangle 226.svg"></img>
                    <p className="inside_box1">Update Hospital Info</p>
                </div>

            </div>
           
            </div>
        </div>
       

        </div>

    )
}
export {Second_Page}