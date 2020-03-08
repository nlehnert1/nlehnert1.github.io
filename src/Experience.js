import React, {Component} from "react";
import Project from "./Components/Project";
import WorkExperience from "./Components/WorkExperience";

class Experience extends Component {
    render() {
        return (
            <div>
                <h1>Work Experience</h1>
                    <WorkExperience title="Unity Programmer"
                      company="University of Nebraska-Lincoln"
                      projectName="Agpocalypse 2050"
                      dateRange="06/2019 - Present"
                      description="I was responsible for creating C# scripts to improve the functionality of the game"/>
                    <Project 
                    title="NDOT NTIP System"
                    dateRange="August 2019 - May 2020"
                    description="Worked as a developer for the Nebraska Department of Transportation (NDOT)'s Nebraska Transportation 
                    Information Portal (NTIP) system through the Raikes School Design Studio. Helped to implement logic in the Crash 
                    Diagrammer, including crash placement within an intersection and the functionality to retrieve OnBase report documents. 
                    Built most of the frontend for the Federal Motor Carrier data integration."/>
            </div>
        );
    }
}

export default Experience;