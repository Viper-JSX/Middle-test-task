import { HIDE_MESSAGE, SHOW_MESSAGE } from "../action_types";
import { messageDisappearTime } from "../../various_things/constants";

function showMessage (payload) {
    return function (dispatch) {
        dispatch({ type: SHOW_MESSAGE, payload });

        setTimeout(() => {
            dispatch({ type: HIDE_MESSAGE });
        }, messageDisappearTime);
    }
}

export { showMessage };