import { Link } from "react-router-dom";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function FolderControl () {
    return( 
        <nav className="folder-control">
            <ul>
                <li className="close-button">
                    <Link to="/">
                        <FontAwesomeIcon icon={ faXmark } />
                    </Link>
                </li>
            </ul>
        </nav>
    );
}

export default FolderControl;