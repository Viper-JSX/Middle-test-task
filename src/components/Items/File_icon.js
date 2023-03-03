import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import getFileExtension from "../../utilities/get_file_extension";
import getFileIconComponent from "../../utilities/get_file_icon_component";

function FileIcon ({ fileName }) {
    const fileExtension = getFileExtension(fileName);
    const icon = getFileIconComponent(fileExtension);
   

    return(
        <FontAwesomeIcon  color={icon.color} icon={icon.icon} />
    );

}

export default FileIcon;