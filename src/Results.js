import React from "react";
import Meaning from "./Meaning.js";
import "./Results.css";

export default function Results(props) {
    
    if (props.results) {
        return (
            <div className="results">
                <h3>{props.results.word} </h3>
                ({props.results.phonetics[0].text})
                <p>
                    {props.results.meanings.map(function (meaning, index) {
                        return (
                            <div key={index}>
                            <Meaning meaning={meaning} />
                           </div> ) 
                    })}   
                </p>
            </div>);
    } else {
        return null;
    }
}