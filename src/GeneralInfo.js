import React, {Component} from "react";

import Info from "./Components/Info";

class GeneralInfo extends Component {
    render() {
        return (
            <div>
                <h1>General Info</h1>
                <Info title="Name" content="Chloe Lehnert"/>
                <Info title="GitHub" link="https://github.com/nlehnert1"/>
                <Info title="LinkedIn" content="Coming soon!"/>
                <Info title="Languages &amp; Frameworks"/>
            </div>
        );
    }
}

export default GeneralInfo;