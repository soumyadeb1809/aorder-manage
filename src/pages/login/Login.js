import ButtonPrimary from "../../components/button/ButtonPrimary";
import Card from "../../components/card/Card";
import TextInput from "../../components/form-input/TextInput";
import "./login.css";

const Login = () => {
    return(
        <div className="login-main">
            <div className="login-form-card-c">
                <Card>
                    <form className="login-form">
                        <div className="login-form-header">
                            <h3 className="welcome-txt">Welcome back!</h3>
                            <p className="welcome-instruction">Please login to access your account</p>
                        </div>
                        <TextInput 
                            label="Email address"
                            placeholder="e.x. john@aorder.com"
                            type="email"
                        />

                        <TextInput 
                            label="Password"
                            placeholder="your password"
                            type="password"
                        />

                        <div className="login-btn">
                            <ButtonPrimary>
                                Login
                            </ButtonPrimary>
                        </div>
                    </form>
                </Card>
            </div>
        </div>
    );
}

export default Login;