import { useNavigate } from "react-router-dom";

export default function UnderConstruction(props) {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/homepage");
    }

    return (
        // className doesn't matter...
        <div className="underconstruction-page" onClick={handleClick}>
            <h1>This function is under construction, please come back later!</h1>
            <p>This is not part of the 2.5 functions</p>
            <p>Click anywhere to continue</p>
        </div>
    )
}