function FolderInfoPanel ({ filesCount }) {
    return(
        <div className="folder__file-info-panel">
            <b>Files: { filesCount }</b>
        </div>
    );
}

export default FolderInfoPanel;