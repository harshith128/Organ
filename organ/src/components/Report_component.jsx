import "./report_bd.css"

function Report_component({user, hospital}){
     console.log(user, hospital)
    return (
        <div>
        <div id="report-main-nav">
            <div className="report-nav-left">
                    <div className="logo_hosp">
                        {hospital[0].toUpperCase()}
                    </div>
                    <div>
                <p id="report-hospital">Hospital : { hospital.toUpperCase() }</p>
                <p id="report-user">USERID : { user }</p>
                </div>
            </div>
            <div className="report-nav-flex">
                <p className="report-nav-reg">Registered Report</p>
                
            </div>

        </div>
        </div>
    )
}

export {Report_component}