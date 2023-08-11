import { PayloadAction } from "@reduxjs/toolkit";

import { combineReducers } from "redux";

import createTripSlice from "./slices/createTrip/createTripSlice";
import userInfoSlice from "./slices/user/userInfoSlice";

const rootReducer = (state: any, action: PayloadAction<any>) => {
  const combineReducer = combineReducers({
    createTrip: createTripSlice,
    userInfo: userInfoSlice,
  });

  return combineReducer(state, action);
};

export default rootReducer;
