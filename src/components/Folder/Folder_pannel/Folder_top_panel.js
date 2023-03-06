import { useSelector } from "react-redux";
import SortBy from "../../Sort_by/Sort_by";
import FolderControl from "./Folder_control";

import { SORT_BY_NAME, SORT_BY_SIZE, SORT_BY_CREATION_DATE } from "../../../various_things/constants";
import Container from "../../Container/Container";

function FolderTopPanel (
    {
        folderName,
        handleFoldersSortCriteriaChange
    }
) {
    const currentSortCriteria = useSelector((state) => state.folders.sortBy);
    
    return(
        <div className="folder__top-panel">
            <Container>
                <div className="hidden"></div>
                <b className="folder-name">{ folderName }</b>
                <FolderControl />
            </Container>  

            <SortBy currentSortCriteria={currentSortCriteria} sortCriterias={[ SORT_BY_NAME, SORT_BY_SIZE, SORT_BY_CREATION_DATE]} handleSortCriteriaChange={handleFoldersSortCriteriaChange} />
        </div>
    );
}

export default FolderTopPanel;