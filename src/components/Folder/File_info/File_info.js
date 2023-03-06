import Container from "../../Container/Container";
import FileInfoTopPanel from "./File_info_top_panel";

function FileInfo ({ info, handleFileClose }) {
    if (!info) {
        return null;
    }

    return(
        <Container additionalClassNames={[ "file-info-wrapper" ]}>
            <div className="file-info">
                <FileInfoTopPanel fileName={info.name} handleFileClose={handleFileClose} />
                
                <Container additionalClassNames={[ "file-info__content" ]}>
                    <span><b>Size: </b>{ info.size }</span>
                    <span><b>Created: </b>{ info.createdDate }</span>
                    <span><b>Modified: </b>{ info.modifiedDate }</span>
                </Container>
            </div>
        </Container>
    );
}

export default FileInfo;