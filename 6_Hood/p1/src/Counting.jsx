import { useState } from "react";

function Counting({name}){

    const [count,setCount] = useState(0);

    return(
        <>
            <div >
            <p>Our First Counter app: {name} </p>
            <h2 style={{color:"yellow"}}>Counter:{count} </h2>
            <button onClick={()=>setCount(count+1)} style={{backgroundColor:"red",color:"black"}}>Increment</button>
            </div>
        </>
    )
}




export default Counting; 