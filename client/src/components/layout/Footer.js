import React from 'react';
import { Icon, Image, Statistic } from 'semantic-ui-react'
import { Divider, Header, Segment } from 'semantic-ui-react'
import me from './me.jpg';
const Footer = ()=> {
    return (
        
        <footer className="footer-area">
              <div className="ui grid stackable">
              <div className='sixteen wide column'> <strong>PROJECT OWNER : </strong> Beldi Mouheb 
                <p>Je suis un étudiant à l'ISI "institut superieur d'informatique".
                 Mais je me suis découvert dans le développement web et la résolution des problèmes.</p>
                
              </div>

                <div className="eight wide column center2">
                  <img src={me} alt="mouheb" className='me'/>
                  
                </div>
                <div className="eight wide column">
                   <h3>Contact Details</h3> 
                   <p>Address: Oued ellil,Manouba,Tunisia,</p>
                   <p>Email: mouhab.beldi@etudiant-isi.utm.tn</p>
                   <p>LinkedIn: @mouheb-beldi-0aa114197</p>
                </div>
                <div className='eight wide column center-normal'>
                <strong>En collaboration avec :</strong>
                    <ul>
                      <li>Belhassen Essid</li>
                      <li>Salma nabli</li>
                    </ul>
                </div>
                <div className='center2 sixteen wide column'>
                  
                  Copyright 2020</div>

              </div>

        </footer>
       
    )
}

export default Footer;
