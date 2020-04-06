import React, { useContext,useEffect,useState } from 'react';
import {Link} from 'react-router-dom';

import { Feed } from 'semantic-ui-react';
import {Scroll}  from 'react-scroll';
import axios from 'axios'

import {  Header } from 'semantic-ui-react'
import {   Modal ,Icon,Button} from 'semantic-ui-react';

import avatar2 from './layout/avatar2.jpg';
import News from './layout/News';
import AuthContext from '../context/auth/authContext';
import ProblemContext from '../context/problems/problemContext';

import courbe from './layout/courbe.jpg';
import AOS from 'aos';
import img2 from './layout/img2.png';
const Acceuil = () => {

  AOS.init();

  
  const authContext =useContext(AuthContext);
  const problemContext =useContext(ProblemContext);
  const {getProblems, problem} = problemContext;

  
  const pays = ['United States of America','Italy','Spain','Germany','Tunisia','Iran' ,'France'];
  const {loadUser  , isAuthenticated}= authContext;


  const [dataCovid, setDataCovid] = useState(null)
  useEffect( () => {

    axios
      .get('https://api.covid19api.com/summary')
      .then(response => setDataCovid(response.data.Countries));
    
    if (isAuthenticated)
    loadUser();
    
    getProblems();
    // eslint-disable-next-line
  }, [ ]);
  

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
        <Header data-aos="fade-right" size='medium'>Numéros d’urgence et d’écoute :SAMU 190 </Header>
     <Header data-aos="fade-right" size='medium'>Protection civile Tunis : 198</Header>
    <Header data-aos="fade-right" size='medium'>Agent de permanence du consulat : 58 440 232</Header>
    <Header data-aos="fade-right" size='medium'>SOS Médecins : 71 744 215</Header>
    <Header data-aos="fade-right" size='medium'>SOS Ambulances : 71 725 555 ou 71 599 900</Header>
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
        
        <div>
          <h2 className='margin-top'>Cas covid19 autour du monde </h2><h3>"Les pays critiques"</h3>
          {
            dataCovid!==null ?
         ( dataCovid.map(cases => {
            return (
               pays.includes(cases.Country)  ? (
                <table className='ui celled striped table'>
                  <tr >
                  <td colspan='3' className={pays.includes(cases.Country)
                  ?
                   'tunisia' : 'sceen768px'}>
                     <i className={`${cases.CountryCode.toLowerCase()} flag`}></i>{cases.Country } 
                  </td >

                  </tr>
                  <tr>
                  <td > Confirmés :{ cases.TotalConfirmed}</td >
                      <td>Morts :{cases.TotalDeaths}</td>
                      <td>Rétablis :{cases.TotalRecovered}</td>
                  </tr>
                  {/* <tr>
                  </tr>
                  <tr>
                  </tr> */}
              </table>
              ) : null
            )
          }  )): 
          <p>pas de ressources</p>

          }
          <Link to='./reste'>Reste du monde</Link>

        </div> 
        <h2>Le coronavirus en cinq questions</h2>
        <iframe 
          
          src="https://www.youtube.com/embed/cycl7tK5CdE" 
          frameBorder="0" 
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
          allowFullScreen>

        </iframe>
        <h2>Faut-il avoir peur du coronavirus ?</h2>
        <iframe 
         
          src="https://www.youtube.com/embed/woU8hq8O4OI" 
          frameBorder="0" 
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
          allowFullScreen>

        </iframe>
        <img className='courbe' src={courbe} alt="courbe"/>
          <h3>بلاغ عن رئاسة الحكومة بتاريخ 20 مارس 2020</h3>
          <p>على إثر اجتماع مجلس الأمن القومي المنعقد اليوم الجمعة 20 مارس 2020 انتظم مجلس وزاري مضيق بإشراف رئيس الحكومة إلياس الفخفاخ للتداول في التدابير العملية والإدارية لتنفيذ القرارات المعلن عنها من قبل رئيس الجمهورية. ولقد تقرر انطلاق العمل بالحجر الصحي العام ابتداء من يوم الأحد 22 مارس على الساعة السادسة صباحا ويتواصل إلى غاية 4 أفريل 2020.

ويقصد بالحجر الصحي ملازمة كل المواطنين والمواطنات والمقيمين بالبلاد التونسية لمنازلهم إلا لقضاء شؤونهم الأساسية وفي الحالات الضرورية على غرار التزود والعلاج.

ويستثنى من ذلك العاملون في القطاعات التي سيتم تحديدها سواء كان ذلك في القطاع العام او القطاع الخاص.

بالنسبة للقطاع العام يتواصل السير العادي للمرفق العام في المجالات الحيوية التالية: الغذاء، الصحة، الإدارة، القضاء، الطاقة، الأمن، الماء، النقل، الاتصالات، الاعلام، النظافة والأنشطة الصناعية الحيوية.

كما يتواصل أيضا النشاط المهني الضروري في القطاع الخاص في نفس المجالات المذكورة. وبغاية حماية الأفراد وخاصة الفئات الضعيفة والمؤسسات من تداعيات أزمة الكورونا، تعلن رئاسة الحكومة غدا السبت 21 مارس 2020 عن حزمة من الإجراءات الاقتصادية والاجتماعية الاستثنائية، وستقدم مزيد من الإيضاحات عن التدابير المتخذة.

كما لن تتوانى الحكومة في ردع المحتكرين والمستهترين بقوت المواطنين وبصحتهم وسلامتهم. واعتبارا للحاجة الملحة والأكيدة للتسريع بالحجر الصحي العام لتفادي انتشار العدوى من الفيروس، تٌسخر الدولة كل الإمكانيات المادية والبشرية لضمان التزود وتوفير كل مستلزمات الحياة الأساسية. تونس في 20 مارس 2020où
          </p>
          <img className='map' src={img2} alt="docteur"/>
          <ul>
            <li><span className="colorr color1">	&nbsp;	&nbsp;	&nbsp;</span>1~9 cas confirmés</li>
            <li><span className="colorr color2">&nbsp;	&nbsp;	&nbsp;</span>10~99 cas confirmés</li>
            <li><span className="colorr color3">&nbsp;	&nbsp;	&nbsp;</span>100~499 cas confirmés</li>
            <li><span className="colorr color4">&nbsp;	&nbsp;	&nbsp;</span>500~999 cas confirmés</li>
            <li><span className="colorr color5">&nbsp;	&nbsp;	&nbsp;</span>1000~9999 cas confirmés</li>
          </ul>
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
                <div>Pas de ressources</div>
              )
           
            }
   
            </div>
            <News/>
        </div>


        </div>
    </div>


    
    



)};

export default Acceuil