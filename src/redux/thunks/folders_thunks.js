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
            const foldersLowerCaseKey = Object.fromEntries( // Make all keys to be lowercase
                Object.entries(folders).map(([ k, v ]) => [ k.toLowerCase(), v ])
            );

            dispatch({ type: GET_FOLDERS, payload: { folders: foldersLowerCaseKey } });
        } catch (err) {
            console.log(`Cannot get folders ${err}`);
        }

    }
}

export { getFolders };