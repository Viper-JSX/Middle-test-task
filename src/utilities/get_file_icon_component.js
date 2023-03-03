import { faFileText } from "@fortawesome/free-solid-svg-icons";
import { lazy } from "react";

function getFileIconComponent (extension="") {
    let icon;

    switch (extension) {
        case ".txt": {
            icon = lazy(() => import("@fortawesome/free-solid-svg-icons"))
            break;
        }

        case ".jpeg": 
        case ".jpg": {
            icon = ".jpeg"
            break;
        }

        case ".png": {
            icon = ".png"
            break;
        }

        case ".pdf": {
            icon = lazy(() => import("@fortawesome/free-solid-svg-icons"))
            break;
        }

        case ".txt": {
            icon = ".txt"
            break;
        }

        case ".txt": {
            icon = ".txt"
            break;
        }

        case ".txt": {
            icon = ".txt"
            break;
        }

        default: {
            icon = "unknown";
        }
    }

    return icon;
}

export default getFileIconComponent;