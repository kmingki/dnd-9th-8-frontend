import React from "react";
import { useMutation, useQueryClient } from "react-query";
import { editUserProfile } from "../../../../infrastructure/api/user";

const useEditProfileImage = () => {
  const queryClient = useQueryClient();

  const { mutate } = useMutation((formData: FormData) => editUserProfile(formData), {
    onSuccess: () => {
      queryClient.invalidateQueries("user");
    },
  });

  return mutate;
};

export default useEditProfileImage;
