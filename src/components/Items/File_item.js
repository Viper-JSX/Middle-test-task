import { Link } from "react-router-dom";
import FileIcon from "./File_icon";

function FileItem ({ file }) {
    return(
        <div className="fileItem">
            <Link>
                <br />
                <b>File</b>
                <br />
                <FileIcon fileName={file.name} />
                <br />
                { file.name }
            </Link>
        </div>
    );
}

export default FileItem;