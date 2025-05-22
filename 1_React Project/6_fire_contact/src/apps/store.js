import { configureStore } from "@reduxjs/toolkit";
import userList from "../features/userSlice";
import userEdit from "../features/userEditSlice";

const store = configureStore({
  reducer: {
    userList: userList,
    userEdit: userEdit,
  },
});

export default store;
