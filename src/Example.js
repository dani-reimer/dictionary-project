import React from "react";

export default function Example(props) {
          if (props.example) {
            return (<p className="meaning-example">
                    "{props.example}"
                    </p> )
        } else {
            return null;
                    }
}