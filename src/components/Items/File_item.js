import { Link } from "react-router-dom";
import FileIcon from "./File_icon";

function FileItem ({ file }) {
    const itemTitle = `Created: ${ file.atime }\nSize: ${ file.size }\nModified: ${ file.mtime }
    `;

    return(
        <div className="fileItem" title={itemTitle}>
            <Link>
                <FileIcon fileName={file.name} />
                { file.name }
            </Link>
        </div>
    );
}

export default FileItem;