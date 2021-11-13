import {useEffect, useState} from "react";
import { organs } from "../utils/request";
import "./organAvailability.css"
import Navbar from "./navbar/Navbar";
import Footer from "./footer/Footer";
export const OrganAvailability = () => {
    const [data, setData] = useState([]);
    const [st, setSt] = useState("Karnataka");
    const [flag, setFlag] = useState(null);
    const hospHead = ["Hospital Details", "Cordinator", "Patient Name", "Data of Birth", "Death Date", "Death Time", "Preferable Blood", "Wish to Donate"];
    const [filt, setFilt] = useState(true);
    const [org, setOrg] = useState("eye");
    const [bld, setBld] = useState("Ap") 

    const getAvailbility = async()=>{
        const {data} = await organs.get(`/death?state=${st}`)
        setData(data)
    }

    const getFiltered = async()=>{
        const {data} = await organs.get(`/death/others?state=${st}&organ=${org}&blood=${bld}`)
        console.log(data)
        setData(data)
    }

    const handleChange = (e) => {
        setSt(e.target.value)
    } 

    const handleFilter = () => {
        setFilt(false)
    }

    const handleOrgChange = (e) => {
        setOrg(e.target.value)
    }

    const handleBldChange = (e) => {
        setBld(e.target.value)
    }

    const handleState = () => { setFilt(true); if(flag === null) { setFlag(true); return } setFlag(!flag); return };

    useEffect(() => {
        getAvailbility()
    }, [flag])

    
    useEffect(() => {
        getFiltered()
    }, [org, bld])

    return (
        <div className="avail">
            <Navbar />
            <div className="organ-avail-head">
                <h4>Organ Availability</h4>
                <div className="organ-avail-line"></div>
            </div>
            <div className="data">
                <div className="data-search">
                    <select name="st" onChange={ handleChange }>
                        <option value="Karnataka">Karnataka</option>
                        <option value="Tamilnadu">Tamilnadu</option>
                        <option value="Kerala">Kerala</option>
                    </select>
                    <button onClick={ handleState } className="btn-sear"><img src="last_search.png" alt="" /></button>
                    <button onClick={ handleFilter} className="btn-filt"><img src="hosp_filter.png" alt="" /></button>
                </div>
                {
                    !filt ? (<div className="filter-comp">
                        <div>Organ</div>
                         <div>Blood Group</div>
                           <div> <select name="org" onChange={ handleOrgChange }>
                                <option value="eye">Eye</option>
                                <option value="heart">Heart</option>
                                <option value="liver">Liver</option>
                        </select></div>
                        <div>
                            <select name="bld" onChange={ handleBldChange }>
                                <option value="Ap">A+</option>
                                <option value="ABp">AB+</option>
                                <option value="Op">O+</option>
                                <option value="On">O-</option>
                            </select></div>
                        </div>
                        ) : <div></div>
                }
                {
                    flag !== null ? (<div className="death">
                    <div className="thead">
                        {
                            hospHead.map((ele) => {
                                return <h4>{ele}</h4>
                            })
                        }
                    </div>
                    {
                        data.allDeaths.map((ele) => {
                            return (<div className="trow">
                                <p>{ele.address}</p>
                                <p>{ele.coordinator}</p>
                                <p>{ele.donorName}</p>
                                <p>{ele.dob}</p>
                                <p>{ele.deathDate}</p>
                                <p>{ele.deathTime}</p>
                                <p>{ele.eligible.join(" , ")}</p>
                                <p>{ele.organsAvailable.join(" , ")}</p>
                            </div>)
                        })
                    }
                </div>) : <div></div>
                }
            </div>
            <Footer />
        </div>
    )
}