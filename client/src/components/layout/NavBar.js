import React from 'react';
import '../../App.css';
import {Link} from 'react-router-dom';

import Login from '../auth/Login'
const  NavBar =()=> {
    return (
  
        <div className="form_register ui attached stackable secondary menu">
        <div className="ui container">
          
           <li className='ui item'>
                <Link to='/'> <i className="home icon" />  Acceuil </Link>
           </li>        
           <li className='ui item'>
           <Link to='/problems'><i className="grid layout icon" /> Problems</Link>
           </li>
           <li className='ui item'>
           <Link to='/register'><i className="grid layout icon" /> Register</Link>
           </li>
          <div className="ui simple dropdown item">
            ShowList
            <i className="dropdown icon" />
            <div className="menu">
              <a className="item"><i className="edit icon" /> About US</a>
              <a className="item"><i className="globe icon" /> Choose Language</a>
              <a className="item"><i className="settings icon" /> Account Settings</a>
            </div>
          </div>
          <div className="right item">

          {/* login down here */}
          <Login/>
          {/* login up here */}

          </div>
        </div>
      </div>
    )
}

export default NavBar
