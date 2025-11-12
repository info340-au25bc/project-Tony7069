import { use } from "react";
import { useNavigate } from "react-router-dom";

export function Header(props) {
    return (
        <div className="navbar">
            <div className="homepage-nav-container">
                <h1>InternShipper</h1>
                <div className="homepage-nav-buttons">
                    <ButtonHamburger />
                    <ButtonAdd />
                </div>
                <SearchBar />   
            </div>
        </div>

    )
}

function ButtonAdd(props) {
    const navigate = useNavigate();
    return (
        <button onClick={() => navigate("/create-post")}>
            Add
        </button>
    )
}

function ButtonHamburger(props) {
    const navigate = useNavigate();
    return (
        <button onClick={() => navigate("/saved-posts")}>
            HM
        </button>
    )
}

function SearchBar(props) {
    return (
        <form className="search-bar">
            <input type="text" placeholder="Search..." />
        </form>
    )
}