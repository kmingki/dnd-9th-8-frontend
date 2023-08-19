
import React from "react";
import { useQuery, useMutation, useQueryClient } from "react-query";
import { deleteChecklist } from "@api/checklist";

interface MutationProps {
  travelId: number;
  checkListId: number;
}

const useDeleteChecklist = () => {

  const queryClient = useQueryClient();

  const { mutate, data : responseData, isLoading, error } = useMutation(
    async ({ travelId, checkListId } : MutationProps) => await deleteChecklist(travelId, checkListId),
    {
      onSuccess : (data) => {
        queryClient.invalidateQueries(["getTravelDetail"]); //여행 정보 refetch
      },
      onError : (error) => {
      },
    }
  );
  const data = responseData?.data;
  return { mutate, data, isLoading, error };
};

export default useDeleteChecklist;
