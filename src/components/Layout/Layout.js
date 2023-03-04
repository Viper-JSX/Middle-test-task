import { Routes, Route } from "react-router";

import Desktop from "../Desktop/Desktop";
import DesktopWindow from "../Desktop_window/Desktop_window";
import Folder from "../Folder/Folder";
import Message from "../Message/Message";

function Layout (
    {
        handleFoldersSortCriteriaChange
    }
    ) {
    return(
        <div className="layout">
            <Desktop>

                <Routes>
                    <Route path="/" element={ <DesktopWindow /> }>
                        <Route path="/folders/:foldername" element={ <Folder handleFoldersSortCriteriaChange={handleFoldersSortCriteriaChange} /> } />
                    </Route>

                    <Route path="*" element={ <h2>Not found</h2> } />
                </Routes>

                <Message />
            </Desktop>
        </div>
    );
}

export default Layout;