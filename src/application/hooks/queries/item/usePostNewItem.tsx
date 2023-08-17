
import React from "react";
import { useQuery } from "react-query";
import { postNewItem } from "@api/item";

const usePostNewChecklist = (travelId: string, checkListId: string, title:string ) => {

  const { data : responseData, isLoading, error } = useQuery(
    ["deleteChecklist"],
    async () => await postNewItem(travelId, checkListId, title),
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