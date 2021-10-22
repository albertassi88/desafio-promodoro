import React, {useState, useEffect} from "react";
import HandleButton from './HandleButton';
import ButtonChangeSeconds from './ButtonChangeSeconds';
import SoundPlay from "./SoundPlay";
import Sound from '../sound/despertador.mp3';
import '../styles/ActivityTimer.css'

function ActivityTimer() {
    const [timerSeconds, setTimerSeconds] = useState(25);
    const [soundStop, setSoundStop] = useState('');
    const [button, setButton] = useState(false);
    const [buttonTitle, setButtonTitle] = useState("Começar");
    const [isActive, setIsActive] = useState(false);
    
    useEffect(() => {      
        const ONE_SECOND = 1000;
        const interval = setInterval(() => {
            clearInterval(interval);
            if (button === true && timerSeconds > 0) {          
                setTimerSeconds(timerSeconds - 1);
                setSoundStop(timerSeconds - 2);
            }
            if (soundStop === 0) {
                return SoundPlay(Sound)
            }
        }, ONE_SECOND)
    }, [timerSeconds, button])

   return (
        <header>
            <div>
                <button               
                    onClick={() => ButtonChangeSeconds(setTimerSeconds, 25, "DarkTurquoise")} 
                    type="button" 
                    disabled={isActive}
                >   
                    Atividade
                </button>
                <button
                    onClick={() => ButtonChangeSeconds(setTimerSeconds, 5, 'Turquoise') } 
                    type="button" 
                    disabled={isActive}
                >
                    Intervalo
                </button>
                <button 
                    onClick={() => ButtonChangeSeconds(setTimerSeconds, 0)}
                    type="button" 
                    disabled={isActive}
                >
                    Stop
                </button>
            </div>
            <span>{timerSeconds}</span>
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