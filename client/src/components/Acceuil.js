import React from 'react';
import Login from './auth/Login';
import NavBar from './layout/NavBar';
import News from './layout/News';



const Acceuil = () => (
  <div>
    <NavBar/>
    <div class="ui grid stackable">
        <div class="ten wide column"><News/></div>
        <div class="six wide column"></div>
    </div>
  

  </div>

    
    



)

export default Acceuil