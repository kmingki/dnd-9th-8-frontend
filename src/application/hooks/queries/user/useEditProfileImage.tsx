import React from "react";
import { useMutation, useQueryClient } from "react-query";
import { editUserProfile } from "../../../../infrastructure/api/user";

const useEditProfileImage = () => {
  const queryClient = useQueryClient();

  const { mutate } = useMutation(
    (profileImage: string) => editUserProfile(profileImage),
    {
      onSuccess: () => {
        queryClient.invalidateQueries("user");
      },
    }
  );

  return mutate;
};

export default useEditProfileImage;
