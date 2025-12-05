import { useNavigate } from "react-router-dom";

import { SearchBar } from "../Homepage/SearchBar";

export function SpecialNav(props) {
    const navigate = useNavigate();
    return (
        <section className="navbar">
            <div className="homepage-nav-container">
                <h1>InternShipper</h1>
                {/* <SearchBar /> */}
                <div className="post-home-button">
                    <a>
                    <button onClick={() => navigate("/homepage")}>Home</button>
                    </a>
                </div>
            </div>
        </section>
    )
}