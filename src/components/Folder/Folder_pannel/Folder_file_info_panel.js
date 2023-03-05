function FolderFileInfoPanel ({ file }) {
    return(
        <div className="folder__info-panel">
            <b>{ file?.name }</b>
        </div>
    );
}

export default FolderFileInfoPanel;