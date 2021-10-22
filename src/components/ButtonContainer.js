import "../styles/ButtonContainer.css";
import TextInputForm from "./TextInputForm";

function ButtonContainer() {
    const buttonsArr = getButtons();
    return (
        <div className="buttonContainer">
            {buttonsArr}
            <TextInputForm className="buttonContainerChild" label="" id="customTip"/>
        </div>
    );
}

function getButtons() {
    const tips = [5, 10, 15, 25, 50];
    const buttons = [];
    tips.forEach(tip => {
        buttons.push(<button className="buttonContainerChild">{tip}%</button>)
    });
    return buttons;
}

export default ButtonContainer;