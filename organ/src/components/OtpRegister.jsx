import "./otpRegister.css";
import Navbar from './navbar/Navbar';

import { useLocation } from "react-router";

import Footer from './footer/Footer';

import React, { useEffect, useState } from "react";

const OTPBox = () => {
//     const location = useLocation();
    const [change, setChange] = useState(null);
    
    const [otp, setOtp] = useState(new Array(4).fill(""));

    const handleChange = (element, index) => {
        if (isNaN(element.value)) return false;

        setOtp([...otp.map((d, idx) => (idx === index ? element.value : d))]);

        //Focus next input
        if (element.nextSibling) {
            element.nextSibling.focus();
        }
    };

    const handleVerify = (e) => {
        if(change === null) setChange(true);
        else setChange(!change);
    }

    const verifyHospital = async () => {
        const {hospToken} = JSON.parse(localStorage.getItem("hospToken"));
        // console.log(hospToken);
        // console.log(Number(otp.join("")))
        
    const res = await  fetch("http://localhost:2737/hospital/verify", {
        method: "POST",
        body: JSON.stringify({
            otp: Number(otp.join(""))
        }),
        headers: {
            "Content-Type": "application/json",
            "Authorization":`Bearer ${hospToken}`
        }
    })
    // console.log(loc)
    const dt = await res.json()
        if(res.status === 201) {
            let userID = dt.userID;
            let email = dt.email;
            localStorage.setItem("user", JSON.stringify({userID:userID, email:email}));
            // console.log(dt.userID)
            window.location.pathname = "/thanks_H";
        } else {
            console.log(dt)
        }
    }

    const verifyOTP = () => {
        if(change === null) return;
        verifyHospital();
    }
    

    useEffect(() => {
        verifyOTP()
    }, [change])

    return (
        <>
            <div className="row">
                <Navbar/>
                <div className="otp_box">
                    <h2>Email Verification</h2>
                    <div className="otp_div">
                    {otp.map((data, index) => {
                        return (
                            <input
                                className="otp-field"
                                type="text"
                                name="otp"
                                maxLength="1"
                                key={index}
                                value={data}
                                onChange={e => handleChange(e.target, index)}
                                onFocus={e => e.target.select()}
                            />
                        );
                    })}
                    </div>
                    <p>OTP Entered - {otp.join("")}</p>
                    <p>
                        <button disabled={otp.join("").length !== 4}
                            className={otp.join("").length !== 4 ? "btn_dis" : "btn"}
                            onClick={ handleVerify
                            }
                        >
                            Verify OTP
                        </button>
                    </p>
                    <p>
                    <button disabled={otp.join("").length === 0}
                            className="clear"
                            onClick={e => setOtp([...otp.map(v => "")])}
                        >
                            Clear
                        </button>
                    </p>
                </div>
                <Footer/>
            </div>
        </>
    );
};

export default OTPBox;