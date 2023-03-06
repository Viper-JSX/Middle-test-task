import Container from "../Container/Container";

function FileInfo ({ info }) {
    return(
        <Container>
            <div className="file-info">
                <span><b>Size: </b>{ info.size }</span>
                <span><b>Created: </b>{ info.createDate }</span>
                <span><b>Size: </b>{ info.modifyDate }</span>
            
                <button>X</button>
            </div>
        </Container>
    );
}

export default FileInfo;