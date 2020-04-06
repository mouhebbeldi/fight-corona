import React, { useContext,useEffect } from 'react';
import { Feed } from 'semantic-ui-react';
import {Scroll}  from 'react-scroll';


import { Container, Header,Rating } from 'semantic-ui-react'
import {  Image, Modal ,Icon, Statistic,Button} from 'semantic-ui-react';

import avatar2 from './layout/avatar2.jpg';
import News from './layout/News';
import AuthContext from '../context/auth/authContext';
import ProblemContext from '../context/problems/problemContext';

import courbe from './layout/courbe.jpg';
import AOS from 'aos';
const Acceuil = () => {

  AOS.init();

  
  const authContext =useContext(AuthContext);
  const problemContext =useContext(ProblemContext);
  const {getProblems, problem} = problemContext;



  const {loadUser , user , isAuthenticated}= authContext;

  useEffect(() => {
    if (isAuthenticated)
      loadUser();

    getProblems();
    // eslint-disable-next-line
  }, [ ]);

  

  // let scroll     = Scroll.animateScroll;

 const scrollToTop = () =>{
  Scroll.animateScroll.scrollToTop();
  }

  return (

  <div>
    <div className="ui grid stackable">
<Icon size='huge' onClick={scrollToTop} disabled name='arrow up' className='arrow-up'/>
    <div className="sixteen wide column">
     <h2 className='free_corona' >Free-Corona</h2>
    




    </div>
        <div className="nine wide column">
        <Header data-aos="fade-right"size='meduim'>Numéros d’urgence et d’écoute :SAMU 190 </Header>
     <Header data-aos="fade-right" size='meduim'>Protection civile Tunis : 198</Header>
    <Header data-aos="fade-right" size='meduim'>Agent de permanence du consulat : 58 440 232</Header>
    <Header data-aos="fade-right" size='meduim'>SOS Médecins : 71 744 215</Header>
    <Header data-aos="fade-right" size='meduim'>SOS Ambulances : 71 725 555 ou 71 599 900</Header>
    <Modal trigger={<Button>Find More</Button>} centered={false}>
    <Modal.Header>Numéros d’urgence</Modal.Header>
    <Modal.Content image>
      <Modal.Description>
        
        <p data-aos="fade-up">
              Urgence Le Secours : 71 351 500
          <ul>
            <strong>
            <li data-aos="zoom-in-down">Clinique El Manar : 71 885 000 ; Fax : 71 884 100 </li>
            <li data-aos="zoom-in-down">Polyclinique La Marsa : 71 749 000 ; Fax : 71 728 233</li>
            <li data-aos="zoom-in-down"> Clinique Saint Augustin : 71 783 033 ; Fax : 71 792 708</li>
            <li data-aos="zoom-in-down"> Ambulances médicalisées : 71 780 000 ou 71 781 000</li>
            <li data-aos="zoom-in-down">Centre Anti-poisons : 71 335 500</li>
            <li data-aos="zoom-in-down">Centre Anti-poisons : 71 335 500</li>
            </strong><br/>
            <p>Dernière modification : 18/04/2018</p>
            Source <a href="https://tunis.consulfrance.org/En-cas-d-urgence">Clique ici</a>
          </ul>
        </p>
       
      </Modal.Description>
    </Modal.Content>
  </Modal>
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
          

        <div className='problems'>
        <Header
          as='h2'
          content='Voir les problèmes autour de vous'
          subheader='Un endroit pour voir toutes les violations légales en Tunisie '
        />
            {
            problem!== null  ?  
            (
              problem.map( (p) =>(
                <Feed data-aos="flip-down">
                  <Feed.Event>
                    
                    <Feed.Label>
                      <img src={avatar2} />
                    </Feed.Label>
                    <Feed.Content>
                    <Feed.Summary>
          <a>{p.place} </a> 
        </Feed.Summary> 
                      {p.message}
                    </Feed.Content>
                    <Feed.Date>{ p.date}</Feed.Date>
                  </Feed.Event>
                </Feed>
              ))) : (
                <div>NO Problems For Today</div>
              )
           
            }
   
            </div>
            <News/>
        </div>


        </div>
    </div>


    
    



)};

export default Acceuil