import { createSlice } from "@reduxjs/toolkit";
import { TripType } from "@type/Trip";

const initialState: TripType = {
    title: "",
    dDay: "",
    destinationType: "",
    startDate: "",
    endDate: "",
    checkListDtoList: [],
};

//수정 필요
export const TripListSlice = createSlice({
  name: "setTripList",
  initialState,
  reducers: {
    initializeTripList: () => initialState,
    setTripListState: (
      state,
      { payload }: { payload: { value: TripType } }
    ) => {
      const { value } = payload;
      state["title"] = value.title;
    },
  },
});

export const { initializeTripList, setTripListState } = TripListSlice.actions;

export default TripListSlice.reducer;
