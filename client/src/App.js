import React,{Fragment} from 'react';
import './App.css';
import {BrowserRouter as Router , Route , Switch } from 'react-router-dom';
import Alerts from './components/layout/Alerts'
import Acceuil from './components/Acceuil';
import Problems from './components/Problems';
import Register from './components/auth/Register';
import AuthState from './context/auth/AuthState';
import AlertState from './context/alert/AlertState';

function App() {

  
  return (
    <AuthState>
      <AlertState>
        <Router>
            <Fragment className='container'>
              <Alerts/>
              <Switch>
                <Route exact path='/' component={Acceuil}/>
                <Route exact path='/problems' component={Problems}/>
                <Route exact path='/register' component={Register}/>
              </Switch>
            </Fragment>
        </Router>
      </AlertState>
   </AuthState>
  );
}

export default App;
