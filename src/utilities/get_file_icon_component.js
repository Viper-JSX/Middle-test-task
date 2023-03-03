function getFileIconComponent (extension="") {
    let icon;

    switch (extension) {
        case ".txt": {
            icon = ".txt"
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