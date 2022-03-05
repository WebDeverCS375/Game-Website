import React from "react";
import __html from "./Info.html";
var template = { __html: __html };

class Info extends React.Component {
    render() {
        return <div dangerouslySetInnerHTML={template} />;
    };

}


export default Info;

