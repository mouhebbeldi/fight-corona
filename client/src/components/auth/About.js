import React from 'react';
import { Message ,Responsive, Segment,Icon,Rating} from 'semantic-ui-react';


const About=()=> {
    const items = [
        "les tests du suivi médical se base sur l\’intelligence artificielle en effet on ne se limite pas seulement aux questions statiquement proposéeslors du lancement des tests mais on s intéressent à développer un processusqui exploite les données des utilisateurs les réponses aux questions des QCMet l’état médicale confirmé pour s auto-rectifier c.-à-d. : les questions et plusprécisément leur influences sur la classification des utilisateurs (xx% malade,cas suspecté ou bien sains sont dynamiquement Mise à jour, et cela permetd'éviter en avantage les erreurs de dépistage et de suivi. Ceci paraît efficacelorsqu’on découvre qu’un système d'intelligence artificielle a détectél’apparition du covid-19 10 jours avant que les autorités chinoises ne l’aitdéclaré"
      ];
      const data =["Elle permettra au ministère de limiter la pandémie en identifiant tous lespatients et leurs localisations ainsi que leurs contactes.",
                    "Elle influe sur les règlements intérieur et réduit le nombre de déplacementsdes équipes médicales(SAMU).",
                    "Afin de sensibiliser toutes les citoyens qui ont accès à ce plateforme onon trouvera dans la page d'accueil plusieurs informations utiles (provenant dugouvernement) comme :"
        ];
    return (
        <div>
            <h2 className='margin-top'>Cahier de charges "Free-Corona" </h2>
            <h3> <Icon disabled name='pencil alternate' /> 1. Introduction :</h3>
            <p >Objectif du document :
                Cahier des charges relié au projet (site web responsive) du Suivi Médical
                et sensibilisation des citoyens .
            </p>
          <p>
                Définitions, acronymes et abréviations:

          </p>
                <p >

                - Site web responsive
                </p><p>

                - Suivi médical et sensibilisation.
                </p><p>

                - Rendre l’interactions entre la ministre de la santé et le patient plus
                efficace.
                </p><p>

                - Limiter la pandémie.
                </p><p>
                - Réduire le nombre de déplacements des équipes médicales ainsi que
                l'encombrement sur le stuff médicale.

                </p>
            


            <h3><Icon disabled name='pencil alternate' />2. Description spécifique:</h3>
            <p>Plateforme de suivi médical des citoyens (quelque soit l'état : malade ou
suspecte), l’idée est de simplifier toutes les interactions entre ministère de
la santé et adhèrent .
            </p>
           

           <h3><Icon disabled name='pencil alternate' />3. La présentation du projet :</h3>
           <p>
             Le virus COVID-19 est entrain de se propager très rapidement dans
            le monde et dans notre pays de façon qu'on ne peut plus le contrôler .
            En effet, la ligne téléphonique “190” ne supportera plus le grand nombre
            d’appels d'où plusieurs cas vont être ignorés et pour cela on doit inventer
            une plateforme qui organisera toutes les interactions entre le ministère de la
            santé et le patient y compris la liste des personnes qui ont eu un contact
            avec ce dernier pour qu’elles soient interrogées et testées.
            De plus, Un patient peut s'authentifier "" envoyez une demande d'accès à
            un administrateur qu'il la traite et peut accepter ou refuser : le refus est
            dédié pour les malwares et les informations personnelles redondantes " .
            En cas de l’acceptation, l'utilisateur doit répondre à un certain nombre de
            questions QCM/QROC quotidiennement pendant 3 ou 4 jours afin de
            examiner le cas plus rapidement "  après la collecte nécessaires des
            informations :l’avancement des symptômes spécifiques du corona "
            Suite à ses réponses, on peut connaître s'il est atteint ou non "un
            résultat inspiré par l’ IA". Si les résultats sont positifs, on contactera
            directement 190 si non on lui donne des conseils à suivre pour se protéger
            de cette maladie.
           </p>
            <h3><Icon disabled name='pencil alternate' />4. Problématiques:</h3>
            <h5>I. Un problème majeur est le mauvaise dépistage et la détection des
                patients et c’est dû à deux raisons principales :</h5>
            <p>
                -Mauvaise organisation et donc exploitation des informations reçues:
                exemple:le PDG du parti "al ittihad al chaabi al joumhouri" a été invité
                par le ministère de santé d'envoyer un email contenant les noms des
                personnes qui ont été en contacte avec elle, après qu'elle était
                diagnostiquée comme étant malade mais la liste n'a jamais été testée ou
                contactée et donc Lotfi Mraihi et ses collègues n'ont pas été ajouté à la
                listes des malades et même pas à la liste des mises en quarantaine.
                -Mauvaise phase de diagnostic à distance : processus inefficace via le
                190 ainsi que les consultations téléphoniques sont indignes de confiance.
                Citons l’exemple de “Lotfi Mraihi" 
                <a href="https://www.mosaiquefm.net/ar / - 70810 / ا لمرايحي - ي روي ت ونس - أ خبار - و طنية / 3
                ”ت فاصيل - إ صابته - ب كورونا">source</a>
            </p>
            <h5>II. La mauvaise surveillance des patients:</h5>
            <p>-L'infirmière se réfère à des protocoles de soins infirmiers actualisés,
                validés par des experts et approuvés par la Direction du service de soins
                infirmiers de l'établissement. Donc il y a des difficultés et des risques.
            </p>
            <h3><Icon disabled name='pencil alternate' />5. Objectifs:</h3>
            <p>
                A l'égard des problèmes citées ci-dessus on propose ce projet qui vise à
                mieux organiser les interventions médicales afin qu’ils soient plus efficaces
                et moin couteux et qui sert à éviter les imperfections (logistiques et
                médicales) commises par les intervenants et à développer un outils plus
                performant pour assurer la depistage des toutes les malades (on utilisera les
                techniques convenable pour s’assurer que tout le monde soit tester et ne
                soit pas négliger et au même temps pour favoriser les interventions en cas
                d’urgences).
                -Cette plateforme permet la ministre de contrôler le développement de l'état
                pathologique des adhérents qui sont en quarantaine chaque jours avec des
                questions structurés ( réalisés par des algorithmes d'intelligence artificielles )
                afin de dégager la situation du maladie de ce dernier;
            </p>
            <Message>
                <Message.Header>Note:</Message.Header>
                <Message.List items={items} />
            </Message>
            <Message>
                <Message.Header></Message.Header>
                <Message.List items={data} />
            </Message>
            
            <Segment.Group>
                <Responsive as={Segment} minWidth={768}>
                    Qu’est-ce que le Coronavirus <code>COVID-19</code>  ?
                </Responsive>
                <Responsive as={Segment} minWidth={992}>
                    Point de situation de cette épidémie en tunisie: nombre demalades,décédés,rétablis...
                </Responsive>
                <Responsive as={Segment} minWidth={992}>
                    Consignes sanitaires               
                </Responsive>
                <Responsive as={Segment} minWidth={992}>
                    Conseils aux voyageurs                
                </Responsive>
                <Responsive as={Segment} minWidth={992}>
                    vie quotidienne/Les établissements fermés                
                </Responsive>
                <Responsive as={Segment} minWidth={992}>
                    Numéros utiles                
                </Responsive>
                <Responsive as={Segment} minWidth={992}>
                    les mesures prises par le Gouvernement               
                </Responsive>
                <Responsive as={Segment} minWidth={992}>
                    Toutes les ressources nécessaires...              
                </Responsive>
            </Segment.Group>
            <h3><Icon disabled name='pencil alternate' />6. Périmètre :</h3>
            <p>
                 Cette plateforme est dédiée à tous les citoyens généralement et aux adhérents
                mis en quarantaines en particulier .
                - Elle est valable tant que la pandémie est présente .
                - L’application est utilisable dans d'autres cas des maladies quels que soit une
                pandémie ou non.
            </p>
            <h3><Icon disabled name='pencil alternate' />7. Fonctionnement :</h3>
            <table className="ui celled table">
                <thead className>
                <tr className>
                    <th className>Utilisateur</th>
                    <th className>Admin</th>
                    <th className>Ministère de santé</th>
                </tr>
                </thead>
                <tbody className>
                <tr className>
                    <td className>S’authentifier avec un compte facebook ou bien gmail.</td>
                    <td className>Contrôlant l’ajout, la
                        suppression, la modification
                        et la mise-à-jour de la base
                        de donnée des personnes
                        cibles.</td>
                    <td className>Recevoir les etats des
adhérents chaque jours du
quarantine .</td>
                </tr>
                <tr className="warning">
                    <td className>Entrer les coordonnées personnelles.</td>
                    <td className>
                    Protégeant les donnée personnels des citoyens.
                    </td>
                    <td className>Intervient dans le processus si
nécessaire.</td>
                </tr>
                <tr className>
                    <td className>Passer un test de suivi
                        médical (QCM)
                        quotidiennement lors de la
                        quarantaine.</td>
                    <td className>Maintenant le bon fonctionnement del’application.</td>
                    <td className="warning">Demande de mise en
                        quarantaine du patient et
                        convoquer le samu si
                        nécessaire (type A ou bien B).
                    </td>
                </tr>
                <tr className>
                    <td className>Surveiller la situation
                        sanitaire dans le pays et
                        sa évolution.</td>
                </tr>
                </tbody>
            </table>

            <h3><Icon disabled name='pencil alternate' />8. Interfaces avec les systèmes externes:</h3>
                    <h5 className='margin-left'>mongoDb</h5>
                    <h5 className='margin-left'>Google API</h5>
                    <h5 className='margin-left'>Facebook API</h5>

            <h3><Icon disabled name='pencil alternate' />9. Outils de travail :</h3>
                <h5 className='margin-left'>Outil versionning : <strong>Github</strong>.</h5>
                <h5 className='margin-left'>Moyen de communication : <strong>Telegram</strong>.</h5>
                <h5 className='margin-left'>Moyen de contrôle d’avancement : .<strong>Trello</strong>.</h5>
            <Segment.Group>
                <Responsive as={Segment} minWidth={768}>
                    Note:le recours à des consultations des <code>experts</code>  en domaine des maladies
                    thoraciques et en épidémiologie est indispensable.   ?
                </Responsive>
            </Segment.Group>

            <h3><Icon disabled name='pencil alternate' />10. Technologies utiliser :</h3>
                <h5 className='margin-left'>Front end :  <strong>Reactjs</strong> .</h5>
                <h5 className='margin-left'>Back end :  <strong>Node js</strong> .</h5>
                <h5 className='margin-left'>Base de donnée : <strong>MongoDb</strong> "NoSQL Database" </h5>
                <h5 className='margin-left'>AI : <strong>Python</strong>"tensorflow" </h5>
        
        <h2>Merci d'avoir lu  <Icon disabled name='smile outline' /> </h2>
        <h2>évaluation: <Rating maxRating={5} defaultRating={0} clearable /></h2>
        </div>

    )
}

export default About
