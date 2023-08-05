import { PayloadAction } from "@reduxjs/toolkit";

import { combineReducers } from "redux";

import createTripSlice from "./slices/createTrip/createTripSlice";

const rootReducer = (state: any, action: PayloadAction<any>) => {
  const combineReducer = combineReducers({
    createTrip: createTripSlice,
  });

  return combineReducer(state, action);
};

export default rootReducer;
