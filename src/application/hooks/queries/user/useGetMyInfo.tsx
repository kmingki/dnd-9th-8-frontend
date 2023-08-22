import React from "react";
import { useQuery } from "react-query";
import { getMyInfo } from "../../../../infrastructure/api/user";
import { useNavigate } from "react-router-dom";

const useGetMyInfo = () => {
  const navigate = useNavigate();
  const {
    data: responseData,
    isLoading,
    error,
  } = useQuery(
    ["user"],
    async () => {
      const res = await getMyInfo();
      if (res.data.message === "요청에 토큰이 존재하지 않습니다.") {
        navigate("/login", { replace: true });
      } else return res;
    },
    {
      staleTime: 1000 * 60 * 5,
      cacheTime: 1000 * 60 * 30,
    }
  );
  const data = responseData?.data;
  return { data, isLoading, error };
};

export default useGetMyInfo;
