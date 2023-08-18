import React from "react";
import { useQuery, useMutation, useQueryClient } from "react-query";
import { postNewChecklist } from "@api/checklist";

interface MutationProps {
  travelId: number;
  title: string;
}

const usePostNewChecklist = () => {

  const queryClient = useQueryClient();
  const { mutate, data : responseData, isLoading, error } = useMutation(
    async ({ travelId, title } : MutationProps) => await postNewChecklist(String(travelId), title),
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

export default usePostNewChecklist;
