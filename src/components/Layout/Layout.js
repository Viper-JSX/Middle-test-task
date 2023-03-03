import { Routes, Route } from "react-router";

import Desktop from "../Desktop/Desktop";
import DesktopWindow from "../Desktop_window/Desktop_window";
import Folder from "../Folder/Folder";

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

            </Desktop>
        </div>
    );
}

export default Layout;