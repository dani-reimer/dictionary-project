import React from "react";

export default function Synonym(props) {
    if (props.synonym) {
        return (
            <div className="synonym">
                similar: {props.synonym.map(function (synonym, index) {
                    return (
                        <ul>
                            <li key={index}>{synonym}</li>
                        </ul>);
                })}
            </div>

        );
    } else {
        return null;
    }
}