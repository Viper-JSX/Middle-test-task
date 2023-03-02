import { Link } from "react-router-dom";

function FileItem ({ file }) {
    return(
        <Link>
            <br />
            <b>File</b>
            <br />
            { file.name }
        </Link>
    );
}

export default FileItem;