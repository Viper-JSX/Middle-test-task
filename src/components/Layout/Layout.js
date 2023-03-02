import { Routes, Route } from "react-router";

import Desktop from "../Desktop/Desktop";
import DesktopWindow from "../Desktop_window/Desktop_window";

function Layout () {
    return(
        <div className="layout">
            <Desktop>

                <Routes>
                    <Route path="/" element={ <DesktopWindow /> }>
                        <Route path="folders/:folder-name" element={ <Folder /> } />
                    </Route>
                </Routes>

            </Desktop>
        </div>
    );
}

export default Layout;