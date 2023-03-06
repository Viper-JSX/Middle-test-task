import "./scss/main.scss";

import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { changeFoldersSortCriteria } from "./redux/action_creators/folders_action_creators";
import { getFolders } from "./redux/thunks/folders_thunks";
import Layout from "./components/layout/Layout";
import readFromLocalStorage from "./utilities/read_from_local_storage";


function App(){
    const dispatch = useDispatch();
    const [ appIsLoading, setAppIsLoading ] = useState(true);

    useEffect(() => {
        const foldersSortCriteria = readFromLocalStorage("foldersSortCriteria");
        if (foldersSortCriteria) { //If criteria was saved to localStorage
            dispatch( changeFoldersSortCriteria({ sortBy: foldersSortCriteria }) );
        }
        
        dispatch(getFolders());
        setAppIsLoading(false);
    }, []);


    function handleFoldersSortCriteriaChange (event) {
        dispatch(changeFoldersSortCriteria( { sortBy: event.target.value } ));
    }

    return(
        <div>
            <Layout
                appIsLoading={appIsLoading}
                handleFoldersSortCriteriaChange={handleFoldersSortCriteriaChange}
            />
        </div>
    );
}

export default App;