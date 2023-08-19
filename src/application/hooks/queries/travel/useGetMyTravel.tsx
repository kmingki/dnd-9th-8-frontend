import React from "react";
import { useQuery } from "react-query";
import useGetMyInfo from "../user/useGetMyInfo";
import {
  getPastTravles,
  getUpcomingTravles,
} from "../../../../infrastructure/api/travel";

const useGetMyTravel = (filter: string) => {
  const {
    data: responseData,
    refetch,
    isLoading,
    error,
  } = useQuery(["mytravels", filter], async () => {
    if (filter === "예정된 여행") {
      const res = await getUpcomingTravles();
      return res;
    } else {
      const res = await getPastTravles();
      return res;
    }
  });
  const data = responseData?.data;

  return { data, refetch, isLoading, error };
};

export default useGetMyTravel;
