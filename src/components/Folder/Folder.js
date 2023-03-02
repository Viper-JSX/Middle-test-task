import { useSelector } from "react-redux";
import { useLocation, useParams } from "react-router";

function Folder () {
    const params = useParams();
    const folderName = params.foldername;
    const folders = useSelector((state) => state.folders.folders);
    const folder = folders[folderName];
    console.log(folder, folderName)

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