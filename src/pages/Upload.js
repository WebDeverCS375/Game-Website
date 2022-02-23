import InnerHTML from 'dangerously-set-html-content'
import React from 'react';
import __html from "./upload.html";



class Upload extends React.Component {
    render() {
        return <InnerHTML html={__html} />;
    }
};

export default Upload;

