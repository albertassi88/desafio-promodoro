export default function HandleButton(button, setButton, setButtonTitle, setIsActive) {
    if (button === false) {
        setButton(true);
        setButtonTitle("Pausar");
        setIsActive(true)
    }else {
        setButton(false);
        setIsActive(false)
        setButtonTitle("Começar");
    }
}