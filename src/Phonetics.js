import React from "react";

export default function Phonetics(props) {
    return (
        <div>
            <a href={props.phonetics.audio} target="_blank" rel="noreferrer">{props.phonetics.text}</a>
            <br />
            
        </div>
    )
}