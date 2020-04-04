import React, { useContext,useEffect } from 'react';
import NavBar from './layout/NavBar';
import News from './layout/News';

import AuthContext from '../context/auth/authContext';

const Acceuil = () => {
  const authContext =useContext(AuthContext);
  const {loadUser }= authContext;
  useEffect(() => {
    loadUser();
    // eslint-disable-next-line
  }, [])

  return (

  <div>
    {/* <NavBar/> */}
    <div class="ui grid stackable">
        <div class="ten wide column"><News /></div>
        <div class="six wide column"></div>
    </div>
  

  </div>

    
    



)};

export default Acceuil