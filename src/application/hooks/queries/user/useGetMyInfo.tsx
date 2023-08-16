import React from "react";
import { useQuery } from "react-query";
import { getMyInfo } from "../../../../infrastructure/api/user";

const useGetMyInfo = () => {
  const {
    data: responseData,
    isLoading,
    error,
  } = useQuery(["user"], async () => await getMyInfo(), {
    staleTime: 1000 * 60 * 5,
    cacheTime: 1000 * 60 * 30,
  });
  const data = responseData?.data;
  return { data, isLoading, error };
};

export default useGetMyInfo;
