import React, { Fragment } from 'react'

function Login() {
    return (
        <Fragment>
        <div className="ui form">
        <div className="item two fields scalable">
          <div className="field">
         
            <input type="text" placeholder="First Name" />
          </div>
        
          <div className="field">
          
            <input type="text" placeholder="Last Name" />
          </div>
          
        </div>
      </div>
      <button class="ui right labeled icon button">
  <i class="right arrow icon"></i>
  GetIn
</button>
</Fragment>
    )
}

export default Login;
