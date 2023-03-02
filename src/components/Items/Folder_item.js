import { Link } from "react-router-dom";

function FolderItem ({ folder }) {
    return(
        <Link to={`folders/${folder.name.toLowerCase()}`}>{ folder.name }</Link>
    );
}

export default FolderItem;