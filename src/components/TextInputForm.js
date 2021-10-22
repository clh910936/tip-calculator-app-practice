import "../styles/TextInputForm.css";
import dollarSign from "../images/icon-dollar.svg";

function TextInputForm(props) {
    var label = props.label;
    var id = props.id;
    return (
        <>
            <label for={id}>{label}</label>
            <div className="inputContainer">
                <input type="text" id={id} />
                <img src={dollarSign} className="icon" alt="Dollar Sign" />
            </div>
        </>
    );
}

export default TextInputForm;
