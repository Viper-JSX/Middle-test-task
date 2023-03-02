import initialState from '../initial_state';
import { HIDE_MESSAGE, SHOW_MESSAGE } from "../action_types";

function message (state = initialState.message, action) {
    switch (action.type) {
        case SHOW_MESSAGE : {
            return action.payload;
        }
        case HIDE_MESSAGE: {
            return null;
        }
        default: {
            return null;
        }
    }
}

export default message;