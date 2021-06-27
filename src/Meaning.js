import React from "react";
import "./Meaning.css";
import Example from "./Example.js";
import Synonym from "./Synonym.js";

export default function Meaning(props) {

    return (<div className="meaning">
        
        {props.meaning.definitions.map(function (definition, index) {
            return (
                <section key={index}>
                    <strong className="word">{props.word}</strong> (<em>{props.meaning.partOfSpeech}</em>)<strong>:</strong> {definition.definition}<p>
                        <Example example={definition.example} /></p>
                    <Synonym synonym={definition.synonyms} />
                </section>);
        })
        }
        
    </div>)
}