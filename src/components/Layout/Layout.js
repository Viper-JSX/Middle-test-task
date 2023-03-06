import { Routes, Route } from "react-router";

import Desktop from "../Desktop/Desktop";
import DesktopWindow from "../Desktop_window/Desktop_window";
import Folder from "../Folder/Folder";
import Loader from "../Loader/Loader";
import Message from "../Message/Message";

function Layout ({ appIsLoading, handleFoldersSortCriteriaChange }) {
    return(
        <div className="layout">
            <Desktop>
                <Routes>
                    <Route path="/" element={ <DesktopWindow /> }>
                        <Route path="/folders/:foldername" element={ <Folder handleFoldersSortCriteriaChange={handleFoldersSortCriteriaChange} /> } />
                    </Route>

                    <Route path="*" element={ <h1 style={{ color: "white", textAlign: "center" }} >404 Not found</h1> } />
                </Routes>

                <Message />
            </Desktop>

            <Loader loading={appIsLoading} />
        </div>
    );
}

export default Layout;