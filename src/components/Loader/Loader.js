import { CircularProgress } from "@mui/material";

function Loader ( { loading } ) {
    if (!loading) {
        return null;
    }

    return(
        <div className="loader">
            <CircularProgress color="primary" />
            <b className="loader__text">Loading...</b>
        </div>
    );  
}

export default Loader;