import bytes from "bytes";
import { Link } from "react-router-dom";
import Container from "../Container/Container";
import FileIcon from "./File_icon";

function FileItem ({ file, handleFileOpen, handleFileClose }) {
    const createdDate =  new Date(file.atime);
    const modifiedDate = new Date(file.mtime);
    const createdDateString = `${ createdDate.toDateString() } - ${ String(createdDate.getHours()).padStart(2, "0") }:${ String(createdDate.getMinutes()).padStart(2, "0") }`;
    const modifiedDateString = `${ modifiedDate.toDateString() } - ${ String(modifiedDate.getHours()).padStart(2, "0") }:${ String(modifiedDate.getMinutes()).padStart(2, "0")}`;

    const size = bytes(file.size, { decimalPlaces: 0 });
    const itemTitle = `Created: ${ createdDateString }\nSize: ${ size }\nModified: ${ modifiedDateString }`;

    return(
        <div className="file-item" title={itemTitle} onClick={() => handleFileOpen({ fileInfo: { name: file.name,  size, createdDate: createdDateString, modifiedDate: modifiedDateString } })} >
            <Container additionalClassNames={[ "item-content" ]}>
                <Link>
                    <span className="file-item__icon">
                        <FileIcon fileName={file.name} />
                    </span>
                    <span className="file-item__name">{ file.name }</span>
                </Link>
            </Container>
        </div>
    );
}

export default FileItem;