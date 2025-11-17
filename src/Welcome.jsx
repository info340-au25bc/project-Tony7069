import { useNavigate } from "react-router-dom";

export default function Welcome(props) {
    const username = props.username;
    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/");
    }

    console.log(username);

    return (
        <div className="welcome-page" onClick={handleClick}>
            <h1>Welcome! {username}</h1>
            <p>Click anywhere to continue</p>
        </div>
    )
}