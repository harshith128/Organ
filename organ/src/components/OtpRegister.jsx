import "./otpRegister.css"
import Navbar from './navbar/Navbar';

import Footer from './footer/Footer';

import React, { useState } from "react";

const OTPBox = () => {
    const [otp, setOtp] = useState(new Array(4).fill(""));

    const handleChange = (element, index) => {
        if (isNaN(element.value)) return false;

        setOtp([...otp.map((d, idx) => (idx === index ? element.value : d))]);

        //Focus next input
        if (element.nextSibling) {
            element.nextSibling.focus();
        }
    };

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
                        <button disabled={otp.join("").length === 0}
                            className={otp.join("").length === 0 ? "btn_dis" : "btn"}
                            onClick={e => setOtp([...otp.map(v => "")])}
                        >
                            Clear
                        </button>
                        <button disabled={otp.join("").length !== 4}
                            className={otp.join("").length !== 4 ? "btn_dis" : "btn"}
                            onClick={e =>
                                console.log("Entered OTP is " + otp.join(""))
                            }
                        >
                            Verify OTP
                        </button>
                    </p>
                </div>
                <Footer/>
            </div>
        </>
    );
};

export default OTPBox;