import { useState } from "react";

function App(){

  //primitive datatype
  // const [count,setCount] = useState(0  );

  //non primitive data type
  const [count,setCount] = useState([10,20,30]);

  function handlechange(){
    setCount([...count,40]);
  }

  return (
    <>
    <p>This is counter for react App </p>
    <h1>Counter :{count}</h1>
    {/* //for non primitive */}
    <button onClick={handlechange} >Increment</button>
    {/* for  primitive */}
    {/* <button onClick={()=>setCount(count+1)} >Increment</button>
    <button onClick={()=>setCount(count-1)} >Decrement</button> */}
    </>
  )
}


 











export default App;