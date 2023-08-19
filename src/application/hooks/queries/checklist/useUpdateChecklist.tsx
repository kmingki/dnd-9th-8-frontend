import React from "react";
import { useQuery, useMutation, useQueryClient } from "react-query";
import { updateChecklist } from "@api/checklist";

interface MutationProps {
  travelId: number;
  checklistId: number;
  title: string;
}

/*백엔드 api 개발중 */

const useUpdateChecklist = () => {

  const queryClient = useQueryClient();
  const { mutate, data : responseData, isLoading, error } = useMutation(
    async ({ travelId, checklistId, title } : MutationProps) => await updateChecklist(travelId, checklistId, title),
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

export default useUpdateChecklist;
