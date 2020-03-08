import React, {Component} from "react";

function Project(props) {
    return <React.Fragment>
        <h2>
            {props.title}
        </h2>
        <h3>
            {props.dateRange}
        </h3>
        <p>
            {props.description}
        </p>
    </React.Fragment>
}

export default Project;