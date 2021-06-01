import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const addUserToUserList = createAsyncThunk(
  "authSlice/addUserToUserList",
  async (user) => user
);

export const authSlice = createSlice({
  name: "authSlice",
  initialState: {
    userList: [{ login: "admin", password: "admin" }],
    isAuth: false,
  },
  reducers: {
    setAuth: (state, { payload }) => {
      state.isAuth = payload;
    },
  },
  extraReducers: {
    [addUserToUserList.fulfilled]: (state, { payload }) => {
      state.userList.push(payload);
    },
  },
});

export const { setAuth } = authSlice.actions;

export default authSlice.reducer;
