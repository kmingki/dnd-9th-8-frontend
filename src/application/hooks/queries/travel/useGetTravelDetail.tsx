import React from "react";
import { useQuery } from "react-query";
import { getTravelDetail } from "@api/travel/index";

const useGetTravelDetail = (travelId: string) => {
  const {
    data: responseData,
    isLoading,
    error,
  } = useQuery(
    ["getTravelDetail", travelId],
    async () => await getTravelDetail(travelId),
    {
      onSuccess: (data) => {},
      onError: (error) => {
        console.log("에러");
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
