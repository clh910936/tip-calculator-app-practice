import "../styles/AmountBlock.css";

function AmountBlock(props)  {
    const { valueDisplayed, label, subLabel } = props;
    return (
        <div className="AmountBlock">
            <div className="column">
                <p className="bigLabel">{label}</p>
                <small className="subLabel">{subLabel}</small>
            </div>
            <div className="column">
                <p className="value">${valueDisplayed.toFixed(2)}</p>
            </div>
        </div>
    )
}

export default AmountBlock;