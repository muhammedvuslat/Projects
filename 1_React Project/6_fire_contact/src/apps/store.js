import { configureStore } from "@reduxjs/toolkit";
import userList from "../features/userSlice";

const store = configureStore({
  reducer: {
    userList: userList,
  },
});

export default store;
