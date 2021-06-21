import React from "react";
import "./Meaning.css";

export default function Meaning(props) {
    return (<div className="meaning">
        <h4>{props.meaning.partOfSpeech}</h4>
        {props.meaning.definitions.map(function (definition, index) {
            return (
                <div key={index}>
                   <strong> {definition.definition}</strong>
                    <p className="meaning-example">
                      <em>{definition.example}</em>
                    </p>
                </div>);
        })
    }    </div>)
}