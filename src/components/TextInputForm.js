import "../styles/TextInputForm.css";

function TextInputForm(props) {
    var label = props.label;
    var id = props.id;
    var image = props.image;
    var className = props.className ? props.className : "";

    var imageContent = image ? <img src={image} className="icon" alt="Dollar Sign" /> : null;
    return (
        <div className={className}>
            <label for={id}>{label}</label>
            <div className="inputContainer">
                <input type="text" id={id} />
                
                {imageContent}
            </div>
        </div>
    );
}

export default TextInputForm;
