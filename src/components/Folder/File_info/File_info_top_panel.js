import FileInfoControl from "./File_info_control";

function FileInfoTopPanel ({ fileName, handleFileClose }) {
    return(
        <div className="file-info-top-panel">
            <b className="filename">{ fileName }</b>
            <FileInfoControl handleFileClose={handleFileClose} />
        </div>
    )
}

export default FileInfoTopPanel;