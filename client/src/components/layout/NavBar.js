import React from 'react';

import {Link} from 'react-router-dom';

import Login from './Login'
const  NavBar =()=> {
    return (
  
        <div className="ui attached stackable secondary menu">
        <div className="ui container">
          
           <li className='ui item'>
                <Link to='/'> <i className="home icon" />  Acceuil </Link>
           </li>        
           <li className='ui item'>
           <Link to='/problems'><i className="grid layout icon" /> Problems</Link>
           </li>
          <div className="ui simple dropdown item">
            More
            <i className="dropdown icon" />
            <div className="menu">
              <a className="item"><i className="edit icon" /> Edit Profile</a>
              <a className="item"><i className="globe icon" /> Choose Language</a>
              <a className="item"><i className="settings icon" /> Account Settings</a>
            </div>
          </div>
          <div className="right item">

         <Login/>
        
          </div>
        </div>
      </div>
    )
}

export default NavBar
