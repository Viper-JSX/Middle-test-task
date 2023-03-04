import { useSelector } from "react-redux";
import { useLocation, useParams } from "react-router";
import Container from "../Container/Container";
import FileItem from "../Items/File_item";
import FolderTopPanel from "./Folder_pannel/Folder_top_panel";

function Folder ({ handleFoldersSortCriteriaChange }) {
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
        <Container additionalClassNames={[ "folder-wrapper" ]}>
            <div className="folder">
                <FolderTopPanel 
                    folderName={folder.name}
                    handleFoldersSortCriteriaChange={handleFoldersSortCriteriaChange}
                />

                <Container additionalClassNames={[ "folder__files-container" ]}>
                    {
                        folder.files.map((file, index) => <FileItem file={file} fileIndex={index} key={`${folder.name}_${file.name}`} />)
                    }
                </Container>
            </div>
        </Container>
    );
}

export default Folder;