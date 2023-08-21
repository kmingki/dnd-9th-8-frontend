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
      onSuccess: (data) => { console.log("<<travel detail>>"); console.log(data)},
      onError: (error) => {
        console.log("에러");
        console.error(error);
      },
    }
  );
  const data = responseData?.data;
  return { data, isLoading, error };
};

export default useGetTravelDetail;
