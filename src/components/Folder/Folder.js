import { useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router";
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

    files=[
            {
                "name": "catalog_2018.pdf",
                "type": "application/pdf",
                "size": 11997202,
                "atime": 1678083238,
                "mtime": 1641977229,
                "dev": 2049
            },
            {
                "name": "SIP-line Trunk VoIP FAQ v1 0.doc",
                "type": "application/msword",
                "size": 488448,
                "atime": 1678026625,
                "mtime": 1641977227,
                "dev": 2049
            },            {
                "name": "catalog_2018.pdf",
                "type": "application/pdf",
                "size": 11997202,
                "atime": 1678083238,
                "mtime": 1641977229,
                "dev": 2049
            },
            {
                "name": "SIP-line Trunk VoIP FAQ v1 0.doc",
                "type": "application/msword",
                "size": 488448,
                "atime": 1678026625,
                "mtime": 1641977227,
                "dev": 2049
            },            {
                "name": "catalog_2018.pdf",
                "type": "application/pdf",
                "size": 11997202,
                "atime": 1678083238,
                "mtime": 1641977229,
                "dev": 2049
            },
            {
                "name": "SIP-line Trunk VoIP FAQ v1 0.doc",
                "type": "application/msword",
                "size": 488448,
                "atime": 1678026625,
                "mtime": 1641977227,
                "dev": 2049
            },            {
                "name": "catalog_2018.pdf",
                "type": "application/pdf",
                "size": 11997202,
                "atime": 1678083238,
                "mtime": 1641977229,
                "dev": 2049
            },
            {
                "name": "SIP-line Trunk VoIP FAQ v1 0.doc",
                "type": "application/msword",
                "size": 488448,
                "atime": 1678026625,
                "mtime": 1641977227,
                "dev": 2049
            },            {
                "name": "catalog_2018.pdf",
                "type": "application/pdf",
                "size": 11997202,
                "atime": 1678083238,
                "mtime": 1641977229,
                "dev": 2049
            },
            {
                "name": "SIP-line Trunk VoIP FAQ v1 0.doc",
                "type": "application/msword",
                "size": 488448,
                "atime": 1678026625,
                "mtime": 1641977227,
                "dev": 2049
            },            {
                "name": "catalog_2018.pdf",
                "type": "application/pdf",
                "size": 11997202,
                "atime": 1678083238,
                "mtime": 1641977229,
                "dev": 2049
            },
            {
                "name": "SIP-line Trunk VoIP FAQ v1 0.doc",
                "type": "application/msword",
                "size": 488448,
                "atime": 1678026625,
                "mtime": 1641977227,
                "dev": 2049
            },            {
                "name": "catalog_2018.pdf",
                "type": "application/pdf",
                "size": 11997202,
                "atime": 1678083238,
                "mtime": 1641977229,
                "dev": 2049
            },
            {
                "name": "SIP-line Trunk VoIP FAQ v1 0.doc",
                "type": "application/msword",
                "size": 488448,
                "atime": 1678026625,
                "mtime": 1641977227,
                "dev": 2049
            },            {
                "name": "catalog_2018.pdf",
                "type": "application/pdf",
                "size": 11997202,
                "atime": 1678083238,
                "mtime": 1641977229,
                "dev": 2049
            },
            {
                "name": "SIP-line Trunk VoIP FAQ v1 0.doc",
                "type": "application/msword",
                "size": 488448,
                "atime": 1678026625,
                "mtime": 1641977227,
                "dev": 2049
            },            {
                "name": "catalog_2018.pdf",
                "type": "application/pdf",
                "size": 11997202,
                "atime": 1678083238,
                "mtime": 1641977229,
                "dev": 2049
            },
            {
                "name": "SIP-line Trunk VoIP FAQ v1 0.doc",
                "type": "application/msword",
                "size": 488448,
                "atime": 1678026625,
                "mtime": 1641977227,
                "dev": 2049
            },            {
                "name": "catalog_2018.pdf",
                "type": "application/pdf",
                "size": 11997202,
                "atime": 1678083238,
                "mtime": 1641977229,
                "dev": 2049
            },
            {
                "name": "SIP-line Trunk VoIP FAQ v1 0.doc",
                "type": "application/msword",
                "size": 488448,
                "atime": 1678026625,
                "mtime": 1641977227,
                "dev": 2049
            },            {
                "name": "catalog_2018.pdf",
                "type": "application/pdf",
                "size": 11997202,
                "atime": 1678083238,
                "mtime": 1641977229,
                "dev": 2049
            },
            {
                "name": "SIP-line Trunk VoIP FAQ v1 0.doc",
                "type": "application/msword",
                "size": 488448,
                "atime": 1678026625,
                "mtime": 1641977227,
                "dev": 2049
            },            {
                "name": "catalog_2018.pdf",
                "type": "application/pdf",
                "size": 11997202,
                "atime": 1678083238,
                "mtime": 1641977229,
                "dev": 2049
            },
            {
                "name": "SIP-line Trunk VoIP FAQ v1 0.doc",
                "type": "application/msword",
                "size": 488448,
                "atime": 1678026625,
                "mtime": 1641977227,
                "dev": 2049
            },            {
                "name": "catalog_2018.pdf",
                "type": "application/pdf",
                "size": 11997202,
                "atime": 1678083238,
                "mtime": 1641977229,
                "dev": 2049
            },
            {
                "name": "SIP-line Trunk VoIP FAQ v1 0.doc",
                "type": "application/msword",
                "size": 488448,
                "atime": 1678026625,
                "mtime": 1641977227,
                "dev": 2049
            },            {
                "name": "catalog_2018.pdf",
                "type": "application/pdf",
                "size": 11997202,
                "atime": 1678083238,
                "mtime": 1641977229,
                "dev": 2049
            },
            {
                "name": "SIP-line Trunk VoIP FAQ v1 0.doc",
                "type": "application/msword",
                "size": 488448,
                "atime": 1678026625,
                "mtime": 1641977227,
                "dev": 2049
            },            {
                "name": "catalog_2018.pdf",
                "type": "application/pdf",
                "size": 11997202,
                "atime": 1678083238,
                "mtime": 1641977229,
                "dev": 2049
            },
            {
                "name": "SIP-line Trunk VoIP FAQ v1 0.doc",
                "type": "application/msword",
                "size": 488448,
                "atime": 1678026625,
                "mtime": 1641977227,
                "dev": 2049
            },            {
                "name": "catalog_2018.pdf",
                "type": "application/pdf",
                "size": 11997202,
                "atime": 1678083238,
                "mtime": 1641977229,
                "dev": 2049
            },
            {
                "name": "SIP-line Trunk VoIP FAQ v1 0.doc",
                "type": "application/msword",
                "size": 488448,
                "atime": 1678026625,
                "mtime": 1641977227,
                "dev": 2049
            },            {
                "name": "catalog_2018.pdf",
                "type": "application/pdf",
                "size": 11997202,
                "atime": 1678083238,
                "mtime": 1641977229,
                "dev": 2049
            },
            {
                "name": "SIP-line Trunk VoIP FAQ v1 0.doc",
                "type": "application/msword",
                "size": 488448,
                "atime": 1678026625,
                "mtime": 1641977227,
                "dev": 2049
            },            {
                "name": "catalog_2018.pdf",
                "type": "application/pdf",
                "size": 11997202,
                "atime": 1678083238,
                "mtime": 1641977229,
                "dev": 2049
            },
            {
                "name": "SIP-line Trunk VoIP FAQ v1 0.doc",
                "type": "application/msword",
                "size": 488448,
                "atime": 1678026625,
                "mtime": 1641977227,
                "dev": 2049
            },            {
                "name": "catalog_2018.pdf",
                "type": "application/pdf",
                "size": 11997202,
                "atime": 1678083238,
                "mtime": 1641977229,
                "dev": 2049
            },
            {
                "name": "SIP-line Trunk VoIP FAQ v1 0.doc",
                "type": "application/msword",
                "size": 488448,
                "atime": 1678026625,
                "mtime": 1641977227,
                "dev": 2049
            },            {
                "name": "catalog_2018.pdf",
                "type": "application/pdf",
                "size": 11997202,
                "atime": 1678083238,
                "mtime": 1641977229,
                "dev": 2049
            },
            {
                "name": "SIP-line Trunk VoIP FAQ v1 0.doc",
                "type": "application/msword",
                "size": 488448,
                "atime": 1678026625,
                "mtime": 1641977227,
                "dev": 2049
            },            {
                "name": "catalog_2018.pdf",
                "type": "application/pdf",
                "size": 11997202,
                "atime": 1678083238,
                "mtime": 1641977229,
                "dev": 2049
            },
            {
                "name": "SIP-line Trunk VoIP FAQ v1 0.doc",
                "type": "application/msword",
                "size": 488448,
                "atime": 1678026625,
                "mtime": 1641977227,
                "dev": 2049
            },            {
                "name": "catalog_2018.pdf",
                "type": "application/pdf",
                "size": 11997202,
                "atime": 1678083238,
                "mtime": 1641977229,
                "dev": 2049
            },
            {
                "name": "SIP-line Trunk VoIP FAQ v1 0.doc",
                "type": "application/msword",
                "size": 488448,
                "atime": 1678026625,
                "mtime": 1641977227,
                "dev": 2049
            },            {
                "name": "catalog_2018.pdf",
                "type": "application/pdf",
                "size": 11997202,
                "atime": 1678083238,
                "mtime": 1641977229,
                "dev": 2049
            },
            {
                "name": "SIP-line Trunk VoIP FAQ v1 0.doc",
                "type": "application/msword",
                "size": 488448,
                "atime": 1678026625,
                "mtime": 1641977227,
                "dev": 2049
            },            {
                "name": "catalog_2018.pdf",
                "type": "application/pdf",
                "size": 11997202,
                "atime": 1678083238,
                "mtime": 1641977229,
                "dev": 2049
            },
            {
                "name": "SIP-line Trunk VoIP FAQ v1 0.doc",
                "type": "application/msword",
                "size": 488448,
                "atime": 1678026625,
                "mtime": 1641977227,
                "dev": 2049
            },            {
                "name": "catalog_2018.pdf",
                "type": "application/pdf",
                "size": 11997202,
                "atime": 1678083238,
                "mtime": 1641977229,
                "dev": 2049
            },
            {
                "name": "SIP-line Trunk VoIP FAQ v1 0.doc",
                "type": "application/msword",
                "size": 488448,
                "atime": 1678026625,
                "mtime": 1641977227,
                "dev": 2049
            },            {
                "name": "catalog_2018.pdf",
                "type": "application/pdf",
                "size": 11997202,
                "atime": 1678083238,
                "mtime": 1641977229,
                "dev": 2049
            },
            {
                "name": "SIP-line Trunk VoIP FAQ v1 0.doc",
                "type": "application/msword",
                "size": 488448,
                "atime": 1678026625,
                "mtime": 1641977227,
                "dev": 2049
            },            {
                "name": "catalog_2018.pdf",
                "type": "application/pdf",
                "size": 11997202,
                "atime": 1678083238,
                "mtime": 1641977229,
                "dev": 2049
            },
            {
                "name": "SIP-line Trunk VoIP FAQ v1 0.doc",
                "type": "application/msword",
                "size": 488448,
                "atime": 1678026625,
                "mtime": 1641977227,
                "dev": 2049
            },            {
                "name": "catalog_2018.pdf",
                "type": "application/pdf",
                "size": 11997202,
                "atime": 1678083238,
                "mtime": 1641977229,
                "dev": 2049
            },
            {
                "name": "SIP-line Trunk VoIP FAQ v1 0.doc",
                "type": "application/msword",
                "size": 488448,
                "atime": 1678026625,
                "mtime": 1641977227,
                "dev": 2049
            },            {
                "name": "catalog_2018.pdf",
                "type": "application/pdf",
                "size": 11997202,
                "atime": 1678083238,
                "mtime": 1641977229,
                "dev": 2049
            },
            {
                "name": "SIP-line Trunk VoIP FAQ v1 0.doc",
                "type": "application/msword",
                "size": 488448,
                "atime": 1678026625,
                "mtime": 1641977227,
                "dev": 2049
            },            {
                "name": "catalog_2018.pdf",
                "type": "application/pdf",
                "size": 11997202,
                "atime": 1678083238,
                "mtime": 1641977229,
                "dev": 2049
            },
            {
                "name": "SIP-line Trunk VoIP FAQ v1 0.doc",
                "type": "application/msword",
                "size": 488448,
                "atime": 1678026625,
                "mtime": 1641977227,
                "dev": 2049
            },            {
                "name": "catalog_2018.pdf",
                "type": "application/pdf",
                "size": 11997202,
                "atime": 1678083238,
                "mtime": 1641977229,
                "dev": 2049
            },
            {
                "name": "SIP-line Trunk VoIP FAQ v1 0.doc",
                "type": "application/msword",
                "size": 488448,
                "atime": 1678026625,
                "mtime": 1641977227,
                "dev": 2049
            },            {
                "name": "catalog_2018.pdf",
                "type": "application/pdf",
                "size": 11997202,
                "atime": 1678083238,
                "mtime": 1641977229,
                "dev": 2049
            },
            {
                "name": "SIP-line Trunk VoIP FAQ v1 0.doc",
                "type": "application/msword",
                "size": 488448,
                "atime": 1678026625,
                "mtime": 1641977227,
                "dev": 2049
            },            {
                "name": "catalog_2018.pdf",
                "type": "application/pdf",
                "size": 11997202,
                "atime": 1678083238,
                "mtime": 1641977229,
                "dev": 2049
            },
            {
                "name": "SIP-line Trunk VoIP FAQ v1 0.doc",
                "type": "application/msword",
                "size": 488448,
                "atime": 1678026625,
                "mtime": 1641977227,
                "dev": 2049
            },            {
                "name": "catalog_2018.pdf",
                "type": "application/pdf",
                "size": 11997202,
                "atime": 1678083238,
                "mtime": 1641977229,
                "dev": 2049
            },
            {
                "name": "SIP-line Trunk VoIP FAQ v1 0.doc",
                "type": "application/msword",
                "size": 488448,
                "atime": 1678026625,
                "mtime": 1641977227,
                "dev": 2049
            },            {
                "name": "catalog_2018.pdf",
                "type": "application/pdf",
                "size": 11997202,
                "atime": 1678083238,
                "mtime": 1641977229,
                "dev": 2049
            },
            {
                "name": "SIP-line Trunk VoIP FAQ v1 0.doc",
                "type": "application/msword",
                "size": 488448,
                "atime": 1678026625,
                "mtime": 1641977227,
                "dev": 2049
            },            {
                "name": "catalog_2018.pdf",
                "type": "application/pdf",
                "size": 11997202,
                "atime": 1678083238,
                "mtime": 1641977229,
                "dev": 2049
            },
            {
                "name": "SIP-line Trunk VoIP FAQ v1 0.doc",
                "type": "application/msword",
                "size": 488448,
                "atime": 1678026625,
                "mtime": 1641977227,
                "dev": 2049
            },            {
                "name": "catalog_2018.pdf",
                "type": "application/pdf",
                "size": 11997202,
                "atime": 1678083238,
                "mtime": 1641977229,
                "dev": 2049
            },
            {
                "name": "SIP-line Trunk VoIP FAQ v1 0.doc",
                "type": "application/msword",
                "size": 488448,
                "atime": 1678026625,
                "mtime": 1641977227,
                "dev": 2049
            },            {
                "name": "catalog_2018.pdf",
                "type": "application/pdf",
                "size": 11997202,
                "atime": 1678083238,
                "mtime": 1641977229,
                "dev": 2049
            },
            {
                "name": "SIP-line Trunk VoIP FAQ v1 0.doc",
                "type": "application/msword",
                "size": 488448,
                "atime": 1678026625,
                "mtime": 1641977227,
                "dev": 2049
            },            {
                "name": "catalog_2018.pdf",
                "type": "application/pdf",
                "size": 11997202,
                "atime": 1678083238,
                "mtime": 1641977229,
                "dev": 2049
            },
            {
                "name": "SIP-line Trunk VoIP FAQ v1 0.doc",
                "type": "application/msword",
                "size": 488448,
                "atime": 1678026625,
                "mtime": 1641977227,
                "dev": 2049
            },            {
                "name": "catalog_2018.pdf",
                "type": "application/pdf",
                "size": 11997202,
                "atime": 1678083238,
                "mtime": 1641977229,
                "dev": 2049
            },
            {
                "name": "SIP-line Trunk VoIP FAQ v1 0.doc",
                "type": "application/msword",
                "size": 488448,
                "atime": 1678026625,
                "mtime": 1641977227,
                "dev": 2049
            },            {
                "name": "catalog_2018.pdf",
                "type": "application/pdf",
                "size": 11997202,
                "atime": 1678083238,
                "mtime": 1641977229,
                "dev": 2049
            },
            {
                "name": "SIP-line Trunk VoIP FAQ v1 0.doc",
                "type": "application/msword",
                "size": 488448,
                "atime": 1678026625,
                "mtime": 1641977227,
                "dev": 2049
            },            {
                "name": "catalog_2018.pdf",
                "type": "application/pdf",
                "size": 11997202,
                "atime": 1678083238,
                "mtime": 1641977229,
                "dev": 2049
            },
            {
                "name": "SIP-line Trunk VoIP FAQ v1 0.doc",
                "type": "application/msword",
                "size": 488448,
                "atime": 1678026625,
                "mtime": 1641977227,
                "dev": 2049
            },            {
                "name": "catalog_2018.pdf",
                "type": "application/pdf",
                "size": 11997202,
                "atime": 1678083238,
                "mtime": 1641977229,
                "dev": 2049
            },
            {
                "name": "SIP-line Trunk VoIP FAQ v1 0.doc",
                "type": "application/msword",
                "size": 488448,
                "atime": 1678026625,
                "mtime": 1641977227,
                "dev": 2049
            },            {
                "name": "catalog_2018.pdf",
                "type": "application/pdf",
                "size": 11997202,
                "atime": 1678083238,
                "mtime": 1641977229,
                "dev": 2049
            },
            {
                "name": "SIP-line Trunk VoIP FAQ v1 0.doc",
                "type": "application/msword",
                "size": 488448,
                "atime": 1678026625,
                "mtime": 1641977227,
                "dev": 2049
            },            {
                "name": "catalog_2018.pdf",
                "type": "application/pdf",
                "size": 11997202,
                "atime": 1678083238,
                "mtime": 1641977229,
                "dev": 2049
            },
            {
                "name": "SIP-line Trunk VoIP FAQ v1 0.doc",
                "type": "application/msword",
                "size": 488448,
                "atime": 1678026625,
                "mtime": 1641977227,
                "dev": 2049
            },            {
                "name": "catalog_2018.pdf",
                "type": "application/pdf",
                "size": 11997202,
                "atime": 1678083238,
                "mtime": 1641977229,
                "dev": 2049
            },
            {
                "name": "SIP-line Trunk VoIP FAQ v1 0.doc",
                "type": "application/msword",
                "size": 488448,
                "atime": 1678026625,
                "mtime": 1641977227,
                "dev": 2049
            },            {
                "name": "catalog_2018.pdf",
                "type": "application/pdf",
                "size": 11997202,
                "atime": 1678083238,
                "mtime": 1641977229,
                "dev": 2049
            },
            {
                "name": "SIP-line Trunk VoIP FAQ v1 0.doc",
                "type": "application/msword",
                "size": 488448,
                "atime": 1678026625,
                "mtime": 1641977227,
                "dev": 2049
            },            {
                "name": "catalog_2018.pdf",
                "type": "application/pdf",
                "size": 11997202,
                "atime": 1678083238,
                "mtime": 1641977229,
                "dev": 2049
            },
            {
                "name": "SIP-line Trunk VoIP FAQ v1 0.doc",
                "type": "application/msword",
                "size": 488448,
                "atime": 1678026625,
                "mtime": 1641977227,
                "dev": 2049
            },            {
                "name": "catalog_2018.pdf",
                "type": "application/pdf",
                "size": 11997202,
                "atime": 1678083238,
                "mtime": 1641977229,
                "dev": 2049
            },
            {
                "name": "SIP-line Trunk VoIP FAQ v1 0.doc",
                "type": "application/msword",
                "size": 488448,
                "atime": 1678026625,
                "mtime": 1641977227,
                "dev": 2049
            },            {
                "name": "catalog_2018.pdf",
                "type": "application/pdf",
                "size": 11997202,
                "atime": 1678083238,
                "mtime": 1641977229,
                "dev": 2049
            },
            {
                "name": "SIP-line Trunk VoIP FAQ v1 0.doc",
                "type": "application/msword",
                "size": 488448,
                "atime": 1678026625,
                "mtime": 1641977227,
                "dev": 2049
            },            {
                "name": "catalog_2018.pdf",
                "type": "application/pdf",
                "size": 11997202,
                "atime": 1678083238,
                "mtime": 1641977229,
                "dev": 2049
            },
            {
                "name": "SIP-line Trunk VoIP FAQ v1 0.doc",
                "type": "application/msword",
                "size": 488448,
                "atime": 1678026625,
                "mtime": 1641977227,
                "dev": 2049
            },            {
                "name": "catalog_2018.pdf",
                "type": "application/pdf",
                "size": 11997202,
                "atime": 1678083238,
                "mtime": 1641977229,
                "dev": 2049
            },
            {
                "name": "SIP-line Trunk VoIP FAQ v1 0.doc",
                "type": "application/msword",
                "size": 488448,
                "atime": 1678026625,
                "mtime": 1641977227,
                "dev": 2049
            },            {
                "name": "catalog_2018.pdf",
                "type": "application/pdf",
                "size": 11997202,
                "atime": 1678083238,
                "mtime": 1641977229,
                "dev": 2049
            },
            {
                "name": "SIP-line Trunk VoIP FAQ v1 0.doc",
                "type": "application/msword",
                "size": 488448,
                "atime": 1678026625,
                "mtime": 1641977227,
                "dev": 2049
            },            {
                "name": "catalog_2018.pdf",
                "type": "application/pdf",
                "size": 11997202,
                "atime": 1678083238,
                "mtime": 1641977229,
                "dev": 2049
            },
            {
                "name": "SIP-line Trunk VoIP FAQ v1 0.doc",
                "type": "application/msword",
                "size": 488448,
                "atime": 1678026625,
                "mtime": 1641977227,
                "dev": 2049
            },            {
                "name": "catalog_2018.pdf",
                "type": "application/pdf",
                "size": 11997202,
                "atime": 1678083238,
                "mtime": 1641977229,
                "dev": 2049
            },
            {
                "name": "SIP-line Trunk VoIP FAQ v1 0.doc",
                "type": "application/msword",
                "size": 488448,
                "atime": 1678026625,
                "mtime": 1641977227,
                "dev": 2049
            },            {
                "name": "catalog_2018.pdf",
                "type": "application/pdf",
                "size": 11997202,
                "atime": 1678083238,
                "mtime": 1641977229,
                "dev": 2049
            },
            {
                "name": "SIP-line Trunk VoIP FAQ v1 0.doc",
                "type": "application/msword",
                "size": 488448,
                "atime": 1678026625,
                "mtime": 1641977227,
                "dev": 2049
            },            {
                "name": "catalog_2018.pdf",
                "type": "application/pdf",
                "size": 11997202,
                "atime": 1678083238,
                "mtime": 1641977229,
                "dev": 2049
            },
            {
                "name": "SIP-line Trunk VoIP FAQ v1 0.doc",
                "type": "application/msword",
                "size": 488448,
                "atime": 1678026625,
                "mtime": 1641977227,
                "dev": 2049
            },            {
                "name": "catalog_2018.pdf",
                "type": "application/pdf",
                "size": 11997202,
                "atime": 1678083238,
                "mtime": 1641977229,
                "dev": 2049
            },
            {
                "name": "SIP-line Trunk VoIP FAQ v1 0.doc",
                "type": "application/msword",
                "size": 488448,
                "atime": 1678026625,
                "mtime": 1641977227,
                "dev": 2049
            },            {
                "name": "catalog_2018.pdf",
                "type": "application/pdf",
                "size": 11997202,
                "atime": 1678083238,
                "mtime": 1641977229,
                "dev": 2049
            },
            {
                "name": "SIP-line Trunk VoIP FAQ v1 0.doc",
                "type": "application/msword",
                "size": 488448,
                "atime": 1678026625,
                "mtime": 1641977227,
                "dev": 2049
            },            {
                "name": "catalog_2018.pdf",
                "type": "application/pdf",
                "size": 11997202,
                "atime": 1678083238,
                "mtime": 1641977229,
                "dev": 2049
            },
            {
                "name": "SIP-line Trunk VoIP FAQ v1 0.doc",
                "type": "application/msword",
                "size": 488448,
                "atime": 1678026625,
                "mtime": 1641977227,
                "dev": 2049
            },            {
                "name": "catalog_2018.pdf",
                "type": "application/pdf",
                "size": 11997202,
                "atime": 1678083238,
                "mtime": 1641977229,
                "dev": 2049
            },
            {
                "name": "SIP-line Trunk VoIP FAQ v1 0.doc",
                "type": "application/msword",
                "size": 488448,
                "atime": 1678026625,
                "mtime": 1641977227,
                "dev": 2049
            },            {
                "name": "catalog_2018.pdf",
                "type": "application/pdf",
                "size": 11997202,
                "atime": 1678083238,
                "mtime": 1641977229,
                "dev": 2049
            },
            {
                "name": "SIP-line Trunk VoIP FAQ v1 0.doc",
                "type": "application/msword",
                "size": 488448,
                "atime": 1678026625,
                "mtime": 1641977227,
                "dev": 2049
            },            {
                "name": "catalog_2018.pdf",
                "type": "application/pdf",
                "size": 11997202,
                "atime": 1678083238,
                "mtime": 1641977229,
                "dev": 2049
            },
            {
                "name": "SIP-line Trunk VoIP FAQ v1 0.doc",
                "type": "application/msword",
                "size": 488448,
                "atime": 1678026625,
                "mtime": 1641977227,
                "dev": 2049
            },            {
                "name": "catalog_2018.pdf",
                "type": "application/pdf",
                "size": 11997202,
                "atime": 1678083238,
                "mtime": 1641977229,
                "dev": 2049
            },
            {
                "name": "SIP-line Trunk VoIP FAQ v1 0.doc",
                "type": "application/msword",
                "size": 488448,
                "atime": 1678026625,
                "mtime": 1641977227,
                "dev": 2049
            },            {
                "name": "catalog_2018.pdf",
                "type": "application/pdf",
                "size": 11997202,
                "atime": 1678083238,
                "mtime": 1641977229,
                "dev": 2049
            },
            {
                "name": "SIP-line Trunk VoIP FAQ v1 0.doc",
                "type": "application/msword",
                "size": 488448,
                "atime": 1678026625,
                "mtime": 1641977227,
                "dev": 2049
            },            {
                "name": "catalog_2018.pdf",
                "type": "application/pdf",
                "size": 11997202,
                "atime": 1678083238,
                "mtime": 1641977229,
                "dev": 2049
            },
            {
                "name": "SIP-line Trunk VoIP FAQ v1 0.doc",
                "type": "application/msword",
                "size": 488448,
                "atime": 1678026625,
                "mtime": 1641977227,
                "dev": 2049
            },            {
                "name": "catalog_2018.pdf",
                "type": "application/pdf",
                "size": 11997202,
                "atime": 1678083238,
                "mtime": 1641977229,
                "dev": 2049
            },
            {
                "name": "SIP-line Trunk VoIP FAQ v1 0.doc",
                "type": "application/msword",
                "size": 488448,
                "atime": 1678026625,
                "mtime": 1641977227,
                "dev": 2049
            },            {
                "name": "catalog_2018.pdf",
                "type": "application/pdf",
                "size": 11997202,
                "atime": 1678083238,
                "mtime": 1641977229,
                "dev": 2049
            },
            {
                "name": "SIP-line Trunk VoIP FAQ v1 0.doc",
                "type": "application/msword",
                "size": 488448,
                "atime": 1678026625,
                "mtime": 1641977227,
                "dev": 2049
            },            {
                "name": "catalog_2018.pdf",
                "type": "application/pdf",
                "size": 11997202,
                "atime": 1678083238,
                "mtime": 1641977229,
                "dev": 2049
            },
            {
                "name": "SIP-line Trunk VoIP FAQ v1 0.doc",
                "type": "application/msword",
                "size": 488448,
                "atime": 1678026625,
                "mtime": 1641977227,
                "dev": 2049
            },            {
                "name": "catalog_2018.pdf",
                "type": "application/pdf",
                "size": 11997202,
                "atime": 1678083238,
                "mtime": 1641977229,
                "dev": 2049
            },
            {
                "name": "SIP-line Trunk VoIP FAQ v1 0.doc",
                "type": "application/msword",
                "size": 488448,
                "atime": 1678026625,
                "mtime": 1641977227,
                "dev": 2049
            },            {
                "name": "catalog_2018.pdf",
                "type": "application/pdf",
                "size": 11997202,
                "atime": 1678083238,
                "mtime": 1641977229,
                "dev": 2049
            },
            {
                "name": "SIP-line Trunk VoIP FAQ v1 0.doc",
                "type": "application/msword",
                "size": 488448,
                "atime": 1678026625,
                "mtime": 1641977227,
                "dev": 2049
            },            {
                "name": "catalog_2018.pdf",
                "type": "application/pdf",
                "size": 11997202,
                "atime": 1678083238,
                "mtime": 1641977229,
                "dev": 2049
            },
            {
                "name": "SIP-line Trunk VoIP FAQ v1 0.doc",
                "type": "application/msword",
                "size": 488448,
                "atime": 1678026625,
                "mtime": 1641977227,
                "dev": 2049
            },            {
                "name": "catalog_2018.pdf",
                "type": "application/pdf",
                "size": 11997202,
                "atime": 1678083238,
                "mtime": 1641977229,
                "dev": 2049
            },
            {
                "name": "SIP-line Trunk VoIP FAQ v1 0.doc",
                "type": "application/msword",
                "size": 488448,
                "atime": 1678026625,
                "mtime": 1641977227,
                "dev": 2049
            },            {
                "name": "catalog_2018.pdf",
                "type": "application/pdf",
                "size": 11997202,
                "atime": 1678083238,
                "mtime": 1641977229,
                "dev": 2049
            },
            {
                "name": "SIP-line Trunk VoIP FAQ v1 0.doc",
                "type": "application/msword",
                "size": 488448,
                "atime": 1678026625,
                "mtime": 1641977227,
                "dev": 2049
            },            {
                "name": "catalog_2018.pdf",
                "type": "application/pdf",
                "size": 11997202,
                "atime": 1678083238,
                "mtime": 1641977229,
                "dev": 2049
            },
            {
                "name": "SIP-line Trunk VoIP FAQ v1 0.doc",
                "type": "application/msword",
                "size": 488448,
                "atime": 1678026625,
                "mtime": 1641977227,
                "dev": 2049
            },            {
                "name": "catalog_2018.pdf",
                "type": "application/pdf",
                "size": 11997202,
                "atime": 1678083238,
                "mtime": 1641977229,
                "dev": 2049
            },
            {
                "name": "SIP-line Trunk VoIP FAQ v1 0.doc",
                "type": "application/msword",
                "size": 488448,
                "atime": 1678026625,
                "mtime": 1641977227,
                "dev": 2049
            },            {
                "name": "catalog_2018.pdf",
                "type": "application/pdf",
                "size": 11997202,
                "atime": 1678083238,
                "mtime": 1641977229,
                "dev": 2049
            },
            {
                "name": "SIP-line Trunk VoIP FAQ v1 0.doc",
                "type": "application/msword",
                "size": 488448,
                "atime": 1678026625,
                "mtime": 1641977227,
                "dev": 2049
            },            {
                "name": "catalog_2018.pdf",
                "type": "application/pdf",
                "size": 11997202,
                "atime": 1678083238,
                "mtime": 1641977229,
                "dev": 2049
            },
            {
                "name": "SIP-line Trunk VoIP FAQ v1 0.doc",
                "type": "application/msword",
                "size": 488448,
                "atime": 1678026625,
                "mtime": 1641977227,
                "dev": 2049
            },            {
                "name": "catalog_2018.pdf",
                "type": "application/pdf",
                "size": 11997202,
                "atime": 1678083238,
                "mtime": 1641977229,
                "dev": 2049
            },
            {
                "name": "SIP-line Trunk VoIP FAQ v1 0.doc",
                "type": "application/msword",
                "size": 488448,
                "atime": 1678026625,
                "mtime": 1641977227,
                "dev": 2049
            },            {
                "name": "catalog_2018.pdf",
                "type": "application/pdf",
                "size": 11997202,
                "atime": 1678083238,
                "mtime": 1641977229,
                "dev": 2049
            },
            {
                "name": "SIP-line Trunk VoIP FAQ v1 0.doc",
                "type": "application/msword",
                "size": 488448,
                "atime": 1678026625,
                "mtime": 1641977227,
                "dev": 2049
            },            {
                "name": "catalog_2018.pdf",
                "type": "application/pdf",
                "size": 11997202,
                "atime": 1678083238,
                "mtime": 1641977229,
                "dev": 2049
            },
            {
                "name": "SIP-line Trunk VoIP FAQ v1 0.doc",
                "type": "application/msword",
                "size": 488448,
                "atime": 1678026625,
                "mtime": 1641977227,
                "dev": 2049
            },            {
                "name": "catalog_2018.pdf",
                "type": "application/pdf",
                "size": 11997202,
                "atime": 1678083238,
                "mtime": 1641977229,
                "dev": 2049
            },
            {
                "name": "SIP-line Trunk VoIP FAQ v1 0.doc",
                "type": "application/msword",
                "size": 488448,
                "atime": 1678026625,
                "mtime": 1641977227,
                "dev": 2049
            },            {
                "name": "catalog_2018.pdf",
                "type": "application/pdf",
                "size": 11997202,
                "atime": 1678083238,
                "mtime": 1641977229,
                "dev": 2049
            },
            {
                "name": "SIP-line Trunk VoIP FAQ v1 0.doc",
                "type": "application/msword",
                "size": 488448,
                "atime": 1678026625,
                "mtime": 1641977227,
                "dev": 2049
            },            {
                "name": "catalog_2018.pdf",
                "type": "application/pdf",
                "size": 11997202,
                "atime": 1678083238,
                "mtime": 1641977229,
                "dev": 2049
            },
            {
                "name": "SIP-line Trunk VoIP FAQ v1 0.doc",
                "type": "application/msword",
                "size": 488448,
                "atime": 1678026625,
                "mtime": 1641977227,
                "dev": 2049
            },            {
                "name": "catalog_2018.pdf",
                "type": "application/pdf",
                "size": 11997202,
                "atime": 1678083238,
                "mtime": 1641977229,
                "dev": 2049
            },
            {
                "name": "SIP-line Trunk VoIP FAQ v1 0.doc",
                "type": "application/msword",
                "size": 488448,
                "atime": 1678026625,
                "mtime": 1641977227,
                "dev": 2049
            },            {
                "name": "catalog_2018.pdf",
                "type": "application/pdf",
                "size": 11997202,
                "atime": 1678083238,
                "mtime": 1641977229,
                "dev": 2049
            },
            {
                "name": "SIP-line Trunk VoIP FAQ v1 0.doc",
                "type": "application/msword",
                "size": 488448,
                "atime": 1678026625,
                "mtime": 1641977227,
                "dev": 2049
            },            {
                "name": "catalog_2018.pdf",
                "type": "application/pdf",
                "size": 11997202,
                "atime": 1678083238,
                "mtime": 1641977229,
                "dev": 2049
            },
            {
                "name": "SIP-line Trunk VoIP FAQ v1 0.doc",
                "type": "application/msword",
                "size": 488448,
                "atime": 1678026625,
                "mtime": 1641977227,
                "dev": 2049
            },            {
                "name": "catalog_2018.pdf",
                "type": "application/pdf",
                "size": 11997202,
                "atime": 1678083238,
                "mtime": 1641977229,
                "dev": 2049
            },
            {
                "name": "SIP-line Trunk VoIP FAQ v1 0.doc",
                "type": "application/msword",
                "size": 488448,
                "atime": 1678026625,
                "mtime": 1641977227,
                "dev": 2049
            },            {
                "name": "catalog_2018.pdf",
                "type": "application/pdf",
                "size": 11997202,
                "atime": 1678083238,
                "mtime": 1641977229,
                "dev": 2049
            },
            {
                "name": "SIP-line Trunk VoIP FAQ v1 0.doc",
                "type": "application/msword",
                "size": 488448,
                "atime": 1678026625,
                "mtime": 1641977227,
                "dev": 2049
            },            {
                "name": "catalog_2018.pdf",
                "type": "application/pdf",
                "size": 11997202,
                "atime": 1678083238,
                "mtime": 1641977229,
                "dev": 2049
            },
            {
                "name": "SIP-line Trunk VoIP FAQ v1 0.doc",
                "type": "application/msword",
                "size": 488448,
                "atime": 1678026625,
                "mtime": 1641977227,
                "dev": 2049
            },            {
                "name": "catalog_2018.pdf",
                "type": "application/pdf",
                "size": 11997202,
                "atime": 1678083238,
                "mtime": 1641977229,
                "dev": 2049
            },
            {
                "name": "SIP-line Trunk VoIP FAQ v1 0.doc",
                "type": "application/msword",
                "size": 488448,
                "atime": 1678026625,
                "mtime": 1641977227,
                "dev": 2049
            },            {
                "name": "catalog_2018.pdf",
                "type": "application/pdf",
                "size": 11997202,
                "atime": 1678083238,
                "mtime": 1641977229,
                "dev": 2049
            },
            {
                "name": "SIP-line Trunk VoIP FAQ v1 0.doc",
                "type": "application/msword",
                "size": 488448,
                "atime": 1678026625,
                "mtime": 1641977227,
                "dev": 2049
            },            {
                "name": "catalog_2018.pdf",
                "type": "application/pdf",
                "size": 11997202,
                "atime": 1678083238,
                "mtime": 1641977229,
                "dev": 2049
            },
            {
                "name": "SIP-line Trunk VoIP FAQ v1 0.doc",
                "type": "application/msword",
                "size": 488448,
                "atime": 1678026625,
                "mtime": 1641977227,
                "dev": 2049
            },            {
                "name": "catalog_2018.pdf",
                "type": "application/pdf",
                "size": 11997202,
                "atime": 1678083238,
                "mtime": 1641977229,
                "dev": 2049
            },
            {
                "name": "SIP-line Trunk VoIP FAQ v1 0.doc",
                "type": "application/msword",
                "size": 488448,
                "atime": 1678026625,
                "mtime": 1641977227,
                "dev": 2049
            },            {
                "name": "catalog_2018.pdf",
                "type": "application/pdf",
                "size": 11997202,
                "atime": 1678083238,
                "mtime": 1641977229,
                "dev": 2049
            },
            {
                "name": "SIP-line Trunk VoIP FAQ v1 0.doc",
                "type": "application/msword",
                "size": 488448,
                "atime": 1678026625,
                "mtime": 1641977227,
                "dev": 2049
            },            {
                "name": "catalog_2018.pdf",
                "type": "application/pdf",
                "size": 11997202,
                "atime": 1678083238,
                "mtime": 1641977229,
                "dev": 2049
            },
            {
                "name": "SIP-line Trunk VoIP FAQ v1 0.doc",
                "type": "application/msword",
                "size": 488448,
                "atime": 1678026625,
                "mtime": 1641977227,
                "dev": 2049
            },            {
                "name": "catalog_2018.pdf",
                "type": "application/pdf",
                "size": 11997202,
                "atime": 1678083238,
                "mtime": 1641977229,
                "dev": 2049
            },
            {
                "name": "SIP-line Trunk VoIP FAQ v1 0.doc",
                "type": "application/msword",
                "size": 488448,
                "atime": 1678026625,
                "mtime": 1641977227,
                "dev": 2049
            },            {
                "name": "catalog_2018.pdf",
                "type": "application/pdf",
                "size": 11997202,
                "atime": 1678083238,
                "mtime": 1641977229,
                "dev": 2049
            },
            {
                "name": "SIP-line Trunk VoIP FAQ v1 0.doc",
                "type": "application/msword",
                "size": 488448,
                "atime": 1678026625,
                "mtime": 1641977227,
                "dev": 2049
            },            {
                "name": "catalog_2018.pdf",
                "type": "application/pdf",
                "size": 11997202,
                "atime": 1678083238,
                "mtime": 1641977229,
                "dev": 2049
            },
            {
                "name": "SIP-line Trunk VoIP FAQ v1 0.doc",
                "type": "application/msword",
                "size": 488448,
                "atime": 1678026625,
                "mtime": 1641977227,
                "dev": 2049
            },            {
                "name": "catalog_2018.pdf",
                "type": "application/pdf",
                "size": 11997202,
                "atime": 1678083238,
                "mtime": 1641977229,
                "dev": 2049
            },
            {
                "name": "SIP-line Trunk VoIP FAQ v1 0.doc",
                "type": "application/msword",
                "size": 488448,
                "atime": 1678026625,
                "mtime": 1641977227,
                "dev": 2049
            },            {
                "name": "catalog_2018.pdf",
                "type": "application/pdf",
                "size": 11997202,
                "atime": 1678083238,
                "mtime": 1641977229,
                "dev": 2049
            },
            {
                "name": "SIP-line Trunk VoIP FAQ v1 0.doc",
                "type": "application/msword",
                "size": 488448,
                "atime": 1678026625,
                "mtime": 1641977227,
                "dev": 2049
            },            {
                "name": "catalog_2018.pdf",
                "type": "application/pdf",
                "size": 11997202,
                "atime": 1678083238,
                "mtime": 1641977229,
                "dev": 2049
            },
            {
                "name": "SIP-line Trunk VoIP FAQ v1 0.doc",
                "type": "application/msword",
                "size": 488448,
                "atime": 1678026625,
                "mtime": 1641977227,
                "dev": 2049
            },            {
                "name": "catalog_2018.pdf",
                "type": "application/pdf",
                "size": 11997202,
                "atime": 1678083238,
                "mtime": 1641977229,
                "dev": 2049
            },
            {
                "name": "SIP-line Trunk VoIP FAQ v1 0.doc",
                "type": "application/msword",
                "size": 488448,
                "atime": 1678026625,
                "mtime": 1641977227,
                "dev": 2049
            },            {
                "name": "catalog_2018.pdf",
                "type": "application/pdf",
                "size": 11997202,
                "atime": 1678083238,
                "mtime": 1641977229,
                "dev": 2049
            },
            {
                "name": "SIP-line Trunk VoIP FAQ v1 0.doc",
                "type": "application/msword",
                "size": 488448,
                "atime": 1678026625,
                "mtime": 1641977227,
                "dev": 2049
            },            {
                "name": "catalog_2018.pdf",
                "type": "application/pdf",
                "size": 11997202,
                "atime": 1678083238,
                "mtime": 1641977229,
                "dev": 2049
            },
            {
                "name": "SIP-line Trunk VoIP FAQ v1 0.doc",
                "type": "application/msword",
                "size": 488448,
                "atime": 1678026625,
                "mtime": 1641977227,
                "dev": 2049
            },            {
                "name": "catalog_2018.pdf",
                "type": "application/pdf",
                "size": 11997202,
                "atime": 1678083238,
                "mtime": 1641977229,
                "dev": 2049
            },
            {
                "name": "SIP-line Trunk VoIP FAQ v1 0.doc",
                "type": "application/msword",
                "size": 488448,
                "atime": 1678026625,
                "mtime": 1641977227,
                "dev": 2049
            },            {
                "name": "catalog_2018.pdf",
                "type": "application/pdf",
                "size": 11997202,
                "atime": 1678083238,
                "mtime": 1641977229,
                "dev": 2049
            },
            {
                "name": "SIP-line Trunk VoIP FAQ v1 0.doc",
                "type": "application/msword",
                "size": 488448,
                "atime": 1678026625,
                "mtime": 1641977227,
                "dev": 2049
            },            {
                "name": "catalog_2018.pdf",
                "type": "application/pdf",
                "size": 11997202,
                "atime": 1678083238,
                "mtime": 1641977229,
                "dev": 2049
            },
            {
                "name": "SIP-line Trunk VoIP FAQ v1 0.doc",
                "type": "application/msword",
                "size": 488448,
                "atime": 1678026625,
                "mtime": 1641977227,
                "dev": 2049
            },            {
                "name": "catalog_2018.pdf",
                "type": "application/pdf",
                "size": 11997202,
                "atime": 1678083238,
                "mtime": 1641977229,
                "dev": 2049
            },
            {
                "name": "SIP-line Trunk VoIP FAQ v1 0.doc",
                "type": "application/msword",
                "size": 488448,
                "atime": 1678026625,
                "mtime": 1641977227,
                "dev": 2049
            },            {
                "name": "catalog_2018.pdf",
                "type": "application/pdf",
                "size": 11997202,
                "atime": 1678083238,
                "mtime": 1641977229,
                "dev": 2049
            },
            {
                "name": "SIP-line Trunk VoIP FAQ v1 0.doc",
                "type": "application/msword",
                "size": 488448,
                "atime": 1678026625,
                "mtime": 1641977227,
                "dev": 2049
            },            {
                "name": "catalog_2018.pdf",
                "type": "application/pdf",
                "size": 11997202,
                "atime": 1678083238,
                "mtime": 1641977229,
                "dev": 2049
            },
            {
                "name": "SIP-line Trunk VoIP FAQ v1 0.doc",
                "type": "application/msword",
                "size": 488448,
                "atime": 1678026625,
                "mtime": 1641977227,
                "dev": 2049
            },            {
                "name": "catalog_2018.pdf",
                "type": "application/pdf",
                "size": 11997202,
                "atime": 1678083238,
                "mtime": 1641977229,
                "dev": 2049
            },
            {
                "name": "SIP-line Trunk VoIP FAQ v1 0.doc",
                "type": "application/msword",
                "size": 488448,
                "atime": 1678026625,
                "mtime": 1641977227,
                "dev": 2049
            },            {
                "name": "catalog_2018.pdf",
                "type": "application/pdf",
                "size": 11997202,
                "atime": 1678083238,
                "mtime": 1641977229,
                "dev": 2049
            },
            {
                "name": "SIP-line Trunk VoIP FAQ v1 0.doc",
                "type": "application/msword",
                "size": 488448,
                "atime": 1678026625,
                "mtime": 1641977227,
                "dev": 2049
            },            {
                "name": "catalog_2018.pdf",
                "type": "application/pdf",
                "size": 11997202,
                "atime": 1678083238,
                "mtime": 1641977229,
                "dev": 2049
            },
            {
                "name": "SIP-line Trunk VoIP FAQ v1 0.doc",
                "type": "application/msword",
                "size": 488448,
                "atime": 1678026625,
                "mtime": 1641977227,
                "dev": 2049
            },            {
                "name": "catalog_2018.pdf",
                "type": "application/pdf",
                "size": 11997202,
                "atime": 1678083238,
                "mtime": 1641977229,
                "dev": 2049
            },
            {
                "name": "SIP-line Trunk VoIP FAQ v1 0.doc",
                "type": "application/msword",
                "size": 488448,
                "atime": 1678026625,
                "mtime": 1641977227,
                "dev": 2049
            },
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
        console.log("hovering")
        //setCurrentHoveredFile(file);
    }

    function handleFolderFileHoverEnd (file) {
        console.log("unhovering")
        //setCurrentHoveredFile(null);
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