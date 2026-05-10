import React, { useRef, useState } from "react";

function Video(){

    const videoRef = useRef(null);


    //start
    function handleStart(){
        videoRef.current.play();
    }

    //stop
    function handleStop(){
        videoRef.current.pause();
    }

    //Restart
    function handleRestart(){
        videoRef.current.currentTime = 0;
        videoRef.current.play();
    }

    // Forward 5 seconds
    function handleForward() {
        videoRef.current.currentTime += 5;
    }

    // Backward 5 seconds
    function handleBackward() {
        videoRef.current.currentTime -= 5;
    }

    return(
        <>
        <video ref={videoRef} src="./RS45.mp4" width="600" height="600"></video>
        
        <div>
            <button onClick={handleBackward}>⏪</button>
            <button onClick={handleStart}>Start</button>
            <button onClick={handleStop}>Pause</button>
            <button onClick={handleRestart}>Restart</button>
            <button onClick={handleForward}>⏩</button>
        </div>
        </>
    )
}


export default Video;