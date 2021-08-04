import "./text-input.css";

const TextInput = ({
    label,
    placeholder,
    type
}) => {
    return (
        <div className="text-input-c mb-3">
            <label className="form-label">{ label }</label>
            <input type={ type } className="text-input form-control" placeholder={ placeholder }></input>
        </div>
    );
}

export default TextInput;