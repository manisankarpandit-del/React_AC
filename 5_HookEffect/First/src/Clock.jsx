import { useEffect, useState } from "react";

export default Clock;


function Clock(){

    const [time,setTime] = useState(new Date().toLocaleTimeString());
    const [Show,setShow] = useState(true);

    useEffect(()=>{

        if(!Show) return;

        const intervalID = setInterval(()=>{
        setTime(new Date().toLocaleTimeString());
        console.log("hi");
        },1000)

        return()=>{
            clearInterval(intervalID);
        }


    },[Show]) 


    return(
    <>
    <button onClick={()=>setShow(!Show)}>{Show?"Hide":"Show"}</button>
    {
        Show &&<h1>Current Time :{time} </h1> //Show && means if show is true then return it otherwise hide
    } 
    </>
    )  
}



 









