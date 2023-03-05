import { useState } from "react";
import { useSelector } from "react-redux";
import { useLocation, useParams } from "react-router";
import { SORT_BY_CREATION_DATE, SORT_BY_NAME, SORT_BY_SIZE } from "../../various_things/constants";
import Container from "../Container/Container";
import FileItem from "../Items/File_item";
import FolderFileInfoPanel from "./Folder_pannel/Folder_file_info_panel";
import FolderTopPanel from "./Folder_pannel/Folder_top_panel";

function Folder ({ handleFoldersSortCriteriaChange }) {
    const params = useParams();
    const folderName = params.foldername;
    const [ folders, sortCriteria ] = useSelector((state) => [ state.folders.folders, state.folders.sortBy]);
    const folder = folders[folderName]; //? JSON.parse(JSON.stringify(folders[folderName])) : null; //Remove all references to avoid state mutation during sorting
    const [ currentHoveredFile, setCurrentHoveredFile ] = useState(null);
    

    if (!folder) {
        return(
            <h2>No such folder</h2>
        );
    } 

    let files = [...folder.files];
    console.log(files)

    files = [
            {
                "name": "ТЗ.docx",
                "type": "inode/x-empty",
                "size": 0,
                "atime": 1641977227,
                "mtime": 1641977231,
                "dev": 2049
            },
            {
                "name": "regions.xlsx",
                "type": "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
                "size": 10234,
                "atime": 1677985849,
                "mtime": 1641977227,
                "dev": 2049
            },
            {
                "name": "Гитарный буфер.pdf",
                "type": "application/pdf",
                "size": 448230,
                "atime": 1677985849,
                "mtime": 1641977229,
                "dev": 2049
            },
            {
                "name": "ТЗп.docx",
                "type": "inode/x-empty",
                "size": 0,
                "atime": 1641977227,
                "mtime": 1641977231,
                "dev": 2049
            },
            {
                "name": "regionss.xlsx",
                "type": "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
                "size": 10234,
                "atime": 1677985849,
                "mtime": 1641977227,
                "dev": 2049
            },
            {
                "name": "Гитарный буферр.pdf",
                "type": "application/pdf",
                "size": 448230,
                "atime": 1677985849,
                "mtime": 1641977229,
                "dev": 2049
            }
            
]
    

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


    function handleFolderFileHoverStart (file) {
        setCurrentHoveredFile(file);
    }

    function handleFolderFileHoverEnd (file) {
        setCurrentHoveredFile(null);
    }

    return(
        <Container additionalClassNames={[ "folder-wrapper" ]}>
            <div className="folder">
                <FolderTopPanel 
                    folderName={folder.name}
                    handleFoldersSortCriteriaChange={handleFoldersSortCriteriaChange}
                />

                <Container>
                    <Container additionalClassNames={[ "folder__files-container" ]}>
                        {
                            files.map((file, index) => 
                            <FileItem 
                                file={file} 
                                fileIndex={index} 
                                handleFolderFileHoverStart={handleFolderFileHoverStart}
                                handleFolderFileHoverEnd={handleFolderFileHoverEnd}

                                key={`${folder.name}_${file.name}`} 
                            />)
                        }
                    </Container>
                </Container>
                <FolderFileInfoPanel file={currentHoveredFile} filesCount={files.length} />
            </div>
        </Container>
    );
}

export default Folder;