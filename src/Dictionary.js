import React, { useState } from "react";
import axios from "axios";
import Results from "./Results.js";
import "./Dictionary.css";

export default function Dictionary() {
    let [keyword, setKeyword] = useState("");
    let [results, setResults] = useState(null);

    function handleResponse(response) {
        setResults(response.data[0]);
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
            <div className="input-group mb-3">
            <form className="row g-1" onSubmit={search}>
                <input type="search" className="form-control" placeholder="type something..." aria-label="Recipient's username" aria-describedby="button-addon2" onChange={handleKeywordChange}/><button className="btn btn-primary shadow mb-3" id="button-addon2">Search</button> 
            </form></div>
            <Results results={results}/>
       </div>
   ) 
}