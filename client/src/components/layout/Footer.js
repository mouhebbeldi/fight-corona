import React from 'react';
import { Icon, Image, Statistic } from 'semantic-ui-react'
import { Divider, Header, Segment } from 'semantic-ui-react'
import freeways from './freeways.png';
const Footer = ()=> {
    return (
        
        <footer className="footer-area">
              <div className="ui grid stackable">
              <div className='sixteen wide column'> <strong>PROJECT OWNERS : </strong> Beldi Mouheb ,Belhassen Essid,Salma nabli
                <p>
                  Etudiants de l'ISI "institut superieur d'informatique".
                 En collaboration avec FreeWays HLP departement
                 </p>
               
              </div>

                <div className="eight wide column center2">
                  <img src={freeways} alt="mouheb" className='me'/>
                  
                </div>
                <div className="eight wide column">
                   <h3>Contact Details</h3> 
                   <p><Icon disabled name='address card outline' />Address: Ariana </p>
                   <p>Emails: <br/><Icon disabled name='mail' /> mouhab.beldi@etudiant-isi.utm.tn <br/>
                   <Icon disabled name='mail' /> Nablisalma000@gmail.com <br/>
                   <Icon disabled name='mail' /> belhassen.essid@etudiant-isi.utm.tn</p>
                </div>
              
                <div className='center2 sixteen wide column'>
                  
                  Copyright 2020</div>

              </div>

        </footer>
       
    )
}

export default Footer;
