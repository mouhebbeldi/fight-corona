/* eslint-disable max-len */

import React, { Fragment } from 'react'
import { Container, Header,Rating } from 'semantic-ui-react'
import {  Image, Modal } from 'semantic-ui-react'
import corona1 from './corona1.png';
import c1 from './c1.png';
import c2 from './c2.png';
import c3 from './c3.png';
import c4 from './c4.png';
import c5 from './c5.png';
import ChatDes from './ChatDes'
import AOS from 'aos';
import { Button, Icon } from 'semantic-ui-react'

const News = () => {
    
    AOS.init();
    return(
        <Fragment>
    <Container fluid>
      <Header as='h2'>informations CORONAVIRUS</Header>
      <p >
      Le 27 mars 2020, le Premier ministre a annoncé le renouvellement du confinement 
      pour deux semaines supplémentaires, soit jusqu’au mercredi 15 avril.
       Les mêmes règles que celles actuellement en vigueur continueront à s’appliquer. 
      Cette période de confinement pourra être prolongée si la situation sanitaire l’exige...
      </p>
      <Modal trigger={<Button>Read More</Button>} centered={false}>
    <Modal.Header>informations CORONAVIRUS</Modal.Header>
    <Modal.Content image>
      <Image wrapped size='medium' src={corona1} />
      <Modal.Description>
        
        <p>
        Le 27 mars 2020, le Premier ministre a annoncé le renouvellement du confinement pour deux semaines supplémentaires, soit jusqu’au mercredi 15 avril. Les mêmes règles que celles actuellement en vigueur continueront à s’appliquer. Cette période de confinement pourra être prolongée si la situation sanitaire l’exige.

        En application de l’état d’urgence sanitaire, les déplacements sont interdits sauf dans les cas suivants et uniquement à condition d'être munis d'une attestation pour :
    <ul>
    <li>
    Déplacements entre le domicile et le lieu d’exercice de l’activité professionnelle,
     lorsqu’ils sont indispensables à l’exercice d’activités ne pouvant être organisées sous
      forme de télétravail ou déplacements professionnels ne pouvant être différés.

    </li>
    <li>
        Déplacements pour effectuer des achats de fournitures nécessaires
         à l’activité professionnelle et des achats de première nécessité, 
         y compris les acquisitions à titre gratuit (distribution de denrées alimentaires…) 
         et les déplacements liés à la perception de prestations sociales et au retrait d’espèces,
          dans des établissements dont les activités demeurent autorisées.

    </li>
    <li>
    Consultations et soins ne pouvant être assurés à distance et ne pouvant être différés 
     ; soin des patients atteints d'une affection de longue durée.
    </li>
</ul>
        </p>
       
      </Modal.Description>
    </Modal.Content>
  </Modal>
    </Container>
    <Container className='side_container' fluid>
      <Header as='h2'>Les gestes barrières à adopter</Header>
      <p>
      En hiver, les infections virales gâchent la vie des adultes et des enfants. 
      Des gestes simples de prévention permettent d’en réduire la transmission.
      </p>
      <ul>
          <li>
            <Image wrapped size='medium' src={c1} />
            <Rating maxRating={5} defaultRating={4} clearable />
            <br/>
            Lavez-vous très régulièrement les mains
            
          </li>
          <li>
            <Image wrapped size='medium' src={c2} /><Rating maxRating={5} defaultRating={5} clearable /><br/>
            Utilisez un mouchoir à usage unique et jetez-le
          </li>
          <li>
            <Image wrapped size='medium' src={c3} /><Rating maxRating={5} defaultRating={3} clearable /><br/>
            Toussez ou éternuez dans votre coude ou dans un mouchoir
          </li>
          <li>
            <Image wrapped size='medium' src={c4} /><Rating maxRating={5} defaultRating={4} clearable /><br/>
            Saluez sans se serrer la main, évitez les embrassades
          </li>
          <li>
            <Image wrapped size='medium' src={c5} /><Rating maxRating={5} defaultRating={2} clearable /><br/>
            Pour tenir la maladie à distance, restez à plus d’un mètre de distance les uns des autres
           
          </li>
      </ul>
   
    
    </Container>
    <Button className='center' animated='vertical'>
      <Button.Content hidden>Shop</Button.Content>
      <Button.Content visible>
        <Icon name='shop' />
      </Button.Content>
    </Button>
      <ChatDes/>
      </Fragment>

)}

export default News ;