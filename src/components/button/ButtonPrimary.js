import { Button } from "@mui/material";
import "./button-primary.css";

const ButtonPrimary = ({ children, className="" }) => {
    return (
        <Button className={`${className} button-primary`}>
            { children }
        </Button>
    );
}

export default ButtonPrimary;