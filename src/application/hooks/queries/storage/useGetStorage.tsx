import React from "react";
import { useQuery } from "react-query";
import { getStorageTravels } from "../../../../infrastructure/api/storage";

const useGetStorage = () => {
  const {
    data: responseData,
    refetch,
    isLoading,
    error,
  } = useQuery(["storage"], async () => await getStorageTravels(), {
    staleTime: 1000 * 60 * 5,
    cacheTime: 1000 * 60 * 30,
  });
  const data = responseData?.data;

  return { data, refetch, isLoading, error };
};

export default useGetStorage;
