import React,{useState,useContext,useEffect} from 'react'
import AlertContext from '../../context/alert/AlertContext';
import AuthContext from '../../context/auth/authContext';
import NavBar from '../layout/NavBar';
const  Register = props =>{
    
    const alertContext = useContext(AlertContext);
    const authContext = useContext(AuthContext);

    const {register, error, clearErrors ,isAuthenticated}= authContext;
    const {setAlert} = alertContext;
    const [user, setUser] = useState({
        name:'',
        localisation:'',
        password:'',
        cin:''
    });


    useEffect(() => {
        if(error==='user already exists') {
            setAlert(error);
            clearErrors();
        }
        if(isAuthenticated){
            props.history.push('/');
        }
    }, [error,isAuthenticated,props.history]);


    const {name ,localisation,cin , password}= user;
    const onChange = e=> setUser({...user , [e.target.name] : e.target.value});
    const onSubmit = e=>{
        e.preventDefault();

        if( cin.length!==8 )
            setAlert('cin not valid');
        else if(password.length< 3 ) 
            setAlert('password invalid');

        else {
            register({
                name,
                localisation,
                password,
                cin
            });
        }
    }
    return (
        <div className='container'>
            <NavBar/>
        <h1>Register </h1>
        <form className="ui form" onSubmit={onSubmit}>
            <div className="field">
                <label>Name</label>
                <input 
                    // required
                    type="text" 
                    name="name" 
                    placeholder="Name" 
                    onChange={onChange}
                />
                    
            </div>
            <div className="field">
                <label>Localisation</label>
                <input 
                    // required
                    type="text" 
                    name="localisation" 
                    placeholder="Localisation" 
                    onChange={onChange}
                />
            </div>
            <div className="field">
                <label>Mot de Passe</label>
                <input 
                    // required
                    type="password" 
                    name="password" 
                    placeholder="Mot de Passe" 
                    onChange={onChange}
                />
            </div>
            <div className="field">
                <label>Carte d'Identité</label>
                <input 
                    // required
                    type="text" 
                    name="cin" 
                    placeholder="Carte d'Identité" 
                    onChange={onChange}
                />
            </div>
            <input className="ui button" value='Register' type="submit"/>
            <input className="ui button red" value='Clear' type="reset"/>
        </form>
        </div>
    )
}

export default Register
