import React, { Fragment,useState,useEffect } from 'react'
import { Container, Header,Rating ,Segment,Responsive} from 'semantic-ui-react'
import {  Image, Modal ,Icon, Statistic,Button} from 'semantic-ui-react';
import axios from 'axios'

 
import corona1 from './corona1.png';
import c1 from './c1.png';
import c2 from './c2.png';
import c3 from './c3.png';
import c4 from './c4.png';
import ChatDes from './ChatDes'

const News = () => {
 
const [news, setnews] = useState(null)

useEffect(() => {
  axios
  .get('http://newsapi.org/v2/everything?domains=wsj.com&apiKey=6a4cb3dc157745e2b451f3b3a03b87bb')
  .then(response => setnews(response.data.articles));
 // eslint-disable-next-line
}, []);

    
    return(
        <Fragment>
         <div>
          <h3 className='margin-top'>l'Actualité dans le monde</h3>
          {
            news!==null ?
         ( news.map(nouv => {
            return (
                String(nouv.title).length>=80  ?(
                <table className='ui celled striped table'>
                  <tr>
                  <td>
                   <strong>Titre du Article :</strong>  {nouv.title } 
                  </td >
                  </tr>
                  <tr>
                    
                      <td >{ nouv.content} 
                      <p className='article-date'><strong>publié à:</strong>{nouv.publishedAt.slice(0,nouv.publishedAt.length-10)}</p>
                      <p className='article-source'>vous pouvez lire plus <a href={nouv.url}>ici</a></p>

                      </td >
                  </tr>
                 
              </table>
                ) : null
            )
          }  )): 
          <Segment.Group className='margin-bottom'>
          <Responsive as={Segment} minWidth={768}>
              Désolés les ressources interrompues 
          </Responsive>
      </Segment.Group>

          }

        </div>
    <Container fluid>
      <Header as='h2'>informations CORONAVIRUS</Header>
      <p data-aos="fade-left"  >
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
        
        <p data-aos="fade-left">
        Le 27 mars 2020, le Premier ministre a annoncé le renouvellement du confinement pour deux semaines supplémentaires, soit jusqu’au mercredi 15 avril. Les mêmes règles que celles actuellement en vigueur continueront à s’appliquer. Cette période de confinement pourra être prolongée si la situation sanitaire l’exige.

        En application de l’état d’urgence sanitaire, les déplacements sont interdits sauf dans les cas suivants et uniquement à condition d'être munis d'une attestation pour :
    <ul>
    <li data-aos="fade-left">
    Déplacements entre le domicile et le lieu d’exercice de l’activité professionnelle,
     lorsqu’ils sont indispensables à l’exercice d’activités ne pouvant être organisées sous
      forme de télétravail ou déplacements professionnels ne pouvant être différés.

    </li>
    <li data-aos="fade-left">
        Déplacements pour effectuer des achats de fournitures nécessaires
         à l’activité professionnelle et des achats de première nécessité, 
         y compris les acquisitions à titre gratuit (distribution de denrées alimentaires…) 
         et les déplacements liés à la perception de prestations sociales et au retrait d’espèces,
          dans des établissements dont les activités demeurent autorisées.

    </li>
    <li data-aos="fade-left">
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
      <p data-aos="flip-down" >
      En hiver, les infections virales gâchent la vie des adultes et des enfants. 
      Des gestes simples de prévention permettent d’en réduire la transmission.
      </p>
      <ul>
          <li data-aos="flip-down">
            <Image wrapped size='medium' src={c1} />
            <Rating maxRating={5} defaultRating={4} clearable />
            <br/>
            Lavez-vous très régulièrement les mains
            
          </li>
          <li data-aos="flip-down">
            <Image wrapped size='medium' src={c2} /><Rating maxRating={5} defaultRating={5} clearable /><br/>
            Utilisez un mouchoir à usage unique et jetez-le
          </li>
          <li data-aos="flip-down">
            <Image wrapped size='medium' src={c3} /><Rating maxRating={5} defaultRating={3} clearable /><br/>
            Toussez ou éternuez dans votre coude ou dans un mouchoir
          </li>
          <li data-aos="flip-down">
            <Image wrapped size='medium' src={c4} /><Rating maxRating={5} defaultRating={4} clearable /><br/>
            Saluez sans se serrer la main, évitez les embrassades
          </li>
         
      </ul>
   
    
    </Container>
    <Button labelPosition='right' icon='right chevron' content='Load More' />

      <ChatDes/>
      </Fragment>

)}

export default News ;