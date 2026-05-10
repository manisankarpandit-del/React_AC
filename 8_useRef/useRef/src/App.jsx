import React, { useRef, useState } from "react";

//Stopwtch:start,stop reset
function App(){

  const [time,setTime] = useState(0);
  const intervalIDref = useRef(null);

  //start
  function handlestart(){
    if(intervalIDref.current!=null){//this condition is handle for multiple click on start button
      return; 
    }

    intervalIDref.current = setInterval(() => {
      setTime(time=>time+1); //latest update value lene k liya
    }, 1000);
  }

  //stop
  function handlestop(){
    clearInterval(intervalIDref.current);
    intervalIDref.current = null;
  }


  //reset
  function handleReset(){
    clearInterval(intervalIDref.current);
   intervalIDref.current = null;
    setTime(0);
  }


  return (
    <>
    <h1>Stopwatch:{time} </h1>
    <div>
    <button onClick={handlestart} >Start</button>
    <button onClick={handlestop}>Stop</button>
    <button onClick={handleReset}>Reset</button>
    </div>
    </>
  )
}


export default App;