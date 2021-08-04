import "./button-primary.css";

const ButtonPrimary = ({ children }) => {
    return (
        <button className="button-primary">
            { children }
        </button>
    );
}

export default ButtonPrimary;