import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
    const [searchText, setSearchText] = useState("");
    const navigate = useNavigate();

    const handleChange = (event) => {
        const value = event.target.value;
        setSearchText(value);

        if (value) {
            navigate(`/?search=${value}`);
        } else {
            navigate("/"); 
        }
    };

    return (
        <input className="search-bar" type="text" value={searchText} onChange={handleChange} placeholder="Search for a country" />
    );
};

export default SearchBar;
