import "./second_page.css"

function Second_Component(){
    return (
        <div>
        <div id="second_page_topbox1">
            <div className="sp_div2">
                    <div className="logo">
                        A
                        
                    </div>
                    <div>
                <p id="p">hospital name</p>
                <p id="p_id">id</p>
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