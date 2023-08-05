import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import createTripSlice from "../reducer/slices/createTrip/createTripSlice";

const rootReducer = combineReducers({
  createTrip: createTripSlice,
});

const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV !== "production",
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
