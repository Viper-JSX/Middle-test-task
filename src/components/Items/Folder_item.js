import { Link } from "react-router-dom";

function FolderItem ({ folder }) {
    return(
        <Link>{ folder.name }</Link>
    );
}

export default FolderItem;