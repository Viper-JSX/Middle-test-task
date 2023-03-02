import initialState from '../initial_state';
import { GET_FOLDERS, GET_FOLDERS_ERROR } from '../action_types';

function folders (state=initialState.folders, action) {
    switch (action.type) {
        case GET_FOLDERS : {
            return state;
        }
        case GET_FOLDERS_ERROR: {
            console.log('Error during folders retrieving');
            return state;
        }
        default: {
            return state;
        }
    }
}

export default folders;