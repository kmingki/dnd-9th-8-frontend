import React from "react";
import { useQuery } from "react-query";
import { getTravelDetail } from "@api/travel/index";
import { useDispatch,  } from "react-redux";
import { setTripListState } from "@reducer/slices/TripInfo/TripInfoSlice";
import useGetMyInfo from "../user/useGetMyInfo";

const useGetTravelDetail = (travelId: string) => {

  //const { data: userData } = useGetMyInfo();

  const { data : responseData, isLoading, error } = useQuery(
    ["getTravelDetail"],
    async () => await getTravelDetail(travelId, 3),
    {
      onSuccess : (data) => {
        
      },
      onError : (error) => {
        console.log("에러")
        console.error(error);
      },
      staleTime: 1000 * 60 * 5,
      cacheTime: 1000 * 60 * 30,
    }
  );
  const data = responseData?.data;
  return { data, isLoading, error };
};

export default useGetTravelDetail;