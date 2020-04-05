import React,{Fragment,useState,useContext,useEffect} from 'react';
import AlertContext from '../context/alert/AlertContext';
import ProblemContext from '../context/problems/problemContext';
import { Item } from 'semantic-ui-react';
import cor1 from './layout/cor1.jpg';
import cor2 from './layout/cor2.jpg';

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
const items = [
  {
    childKey: 0,
    image: cor1,
    header: 'La maladie à coronavirus 2019',
    description: 'La maladie à coronavirus 2019 (COVID-19) est une maladie infectieuse provoquée par un nouveau virus qui n\'avait encore jamais été identifié chez l\'être humain.',
    meta: ''
  },
  {
    childKey: 1,
    image: cor2,
    header: 'COMMENT LA MALADIE SE PROPAGE',
    description: 'Le nouveau coronavirus 2019 se propage essentiellement par contact avec une personne infectée, lorsqu\'elle tousse ou éternue, ou par l\'intermédiaire des gouttelettes de salive ou de sécrétions nasales.',
    meta: ''
 
  },
]
  return (
  <div>
      
      <h1 className='center'>Signaler une violation légale</h1>
      <Item.Group items={items} />
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
          
            <input className="ui button" value='Send Prob' type="submit"/>
            <input className="ui button red" value='Clear' type="reset"/>
        </form>

  
    </div>

)}; 



export default Problems