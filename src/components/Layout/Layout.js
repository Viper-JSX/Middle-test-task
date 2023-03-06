import { Routes, Route } from "react-router";

import Desktop from "../Desktop/Desktop";
import DesktopWindow from "../Desktop_window/Desktop_window";
import Folder from "../Folder/Folder";
import Loader from "../Loader/Loader";
import Message from "../Message/Message";
import NotFound from "../Not_found/Not_found";

function Layout ({ appIsLoading, handleFoldersSortCriteriaChange }) {
    return(
        <div className="layout">
            <Desktop>
                <Routes>
                    <Route path="/" element={ <DesktopWindow /> }>
                        <Route path="/folders/:foldername" element={ <Folder handleFoldersSortCriteriaChange={handleFoldersSortCriteriaChange} /> } />
                    </Route>

                    <Route path="*" element={ <NotFound text={ "Not found (404)" } /> } />
                </Routes>

                <Message />
            </Desktop>

            <Loader loading={appIsLoading} />
        </div>
    );
}

export default Layout;