import React, { useContext,useEffect } from 'react';
import { Header } from 'semantic-ui-react';
import News from './layout/News';
import AuthContext from '../context/auth/authContext';
import courbe from './layout/courbe.jpg';
import AOS from 'aos';
const Acceuil = () => {

  AOS.init();

  
  const authContext =useContext(AuthContext);
  const {loadUser }= authContext;
  useEffect(() => {
    loadUser();
    // eslint-disable-next-line
  }, [])

  const showHide =()=>{
    
  }

  return (

  <div>
    {/* <NavBar/> */}
    <div className="ui grid stackable">
    <div className="sixteen wide column">
     <h2 className='free_corona' data-aos="flip-down" data-aos-duration="1200">Free-Corona</h2>
    
   

    </div>
        <div className="nine wide column">
        <Header data-aos="fade-right"
     data-aos-anchor="#example-anchor"
     data-aos-offset="500"
     data-aos-duration="500" size='large'>Numéros d’urgence et d’écoute :190 </Header>
     <Header size='large'>J’habite à l’étranger, qui appeler ? </Header> 
        <p data-aos="fade-right"
     data-aos-anchor="#example-anchor"
     data-aos-offset="500"
     data-aos-duration="700" >
        L’Ambassade et consulat de votre lieu de résidence est à votre disposition
         pour répondre à l’ensemble de vos questions. Par ailleurs, le ministère met à jour régulièrement
        </p><a href="#"> son site de conseils aux voyageurs.</a>
        <Header size='large'>Numéros utiles </Header>
        <p data-aos="fade-right"
     data-aos-anchor="#example-anchor"
     data-aos-offset="500"
     data-aos-duration="800" >Un numéro vert répond à vos questions sur le Coronavirus COVID-19 en permanence, 24h/24 et 7j/7 : 0 800 130 000.</p>
        
        
        <h2>Le coronavirus en cinq questions</h2>
        <iframe 
          
          src="https://www.youtube.com/embed/cycl7tK5CdE" 
          frameborder="0" 
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
          allowFullScreen>

        </iframe>
        <h2>Faut-il avoir peur du coronavirus ?</h2>
        <iframe 
         
          src="https://www.youtube.com/embed/woU8hq8O4OI" 
          frameborder="0" 
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
          allowFullScreen>

        </iframe>
        <img className='courbe' src={courbe} alt="courbe"/>
        </div>
        <div className="seven wide column">
          <News/>
       
        </div>
    </div>
  

  </div>

    
    



)};

export default Acceuil