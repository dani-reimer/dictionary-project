import React from "react";

export default function Synonym(props) {
    if (props.synonym) {
        return (
            <div className="synonym">
                similar: {props.synonym}
            </div>

        );
    } else {
        return null;
    }
}