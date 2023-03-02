import { useSelector } from "react-redux";
import { useLocation, useParams } from "react-router";

function Folder () {
    const params = useParams();
    const folderName = params.foldername;
    const folders = useSelector((state) => state.folders.folders);
    //const folder = folders.find((folder) => folder.name === folderName);
    const folder = null;
    console.log(folders)

    if (!folder) {
        return(
            <h2>No such folder</h2>
        );
    } 

    return(
        <div className="folder">
            Folder { folderName };
        </div>
    );
}

export default Folder;