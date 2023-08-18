
import React from "react";
import { useQuery, useMutation } from "react-query";
import { deleteChecklist } from "@api/checklist";

const usePostNewChecklist = (travelId: string, checkListId: string) => {

  const { mutate, data : responseData, isLoading, error } = useMutation(
    ["deleteChecklist"],
    async () => await deleteChecklist(travelId, checkListId),
    {
      onSuccess : (data) => {
      },
      onError : (error) => {
      },
    }
  );
  const data = responseData?.data;
  return { mutate, data, isLoading, error };
};

export default usePostNewChecklist;