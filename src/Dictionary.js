import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css";

export default function Dictionary() {
    let [keyword, setKeyword] = useState("");

    function handleResponse(response) {
        console.log(response.data);
    }
    function search(event) {
        event.preventDefault();
        // documentation: https://dictionaryapi.dev/
        let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
        axios.get(apiUrl).then(handleResponse);
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