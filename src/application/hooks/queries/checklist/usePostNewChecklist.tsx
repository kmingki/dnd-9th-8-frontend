import React from "react";
import { useQuery } from "react-query";
import { postNewChecklist } from "@api/checklist";

const usePostNewChecklist = (travelId: string) => {

  const { data : responseData, isLoading, error } = useQuery(
    ["postNewChecklist"],
    async () => await postNewChecklist(travelId),
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

export default usePostNewChecklist;