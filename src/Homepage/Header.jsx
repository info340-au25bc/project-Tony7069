import { useState } from "react";
import { useNavigate } from "react-router-dom";

// Material UI for external library usage requirement
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

export function Header(props) {
    return (
        <div className="navbar">
            <div className="homepage-nav-container">
                <h1>InternShipper</h1>
                <div className="homepage-nav-buttons">
                    <ButtonHamburger currentUser={props.currentUser}/>
                    {/* <ButtonAdd /> */}
                    <SwitchButton handleSwitch={props.handleSwitch} switchButtonDisplay={props.switchButtonDisplay}/>
                </div>
                <SearchBar filterOrSearch={props.filterOrSearch} search={props.search}/>   
            </div>
        </div>

    )
}

// function ButtonAdd(props) {
//     const navigate = useNavigate();
//     return (
//         <button onClick={() => navigate("/create-post")}>
//             Add
//         </button>
//     )
// }

// All tools in this section are not tought in class. All tools in this seciton are learned from https://mui.com/material-ui/getting-started/
// AI was NOT used to write or help to write this section
function ButtonHamburger(props) {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const navigate = useNavigate();

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const goTo = (path) => {
        if (props.currentUser !== '') {
            navigate(path);
            console.log(props.currentUser);
        } else {
            navigate("/require-login");
        }
        handleClose();
    };

    return (
        <>
            <IconButton
                onClick={handleClick}
                size="small"
                sx={{
                    color: "black",
                    bgcolor: "#526af5ff",
                    borderRadius: "0.7rem",
                    "&:hover": { 
                        bgcolor: "white",
                        color: "black"
                    }
                }}
            >
                <MenuIcon />
            </IconButton>

            <Menu
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                transformOrigin={{ vertical: "top", horizontal: "right" }}
            >
                <MenuItem onClick={() => goTo("/profile")}>
                    Profile
                </MenuItem>

                <MenuItem onClick={() => goTo("/saved-posts")}>
                    Saved Posts
                </MenuItem>
                <MenuItem onClick={() => goTo("/create-post")}>
                    Add New Post
                </MenuItem>
                <MenuItem onClick={() => goTo("/underconstruction")}>
                    Security&Privacy
                </MenuItem>
                <MenuItem onClick={() => goTo("/underconstruction")}>
                    Tags
                </MenuItem>
                 <MenuItem onClick={() => goTo("/underconstruction")}>
                    Recent Activities
                </MenuItem>
            </Menu>
        </>
    );
}

function SwitchButton(props) {
    return (
        <button onClick={props.handleSwitch}>
            {props.switchButtonDisplay}
        </button>
    )
}

function SearchBar(props) {
    console.log(props.filterOrSearch);

    let placeholder = "Search based on keywords";
    if (props.filterOrSearch === false) {
        placeholder = "Search based on tags";
    }

    // control structure?
    function handleSearch(event) {
        props.search(event.target.value);
    }

    return (
        <form className="search-bar" onSubmit={e => e.preventDefault()}>
            <input type="text" placeholder={placeholder} onChange={handleSearch}/>
        </form>
    )
}