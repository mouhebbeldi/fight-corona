import React,{Fragment,useState,useContext,useEffect} from 'react';
import AlertContext from '../context/alert/AlertContext';
import ProblemContext from '../context/problems/problemContext';


const Problems = () =>{
  const alertContext = useContext(AlertContext);
  const problemContext = useContext(ProblemContext);

  const {getProblems, setProblems, error ,loading}= problemContext;
  const {setAlert} = alertContext;


const [problem, setProblem] = useState({
  cin  : '',
  message  : '',
  place  : '',
  phone  : ''
});

const {cin , message , place , phone }= problem;

const onChange = e=> setProblem({...problem , [e.target.name] : e.target.value});

const onSubmit = e=>{
  e.preventDefault();
console.log('problem sent');
if(cin.length !== 8 ) setAlert('length must be 8');
else if(place==='') setAlert('you have to mention the localisation');
else {
  setProblems({
    cin,
    message,
    place,
    phone
  });
  setProblem({ cin  : '',message  : '',place  : '', phone  : '' });
}
}

  return (
  <div>
      <h1>Signaler une violation légale</h1>
        <form className="ui form" onSubmit={onSubmit}>
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
            <div className="field">
                <label>Message</label>
                <input 
                    // required
                    type="text" 
                    name="message" 
                    placeholder="Message" 
                    onChange={onChange}
                />
                    
            </div>
            <div className="field">
                <label>Localisation</label>
                <input 
                    // required
                    type="text" 
                    name="place" 
                    placeholder="Localisation" 
                    onChange={onChange}
                />
            </div>
            <div className="field">
                <label>Numéro du Phone</label>
                <input 
                    // required
                    type="text" 
                    name="phone" 
                    placeholder="Numéro du Phone" 
                    onChange={onChange}
                />
            </div>
          
            <input className="ui button" value='Register' type="submit"/>
            <input className="ui button red" value='Clear' type="reset"/>
        </form>

  
    </div>

)}; 



export default Problems