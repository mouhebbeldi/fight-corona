import React, { Fragment ,useState} from 'react'

function Login() {
  const [user, setUser] = useState({

    cin:'',
    password:''
});

const {cin , password}= user;
const onChange = e=> setUser({...user , [e.target.name] : e.target.value});
const onSubmit = e=>{
    e.preventDefault();
    console.log('Login Submit');
}
    return (
        <form onSubmit={onSubmit}>
        <div className="ui form" >
        <div className="inline fields item two fields scalable">
          <div className="four wide field">
            <input         
              type="text" 
              name="cin" 
              placeholder="Carte d'Identité" 
              onChange={onChange}
            />
          </div>
          <div className="four  wide field">
            <input
              type="password" 
              name="password" 
              placeholder="Mot de Passe" 
              onChange={onChange}
            />
          </div>
        
          
      <input className="ui button" value='Register' type="submit"/>
        </div>
      </div>
</form>
    )
}

export default Login;
