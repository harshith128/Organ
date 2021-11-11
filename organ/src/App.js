
import './App.css';
import React from 'react';
import {Route,Switch} from 'react-router-dom'

import Landingpage from './components/landing/Landingpage';


import { Second_Page, Second_page } from './components/Second_page';
import{Thanks_page} from "./components/Thanks_Hospital"
import{Thanks_Patient_page, Thanks_Patient_Page} from "./components/Thanks_patient"
import{Login} from "./components/Login"
import{Doner_details}from "./components/DonerDetails"
import { OrganAvailability } from './components/OrganAvailability';




function App() {
 
  return (
    <div>
      <Switch>
         <Route path="/" exact>
           <Landingpage />
        </Route>
        <Route path="/registration" exact>
           <Second_Page />
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
        <Route path="/d_d" exact>
           <Doner_details />
        </Route>
         <Route path="/o_a" exact>
           <OrganAvailability />
         </Route>
        </Switch>  
    </div>
  );
}

export default App;
