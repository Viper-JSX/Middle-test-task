import bytes from "bytes";

function FolderFileInfoPanel ({ file, filesCount }) {
    return(
        <div className="folder__file-info-panel">
            {
                file ? //file can be null
                <>
                    <span><b>Size: </b>{ file.size }</span>
                    <span><b> Created: </b>{ file.createdDateString }</span>
                    <span><b> Modified: </b> { file.modifiedDateString }</span>
                </>
                :
                <b>Files: { filesCount }</b>
            }
        </div>
    );
}

export default FolderFileInfoPanel;