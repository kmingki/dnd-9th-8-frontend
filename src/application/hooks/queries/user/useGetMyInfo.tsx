import React from "react";
import { useQuery } from "react-query";
import { getMyInfo } from "../../../../infrastructure/api/user";

const useGetMyInfo = () => {
  const { data, isLoading, error } = useQuery(
    ["user"],
    async () => await getMyInfo(),
    {
      staleTime: 1000 * 60 * 5,
      cacheTime: 1000 * 60 * 30,
    }
  );
  return { data, isLoading, error };
};

export default useGetMyInfo;
