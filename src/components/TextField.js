// import React, { useEffect } from 'react'
// import './textField.css';

// function TextField(props) {
//     var str="I sat down with relief as I ticked off the last task in the checklist. I wanted everything to be perfect as it was my best friend’s marriage in Mumbai. The alarm rang next morning, I woke up in excitement and booked a cab to the railway station. Everything was going perfectly until I got stuck in a traffic jam. I reached the railway station late but on the sight of the train still waiting on the platform, I hurried and somehow managed to get into the train. I breathed a sigh of relief and got comfortable. It was only when the Ticket Collector came, I realised that I had been in the wrong train for two hours. I panicked and deboarded the train at the next station. I tried booking a ticket for the next train to Mumbai but there was no availability. On coming back from the ticket counter, I realised that my luggage was missing.";
//     var strArr=str.split('');

//     var enetredTextArr=props.eneteredText.split('');

//     useEffect(() => {
//         strArr.map((s,i)=>{
//                          let color;
//                         if(i < eneteredTextArr.length)
//                          {
//                              color= s === enetredTextArr[i] ? '#dfffa0' : '#fcbea4';
//                          }
//                          console.log(s);
//                         }            
//     },[eneteredText]);
//     return (
//         <div className="textField">
//             <p >{props.text}</p>
//         </div>

//         // <div className="textField">
//         //     {
//         //         strArr.map((s,i)=>{
//         //             let color;
//         //             if(i < props.eneteredText.length)
//         //             {
//         //                 color= s === props.enetredText[i] ? '#dfffa0' : '#fcbea4';
//         //             }
//         //             console.log(s);
//         //             return <span key={i} style={{backgroundColor:color}}>{s}</span>
//         //         })
//         //     }
//         // </div>
//     )
// }

// export default TextField;
