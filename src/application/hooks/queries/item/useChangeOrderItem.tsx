import React from "react";
import { useQuery, useMutation, useQueryClient } from "react-query";
import { changeItemOrder } from "@api/item";

/* 아이템 순서 변경을 위한 인터페이스*/
interface changeItemProps {
    id : number;
    order : number;
}

interface MutationProps {
  travelId: number;
  checkListId: number;
  data : changeItemProps[];
}

const useChangeOrderItem = () => {

  const queryClient = useQueryClient();
  const { mutate, data : responseData, isLoading, error } = useMutation(
    async ({ travelId, checkListId, data } : MutationProps) => await changeItemOrder(travelId, checkListId, data),
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

export default useChangeOrderItem;
