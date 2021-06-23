import React from "react";
import "./Meaning.css";
import Example from "./Example.js";
import Synonym from "./Synonym.js";

export default function Meaning(props) {
    return (<div className="meaning">
        <h4 className="meaning-partOfSpeech">{props.meaning.partOfSpeech}</h4>
        {props.meaning.definitions.map(function (definition, index) {
            return (
                <div key={index}>
                    <strong>Definition:</strong> {definition.definition}<p>
                        <Example example={definition.example} /></p>
                    <Synonym synonym={definition.synonyms} />
                </div>);
        })
        }
        
    </div>)
}