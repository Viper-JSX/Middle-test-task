import { useSelector } from "react-redux";
import { Outlet } from "react-router";
import FolderItem from "../Items/Folder_item";

function DesktopWindow () {
    const folders = useSelector((state) => Object.values(state.folders.folders));

    return(
        <div className="desktopWindow">
            {
                folders.map((folder) => <FolderItem folder={folder} key={`${folder.name}_folder`} />)
            }
            <Outlet />
        </div>
    );
}

export default DesktopWindow;