import Container from "../../Container/Container";
import FileInfoPanel from "./File_info_panel";

function FileInfo ({ info, handleFileClose }) {
    if (!info) {
        return null;
    }

    return(
        <Container>
            <div className="file-info">
                <FileInfoPanel handleFileClose={handleFileClose} />
                
                <span><b>Size: </b>{ info.size }</span>
                <span><b>Created: </b>{ info.createdDate }</span>
                <span><b>Size: </b>{ info.modifiedDate }</span>
            </div>
        </Container>
    );
}

export default FileInfo;