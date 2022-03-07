import React from "react";
import __html from "./Info.html";
import { useParams } from "react-router-dom";
var template = { __html: __html };

const Info = (props)=>{

    let { id } = useParams();

    return <p>{id}</p>

    // return <div dangerouslySetInnerHTML={template} />;
}


export default Info;

