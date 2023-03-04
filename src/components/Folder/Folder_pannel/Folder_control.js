import { Link } from "react-router-dom";

function FolderControl () {
    return( 
        <nav className="folder-control">
            <ul>
                <li className="close-button"><Link to="/">X</Link></li>
            </ul>
        </nav>
    );
}

export default FolderControl;