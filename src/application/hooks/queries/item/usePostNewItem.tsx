
import React from "react";
import { useQuery, useMutation, useQueryClient } from "react-query";
import { postNewItem } from "@api/item";


interface MutationProps {
  travelId: number;
  checkListId: number;
  title: string;
}

const usePostNewItem = () => {

  const queryClient = useQueryClient();
  const { mutate, data : responseData, isLoading, error } = useMutation(
    async ({ travelId, checkListId, title } : MutationProps) => await postNewItem(travelId, checkListId, title),
    {
      onSuccess : (data) => {
        queryClient.invalidateQueries(["getTravelDetail"]); //여행 정보 refetch
      },
      onError : (error) => {
      },
    }
  );
  const data = responseData?.data;
  return { mutate, data , isLoading, error };
};

export default usePostNewItem;
