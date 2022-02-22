import __html from "./Info.html";
var template = { __html: __html };

const Upload = () => {
    return <div dangerouslySetInnerHTML={template} />;
};

export default Upload;

