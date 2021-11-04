
import './App.css';
import React from 'react';
import {Route,Switch} from 'react-router-dom'
import Landingpage from './components/Landingpage';
import { Second_Page, Second_page } from './components/Second_page';



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
        </Switch>
        
    </div>
  );
}

export default App;
