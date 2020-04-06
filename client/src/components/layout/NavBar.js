import React, { Fragment,useContext } from 'react';
import '../../App.css';
import {Link} from 'react-router-dom';
import AuthContext from '../../context/auth/authContext';
import Login from '../auth/Login';
import avatar from './avatar.jpg';
import About from '../auth/About';
const  NavBar =(props)=> {
  const authContext = useContext(AuthContext);
  const {isAuthenticated , logout, user}= authContext;
  
  //logout here
  const onLogout= ()=> logout();
  
  
  const authLinks=(
    <Fragment>
      
<div className="form_register ui attached stackable secondary menu">
        <div className="ui container">
          
          <li className='ui item'>
               <Link to='/'> <i className="home icon" />  Acceuil </Link>
          </li>        
          <li className='ui item'>
               <Link to='/problems'><i className="grid layout icon" /> Problems</Link>
          </li>
          <li className='ui item'>
               <Link to='/qcm'><i className="heartbeat icon" /> QCM Covid19</Link>
          </li>


          <div className="ui large horizontal divided list">
        <div className="item">
          <img className="ui avatar image" src={avatar} />
          <div className="content">
            <span className="header">  {user &&  user.name[0].toUpperCase() +user.name.slice(1) }</span>
          </div>
        </div>
      </div>

        
         <div className="right item">
         <div className="ui simple dropdown item">
           ShowList
           <i className="dropdown icon" />
           <div className="menu">
           <Link className='item' to='/about'><i className=" edit icon" />Free-Corona</Link>
             <a className="item"><i className="settings icon" /> Account Setting</a>
             <a className="item ui icon button" data-content="not availble yet"><i className="globe icon" /> Choose Language</a>
             <a className="item" onClick={onLogout}><i className="power off icon" /> Logouts</a>
           </div>
         </div>
         </div>
       </div>
       </div> 
    </Fragment>
);

const nonAuthLinks=(
  <Fragment>

<div className="form_register ui attached stackable secondary menu">
        <div className="ui container">
          
           <li className='ui item'>
                <Link to='/'> <i className="home icon" />  Acceuil </Link>
           </li>        
           <li className='ui item'>
           <Link to='/problems'><i className="grid layout icon" /> Problems</Link>
           </li>
           <li className='ui item'>
           <Link to='/register'> <i className="corner add icon"></i> Register</Link>
           </li>
          <div className="ui simple dropdown item">
            ShowList
            <i className="dropdown icon" />
            <div className="menu">
            <Link className='item' to='/about'><i className=" edit icon" /> About Free-Corona</Link>

              <a className="item ui icon button" data-content="not availble yet"><i className="globe icon" /> Choose Language</a>
            </div>
          </div>
          <div className="right item">

          {/* login down here */}
          <Login props={props}/>
          {/* login up here */}

          </div>
        </div>
      </div>
  </Fragment>
)
    return (
      <Fragment>
        {isAuthenticated ? authLinks : nonAuthLinks }

      </Fragment>
      )

}

export default NavBar
