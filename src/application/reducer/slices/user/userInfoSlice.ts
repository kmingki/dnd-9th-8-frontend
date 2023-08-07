import { createSlice } from "@reduxjs/toolkit";
import { UserInfoType } from "src/application/type/user";

const initialState: UserInfoType = {
  name: "",
  checkCount: "",
};

export const userInfoSlice = createSlice({
  name: "userInfo",
  initialState,
  reducers: {
    initializeUserInfo: () => initialState,
    changeUserInfo: (
      state,
      { payload }: { payload: { type: string; value: string | undefined } }
    ) => {
      const { type, value } = payload;
      state[type] = value;
    },
  },
});

export const { initializeUserInfo, changeUserInfo } = userInfoSlice.actions;

export default userInfoSlice.reducer;
