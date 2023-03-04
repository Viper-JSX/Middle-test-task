import { useSelector } from "react-redux";
import { useLocation, useParams } from "react-router";
import { SORT_BY_CREATION_DATE, SORT_BY_NAME, SORT_BY_SIZE } from "../../various_things/constants";
import Container from "../Container/Container";
import FileItem from "../Items/File_item";
import FolderTopPanel from "./Folder_pannel/Folder_top_panel";

function Folder ({ handleFoldersSortCriteriaChange }) {
    const params = useParams();
    const folderName = params.foldername;
    const [ folders, sortCriteria ] = useSelector((state) => [ state.folders.folders, state.folders.sortBy]);
    const folder = folders[folderName]; //? JSON.parse(JSON.stringify(folders[folderName])) : null; //Remove all references to avoid state mutation during sorting


    if (!folder) {
        return(
            <h2>No such folder</h2>
        );
    } 

    let files = [...folder.files];

    switch (sortCriteria) {
        case SORT_BY_NAME: {
            files.sort((a, b) => a.name - b.name);
            break;
        }

        case SORT_BY_CREATION_DATE: {
            files.sort((a, b) => a.atime - b.atime);
            break;
        }

        case SORT_BY_SIZE: {
            files.sort((a, b) => b.size - a.size);
            break;
        }
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
                        files.map((file, index) => <FileItem file={file} fileIndex={index} key={`${folder.name}_${file.name}`} />)
                    }
                </Container>
            </div>
        </Container>
    );
}

export default Folder;