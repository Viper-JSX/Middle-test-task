import { Routes, Route } from "react-router";

function Layout () {
    return(
        <div className="layout">
            <Desktop>

                <Routes>
                    <Route path="/" element={ <DesktopWindow /> }>
                        <Route path=":folder-name" element={ <Folder /> } />
                    </Route>
                </Routes>

            </Desktop>
        </div>
    );
}

export default Layout;