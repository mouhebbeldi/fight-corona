import React,{Fragment,useState,useContext,useEffect} from 'react'
import AlertContext from '../../context/alert/AlertContext';
import AuthContext from '../../context/auth/authContext';

const  Login = props =>{

  const alertContext = useContext(AlertContext);
  const authContext = useContext(AuthContext);

  const {login, error, clearErrors ,isAuthenticated}= authContext;
  const {setAlert} = alertContext;
  const [user, setUser] = useState({
    cin:'',
    password:''
  });

useEffect(() => {
  if(error==='user not exists' || error==='invalid password' ) {
    setAlert(error);
    clearErrors();
  }
}, [error,isAuthenticated , props.history]);


const {cin , password}= user;

const onChange = e=> setUser({...user , [e.target.name] : e.target.value});


const onSubmit = e=>{
    e.preventDefault();
    if(cin.length<8 || password==='') 
      setAlert('please fill all fields');
    else 
    login({
      cin,
      password
    })
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
      <input className="ui pink button" value='Login' type="submit"/>
        </div>
      </div>
</form>     
)};

export default Login;
