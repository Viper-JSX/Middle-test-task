import { CHANGE_SORT_CRITERIA } from "../action_types";

function changeFoldersSortCriteria (payload) {
    return { type: CHANGE_SORT_CRITERIA, payload };
}

export { changeFoldersSortCriteria };