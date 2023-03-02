import axios from "axios";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Layout from "./components/layout/Layout";
import { getFolders } from "./redux/thunks/folders_thunks";
import { showMessage } from "./redux/thunks/message_thunks";

function App(){
    const dispatch = useDispatch();
    const message = useSelector((state) => state.message);
    const folders = useSelector((state) => state.folders);
    //console.log(message, folders);

    useEffect(() => {
        dispatch(getFolders());
        dispatch(showMessage({ title: "Error", text: "Something bad happened" }));
    }, []);



    return(
        <div>
            <Layout />
        </div>
    );
}

export default App;