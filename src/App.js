import axios from "axios";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { changeSortCriteria } from "./redux/reducers/action_creators/folders_action_creators";
import { getFolders } from "./redux/thunks/folders_thunks";
import { SORT_BY_SIZE } from "./various_things/constants";

function App(){
    const dispatch = useDispatch();
    dispatch(getFolders());
    useSelector((state) => console.log(state.folders));

    useEffect(() => {
        dispatch(getFolders());
        //dispatch(changeSortCriteria({ sortBy: SORT_BY_SIZE }));
    }, []);



    return(
        <div>
            Working
        </div>
    );
}

export default App;