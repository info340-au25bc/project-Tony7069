import { useNavigate } from "react-router-dom";

export function SearchBar(props) {
    const navigate = useNavigate();

    function handleSearch() {
        navigate("/");
        props.search(event.target.value);
    }

    return (
        <form className="search-bar">
            <input type="text" placeholder="Search..." onChange={handleSearch}/>
        </form>
    )
}