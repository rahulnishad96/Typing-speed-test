import React,{useState} from 'react'
import AuthContext from '../store/StoreState';
import './TextInput.css';
import Time from './Time';
import GetText from './GetText';
import TextField from './TextField.js';
import './textField.css';
function TextInput() {
    const [eneteredText,setEneteredText]=useState('');
    const [timerStatus,setTimerStatus]=useState(0);
    const [Count,setCount]=useState(0);
    const[color,setColor]=useState('#aadaa9');
    const[textAreaStatus,setTextAreaStatus]=useState(0);


    var str="I sat down with relief as I ticked off the last task in the checklist. I wanted everything to be perfect as it was my best friend’s marriage in Mumbai. The alarm rang next morning, I woke up in excitement and booked a cab to the railway station. Everything was going perfectly until I got stuck in a traffic jam. I reached the railway station late but on the sight of the train still waiting on the platform, I hurried and somehow managed to get into the train. I breathed a sigh of relief and got comfortable. It was only when the Ticket Collector came, I realised that I had been in the wrong train for two hours. I panicked and deboarded the train at the next station. I tried booking a ticket for the next train to Mumbai but there was no availability. On coming back from the ticket counter, I realised that my luggage was missing.";
    var strArr=str.split('');
    var eneteredTextArr=eneteredText.split('');
    var count=0;
    const textChangeHandler = (event)=>{
        setEneteredText(event.target.value);
        var str2=event.target.value.split('');
        console.log(event.target.value);
        setTimerStatus(1);

        //console.log(eneteredText);
        //console.log(eneteredText.length);
        //if(eneteredText.length!=0){
        let flag=0;
        for(let i=0;i<str2.length;i++)
        {
            // console.log("going in loop");
            // console.log(eneteredTextArr[i] + "===" + strArr[i]);
            // console.log(str2[i] + "===" + strArr[i]);
            //flag = (str2[i] != strArr[i] && str2[i]!=" ") &&  1;
            if(str2[i] != strArr[i])
            {
                flag=1;
                break;
            }
            // if(strArr[i]===" " && color==='#dfffa0')
            //     count++;
        }
         flag==0 ? setColor('#aadaa9') : setColor('#fcbea4');

         var totalCorrectWord=0;
         let flagWord=0;
        for(let i=0;i<str2.length;i++)
        {
            
            if(strArr[i] != " ")
            {
                if(str2[i] != strArr[i])
                {
                    flagWord=1;
                }
            }
            else
            {
                if(flagWord==0)
                {
                    totalCorrectWord++;
                }
                else
                {
                    flagWord=0;
                }
            }
            console.log("my flag at " + i + " = " + flag);
        }
            console.log(totalCorrectWord);
            setCount(totalCorrectWord);
            
             //<span key={i} style={{backgroundColor: color}}>{eneteredTextArr[eneteredText.length-1]}</span>
    //}
}
 

const timerZeroHandler = () => {
    setTextAreaStatus(1);
}

const resetHandler = (event) => {
    window. location. reload();
}

    return (
        <div>
        <Time timerStatus={timerStatus} onTimerZero={timerZeroHandler}/>
        <div className="textField">{str}</div>
        {textAreaStatus==0 && <textarea className="inputText"  placeholder="Type Here ..." onChange={textChangeHandler} style={{backgroundColor: color}}  >
        </textarea>}
        <h2 className="speed">Typing Speed is : {Count} </h2>
        {
            textAreaStatus == 1 && <button onClick={resetHandler} className="reset">Reset</button>
        }
    </div>
    )
}

export default TextInput
