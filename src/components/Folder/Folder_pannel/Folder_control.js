import { Link } from "react-router-dom";

function FolderControl () {
    return( 
        <nav className="folder-control">
            <ul>
                <li><Link to="/">X</Link></li>
            </ul>
        </nav>
    );
}

export default FolderControl;