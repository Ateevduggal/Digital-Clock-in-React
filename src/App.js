import React,{useState} from 'react';

const App = () => {
    let x = new Date().toLocaleTimeString();
    const[time, upTime] = useState(x);

    const IncNum = () => {
        x = new Date().toLocaleTimeString();
        upTime(x);
    }
    setInterval(IncNum, 1000);

    return(
        <>
            <h1>{time}</h1>
        </>
    );
};

export default App;