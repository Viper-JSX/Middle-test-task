import { Link } from "react-router-dom";

function FileItem ({ file }) {
    return(
        <div className="fileItem">
            <Link>
                <br />
                <b>File</b>
                <br />
                { file.name }
            </Link>
        </div>
    );
}

export default FileItem;