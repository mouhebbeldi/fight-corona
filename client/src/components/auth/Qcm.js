import React,{useState,useContext,useEffect} from 'react'
import { Icon, Image, Statistic ,Form} from 'semantic-ui-react'
import { Button, Confirm } from 'semantic-ui-react'

import { Message } from 'semantic-ui-react'


const  Register = props =>{
    
    

    const [qcm, setQcm] = useState({
        name:'',
        localisation:'',
        password:'',
        cin:''
    });



    const onChange = e=> setQcm({...qcm , [e.target.name] : e.target.value});
    const onSubmit = e=>{
        console.log("done");
    }
   







    const [res , setRes] = useState( false);

    const   show = () => setRes(true );
   const handleConfirm = () => setRes(false );

    return (
        <div className='register   '>
            <Message className=''>
                <Message.Header >    
                    <h4 >نضع بين أيديكم أعزاءنا، تطبيقنا الأولي يتيح لك الحصول على "تقييم أولي" لاحتمالية أن تكون معرضا للإصابة بفيروس
                    كورونا المستجد.</h4>
                    <p>ويقدم الفحص الذي يأتي في إطار المساهمة في مكافحة انتشار هذا الوباء
                        مجموعة شاملة من الأسئلة، تساعد في تشخيص إصابتك بفيروس كورونا "أوليا" ويعطيك دليلا صحيا لما يجب عليك القيام به
                    </p>
                    <p>
                    اعتمد تطبيق الفحص على عوامل وضوابط وضعتها هيئة الصحة العالمية،
                        وإجابتك على الأسئلة المتعلقة بعوارض صحتك وصحة الدائرة القريبة منك إضافة لاحتمالية عودتك من السفر
                    </p>
                    <p> نستطيع تقييم الحالة وتقديم النصيحة الطبية وما يترتب على ذلك تجاه أي مؤشرات تدل على الإصابة بكوفيد-19 والتي يمكن
                        .أن تظهر حتى 14 يوما بعد الإصابة بالفيروس</p>
                </Message.Header>
               
        </Message>
        <h1 className='center'>QCM du contrôle covid 19 </h1>
        <form className="ui form " >

            <div className="field">
                <label><Icon disabled name='question circle outline' />
Quelle est votre situation de vie actuelle</label>
                <Form.Group inline>

                <input 
                    type="radio" 
                    name="one" 
                    value="option1"
                    checked
                    placeholder="Name" 
                    onChange={onChange}
                />Je vis seul
                <br/><input 
                    type="radio" 
                    name="one" 
                    value="option2"
                    placeholder="Name" 
                    onChange={onChange}
                />Je vis avec la famille dans un appartement partagé ou dans un établissement communautaire supervisé
                </Form.Group>
            </div>

            <div className="field">
                <label><Icon disabled name='question circle outline' />
Travaillez-vous dans l'un des domaines suivants?</label>
                <Form.Group inline>

                <input 
                    type="radio" 
                    name="two" 
                    checked
                    value="option1"
                    placeholder="Name" 
                    onChange={onChange}
                />Dans le domaine médical
                <br/><input 
                    type="radio" 
                    value="option2"
                    name="two" 
                    placeholder="Name" 
                    onChange={onChange}
                />Dans un établissement communautaire (école, garderie, université, maison, etc.)
                </Form.Group>
            </div>

            <div className="field">
                <label><Icon disabled name='question circle outline' />
Fumez-vous?</label>
                <Form.Group inline>
                <input 
                    type="radio" 
                    checked
                    name="three" 
                    value="option1"
                    placeholder="Name" 
                    onChange={onChange}
                />Oui
                <br/><input 
                    type="radio" 
                    name="three" 
                    value="option2"
                    placeholder="Name" 
                    onChange={onChange}
                />Non
                </Form.Group>
            </div>
            

            <div className="field">
                <label><Icon disabled name='question circle outline' />
Vous voyagez depuis 4 semaines? (À l'intérieur ou à l'extérieur de votre pays)</label>
                <Form.Group inline>
                 <input
                    type="radio" 
                    name="four" 
                    value="option1" 
                    placeholder="Name" 
                    checked
                    onChange={onChange}
                />Oui
                <br/><input 
                    type="radio" 
                    name="four" 
                    value="option2" 
                    placeholder="Name" 
                    onChange={onChange}
                />Non
                </Form.Group>
            </div>
            

            <div className="field">
                <label><Icon disabled name='question circle outline' />
Avez-vous visité une zone endémique comme l'Italie</label>
<Form.Group inline>
                <input 
                    type="radio" 
                    name="five" 
                    value="option1" 
                    placeholder="Name" 
                    checked
                    onChange={onChange}
                />Oui
                <br/><input 
                    type="radio" 
                    name="five" 
                    value="option2" 
                    placeholder="Name" 
                    onChange={onChange}
                />Non
                </Form.Group>
            </div>


            <div className="field">
                <label><Icon disabled name='question circle outline' />
Avez-vous eu un contact étroit avec une situation confirmée?</label>
                <p>Un contact étroit avec un cas confirmé signifie</p>            
                <p>Face à face appelant pendant plus de 15 minutes</p>
                <p>Contact physique direct (toucher, poignée de main, baisers)...</p>
                <Form.Group inline>
                <input 
                    type="radio" 
                    name="six" 
                    checked
                    value="option1" 
                    placeholder="Name" 
                    onChange={onChange}
                />Oui
                <br/><input 
                    type="radio" 
                    name="six" 
                    value="option2" 
                    placeholder="Name" 
                    onChange={onChange}
                />Non
                </Form.Group>
            </div>



            <div className="field">
                <label><Icon disabled name='question circle outline' />Avez-vous eu de la fièvre (plus de 38 ° C) au cours des dernières 24 heures?</label>
                
                <Form.Group inline>
                <input 
                    type="radio" 
                    checked
                    name="seven" 
                    value="option1"
                    placeholder="Name" 
                    onChange={onChange}
                />Oui
                <br/><input 
                    type="radio" 
                    name="seven" 
                    value="option2"
                    placeholder="Name" 
                    onChange={onChange}
                />Non
                </Form.Group>
            </div>



            <div className="field" >
                <label ><Icon disabled name='question circle outline' />Avez-vous des frissons?</label>
                <Form.Group inline>
                <input 
                    type="radio" 
                    name="eight" 
                    checked
                    value="option1"
                    placeholder="Name" 
                    onChange={onChange}
                />Oui
                <br/><input 
                    type="radio" 
                    name="eight" 
                    value="option2"
                    placeholder="Name" 
                    onChange={onChange}
                />Non
                </Form.Group>
            </div>
            

            <div className="field" >
                <label ><Icon disabled name='question circle outline' />Souffrez-vous d'une maladie pulmonaire chronique?</label>
                <Form.Group inline>
                <input 
                    type="radio" 
                    name="nine" 
                    checked
                    value="option1"
                    placeholder="Name" 
                    onChange={onChange}
                />Oui
                <br/><input 
                    type="radio" 
                    name="nine" 
                    value="option2"
                    placeholder="Name" 
                    onChange={onChange}
                />Non
                </Form.Group>
            </div>
            
           
            {/* <input className="ui button pink" value='Resultat' onClick={showResult} type="button" /> */}
            <input className="ui button pink" value='Resultat' onClick={show} type="button" />
        
            <Confirm
                open={res}
                content={'4/10 ==> STAY SAFE YOU ARE OK'}
                onConfirm={handleConfirm}
                onCancel={handleConfirm}
            />
            </form>
            </div>
    )
}

export default Register
