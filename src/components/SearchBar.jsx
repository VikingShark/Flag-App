import { useState } from "react";


const SearchBar = () => {
    const [searchText, setSearchText] = useState("");

    return ( 
        <input type="text" onChange={searchText} />
     );
}
 
export default SearchBar;