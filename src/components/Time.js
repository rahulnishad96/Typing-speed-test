import React, {useState} from 'react';
import TimeDisplayComponent from './TimeDisplayComponent';

import AuthContext from '../store/StoreState';
import './Time.css';


function Time(props) {
  const [time, setTime] = useState({ms:0, s:60});
  var updatedMs = time.ms, updatedS = time.s;

  var timerId;

React.useEffect(() => {
    if(props.timerStatus==1)
        timerId = setInterval(run, 10);
}, [props.timerStatus]);


const run = () => {
    if(updatedMs === 0){
      updatedS--;
      updatedMs = 99;
    }
    if(updatedS == 0 )
    {
      props.onTimerZero();
      clearInterval(timerId);
      
    }
    updatedMs--;
    setTime({ms:updatedMs, s:updatedS});
  };



 

  

//   const stop = () => {
//     clearInterval(interv);
//     setStatus(2);
//   };

//   const reset = () => {
//     clearInterval(interv);
//     setStatus(0);
//     setTime({ms:0, s:60})
//   };

//   const resume = () => start();

  return (
    <div className="">
     <div className="">
     <h1 className=""></h1>
          <div className="stopwatch">
               <TimeDisplayComponent time={time}/>
               {/* {props.timerStatus === 1 ? start : null } */}
               {/* <BtnComponent status={status} resume={resume} reset={reset} stop={stop} start={start}/>  */}
          </div>
     </div>
    </div>
  );
}

export default Time;
