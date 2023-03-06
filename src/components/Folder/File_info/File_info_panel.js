function FileInfoPanel ({ fileName, handleFileClose }) {
    return(
        <div>
            <b className="filename">{ fileName }</b>
            <button onClick={handleFileClose}>X</button>
        </div>
    )
}

export default FileInfoPanel;