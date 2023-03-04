import constantTextToNormalText from "../../utilities/constant_text_to_normal_text";

function SortBy ({ currentSortCriteria, sortCriterias, handleSortCriteriaChange }) {
    return(
        <select className="sort-by" value={currentSortCriteria} onChange={handleSortCriteriaChange}>
            {
                sortCriterias.map((criteria) => 
                    <option value={criteria} key={criteria}>
                        { constantTextToNormalText(criteria) }
                    </option>)
            }
        </select>
    );
};


export default SortBy;
