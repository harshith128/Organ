
import './App.css';
import React from 'react';
import {Route,Switch} from 'react-router-dom'

import Landingpage from './components/landing/Landingpage';


import { Second_Page } from './components/Second_page';
import{Thanks_page} from "./components/Thanks_Hospital"
import{Thanks_Patient_page } from "./components/Thanks_patient"
import{Login} from "./components/Login"
import{Doner_details}from "./components/DonerDetails";
import { OrganAvailability } from './components/OrganAvailability';

import{Organ_Wish_To_Donate} from "./components/OrganWishToDonate"
import{Confirm_BD_Details} from "./components/Confirm_BD_Details"

import{HospitalForm} from "./components/HospitalForm";
import{RegisterForm} from "./components/RegisterForm";
import{Patient_Details} from "./components/Enter_Patient_Details"
import{Confirm_Patient_Details} from "./components/Confirm_Patient_Details"
import OTPBox from './components/OtpRegister';
import {Login_bd} from "./components/Login_bd"
import {Patient_Second_Page} from "./components/Patient_sec_page"
import {Edit_patientDetails} from "./components/Edit_patientDetails"

 import { Report_bd } from './components/Report_bd';
function App() {
 
  return (
    <div>
      <Switch>
         <Route path="/" exact>
           <Landingpage />
        </Route>
        <Route path="/report" exact>
           <Report_bd />
           </Route>
        <Route path="/register" exact>
           <RegisterForm />
           </Route>
           <Route path="/hospital" exact>
           <HospitalForm />
           </Route>
          <Route path="/otp" exact>
            <OTPBox />
           </Route>
        {/* <Route path="/registration" exact> */}

        <Route path="/brain_death" exact>

           <Second_Page />
           </Route>
           <Route path="/patient" exact>
           <Patient_Second_Page />
         </Route>
         <Route path="/thanks_H" exact>
           <Thanks_page />
         </Route>
         <Route path="/thanks_P" exact>
           <Thanks_Patient_page />
        </Route>
        <Route path="/login" exact>
           <Login />
           </Route>
           <Route path="/login_brain_death" exact>
           <Login_bd />
        </Route>
        <Route path="/add_doner" exact>
           <Doner_details />
        </Route>

         <Route path="/organ_availability" exact>
           <OrganAvailability />
         </Route>

        <Route path="/O_W_T_D" exact>
           <Organ_Wish_To_Donate />
        </Route>
        <Route path="/C_BD_D" exact>
           <Confirm_BD_Details />
        </Route>
        <Route path="/add_patient" exact>
           <Patient_Details />
        </Route>
        <Route path="/c_p_d" exact>
           <Confirm_Patient_Details />
        </Route>
        <Route path="/editDetails" exact>
           <Edit_patientDetails/>

        </Route>
        </Switch>  
    </div>
  );
}

export default App;
