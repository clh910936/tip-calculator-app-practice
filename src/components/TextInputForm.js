import "../styles/TextInputForm.css";

function TextInputForm(props) {
    var { label, id, image, className } = props;
    var finalClassName = className ? className : "";

    var imageContent = image ? <img src={image} className="icon" alt="Dollar Sign" /> : null;
    return (
        <div className={finalClassName} id={id}>
            <label for={id}>{label}</label>
            <div className="inputContainer">
                <input type="text" onChange={(e) => props.onChange(e.target.value)}/>
                
                {imageContent}
            </div>
        </div>
    );
}

export default TextInputForm;
