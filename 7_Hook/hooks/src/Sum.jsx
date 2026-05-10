import React from "react";

//using Reactmemo
const Sum = React.memo(({number})=>{
    function calculateSum(){
        let sum = 0;
        for(let i = 1;i<=number;i++){
            sum+=i;
        }
        return sum;
    }
    const total = calculateSum();
    console.log("Sum Reander")
    return(
        <>
            <h1>This is MATH libreary</h1>
            <h2>Sum :{total} </h2>
        </>
    )
})




export default Sum;