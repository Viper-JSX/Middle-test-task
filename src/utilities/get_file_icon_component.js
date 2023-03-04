import { faFileText, faFileImage, faFilePdf, faFileWord, faFileExcel  } from "@fortawesome/free-solid-svg-icons";



function getFileIconComponent (extension="") {
    let icon;

    switch (extension) {
        case ".txt": {
            icon = { color: "black", icon: faFileText };
            break;
        }

        case ".jpeg": 
        case ".jpg": {
            icon = { color: "red", icon: faFileImage };
            break;
        }

        case ".png": {
            icon = icon = { color: "red", icon: faFileImage };
            break;
        }

        case ".pdf": {
            icon = icon = { color: "red", icon: faFilePdf };
            break;
        }

        case ".docx":
        case ".doc": {
            icon = icon = { color: "blue", icon: faFileWord };
            break;
        }

        case ".xlsx": {
            icon = icon = { color: "green", icon: faFileExcel };
            break;
        }

        // case ".txt": {
        //     icon = icon = { color: "black", icon: faFileText };
        //     break;
        // }

        default: {
            icon =  { color: "black", icon: "unknown" };
        }
    }

    return icon;
}

export default getFileIconComponent;