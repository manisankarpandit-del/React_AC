import {useCallback, useMemo, useState } from "react";
import Sum from "./Sum";
import Posts from "./Posts";
 

function App(){

  const[count,setCount] = useState(0);
  const[number,Setnumber] = useState(10000);

  // function calclutePrime(){
  //   let total = 0;
  //   if(number>1) 
  //     total++;
  //   for(let i = 3;i<=number;i++){
  //     total++;
  //     for(let j = 2;j<i;j++){
  //       if(i%j==0){
  //         total--;
  //         break;
  //       }
  //     }
  //   }
  //   return total;
  // }
  // const prime = calclutePrime();


// using useMemo
  const prime = useMemo(()=>{
    let total = 0;
    if(number>1) 
      total++;
    for(let i = 3;i<=number;i++){
      total++;
      for(let j = 2;j<i;j++){
        if(i%j==0){
          total--;
          break;
        }
      }
    }
    return total;
  },[number])


  //use callbackMemo
  const handleClick = useCallback(()=>{
    console.log("Handle Click",count)
  },[count]);


  //pass the function using usememo and received the function using react.memo
  const obj = useMemo(()=>{
    return {name:"Mani",age:20}
  },[])

  console.log("App Reander")
  return(
    <>
        <h1>Counter :{count} </h1>
        <button onClick={()=>setCount(count+1)}>Increment</button>
        <h2>Your Current Number :{number} </h2>
        <button onClick={()=>Setnumber(number+100)}>Increment Number</button>
        <h2>Total prime number:{prime} </h2>
        <button onClick={handleClick}>Click</button>
        <Sum number = {number}></Sum>
        <Posts value ={obj} ></Posts>
    </>
  )
}


 export default App;