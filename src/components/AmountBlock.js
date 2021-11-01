import "../styles/AmountBlock.css";

function AmountBlock(props)  {
    const { valueDisplayed, label, subLabel } = props;
    const cleanedValue = isValidValue(valueDisplayed) ? `$${valueDisplayed.toFixed(2)}` : '';
    return (
        <div className="AmountBlock">
            <div className="column">
                <p className="bigLabel">{label}</p>
                <small className="subLabel">{subLabel}</small>
            </div>
            <div className="column">
                <p className="value">{cleanedValue}</p>
            </div>
        </div>
    )
}

function isValidValue(input) {
    return (input && isFinite(input));
}

export default AmountBlock;