import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import getFileExtension from "../../utilities/get_file_extension";
import getFileIconComponent from "../../utilities/get_file_icon_component";
import Container from "../Container/Container";

function FileIcon ({ fileName }) {
    const fileExtension = getFileExtension(fileName);
    const icon = getFileIconComponent(fileExtension);
   

    return(
        <Container additionalClassNames={[ "file-icon-container" ]}>
            <FontAwesomeIcon  color={icon.color} icon={icon.icon} />
        </Container>
    );

}

export default FileIcon;