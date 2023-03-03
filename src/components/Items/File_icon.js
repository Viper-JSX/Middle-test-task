import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import getFileExtension from "../../utilities/get_file_extension";
import getFileIconComponent from "../../utilities/get_file_icon_component";

function FileIcon ({ fileName }) {
    const fileExtension = getFileExtension(fileName);
    const icon = getFileIconComponent(fileExtension);
    console.log(fileExtension)
   

    return(
        <FontAwesomeIcon icon={icon} />
    );

}

export default FileIcon;