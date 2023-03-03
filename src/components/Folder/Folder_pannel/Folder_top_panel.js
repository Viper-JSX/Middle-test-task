import { useSelector } from "react-redux";
import SortBy from "../../Sort_by/Sort_by";
import FolderControl from "./Folder_control";

import { SORT_BY_NAME, SORT_BY_SIZE, SORT_BY_CREATION_DATE } from "../../../various_things/constants";

function FolderTopPanel (
    {
        handleFoldersSortCriteriaChange
    }
) {
    const currentSortCriteria = useSelector((state) => state.folders.sortBy);
    console.log(currentSortCriteria)

    return(
        <div className="folder__top-panel">
            <FolderControl />
            <SortBy currentSortCriteria={currentSortCriteria} sortCriterias={[ SORT_BY_NAME, SORT_BY_SIZE, SORT_BY_CREATION_DATE]} handleSortCriteriaChange={handleFoldersSortCriteriaChange} />
        </div>
    );
}

export default FolderTopPanel;