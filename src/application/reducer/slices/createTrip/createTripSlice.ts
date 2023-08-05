import { createSlice } from "@reduxjs/toolkit";
import {
  CreateTripType,
  TripRangeType,
} from "../../../../application/type/createTrip";

const initialState: CreateTripType = {
  tripType: "",
  tripName: "",
  tripRange: {
    start: "",
    end: "",
  },
  checkCount: "",
};

export const createTripSlice = createSlice({
  name: "createTrip",
  initialState,
  reducers: {
    initializeCreateTripInfo: () => initialState,
    changeCreateTripState: (
      state,
      { payload }: { payload: { type: string; value: string | TripRangeType } }
    ) => {
      const { type, value } = payload;
      state[type] = value;
    },
    changeTripRange: (
      state,
      { payload }: { payload: { type: string; value: string } }
    ) => {
      const { type, value } = payload;
      if (state.tripRange) {
        state.tripRange[type] = value;
      }
    },
  },
});

export const { initializeCreateTripInfo, changeCreateTripState, changeTripRange } =
  createTripSlice.actions;

export default createTripSlice.reducer;
