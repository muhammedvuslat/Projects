import { createSlice } from "@reduxjs/toolkit";

const initialState = null;

const userEditSlice = createSlice({
  name: "userEdit",
  initialState: initialState,
  reducers: {
    userEditFetch: (state, action) => {
      return action.payload;
    },
    userEditClear: (state) => {
      return null;
    },
  },
});

export const { userEditFetch, userEditClear } = userEditSlice.actions;

export default userEditSlice.reducer;
