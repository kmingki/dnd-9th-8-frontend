
import React from "react";
import { useQuery } from "react-query";
import { deleteItem } from "@api/item";

const useDeleteItem = (travelId: string, checkListId: string, itemId:string) => {

  const { data : responseData, isLoading, error } = useQuery(
    ["deleteItem"],
    async () => await deleteItem(travelId, checkListId, itemId),
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

export default useDeleteItem;