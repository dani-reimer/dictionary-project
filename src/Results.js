import React from "react";
import Meaning from "./Meaning.js";
import Phonetics from "./Phonetics.js";
import "./Results.css";

export default function Results(props) {
    
    if (props.results) {
        return (
            <div className="results">
                <section>
                    <h3 className="results-word">{props.results.word}
                        {props.results.phonetics.map(function (phonetics, index) {
                    return (
                        <div key={index} className="phonetics">
                            <Phonetics phonetics={phonetics} />
                            </div>
                    )
                })}
                            </h3>
                <div>
                    {props.results.meanings.map(function (meaning, index) {
                        return (
                            <div key={index}>
                            <Meaning meaning={meaning} word={props.results.word} />
                           </div> ) 
                    })}   
                </div></section>
            </div>);
    } else {
        return null;
    }
}