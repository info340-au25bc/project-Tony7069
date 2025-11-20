import { useNavigate } from "react-router-dom";

export default function requireLogin(props) {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/");
    }

    return (
        <div className="welcome-page require-login-page" onClick={handleClick}>
            <h1>Please Login Fist!</h1>
            <p>Click anywhere to continue</p>
        </div>
    )
}