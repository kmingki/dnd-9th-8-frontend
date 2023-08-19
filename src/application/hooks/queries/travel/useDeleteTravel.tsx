import React from "react";
import { useQuery, useMutation, useQueryClient } from "react-query";
import { deleteTravel } from "@api/travel";

interface MutationProps {
  travelId: number;
}

const useDeleteTravel = () => {

  const queryClient = useQueryClient();

  const { mutate, data : responseData, isLoading, error } = useMutation(
    async ({ travelId } : MutationProps) => await deleteTravel(travelId),
    {
      onSuccess : (data) => {
        //queryClient.invalidateQueries(["getTravelDetail"]); 
      },
      onError : (error) => {
      },
    }
  );
  const data = responseData?.data;
  return { mutate, data, isLoading, error };
};

export default useDeleteTravel;
