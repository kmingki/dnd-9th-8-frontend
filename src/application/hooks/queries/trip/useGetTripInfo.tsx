import React from "react";
import { useQuery } from "react-query";
import { getTripInfo } from "@api/trip";
import { useDispatch,  } from "react-redux";
import { setTripListState } from "@reducer/slices/TripInfo/TripInfoSlice";

const useGetTripInfo = (id: string) => {

  //const dispatch = useDispatch();

  const { data, isLoading, error } = useQuery(
    ["getTripInfo"],
    async () => await getTripInfo(id),
    {
      onSuccess : (data) => {
        //dispatch(setTripListState({ value: data }));
      },
      staleTime: 1000 * 60 * 5,
      cacheTime: 1000 * 60 * 30,
    }
  );
  return { data, isLoading, error };
};

export default useGetTripInfo;