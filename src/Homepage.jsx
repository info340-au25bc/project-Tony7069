import { Header } from './Homepage/Header.jsx';
import HomePageBody from './Homepage/HomePageBody.jsx'
import { useState } from "react";

export default function Homepage(props) {
    const [enteredTag, setEnteredTag] = useState('');

    function search(tag) {
        setEnteredTag(tag);
        // console.log(enteredTag);
    }

    return (
        <div className="homepage">
            <Header search={search}/>
            <HomePageBody allAddedOpportunities={props.allAddedOpportunities} enteredTag={enteredTag}/>
        </div>
    )
}

