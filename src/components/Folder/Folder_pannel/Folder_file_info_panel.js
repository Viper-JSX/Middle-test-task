import bytes from "bytes";

function FolderFileInfoPanel ({ file, filesCount }) {
    return(
        <div className="folder__info-panel">
            {
                file ? //file can be null
                <>
                    <b>Size: { file.size }</b>
                    <b> Created: { file.createdDateString }</b>
                    <b> Modified: { file.modifiedDateString }</b>
                </>
                :
                <b>Files: { filesCount }</b>
            }
        </div>
    );
}

export default FolderFileInfoPanel;