import { useState } from "react";
import { useNavigate } from "react-router-dom";

export function Header(props) {
    return (
        <div className="navbar">
            <div className="homepage-nav-container">
                <h1>InternShipper</h1>
                <div className="homepage-nav-buttons">
                    <ButtonHamburger />
                    <ButtonAdd />
                    <SwitchButton handleSwitch={props.handleSwitch} switchButtonDisplay={props.switchButtonDisplay}/>
                </div>
                <SearchBar search={props.search}/>   
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
            ≡
        </button>
    )
}

function SwitchButton(props) {
    return (
        <button onClick={props.handleSwitch}>
            {props.switchButtonDisplay}
        </button>
    )
}

function SearchBar(props) {
    // control structure?
    function handleSearch(event) {
        props.search(event.target.value);
    }

    return (
        <form className="search-bar" onSubmit={e => e.preventDefault()}>
            <input type="text" placeholder="Search..." onChange={handleSearch}/>
        </form>
    )
}