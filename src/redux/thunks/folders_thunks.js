import client from "../../axios/client";
import { apiToken } from "../../api/api";
import { GET_FOLDERS } from "../action_types";

function getFolders (payload) {
    return async function (dispatch) {
        try {
            const response = await client.get(
                "/",
    
                { 
                    params: { token: apiToken }
                }
            );
    
            const folders = response.data.data.files;
            const foldersConverted = Object.fromEntries( // Convert folders object from { Folder: [...file] } to { folder: { name: FolderName, files: [...file] } }
                Object.entries(folders).map(([ key, value ]) => [ key.toLocaleLowerCase(), { name: key, files: value } ])  
            );

            dispatch({ type: GET_FOLDERS, payload: { folders: foldersConverted } });
        } catch (err) {
            console.log("Cannot get folders");
        }

    }
}

export { getFolders };