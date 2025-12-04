import React from "react"; // changed to ensure React is in scope for JSX

export function SearchBar(props) {
    function handleChange(e) {
        if (typeof props.search === 'function') props.search(e.target.value); // call parent search prop with input value
    }

    return (
        <>
            {/* prevent default submit so page doesnt reload */}
            <form className="search-bar" onSubmit={(e) => e.preventDefault()}>
                <input type="text" placeholder="Search..." onChange={handleChange} />{/* fixed to call handleChange on input */}
            </form>
        </>
    );
}