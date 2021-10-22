import React, {useState, useEffect} from "react";
import HandleButton from './HandleButton';
import ButtonChangeSeconds from './ButtonChangeSeconds';
import '../styles/ActivityTimer.css'

function ActivityTimer() {
    const [twentyFiveSeconds, setwentyFiveSeconds] = useState(25);
    const [button, setButton] = useState(false);
    const [buttonTitle, setButtonTitle] = useState("Começar");
    const [isActive, setIsActive] = useState(false);
    
    useEffect(() => {      
        const ONE_SECOND = 1000;
        const interval = setInterval(() => {
            clearInterval(interval);
            if (button === true && twentyFiveSeconds > 0) {          
                setwentyFiveSeconds(twentyFiveSeconds - 1)               
            }
        }, ONE_SECOND)
    }, [twentyFiveSeconds, button])

   return (
        <header>
            <div>
                <button               
                    onClick={() => ButtonChangeSeconds(setwentyFiveSeconds, 25, "DarkTurquoise")} 
                    type="button" 
                    disabled={isActive}
                >   
                    Atividade
                </button>
                <button
                    id='green'
                    onClick={() => ButtonChangeSeconds(setwentyFiveSeconds, 5, 'Turquoise') } 
                    type="button" 
                    disabled={isActive}
                >
                    Intervalo
                </button>
            </div>
            <span>{twentyFiveSeconds}</span>
            <button 
                onClick={() => HandleButton(button, setButton, setButtonTitle, setIsActive)} 
                type="button"
            >
                {buttonTitle}
            </button>
        </header>
    );
}

export default ActivityTimer;