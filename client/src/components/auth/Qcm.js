import React from 'react'
import 'Qcm.css';
const Qcm = () =>{

    const questions = document.getElementsByTagName ( "div" );   //nselectioni les div(les questions kol) kol fi tab
document.getElementById ( "qcm" ).style.display = "none"

const  StartTest =()=> {
    document.getElementsByTagName ( "section" )[ 0 ].style.display = "none";
    document.getElementById ( "qcm" ).style.display = "block";
}

let num = 0;

const  prev =  ()=> {
    questions[ ( num ) % 28 ].style.display = "none";
    questions[ ( num - 1 ) % 28 ].style.display = "block";
    num --;
}

const  next =()=> {
    if ( isNaN ( questions[ num ].querySelector ( "input:checked" ).value ) === false ) {
        questions[ ( num ) % 28 ].style.display = "none";
        questions[ ( num + 1 ) % 28 ].style.display = "block";
        num ++;
    }
    else {alert("أجب عن السؤال قبل المرور إلى الموالي !");}
}

const  getValue =() =>{
    let moy;
    for ( let i = 0 , moy = 0 ; i < questions.length ; i ++ ) {
        let questionValue = questions[ i ].querySelector ( "input:checked" ).value;//hekhou il value t3 il reponse
        moy = moy + parseFloat ( questionValue );
    }                  //n7ssb 9adech aandou min points
    let moyG = ( moy / 28 ) * 100;
    if ( moyG >= 50 ) {
        alert ( " نسبة إصابتك هي: " + moyG + "%\n" + "تواصل معنا على أرقام منطقتك المحددة\n" +
            "يبدو أنك في دائرة الناس المعرضين للخطورة المعينة. \n" +
            "لربما يجب عليك الاتصال بالخط الساخن الموجود في منطقتك للخضوع لفحص محدد .\n" +
            "إذا كنت تود الخروج من منزلك دع مسافة 2 متر بينك وبين الأشخاص المقابلين وحاول كبح السعال.حاول أن تبقى في المنزل وتجنب مخالطة الآخرين.\n" );
    } else {
        alert ( " نسبة إصابتك هي: " + moyG + "%\n" + "من فضلك ابق في المنزل\n" +
            "في الوقت الحالي أنت لست بحاجة لأي مساعدة طبية:\n" +
            "من فضلك قم باحتياطاتك المعتادة\n" );
    }
}
    return (
        <div>
            <form id="qcm">
        <div>
          <strong>كم عمرك؟</strong><br />
          <input name="age" type="radio" defaultValue="0.1" />أصغر من 40<br />
          <input name="age" type="radio" defaultValue="0.3" />40-50<br />
          <input name="age" type="radio" defaultValue="0.4" />51-60<br />
          <input name="age" type="radio" defaultValue="0.6" />61-70<br />
          <input name="age" type="radio" defaultValue="0.7" />71-80<br />
          <input name="age" type="radio" defaultValue="0.8" />أكبر من 80<br />
          <button type="button" onclick="next();">التالي</button>
        </div>
        <div>
          <strong>ما هو وضعك المعيشي الحالي؟</strong><br />
          <input name="livingwith" type="radio" defaultValue="0.1" />أعيش بمفردي<br />
          <input name="livingwith" type="radio" defaultValue="0.4" />أعيش مع العائلة في شقة مشتركة أو في منشأة مجتمعية تحت
          الإشراف<br />
          <button type="button" onclick="next();">التالي</button>
          <button type="button" onclick="prev();">السابق</button>
        </div>
        <div>
          <strong>هل تعمل في أحد المجالات التالية؟</strong><br />
          <input name="work" type="radio" defaultValue="0.8" />في المجال الطبي<br />
          <input name="work" type="radio" defaultValue="0.5" />في منشأة مجتمعية (مدرسة ، مركز رعاية نهارية ، جامعة ، منزل وما إلى
          ذلك)<br />
          <input name="work" type="radio" defaultValue="0.1" />لا ، في أي مما سبق.<br />
          <button type="button" onclick="next();">التالي</button>
          <button type="button" onclick="prev();">السابق</button>
        </div>
        <div>
          <strong>هل تدخن؟</strong><br />
          <input name="smoking" type="radio" defaultValue="0.3" />نعم<br />
          <input name="smoking" type="radio" defaultValue="0.1" />لا<br />
          <button type="button" onclick="next();">التالي</button>
          <button type="button" onclick="prev();">السابق</button>
        </div>
        <div>
          <strong>هل كنت مسافرًا خلال الأسابيع الأربعة الماضية؟ (داخل بلدك أو خارجها)</strong><br />
          <input name="trip" type="radio" defaultValue="0.5" />نعم<br />
          <input name="trip" type="radio" defaultValue="0.1" />لا<br />
          <button type="button" onclick="next();">التالي</button>
          <button type="button" onclick="prev();">السابق</button>
        </div>
        <div>
          <strong>هل زرت أحد البلدان التالية؟</strong><br />
          <input name="visitedCountry" type="radio" defaultValue="0.8" />إيطاليا<br />
          <input name="visitedCountry" type="radio" defaultValue="0.7" />مصر<br />
          <input name="visitedCountry" type="radio" defaultValue="0.7" />إيران<br />
          <input name="visitedCountry" type="radio" defaultValue="0.8" />الصين<br />
          <input name="visitedCountry" type="radio" defaultValue="0.7" />كوريا الجنوبية<br />
          <input name="visitedCountry" type="radio" defaultValue="0.8" />فرنسا<br />
          <input name="visitedCountry" type="radio" defaultValue="0.6" />النمسا<br />
          <input name="visitedCountry" type="radio" defaultValue="0.7" />إسبانيا<br />
          <input name="visitedCountry" type="radio" defaultValue="0.7" />الولايات المتحدة الأمريكية<br />
          <input name="visitedCountry" type="radio" defaultValue="0.1" />لم أذهب إلى أي من البلدان المذكورة أعلاه<br />
          <button type="button" onclick="next();">التالي</button>
          <button type="button" onclick="prev();">السابق</button>
        </div>
        <div>
          <strong>هل كان لديك اتصال وثيق بحالة مؤكدة؟</strong><br />
          <dl>
            <dt>:الاتصال الوثيق مع حالة مؤكدة يعني</dt>
            <dd>الاتصال وجهًا لوجه لأكثر من 15 دقيقة-</dd>
            <dd>الاتصال الجسدي المباشر(اللمس ، المصافحة ، التقبيل)-</dd>
            <dd>على بُعد مترين الشخص لأكثر من 15 دقيقة.-</dd>
            <dd>الاتصال مع أو تبادل سوائل الجسم-</dd>
            <dd>العيش في نفس الشقة-</dd>
          </dl>
          <input name="contactConfirmedAffected" type="radio" defaultValue={1} />نعم<br />
          <input name="contactConfirmedAffected" type="radio" defaultValue="0.1" />لا<br />
          <button type="button" onclick="next();">التالي</button>
          <button type="button" onclick="prev();">السابق</button>
        </div>
        <div>
          <strong>هل كان لديك اتصال وثيق بحالة مشبوهة؟</strong><br />
          <dl>
            <dt>:الحالة المشتبه بها هي</dt>
            <dl>شخص يعاني حاليًا من حمى أو سعال أو مشاكل في التنفس وكان لديه اتصال مع حالة تم التحقق منها أو كان في
              منطقة بها حالات متكررة من حالات الإصابة بفيروسات كورونا-
            </dl>
          </dl>
          <dl>
            <dt>:الاتصال الوثيق مع حالة مشتبه بها يعني</dt>
            <dd>الاتصال وجهًا لوجه لأكثر من 15 دقيقة-</dd>
            <dd>الاتصال الجسدي المباشر(اللمس ، المصافحة ، التقبيل)-</dd>
            <dd>على بُعد مترين الشخص لأكثر من 15 دقيقة.-</dd>
            <dd>الاتصال مع أو تبادل سوائل الجسم-</dd>
            <dd>العيش في نفس الشقة-</dd>
          </dl>
          <input name="contactSuspectedAffected" type="radio" defaultValue="0.7" />نعم<br />
          <input name="contactSuspectedAffected" type="radio" defaultValue="0.1" />لا<br />
          <button type="button" onclick="next();">التالي</button>
          <button type="button" onclick="prev();">السابق</button>
        </div>
        <div>
          <strong>هل عانيت من الحمى (فوق 38 درجة مئوية) خلال الـ 24 ساعة الماضية؟</strong><br />
          <input name="Fever24H" type="radio" defaultValue="0.5" />نعم<br />
          <input name="Fever24H" type="radio" defaultValue="0.05" />لا<br />
          <button type="button" onclick="next();">التالي</button>
          <button type="button" onclick="prev();">السابق</button>
        </div>
        <div>
          <strong>هل عانيت من حمى (أكثر من 38 درجة مئوية) خلال الأيام الأربعة الماضية؟</strong><br />
          <input name="Fever4Days" type="radio" defaultValue="0.4" />نعم<br />
          <input name="Fever4Days" type="radio" defaultValue="0.07" />لا<br />
          <button type="button" onclick="next();">التالي</button>
          <button type="button" onclick="prev();">السابق</button>
        </div>
        <div>
          <strong>هل لديك قشعريرة؟</strong><br />
          <input name="shudder" type="radio" defaultValue="0.6" />نعم<br />
          <input name="shudder" type="radio" defaultValue="0.1" />لا<br />
          <button type="button" onclick="next();">التالي</button>
          <button type="button" onclick="prev();">السابق</button>
        </div>
        <div>
          <strong>هل تشعر بالتعب أو الضعف؟</strong><br />
          <input name="fatigue" type="radio" defaultValue="0.7" />نعم<br />
          <input name="fatigue" type="radio" defaultValue="0.1" />لا<br />
          <button type="button" onclick="next();">التالي</button>
          <button type="button" onclick="prev();">السابق</button>
        </div>
        <div>
          <strong>هل لديك ألم في الأطراف؟</strong><br />
          <input name="ExtremitiesPain" type="radio" defaultValue="0.6" />نعم<br />
          <input name="ExtremitiesPain" type="radio" defaultValue="0.1" />لا<br />
          <button type="button" onclick="next();">التالي</button>
          <button type="button" onclick="prev();">السابق</button>
        </div>
        <div>
          <strong>هل لديك سعال جاف مستمر؟</strong><br />
          <input name="cough" type="radio" defaultValue="0.8" />نعم<br />
          <input name="cough" type="radio" defaultValue="0.025" />لا<br />
          <button type="button" onclick="next();">التالي</button>
          <button type="button" onclick="prev();">السابق</button>
        </div>
        <div>
          <strong>هل لديك صعوبة في التنفس؟</strong><br />
          <input name="DifficultBreathing" type="radio" defaultValue="0.9" />نعم<br />
          <input name="DifficultBreathing" type="radio" defaultValue="0.01" />لا<br />
          <button type="button" onclick="next();">التالي</button>
          <button type="button" onclick="prev();">السابق</button>
        </div>
        <div>
          <strong>هل لديك إسهال؟</strong><br />
          <input name="Diarrhea" type="radio" defaultValue="0.3" />نعم<br />
          <input name="Diarrhea" type="radio" defaultValue="0.1" />لا<br />
          <button type="button" onclick="next();">التالي</button>
          <button type="button" onclick="prev();">السابق</button>
        </div>
        <div>
          <strong>هل لديك التهاب في الحلق؟</strong><br />
          <input name="SoreThroat" type="radio" defaultValue="0.5" />نعم<br />
          <input name="SoreThroat" type="radio" defaultValue="0.05" />لا<br />
          <button type="button" onclick="next();">التالي</button>
          <button type="button" onclick="prev();">السابق</button>
        </div>
        <div>
          <strong>هل أصبت بصداع؟ </strong><br />
          <input name="headache" type="radio" defaultValue="0.3" />نعم<br />
          <input name="headache" type="radio" defaultValue="0.1" />لا<br />
          <button type="button" onclick="next();">التالي</button>
          <button type="button" onclick="prev();">السابق</button>
        </div>
        <div><strong>هل تشعر بضيق في التنفس بشكل أسرع من المعتاد؟</strong><br />
          <input name="asthma" type="radio" defaultValue="0.9" />نعم<br />
          <input name="asthma" type="radio" defaultValue="0.07" />لا<br />
          <button type="button" onclick="next();">التالي</button>
          <button type="button" onclick="prev();">السابق</button>
        </div>
        <div><strong> هل تعاني من أمراض رئوية مزمنة؟</strong><br />
          <input name="PulmonaryDiseases" type="radio" defaultValue="0.3" />نعم<br />
          <input name="PulmonaryDiseases" type="radio" defaultValue="0.2" />لا<br />
          <input name="PulmonaryDiseases" type="radio" defaultValue="0.2" />غير معروف<br />
          <button type="button" onclick="next();">التالي</button>
          <button type="button" onclick="prev();">السابق</button>
        </div>
        <div>
          <strong>هل تعاني من مرض السكري؟</strong><br />
          <input name="Diabetes" type="radio" defaultValue="0.4" />نعم<br />
          <input name="Diabetes" type="radio" defaultValue="0.2" />لا<br />
          <input name="Diabetes" type="radio" defaultValue="0.3" />غير معروف<br />
          <button type="button" onclick="next();">التالي</button>
          <button type="button" onclick="prev();">السابق</button>
        </div>
        <div>
          <strong>هل تعاني من مرض في القلب؟</strong><br />
          <input name="HeartDiseases" type="radio" defaultValue="0.3" />نعم<br />
          <input name="HeartDiseases" type="radio" defaultValue="0.1" />لا<br />
          <input name="HeartDiseases" type="radio" defaultValue="0.2" />غير معروف<br />
          <button type="button" onclick="next();">التالي</button>
          <button type="button" onclick="prev();">السابق</button>
        </div>
        <div>
          <strong>هل تعاني من البدانة؟</strong><br />
          <input name="Obesity" type="radio" defaultValue="0.3" />نعم<br />
          <input name="Obesity" type="radio" defaultValue="0.05" />لا<br />
          <input name="Obesity" type="radio" defaultValue="0.025" />غير معروف<br />
          <button type="button" onclick="next();">التالي</button>
          <button type="button" onclick="prev();">السابق</button>
        </div>
        <div>
          <strong>هل أنت حامل؟</strong><br />
          <input name="Pregnancy" type="radio" defaultValue="0.2" />نعم<br />
          <input name="Pregnancy" type="radio" defaultValue="0.1" />لا<br />
          <input name="Pregnancy" type="radio" defaultValue="0.15" />غير معروف<br />
          <button type="button" onclick="next();">التالي</button>
          <button type="button" onclick="prev();">السابق</button>
        </div>
        <div>
          <strong>هل تتناول حاليًا المنشطات؟</strong><br />
          <input name="AnabolicSteroids" type="radio" defaultValue="0.3" />نعم<br />
          <input name="AnabolicSteroids" type="radio" defaultValue="0.2" />لا<br />
          <input name="AnabolicSteroids" type="radio" defaultValue="0.25" />غير معروف<br />
          <button type="button" onclick="next();">التالي</button>
          <button type="button" onclick="prev();">السابق</button>
        </div>
        <div>
          <strong>هل تتناول حاليًا مثبطات المناعة؟</strong><br />
          <dt>:تتناول مثبطات المناعة يعني</dt>
          <dd>أنت تعاني من كبت المناعة بعد عملية زرع عضو ، أثناء علاج مرض المناعة الذاتية أو العلاج الكيميائي -</dd>
          <input name="Immunosuppressants" type="radio" defaultValue="0.2" />نعم<br />
          <input name="Immunosuppressants" type="radio" defaultValue="0.1" />لا<br />
          <input name="Immunosuppressants" type="radio" defaultValue="0.15" />غير معروف<br />
          <button type="button" onclick="next();">التالي</button>
          <button type="button" onclick="prev();">السابق</button>
        </div>
        <div>
          <strong>هل تم تلقيحك ضد الأنفلونزا بين أكتوبر 2019 واليوم؟</strong><br />
          <input name="InfluenzaVaccine" type="radio" defaultValue="0.3" />نعم<br />
          <input name="InfluenzaVaccine" type="radio" defaultValue="0.1" />لا<br />
          <button type="button" onclick="next();">التالي</button>
          <button type="button" onclick="prev();">السابق</button>
        </div>
        <div>
          <strong>هل فقدت حاسة الشم أو التذوق أو شعرت بتغيير فيهما؟</strong><br />
          <input name="Olfactory/TasteRegression" type="radio" defaultValue="0.5" />نعم<br />
          <input name="Olfactory/TasteRegression" type="radio" defaultValue="0.1" />لا<br />
          <button type="button" onclick="prev();">السابق</button>
        </div>
        <button type="button" onclick="getValue();">النتيجة</button>
      </form>
        </div>
    )
}

export default Qcm;
