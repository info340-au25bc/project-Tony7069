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
    return (
        <button>
            Add
        </button>
    )
}

function ButtonHamburger(props) {
    return (
        <button>
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