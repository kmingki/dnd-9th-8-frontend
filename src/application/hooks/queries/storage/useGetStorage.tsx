import React from "react";
import { useQuery } from "react-query";
import { getStorageTravels } from "../../../../infrastructure/api/storage";

const useGetStorage = () => {
  const {
    data: responseData,
    refetch,
    isLoading,
    error,
  } = useQuery(["storage"], async () => await getStorageTravels());
  const data = responseData?.data;

  return { data, refetch, isLoading, error };
};

export default useGetStorage;
