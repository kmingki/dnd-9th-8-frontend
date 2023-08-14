import React from "react";
import { useMutation, useQueryClient } from "react-query";
import { editUserNickName } from "../../../../infrastructure/api/user";

const useEditName = () => {
  const queryClient = useQueryClient();

  const { mutate } = useMutation(
    (newNickname: string) => editUserNickName(newNickname),
    {
      onSuccess: () => {
        queryClient.invalidateQueries("user");
      },
    }
  );

  return mutate;
};

export default useEditName;
