import { Outlet } from "react-router";

function DesktopWindow () {
    return(
        <div className="desktopWindow">
            <Outlet />
        </div>
    );
}

export default DesktopWindow;