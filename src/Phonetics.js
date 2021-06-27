import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVolumeUp } from '@fortawesome/free-solid-svg-icons'
import "./Phonetics.css";

const sound = <FontAwesomeIcon icon={faVolumeUp} />

export default function Phonetics(props) {
    return (
        <div>
          <a href={props.phonetics.audio} target="_blank" rel="noreferrer">{sound} {props.phonetics.text}</a>
            <br />
            
        </div>
    )
}