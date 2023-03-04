import initialState from '../initial_state';
import { CHANGE_SORT_CRITERIA, GET_FOLDERS, GET_FOLDERS_ERROR } from '../action_types';
import writeToLocalStorage from '../../utilities/write_to_local_storage';

function folders (state=initialState.folders, action) {
    switch (action.type) {
        case GET_FOLDERS: {
            return { ...state, folders: action.payload.folders };
        }
        case GET_FOLDERS_ERROR: {
            console.log('Error during folders retrieving');
            return state;
        }
        case CHANGE_SORT_CRITERIA: {
            writeToLocalStorage("foldersSortCriteria", action.payload.sortBy);
            return { ...state, sortBy: action.payload.sortBy };
        }
        default: {
            return state;
        }
    }
}

export default folders;