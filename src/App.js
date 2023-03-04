import "./scss/main.scss";

import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Layout from "./components/layout/Layout";
import { changeFoldersSortCriteria } from "./redux/action_creators/folders_action_creators";
import { getFolders } from "./redux/thunks/folders_thunks";
import { showMessage } from "./redux/thunks/message_thunks";
import readFromLocalStorage from "./utilities/read_from_local_storage";

function App(){
    const dispatch = useDispatch();
    const [ folders, message ] = useSelector((state) => [ state.folders, state.message ]);

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


    return(
        <div>
            <Layout
                handleFoldersSortCriteriaChange={handleFoldersSortCriteriaChange}
            />
        </div>
    );
}

export default App;