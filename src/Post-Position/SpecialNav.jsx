import { useNavigate } from "react-router-dom";

export function SpecialNav(props) {
    const navigate = useNavigate();
    return (
        <section className="navbar">
            <div className="homepage-nav-container">
                <h1>InternShipper</h1>
                <form className="search-bar">
                    <input type="text" placeholder="Search..." />
                </form>
                <div className="post-home-button">
                    <a>
                    <button onClick={() => navigate("/")}>Home</button>
                    </a>
                </div>
            </div>
        </section>
    )
}