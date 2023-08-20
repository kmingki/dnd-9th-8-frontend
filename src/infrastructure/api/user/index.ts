import client from "@api/index";

export const getMyInfo = async () =>
  await client
    .get("/members")
    .then(({ data }) => data)
    .catch((err) => err.response);

export const editUser = async ({
  nickname,
  image,
}: {
  nickname: string;
  image: string;
}) =>
  await client
    .patch("/members", { nickname, image })
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
