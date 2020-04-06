import React, { useContext,useEffect,useState } from 'react';
import {Link} from 'react-router-dom';

import { Feed } from 'semantic-ui-react';
import axios from 'axios'

import {  Header } from 'semantic-ui-react'
import {   Modal ,Icon,Button} from 'semantic-ui-react';



const  Reste =()=> {

    const [dataCovid, setDataCovid] = useState(null)
    useEffect( () => {
  
      axios
        .get('https://api.covid19api.com/summary')
        .then(response => setDataCovid(response.data.Countries));
      
  
      // eslint-disable-next-line
    }, [ ]);
    
    return (
        <div>
          <h2 className='margin-top'>Cas covid19 autour du monde</h2>
          {
            dataCovid!==null ?
         ( dataCovid.map(cases => {
            return (
                <table className='ui celled striped table'>
                  <tr>
                  <td colspan='3' className='tunisia'>
                     <i className={`${cases.CountryCode.toLowerCase()} flag`}></i>{cases.Country } 
                  </td >
                  </tr>
                  <tr>
                      <td > Confirmés :{ cases.TotalConfirmed}</td >
                      <td>Morts :{cases.TotalDeaths}</td>
                      <td>Rétablis :{cases.TotalRecovered}</td>
                  </tr>
               
              </table>
              
              
            )
          }  )): 
          <p>pas de ressources</p>

          }

        </div> 
    )
}

export default Reste
