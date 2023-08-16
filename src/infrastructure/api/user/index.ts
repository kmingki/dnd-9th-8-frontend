import client from "@api";

export const getMyInfo = async () =>
  await client
    .get("/members")
    .then(({ data }) => data)
    .catch((err) => err.response);

export const editUserNickName = async (newNickname: string) =>
  await client
    .put("/members/nicknames", { newNickname })
    .then(({ data }) => data)
    .catch((err) => err.response);

export const editUserProfile = async (formData: any) =>
  await client
    .put("/members/profile-images", formData, {
      headers: { "Content-Type": "multipart/form-data" },
    })
    .then(({ data }) => data)
    .catch((err) => err.response);

export const logout = async () =>
  await client
    .delete("/auth/logout")
    .then(({ data }) => data)
    .catch((err) => err.response);

export const deleteUser = async () =>
  await client
    .delete("/members")
    .then(({ data }) => data)
    .catch((err) => err.response);
