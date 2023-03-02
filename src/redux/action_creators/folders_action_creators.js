import { CHANGE_SORT_CRITERIA } from "../../action_types";

function changeSortCriteria (payload) {
    return { type: CHANGE_SORT_CRITERIA, payload };
}

export { changeSortCriteria };