function SortBy ({ currentSortCriteria, sortCriterias, handleSortCriteriaChange }) {
    return(
        <select className="sort-by" value={currentSortCriteria}>
            {
                sortCriterias.map((criteria) => <option value={criteria}>{ criteria }</option>)
            }
        </select>
    );
};


export default SortBy;
