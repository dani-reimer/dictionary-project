import React, { useState } from "react";
import "./Dictionary.css";

export default function Dictionary() {
    let [keyword, setKeyword] = useState("");
    function search(event) {
        event.preventDefault();
        alert(`Searching for ${keyword}`);
    }
    function handleKeywordChange(event) {
        setKeyword(event.target.value);
    }
    return (
        <div className="dictionary">
            <form onSubmit={search}>
                <input type="search" placeholder="type something..." onChange={handleKeywordChange}/>
                <input type="submit" className="btn btn-primary shadow" />
           </form>
       </div>
   ) 
}