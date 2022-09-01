import React, {useState} from "react";

function Timer() {
    const [secondsLeft, setSecondsLeft] = useState(25 * 60) 
    const  [time, setTime] = useState()

    const startTimer = () => {
        const time = setInterval(() => {
            setSecondsLeft((secondsLeft) => secondsLeft - 1) 
            if (secondsLeft === 0){
                clearInterval(time); 
            }
        }, 1000); 
        setTime(time); 
    }
    
    return (
        <div>
            <div>{secondsLeft} : {time}</div>
            <button onClick={startTimer}>Start</button> 
        </div>
    );
}
export default Timer; 