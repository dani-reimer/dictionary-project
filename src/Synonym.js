import React from "react";
import "./Synonym.css";

export default function Synonym(props) {
    if (props.synonym) {
        return (
            <div className="similar">
                similar: {props.synonym.map(function (synonym, index) {
                    return (
                        <ul className="synonym">
                        <li key={index}>{synonym}</li>
                        </ul>);
                })}
            </div>

        );
    } else {
        return null;
    }
}