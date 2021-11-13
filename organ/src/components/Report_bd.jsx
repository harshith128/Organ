import {useEffect, useState} from "react";
import { organs } from "../utils/request";
import "./report_bd.css"
import Navbar from "./navbar/Navbar";
import Footer from "./footer/Footer";
import { Second_Component } from "./Second_Component"

export const Report_bd = () => {
    const [page, setPage] = useState(1);
    const [total, setTotal] = useState(1);
    const [data, setData] = useState([]);
    const {user, hospital, token} = JSON.parse(localStorage.getItem("login"));
  
    const patientHead = ["S.NO", "Patient Name", "Data of Birth", "Death Date", "Death Time", "Preferable Bloods", "Wish to Donate","Donated Organs"];

    const getReport = async()=>{
        const {data} = await organs.get(`/death/report?userID=${user}`)
        const {allDeaths, total_pages} = data;
        // console.log(allDeaths, total_pages)
        // console.log(data)
        setData(allDeaths)
        setTotal(total_pages)
    }

    useEffect(() => {
        getReport()
    }, [page])

    const handleClick = (p) => {
        setPage(page + p)
    }
  

    return (
        <div className="report">
            <Navbar />
            <Second_Component  user={ user } hospital= { hospital } />
        <br></br>
        <br></br>
            <div className="data">
                
                
                {
                    <div className="patient_report">
                     <div className="thead_donor">
                            {
                                //console.log("Pat",patientHead)
                            patientHead.map((ele) => {
                                return <h4>{ele}</h4>
                            })
                        }
                        </div>
                        {
                            data.map((ele, i) => {
                                return (
                                    <div className="trow_donor">
                                        <p>{i+1}</p>
                                        <p>{ele.donorName}</p>
                                        <p>{ele.dob}</p>
                                        <p>{ele.deathDate}</p>
                                        <p>{ele.deathTime}</p>
                                        <p>{ele.eligible.join(", ")}</p>
                                        <p>{ele.organsAvailable.join(", ")}</p>
                                        <p>{(ele.organsAvailable[Math.floor(Math.random() * ele.organsAvailable.length)])}</p>
                                    </div>
                                )
                            })
                        }
                </div>
                }
                <div className="pg"><button className={page <= 1 ? "pgDis" : "pgBtn"} onClick={() => {handleClick(-1)}} disabled={page <= 1}>{"<"}</button><button className={page >= total ? "pgDis" : "pgBtn"} onClick={() => {handleClick(1)}} disabled={page >= total}>{">"}</button></div>
            </div>
            <Footer />
        </div>
    )
}