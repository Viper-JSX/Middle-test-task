import { useSelector } from "react-redux";
import { useLocation, useParams } from "react-router";
import FileItem from "../Items/File_item";

function Folder () {
    const params = useParams();
    const folderName = params.foldername;
    const folders = useSelector((state) => state.folders.folders);
    const folder = folders[folderName];

    if (!folder) {
        return(
            <h2>No such folder</h2>
        );
    } 

    return(
        <div className="folder">
            <h2>{ folderName }</h2>
            {
                folder.files.map((file) => <FileItem file={file} key={`${folder.name}_${file.name}`} />)
            }
        </div>
    );
}

export default Folder;