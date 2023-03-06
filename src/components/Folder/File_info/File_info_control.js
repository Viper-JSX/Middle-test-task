import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function FileInfoControl ({ handleFileClose }) {
    return(
        <nav className="file-info-control">
            <ul>
                <li className="close-button" onClick={handleFileClose}>
                    <Link to="#">
                        <FontAwesomeIcon icon={ faXmark } />
                    </Link>
                </li>
            </ul>
        </nav>
    );
}

export default FileInfoControl;