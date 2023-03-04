import { faFolder } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

function FolderItem ({ folder }) {
    return(
        <div className="folder-item">
            <Link to={`folders/${folder.name.toLowerCase()}`}>
                <span className="folder-icon">
                    <FontAwesomeIcon icon={ faFolder } />
                </span>
                <span className="folder-name">{ folder.name }</span>
            </Link>
        </div>
    );
}

export default FolderItem;