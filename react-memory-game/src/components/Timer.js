import React, { useState, useEffect } from 'react'

function Timer() {
    const [seconds, setSeconds] = useState(0);

    function reset() {
        setSeconds(0);     
    }


    useEffect(() => {
        let interval = null;
        interval = setInterval(() => {
            setSeconds(seconds + 1);
        }, 1000);

        return () => clearInterval(interval);
    }, [seconds]);


    return (
        <div className="timer">
            Timer:  {seconds}s
            <button className="reset button" onClick={reset}>
                Reset
            </button>
        </div>

    );
};

export default Timer
