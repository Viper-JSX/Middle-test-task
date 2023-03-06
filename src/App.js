import "./scss/main.scss";

import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { changeFoldersSortCriteria } from "./redux/action_creators/folders_action_creators";
import { getFolders } from "./redux/thunks/folders_thunks";
import Layout from "./components/layout/Layout";
import readFromLocalStorage from "./utilities/read_from_local_storage";


function App(){
    const dispatch = useDispatch();
    const [ appIsLoading, setAppIsLoading ] = useState(true);

    window.addEventListener("load", handleAppLoaded);

    useEffect(() => {
        const foldersSortCriteria = readFromLocalStorage("foldersSortCriteria");
        if (foldersSortCriteria) { //If criteria was saved to localStorage
            dispatch( changeFoldersSortCriteria({ sortBy: foldersSortCriteria }) );
        }
        
        dispatch(getFolders());
    }, []);


    function handleFoldersSortCriteriaChange (event) {
        dispatch(changeFoldersSortCriteria( { sortBy: event.target.value } ));
    }

    function handleAppLoaded () {
        setAppIsLoading(false);
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