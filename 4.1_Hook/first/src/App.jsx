export default App;
import { useState } from "react";

function App(){
  //manual DOM manipulation

  // let count = 0;
  
  // function increaseNumber(){
  //   count++;
  //   const para = document.querySelector('p');
  //   para.textContent = `Counter ${count}`
  // }

  
 //using usestate

   let [count,setCount] = useState(0);

  function increaseNumber(){
    count++;
    setCount(count);
  }

 return(
 <>
 <p>Counter:{count} </p>
 <button onClick={increaseNumber} >Increment : {count}</button>
 </> 
 )
 
}




