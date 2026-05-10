import { useState } from "react";
import Counting from "./Counting";

function Clock(){
    
    const [clocks,setClock] = useState(["A","B","C"]);
    function handleChange(){
        setClock(["D",...clocks]);
    }
    
    return(
        <>
        <button onClick={handleChange} style={{backgroundColor:"red",color:"white"}}>Increment Clock </button>
        <div style={{display:"flex",justifyContent:"center",alignItems:"center",gap:"20px",flexWrap:"wrap",backgroundColor:"black",color:"aqua"}}>
            {clocks.map(clock=> <Counting name={clock} key={clock} ></Counting> )}
        </div>
        </>
    )
}







export default Clock;