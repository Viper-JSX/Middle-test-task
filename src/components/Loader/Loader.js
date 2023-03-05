import { CircularProgress } from "@mui/material";

function Loader ( { loading } ) {
    if (!loading) {
        return null;
    }

    return(
        <div className="loader">
            <CircularProgress />
        </div>
    );  
}

export default Loader;