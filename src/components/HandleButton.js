export default function HandleButton(button, setButton, setButtonTitle) {
    if (button === false) {
        setButton(true);
        setButtonTitle("Pare");
    }else {
        setButton(false);
        setButtonTitle("Começar");
    }
}