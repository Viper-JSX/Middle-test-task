import axios from "axios";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { changeSortCriteria } from "./redux/reducers/action_creators/folders_action_creators";
import { getFolders } from "./redux/thunks/folders_thunks";
import { showMessage } from "./redux/thunks/message_thunks";
import { SORT_BY_SIZE } from "./various_things/constants";

function App(){
    const dispatch = useDispatch();
    const message = useSelector((state) => state.message);
    const folders = useSelector((state) => state.folders);
    console.log(message, folders);

    useEffect(() => {
        dispatch(getFolders());
        dispatch(showMessage({ title: "Error", text: "Something bad happened" }));
    }, []);



    return(
        <div>
            <b>
            {
                message ? 
                message.text
                :
                ""
            }
            </b>
            Working
        </div>
    );
}

export default App;