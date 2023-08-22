import React from "react";
import { useQuery, useMutation, useQueryClient } from "react-query";
import { modifyTravel } from "@api/travel";

interface MutationProps {
  travelId: number;
  travelInfo: any;
}

const useUpdateTravel = () => {

  const queryClient = useQueryClient();
  const { mutate, data : responseData, isLoading, error } = useMutation(
    async ({ travelId, travelInfo } : MutationProps) => { return await modifyTravel({travelId, travelInfo})},
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

export default useUpdateTravel;
