import "./second_page.css"

function Second_Component({user, hospital}){
    // console.log(user, hospital)
    return (
        <div>
        <div id="second_page_topbox1">
            <div className="sp_div2">
                    <div className="logo">
                        {hospital[0].toUpperCase()}
                    </div>
                    <div>
                <p id="p">Hospital : { hospital.toUpperCase() }</p>
                <p id="p_id">USERID : { user }</p>
                </div>
            </div>
            <div className="sp_div3">
                <p className="sp_b1">Logout </p>
                <img src="Vector.svg" alt="->" className="vector"></img>
            </div>

        </div>
        </div>
    )
}

export {Second_Component}