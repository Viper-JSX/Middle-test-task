import { faFolder } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Container from "../Container/Container";
import { Link } from "react-router-dom";

function FolderItem ({ folder }) {
    return(
        <div className="folder-item">
            <Container additionalClassNames={[ "item-content" ]} >
                <Link to={`folders/${folder.name.toLowerCase()}`}>
                    <Container additionalClassNames={[ "folder-icon-container" ]}>
                        <span className="folder-item__icon">
                            <FontAwesomeIcon icon={ faFolder } />
                        </span>
                    </Container>
                    <span className="folder-item__name">{ folder.name }</span>
                </Link>
            </Container>
        </div>
    );
}

export default FolderItem;