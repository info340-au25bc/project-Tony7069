import { Header } from './Homepage/Header.jsx';
import HomePageBody from './Homepage/HomePageBody.jsx'
import { useState } from "react";

export default function Homepage(props) {
    const [enteredTag, setEnteredTag] = useState('');
    const [filterOrSearch, setFilterOrSearch] = useState(true);
    const [switchButtonDisplay, setSwitchButtonDisplay] = useState("Keyword");

    function handleSwitch() {
        setFilterOrSearch(!filterOrSearch)
        if (switchButtonDisplay === "Keyword") {
            setSwitchButtonDisplay("Filter Tags");
        } else {
            setSwitchButtonDisplay("Keyword");
        }
        // console.log(filterOrSearch);
    }

    function search(tag) {
        setEnteredTag(tag);
        // console.log(enteredTag);
    }

    // console.log("app" + props.currentUser);
    return (
        <div className="homepage">
            <Header currentUser={props.currentUser} search={search} filterOrSearch={filterOrSearch} handleSwitch={handleSwitch} switchButtonDisplay={switchButtonDisplay}/>
            <HomePageBody enteredTag={enteredTag} filterOrSearch={filterOrSearch} />
        </div>
    )
}

