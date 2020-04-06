import React,{Fragment} from 'react';

import './App.css';
import {BrowserRouter as Router , Route , Switch } from 'react-router-dom';
import Alerts from './components/layout/Alerts'
import Acceuil from './components/Acceuil';
import Problems from './components/Problems';
import Register from './components/auth/Register';
import AuthState from './context/auth/AuthState';
import ProblemState from './context/problems/ProblemState';
import AlertState from './context/alert/AlertState';
import setAuthToken from './utils/setAuthToken';
import NavBar from './components/layout/NavBar';
import Footer from './components/layout/Footer';
import Qcm from './components/auth/Qcm';
import About from './components/auth/About';
import Reste from './components/layout/Reste';
if (localStorage.token) setAuthToken(localStorage.token);
const App=()=> {

  
  return (
    <AuthState>
      <AlertState>
        <ProblemState>
        <Router>
            <div className='container' >
              <NavBar/> 
           
              
              <Alerts/>
              <Switch>
                <Route exact path='/' component={Acceuil}/>
                <Route  path='/problems' component={Problems}/>
                <Route  path='/register' component={Register}/>
                <Route  path='/qcm' component={Qcm}/>
                <Route  path='/about' component={About}/>
                <Route  path='/reste' component={Reste}/>
              </Switch>
            </div>
        </Router>
        <Footer/>
        </ProblemState>
      </AlertState>
   </AuthState>
  );
}

export default App;
