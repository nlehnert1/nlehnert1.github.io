import React, {Component} from "react";

function WorkExperience(props) {
    return <React.Fragment>
        <h2>{props.title}</h2>
        <h3>{props.company}</h3>
        <p>{props.projectName}</p>
        <p>{props.dateRange}</p>
        <p>{props.description}</p>
    </React.Fragment>
}

export default WorkExperience;