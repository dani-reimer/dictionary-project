import React, { useState } from "react";
import axios from "axios";
import Results from "./Results.js";
import Photos from "./Photos.js";
import "./Dictionary.css";



export default function Dictionary() {
    let [keyword, setKeyword] = useState("");
    let [results, setResults] = useState(null);
    let [photos, setPhotos] = useState(null);

    function handleResponse(response) {
        setResults(response.data[0]);
    }

    function handlePexelsResponse(response) {
        setPhotos(response.data.photos);
    }
    function search(event) {
        event.preventDefault();
        // documentation: https://dictionaryapi.dev/
        let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
        axios.get(apiUrl).then(handleResponse);
        // documentation: https://www.pexels.com/api/documentation/
        let pexelsApiKey = "563492ad6f91700001000001bfa4f7b0f89c4ea597f626bf76bb5806";
        let headers = { Authorization: `Bearer ${pexelsApiKey}` };
        const pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=9`
        axios.get(pexelsApiUrl, { headers: headers }).then(handlePexelsResponse);
    }
    function handleKeywordChange(event) {
        setKeyword(event.target.value);
    }
    return (
        <div className="dictionary">
            <section className="input-group mb-3">
            <form className="form row g-1" onSubmit={search}>
                <input type="search" className="form-control" placeholder="type a word..." aria-label="search-button" aria-describedby="button-addon2" onChange={handleKeywordChange}/><button className="btn btn-primary shadow mb-3" id="button-addon2">Search</button> 
            </form></section>
            <Results results={results} />
            <Photos photos={photos} />
       </div>
   ) 
}