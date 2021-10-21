import React, {useState, useEffect} from "react";
import HandleButton from './HandleButton';
import '../styles/ActivityTimer.css'

function ActivityTimer() {
    const [twentyFiveSeconds, setwentyFiveSeconds] = useState(25);
    const [button, setButton] = useState(false);
    const [buttonTitle, setButtonTitle] = useState("Começar");
    
    useEffect(() => {      
        const ONE_SECOND = 1000;
        const interval = setInterval(() => {
            clearInterval(interval);
            if (button === true) {          
                setwentyFiveSeconds(twentyFiveSeconds - 1)               
            }
        }, ONE_SECOND)
    }, [twentyFiveSeconds, button])

   return (
        <header>
            <span>{twentyFiveSeconds}</span>
            <button 
                onClick={() => HandleButton(button, setButton, setButtonTitle)} 
                type="button">
                {buttonTitle}
            </button>
        </header>
    );
}

export default ActivityTimer;