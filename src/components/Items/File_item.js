import bytes from "bytes";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import Container from "../Container/Container";
import FileIcon from "./File_icon";

function FileItem ({ file }) {
    const createdDate =  new Date(file.atime);
    const modifiedDate = new Date(file.mtime);
    const createdDateString = `${ createdDate.toDateString() } - ${ String(createdDate.getHours()).padStart(2, "0") }:${ String(createdDate.getMinutes()).padStart(2, "0") }`;
    const modifiedDateString = `${ modifiedDate.toDateString() } - ${ String(modifiedDate.getHours()).padStart(2, "0") }:${ String(modifiedDate.getMinutes()).padStart(2, "0")}`;

    const size = bytes(file.size, { decimalPlaces: 0 });

    const itemTitle = `Created: ${ createdDateString }\nSize: ${ size }\nModified: ${ modifiedDateString }`;

    return(
        <div className="file-item" title={itemTitle} >
        
            <Container additionalClassNames={[ "file-item__content" ]}>
                <Link>
                    <FileIcon fileName={file.name} />
                    { file.name }
                </Link>
            </Container>
        </div>
    );
}

export default FileItem;