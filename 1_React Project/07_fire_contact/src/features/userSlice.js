import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const userSlice = createSlice({
  name: "userList",
  initialState: initialState,
  reducers: {
    getUser: (state, action) => {
      return action.payload;
    },
  },
});

export const { getUser } = userSlice.actions;

export default userSlice.reducer;
