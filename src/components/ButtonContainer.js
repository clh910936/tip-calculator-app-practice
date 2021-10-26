import "../styles/ButtonContainer.css";
import TextInputForm from "./TextInputForm";

function ButtonContainer(props) {
    const buttonsArr = getButtons(props.onClick, props.tip);
    return (
        <grid className="buttonContainer">
            {buttonsArr}
            <TextInputForm className="buttonContainerChild" label="" id="customTip" onChange={(value) => props.onClick(value/100)}/>
        </grid>
    );
}

function getButtons(onClick, currentTip) {
    const tips = [5, 10, 15, 25, 50];
    const buttons = [];
    tips.forEach(tip => {
        const selectedClass = tip === (currentTip*100) ? "selected" : "";
        buttons.push(<button className={`${selectedClass} buttonContainerChild`} onClick={() => onClick(tip/100)}>{tip}%</button>)
    });
    return buttons;
}

export default ButtonContainer;