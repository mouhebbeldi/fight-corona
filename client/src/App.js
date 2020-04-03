import React,{Fragment} from 'react';
import './App.css';
import {BrowserRouter as Router , Route , Switch } from 'react-router-dom';

import Acceuil from './components/Acceuil';
import Problems from './components/Problems';

function App() {

  
  return (
   <Router>
  
      <Fragment className='container'>
        <Switch>
          <Route exact path='/' component={Acceuil}/>
          <Route exact path='/problems' component={Problems}/>
        </Switch>
      </Fragment>
      
   </Router>
  );
}

export default App;
