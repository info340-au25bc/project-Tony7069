import { useNavigate } from "react-router-dom";

import { getDatabase, ref, set } from "firebase/database";


export function SearchBar(props) {
    const navigate = useNavigate();

    function handleSearch() {
        navigate("/homepage");
        props.search(event.target.value);
    }

    return (
        <form className="search-bar">
            <input type="text" placeholder="Search..." onChange={handleSearch}/>
        </form>
    )
}