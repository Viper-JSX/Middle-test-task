import { useLocation } from "react-router";

function Folder () {
    const location = useLocation();
    const folderName = location.search;
    console.log(folderName)

    return(
        <div className="folder">
            Folder
        </div>
    );
}

export default Folder;