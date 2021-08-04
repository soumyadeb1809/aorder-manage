import "./card.css";

const Card = ({ children }) => {
    return (
        <div className="custom-card">
            { children }
        </div>
    );
}

export default Card;