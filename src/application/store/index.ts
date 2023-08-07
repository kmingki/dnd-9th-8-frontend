import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import createTripSlice from "../reducer/slices/createTrip/createTripSlice";
import userInfoSlice from "../reducer/slices/user/userInfoSlice";

const rootReducer = combineReducers({
  createTrip: createTripSlice,
  userInfo: userInfoSlice,
});

const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV !== "production",
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
