import { configureStore } from "@reduxjs/toolkit";
import folders from "./reducers/folders_reducer";
import message from "./reducers/message_reducer";

const store = configureStore({ reducer: { folders, message } })

export default store;