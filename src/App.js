import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Layout from "./components/layout/Layout";
import { changeFoldersSortCriteria } from "./redux/action_creators/folders_action_creators";
import { getFolders } from "./redux/thunks/folders_thunks";
import { showMessage } from "./redux/thunks/message_thunks";

function App(){
    const dispatch = useDispatch();
    const [ folders, message ] = useSelector((state) => [ state.folders, state.message ]);
    console.log(folders)

    useEffect(() => {
        dispatch(getFolders());
        dispatch(showMessage({ title: "Error", text: "Something bad happened" }));
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