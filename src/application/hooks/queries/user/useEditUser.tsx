import React from "react";
import { editUser } from "@api/user";
import { useMutation, useQueryClient } from "react-query";

const useEditUser = () => {
  const queryClient = useQueryClient();

  const { mutate } = useMutation(
    ({ nickname, image }: { nickname: string; image: string }) =>
      editUser({ nickname, image }),
    {
      onSuccess: () => {
        queryClient.invalidateQueries("user");
      },
    }
  );

  return mutate;
};

export default useEditUser;
